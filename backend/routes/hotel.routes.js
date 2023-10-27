const {Router} = require('express')
const Hotel = require('../models/Hotel')
const Room = require('../models/Room')
const Facility = require('../models/Facility')
const Attraction = require('../models/Attraction')
const Activity = require('../models/Activity')
const Type = require('../models/Type')
const router = Router()
const bodyParser = require('body-parser')
const getNamesOfObjects = require('../helpers/getNamesOfObjects')


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
    const types = await Type.find()
    const activities = await Activity.find()
    const facilities = await Facility.find()
    const attractions = await Attraction.find()
    
    const roomsOfCurrentHotel = rooms.filter((room) => hotel.rooms.includes(room._id))
    const typesOfCurrentHotel = getNamesOfObjects(types.filter((type) => hotel.types.includes(type._id)))
    const activitiesOfCurrentHotel = getNamesOfObjects(activities.filter((activity) => hotel.activities.includes(activity._id)))
    const facilitiesOfCurrentHotel = getNamesOfObjects(facilities.filter((facility) => hotel.facilities.includes(facility._id)))
    const attractionsOfCurrentHotel = getNamesOfObjects(attractions.filter((attraction) => hotel.attractions.includes(attraction._id)))
    const lowestPrice = roomsOfCurrentHotel.reduce((acc, cur) => {
      if (acc < 0 || cur.price < acc) return cur.price
      return acc
    }, -1)

    res.json({ 
      ...hotel._doc, 
      lowestPrice, 
      rooms: roomsOfCurrentHotel, 
      types: typesOfCurrentHotel, 
      facilities: facilitiesOfCurrentHotel, 
      attractions: attractionsOfCurrentHotel, 
      activities: activitiesOfCurrentHotel
    })
  } catch (e) {
    console.error(e)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

module.exports = router