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
servicesRoute.get('/:id/edit', (req, res) => {
  Service.findById(req.params.id, (err, foundService) => {
    res.render('services/edit.ejs', {
      service: foundService
    })
  })
})

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
servicesRoute.put('/:id', (req, res) => {
  Service.findByIdAndUpdate(req.params.id, req.body, () => {
    res.redirect('/services')
  })
})

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
