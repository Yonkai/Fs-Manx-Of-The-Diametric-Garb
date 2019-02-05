var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var threadSchema = new Schema(
  {
    count: {type:Number, required: true},
    body: {type: String, required: true},
    date: {type: Date, default: Date.now},
    user: {type:String, required:true}
  }
);

//Export model
module.exports = mongoose.model('Post', PostSchema);