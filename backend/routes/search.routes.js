const {Router} = require('express')
const auth = require('../middleware/auth.middleware')
const Hotel = require('../models/Hotel')
const Facility = require('../models/Facility')
const Activity = require('../models/Activity')
const Room = require('../models/Room')
const router = Router()
const getNamesOfObjects = require('../helpers/getNamesOfObjects')
const bodyParser = require('body-parser')

const jsonParser = bodyParser.json()

// /api/search
router.post(
  '/search',
  [jsonParser],
  async (req, res) => {
  try {
    const initialHotels = await Hotel.find()
    const rooms = await Room.find()
    const activities = await Activity.find()
    const facilities = await Facility.find()

    function areAllElementsInArray(arr1, arr2) {
      for (const element of arr1) {
        if (!arr2.includes(element)) {
          return false;
        }
      }
      return true;
    }

    const hotels = initialHotels.filter((item) => {
      const activitiesOfCurrentHotel = getNamesOfObjects(activities.filter((activity) => item.activities.includes(activity._id)))
      const facilitiesOfCurrentHotel = getNamesOfObjects(facilities.filter((facility) => item.facilities.includes(facility._id)))
      
      const roomsOfCurrentHotel = rooms.filter((room) => item.rooms.includes(room._id))
      const lowestPrice = roomsOfCurrentHotel.reduce((acc, cur) => {
        if (acc < 0 || cur.price < acc) return cur.price
        return acc
      }, -1)

      if(req.body.place) {
        if (req.body.place.includes(item.place)) {} else return false
      } 
      
      if(req.body.rate) {
        if (req.body.rate - 1 <= item.rate) {} else return false
      } 

      if(req.body.activities) {
        if ( areAllElementsInArray(req.body.activities, activitiesOfCurrentHotel) ) {} else return false
      } 

      if(req.body.facilities) {
        if ( areAllElementsInArray(req.body.facilities, facilitiesOfCurrentHotel) ) {} else return false
      } 

      if(req.body.price) {
        if ( req.body.price >= lowestPrice ) {} else return false
      }

      return true
    })

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