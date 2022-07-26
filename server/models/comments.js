const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  author: {type: String},
  comment: {type: String},
  parentID: {type: String, allowNull: true, default: null}
})

const Comments = mongoose.model('Comments', schema);

module.exports = {
  Comments
}