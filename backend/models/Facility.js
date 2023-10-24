const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
  name: {type: String, required: true},
  hotels: [{ type: Types.ObjectId, ref: 'Hotel' }],
})

module.exports = model('Facility', schema)