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
listingRoute.get('/:id/edit', (req, res) => {
  Listing.findById(req.params.id, (err, foundListing) => {
    res.render('listings/edit.ejs', {
      listing: foundListing
    });
  });
});

//  Delete
listingRoute.delete('/:id', (req, res) => {
  Listing.findByIdAndRemove(req.params.id, (err, deletedListing) => {
    res.redirect('/');
  });
});

//  Seed
listingRoute.get('/seed', (req, res) => {
  Listing.create([
    {
      'title': 'Distant Dismay',
      'price': 300,
      'image': 'https://stat.ameba.jp/user_images/20181007/13/yoshi01234/ef/45/j/o1080108014279605694.jpg?caw=800',
      'description': 'The inspiration for this one came from a younger photo of my darling Grandma from her youth.'
    },
    {
      'title': 'French Punk',
      'price': 250,
      'image': 'https://stat.ameba.jp/user_images/20180829/19/yoshi01234/bf/59/j/o1080135014256730137.jpg?caw=800',
      'description': 'Inspired by the french actress Léa Seydoux with a punk twist.'
    },
    {
      'title': 'Mushin Wave',
      'price': 700,
      'image': 'https://stat.ameba.jp/user_images/20180316/21/yoshi01234/3b/67/j/o0640080014150857376.jpg?caw=800',
      'description': 'Inspired by the Edo period samurai and the ceremonial kendoka.'
    }
  ], (err, data) => {
    res.redirect('/');
  });
});

//  Show
listingRoute.get('/:id', (req, res) => {
  Listing.findById(req.params.id, (err, foundListing) => {
    res.render('listings/show.ejs', {
      listing: foundListing
    });
  });
});

//  Update
listingRoute.put('/:id', (req, res) => {
  Listing.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedListing) => {
    res.redirect('/')
  })
});

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
