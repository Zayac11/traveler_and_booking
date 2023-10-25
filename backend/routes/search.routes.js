const {Router} = require('express')
const auth = require('../middleware/auth.middleware')
const Hotel = require('../models/Hotel')
const Room = require('../models/Room')
const router = Router()
const bodyParser = require('body-parser')

const jsonParser = bodyParser.json()

// /api/search
router.post(
  '/search',
  [jsonParser],
  async (req, res) => {
  try {
    // const {place, attractions, facilities, activities, rate, price} = req.body
    // console.log(req.body)
    const hotels = await Hotel.find()
    const rooms = await Room.find()
    
    const newHotels = hotels.map((hotel) => {
      const roomsOfCurrentHotel = rooms.filter((room) => hotel.rooms.includes(room._id))
      const lowestPrice = roomsOfCurrentHotel.reduce((acc, cur) => {
        if (acc < 0 || cur.price < acc) return cur.price
        return acc
      }, -1)
      return {
        ...hotel._doc, lowestPrice
      }
    });
    res.json(newHotels)
  } catch (e) {
    console.error(e)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

module.exports = router