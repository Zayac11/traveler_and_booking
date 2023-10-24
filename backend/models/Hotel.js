const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
  name: {type: String, required: true},
  description: {type: String, required: true},
  address: {type: String, required: true},
  coordinates: {type: String, required: true},
  overview: {type: String, required: true},
  image: {type: Array, required: true},
  reviews_number: {type: Number, required: true},
  rate: {type: Number, required: true},
  facilities: {type: Array, required: true, default: []},
  types: [{ type: Types.ObjectId, ref: 'Type' }],
  attractions: [{ type: Types.ObjectId, ref: 'Attraction' }],
  rooms: [{ type: Types.ObjectId, ref: 'Room' }],
})

module.exports = model('Hotel', schema)