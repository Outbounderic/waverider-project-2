const aboutRoute = require('express').Router();
//  If needed in the future
// const About = require('../models/about.js');

aboutRoute.get('/', (req, res) => {
  res.render('about/index.ejs')
})

module.exports = aboutRoute;
