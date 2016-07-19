'use strict';


// npm modules
var path = require('path'),
    rtrim = require( 'rtrim' ),
    prependHttp = require( 'prepend-http' ),
    validUrl = require( 'valid-url' ).isWebUri;


/**
 * Replace all escaped slashes in a string
 *
 * @param   void
 * @return  {String}  Cleaned string
 */

String.prototype.unescape = function() {

    return this.replace( /\\/g, '' );

};


/**
 * Checks for existing redirects based on [request] Node.js module
 *
 * @param   void
 * @return  {boolean}  true → has redirects, false → no redirects
 */

Object.prototype.hasRedirects = function() {

    return !!this.request._redirect.redirects.length;

};


/**
 * Returns final redirect URL based on [request] Node.js module
 *
 * @param   void
 * @return  {String}  Redirect URL
 */

Object.prototype.redirectURL = function() {

    return this.request.uri.href;

};


/**
 * Normalize and validate a URL
 *
 * @param   void
 * @return  {Mixed}  Valid URL or false if invalid
 */

Object.prototype.normalizeURL = function() {

    var url = rtrim( prependHttp( this ), '/' ); // trim() by prependHttp

    if ( validUrl( url ) ) {
        return url;
    }

    return false;

};


/**
 * Return absolute path
 *
 * @param   void
 * @return  {String}  Absolute path
 */

String.prototype.makeAbsolute = function() {

    if ( path.isAbsolute( this ) ) {
        return this;
    }

    return path.join( __dirname, '..', this );

};
