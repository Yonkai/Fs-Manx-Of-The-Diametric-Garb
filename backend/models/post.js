var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PostSchema = new Schema(
  {
    count: {type:Number, required: true},
    body: {type: String, required: true},
    date: { type: Date, default: Date.now }
  }
);

//Export model
module.exports = mongoose.model('Post', PostSchema);