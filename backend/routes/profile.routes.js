const {Router} = require('express')
const auth = require('../middleware/auth.middleware')
const User = require('../models/User')
const Trip = require('../models/Trip')
const Hotel = require('../models/Hotel')
const Room = require('../models/Room')
const router = Router()
const bodyParser = require('body-parser')

const jsonParser = bodyParser.json()

// /api/profile
router.get(
  '/profile',
  auth,
  async (req, res) => {
  try {
    const user = await User.findById(req.user.userId)
    if (!user) {
      return res.status(401).json({message: 'Unauthorize'})
    }

    res.json({ email: user.email, username: user.username })
  } catch (e) {
    console.error(e)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.post(
  '/trip',
  [jsonParser, auth],
  async (req, res) => {
    try {
    const currentRoom = await Room.findById(JSON.parse(req.body.rooms)[0])
    const currentHotel = await Hotel.findById(req.body.hotel)
    const user = await User.findById(req.user.userId)
    if (!user || !currentHotel || !currentRoom) {
      return res.status(401).json({message: 'Unauthorize'})
    }
    const trip = new Trip({
      rooms: JSON.parse(req.body.rooms),
      check_in_date: req.body.check_in_date,
      check_out_date: req.body.check_out_date,
      price: req.body.price,
      hotel: req.body.hotel,
      user: user._id,
     })
    await trip.save()

    currentHotel.trips = [...currentHotel.trips, trip._id]
    await currentHotel.save()
    currentRoom.trips = [...currentRoom.trips, trip._id]
    await currentRoom.save()

    res.json(null)
  } catch (e) {
    console.error(e)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

module.exports = router