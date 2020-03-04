/*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  DEPENDENCIES
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/
const servicesRoute = require('express').Router();
const Service = require('../models/services.js');

/*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  ROUTES
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/
//  New
servicesRoute.get('/new', (req, res) => {
  res.render('services/new.ejs');
});

//  Edit


//  Delete
servicesRoute.delete('/:id', (req, res) => {
  Service.findByIdAndRemove(req.params.id, () => {
    res.redirect('/services')
  })
})

//  Seed


//  Show
servicesRoute.get('/:id', (req, res) => {
  Service.findById(req.params.id, (err, foundService) => {
    res.render('services/show.ejs', {
      service: foundService
    })
  })
})

//  Update


//  Create
servicesRoute.post('/', (req, res) => {
  Service.create(req.body, (err, createdService) => {
    res.redirect('/services')
  })
})

//  Index - This will be the index of the shop page
servicesRoute.get('/', (req, res) => {
  Service.find({}, (err, foundServices) => {
    res.render('services/index.ejs', {
      services: foundServices
    })
  })
})

/*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  EXPORT
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/
module.exports = servicesRoute;
