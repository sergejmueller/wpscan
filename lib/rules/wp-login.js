/**
 * wpscan module wp-login.js
 * Scan WordPress login page for mistakes
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
        userAgent = data.userAgent,
        silentMode = data.silentMode;

    // Target URL
    var targetURL = wpURL + '/wp-login.php';

    // Request
    request( {
        url: targetURL,
        method: 'HEAD',
        headers: { 'User-Agent': userAgent }
    }, function( error, response ) {

        // Availability check
        if ( error || response.statusCode === 404 ) {
            return log.info( targetURL + ' is not found', silentMode );
        }

        // HTTPS check
        if ( response.request.uri.protocol !== 'https:' ) {
            log.info( targetURL + ' is not use HTTPS protocol', silentMode );
        } else {
            log.ok( targetURL + ' use HTTPS protocol', silentMode );
        }

        // Authentication check
        if ( [401, 403].indexOf( response.statusCode ) === -1 ) {
            return log.info( targetURL + ' is not protected by HTTP Auth', silentMode );
        }

        return log.ok( targetURL + ' is protected by HTTP Auth', silentMode );

    } );
};
