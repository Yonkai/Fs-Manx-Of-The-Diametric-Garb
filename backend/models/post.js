var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PostSchema = new Schema(
  {
    code: {type:  Schema.Types.ObjectId, required: true},
    count: {type:Number, required: true},
    content: {type: String, required: true},
  }
);

//Export model
module.exports = mongoose.model('Post', PostSchema);