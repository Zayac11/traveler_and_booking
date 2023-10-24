const {Router} = require('express')
const auth = require('../middleware/auth.middleware')
const Activity = require('../models/Activity')
const Facility = require('../models/Facility')
const Attraction = require('../models/Attraction')
const router = Router()
const bodyParser = require('body-parser')

// /api/filters
router.get(
  '/filters',
  [],
  async (req, res) => {
  try {
    const activities = await Activity.find()
    const facilities = await Facility.find()
    const attractions = await Attraction.find()
    res.json({ activities, facilities, attractions })
  } catch (e) {
    console.error(e)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

module.exports = router