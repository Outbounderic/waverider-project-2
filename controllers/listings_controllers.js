/*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  DEPENDENCIES
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/
const listingRoute = require('express').Router();
const Listing = require('../models/listings.js');

/*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  ROUTES
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/
//  New - This is the form for the shop listing
listingRoute.get('/new', (req, res) => {
  res.render('listings/new.ejs');
});

//  Edit

//  Delete

//  Show
listingRoute.get('/:id', (req, res) => {
  Listing.findById(req.params.id, (err, foundListing) => {
    res.render('listings/show.ejs', {
      listing: foundListing
    });
  });
});
//  Update

//  Create - This is for the shop listing
listingRoute.post('/', (req, res) => {
  Listing.create(req.body, (error, createdListing) => {
    res.redirect('/')
  });
});

//  Index - This will be the index of the shop page
listingRoute.get('/', (req, res) => {
  Listing.find({}, (error, allListings) => {
    res.render('listings/index.ejs', {
      listings: allListings
    });
  });
});

/*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  EXPORT
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/
module.exports = listingRoute;
