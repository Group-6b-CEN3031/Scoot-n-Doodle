'use strict';
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');
fs.readFile ('listings.json', 'utf8', function (err, data) {
    if (err) throw err;
    var listingData = JSON.parse (data);

    mongoose.connect (config.db.adminuri, {useNewUrlParser: true} );
    listingData.entries.forEach (function(element) {
      var listObj = new Listing (element);
      listObj.save (function (err) {
        if (err) throw err;
      })
    });
});