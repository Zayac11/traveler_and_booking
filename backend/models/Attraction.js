const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
  name: {type: String, required: true, unique: true},
  hotels: [{
    hotel: { type: Types.ObjectId, ref: 'Hotel' },
    drive_time: { type: Number, required: true },
  }]
})

module.exports = model('Attraction', schema)