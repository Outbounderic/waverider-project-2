/*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  DEPENDENCIES
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/
const listingRoute = require('express').Router();
const Listing = require('../models/listings.js');

/*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  ROUTES
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/
//  New
listingRoute.get('/new', (req, res) => {
  res.render('listings/new.ejs');
});

//  Edit

//  Delete

//  Show

//  Update

//  Create
listingRoute.post('/', (req, res) => {
  Listing.create(req.body, (error, createdListing) => {
    res.send(createdListing);
  });
});

//  Index
listingRoute.get('/', (req, res) => {
  res.send('index')
})

/*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  EXPORT
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/
module.exports = listingRoute;
