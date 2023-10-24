const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
  name: {type: String, required: true, unique: true},
  image:  {type: String, required: true},
  sleeps: {type: Number, required: true},
  description: {type: String, required: true},
  hotel: { type: Types.ObjectId, ref: 'Hotel' },
  price: {type: Number, required: true},
})

module.exports = model('Room', schema)