const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
  name: {type: String, required: true, unique: true},
  hotels: [{ type: Types.ObjectId, ref: 'Hotel' }],
})

module.exports = model('Activity', schema)