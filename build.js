// This file compiles the njk files into HTML

console.log('js file build');

// ----------------
// - Dependencies -
// ----------------

var Metalsmith  = require('metalsmith');
var in_place    = require('metalsmith-in-place');

// ------------------------
// - Function Definitions -
// ------------------------

function getCurrentDate() {
	var today = new Date();	

	return today.toDateString()
}

function getCurrentYear() {
	var year = new Date();	

	return year.getFullYear()
}

// --------------------
// - Global variables -
// --------------------

// Using the convention of 'g_' to indicate a global variable

var g_latest_version = '1.3.2';
var g_current_year = getCurrentYear();
var g_last_modified = getCurrentDate();

// --------------
// - Build step -
// --------------

// __dirname defined by node.js:
// add any variable you want
// use them in layout-files

Metalsmith(__dirname)         
                              
	.metadata({
    	sitename: "boilerplate site",
    	siteurl: "http://example.com",
    	description: "",
    	generatorname: "Metalsmith",
    	generatorurl: "http://metalsmith.io/",
    	g_latest_version: g_latest_version,
    	g_current_year: g_current_year,
	    g_last_modified: g_last_modified,
  	})
	.source('./src')            // source directory
	.destination('./build')     // destination directory
	.clean(true)                // clean destination before
	.use(in_place())             // wrap layouts around html
	.build(function(err) {      // build process
		if (err) throw err;     // error handling is required
	}
);
