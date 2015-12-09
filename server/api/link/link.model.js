'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var LinkSchema = new Schema({
  title: String,
  summary: String,
  url: String,
  date: String
});

module.exports = mongoose.model('Link', LinkSchema);