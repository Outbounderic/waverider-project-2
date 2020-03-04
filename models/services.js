
const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  title : { type: String, required: true },
  spots : { type: Number, required: true },
  image : { type: String, required: true },
  description : { type: String },
  cost : { type: Number, required: true }
});

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;
