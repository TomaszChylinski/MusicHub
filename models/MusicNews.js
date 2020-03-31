const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var newsSchema = new Schema({

  title: {
    type: String,
  },

  link: {
    type: String,

  },
  image: {
    type: String
},


});

module.exports = mongoose.model('News', newsSchema);