const {Router} = require('express')
const auth = require('../middleware/auth.middleware')
const Hotel = require('../models/Hotel')
const Room = require('../models/Room')
const router = Router()
const bodyParser = require('body-parser')

const jsonParser = bodyParser.json()

// /api/hotel
router.get(
  '/hotel/:id',
  [],
  async (req, res) => {
  try {
    const id = req.params.id
    const hotel = await Hotel.findById(id)
    if(!hotel) res.status(404).json({message: 'Hotel with given id not found'})

    const rooms = await Room.find()
    
    const roomsOfCurrentHotel = rooms.filter((room) => hotel.rooms.includes(room._id))
    const lowestPrice = roomsOfCurrentHotel.reduce((acc, cur) => {
      if (acc < 0 || cur.price < acc) return cur.price
      return acc
    }, -1)

    res.json({ ...hotel._doc, lowestPrice})
  } catch (e) {
    console.error(e)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

module.exports = router