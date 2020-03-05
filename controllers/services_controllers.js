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
servicesRoute.get('/services/seed', (req, res) => {
  Service.create([
    {
      'title': 'Clay Spinning',
      'spots': 12,
      'image': 'https://stat.ameba.jp/user_images/20181007/13/yoshi01234/ef/45/j/o1080108014279605694.jpg?caw=800',
      'description': 'A Clay spinning class.',
      'cost': 25
    },
    {
      'title': 'Glass Blowing',
      'spots': 3,
      'image': 'https://stat.ameba.jp/user_images/20181007/13/yoshi01234/ef/45/j/o1080108014279605694.jpg?caw=800',
      'description': 'A Clay spinning class.',
      'cost': 50
    },
    {
      'title': 'Painting Class',
      'spots': 8,
      'image': 'https://stat.ameba.jp/user_images/20181007/13/yoshi01234/ef/45/j/o1080108014279605694.jpg?caw=800',
      'description': 'A Clay spinning class.',
      'cost': 15
    }
  ], (err, data) => {
    res.redirect('/');
  });
});

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
