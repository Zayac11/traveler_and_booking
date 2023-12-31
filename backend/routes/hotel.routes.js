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
const getModelData = require('../helpers/getModelData')
const getAttractions = require('../helpers/getAttractions')


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

    const roomsOfCurrentHotel = getModelData(rooms, hotel.rooms).map((room) => ({
      _id: room.id,
      image: room.image,
      name: room.name,
      sleeps: room.sleeps,
      description: room.description,
      price: room.price
    }))
    const typesOfCurrentHotel = getNamesOfObjects(getModelData(types, hotel.types))
    const activitiesOfCurrentHotel = getNamesOfObjects(getModelData(activities, hotel.activities))
    const facilitiesOfCurrentHotel = getNamesOfObjects(getModelData(facilities, hotel.facilities))
    const attractionsOfCurrentHotel = getAttractions(getModelData(attractions, hotel.attractions), id)
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