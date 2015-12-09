'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var LinkSchema = new Schema({
  title: String,
  summmary: String,
  url: String
});

module.exports = mongoose.model('Link', LinkSchema);