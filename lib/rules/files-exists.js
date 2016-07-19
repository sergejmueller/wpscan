/**
 * wpscan module file-exists.js
 * Check WordPress/Apache/Dot files for their availability
 */


'use strict';


// npm module
var request = require( 'request' ).defaults( { followRedirect: false } );

// app module
var log = require( 'log' );


/**
 * Initiator method
 *
 * @param   {Object}  data  Data object with request values
 * @return  void
 */

exports.fire = function( data ) {

    // Init
    var wpURL = data.wpURL,
        siteURL = data.siteURL,
        userAgent = data.userAgent,
        silentMode = data.silentMode;

    // Targets
    var targets = {
        'GET': {
            'DB_PASSWORD': wpURL + '/wp-config.php',
            'repair.php':  wpURL + '/wp-admin/maint/repair.php'
        },
        'HEAD': [
            // Apache files
            siteURL + '/.htaccess',
            siteURL + '/.htpasswd',

            // Sensitive dotfiles
            siteURL + '/.ssh',
            siteURL + '/.npmrc',
            siteURL + '/.gitconfig',
            siteURL + '/config.json',
            siteURL + '/config.gypi',

            // WordPress files
            wpURL + '/wp-config-sample.php',
            wpURL + '/wp-content/debug.log'
        ]
    };

    // Loop HEAD requests
    targets.HEAD.forEach( function( targetURL ) {

        request( {
            url: targetURL,
            method: 'HEAD',
            headers: { 'User-Agent': userAgent }
        }, function( error, response ) {

            if ( error || response.statusCode !== 200 ) {
                return log.ok( targetURL + ' is not public', silentMode );
            }

            return log.warn( targetURL + ' is public' );

        } );

    } );

    // Loop GET requests
    Object.keys( targets.GET ).forEach( function( ident ) {

        var targetURL = targets.GET[ident];

        request( {
            url: targetURL,
            method: 'GET',
            headers: { 'User-Agent': userAgent }
        }, function( error, response, body ) {

            if ( error || response.statusCode !== 200 ) {
                return log.ok( targetURL + ' is not public', silentMode );
            }

            if ( body.indexOf( ident ) === -1 ) {
                return log.info( targetURL + ' is public but safe', silentMode );
            }

            return log.warn( targetURL + ' is public and not safe' );

        } );

    } );

};
