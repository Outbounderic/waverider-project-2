const contactRoute = require('express').Router();
//  If needed in the future
// const About = require('../models/about.js');

contactRoute.get('/', (req, res) => {
  res.render('contact/index.ejs')
})

module.exports = contactRoute;
