const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
  room: {type: Types.ObjectId, ref: 'Room' },
  check_in_date: {type: String, required: true},
  check_out_date: {type: String, required: true},
  price: {type: Number, required: true},
  user: {type: Types.ObjectId, ref: 'User' }
})

module.exports = model('Trip', schema)