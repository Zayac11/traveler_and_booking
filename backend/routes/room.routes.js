const {Router} = require('express')
const Hotel = require('../models/Hotel')
const Room = require('../models/Room')
const router = Router()
const bodyParser = require('body-parser')
const getNamesOfObjects = require('../helpers/getNamesOfObjects')
const getAttractions = require('../helpers/getAttractions')


const jsonParser = bodyParser.json()

// /api/room
router.get(
  '/room/:id',
  [],
  async (req, res) => {
  try {
    const id = req.params.id
    const room = await Room.findById(id)
    if(!room) res.status(404).json({message: 'Room with given id not found'})

    const hotels = await Hotel.find()
    const hotelOfCurrentRoom = hotels.filter((hotel) => room.hotel.toString() === hotel._id.toString())[0]

    res.json({ 
      ...room._doc,
      hotel: hotelOfCurrentRoom
    })
  } catch (e) {
    console.error(e)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

module.exports = router