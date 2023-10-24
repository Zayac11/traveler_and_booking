const {Router} = require('express')
const auth = require('../middleware/auth.middleware')
const Activity = require('../models/Activity')
const Facility = require('../models/Facility')
const Type = require('../models/Type')
const router = Router()
const bodyParser = require('body-parser')

// /api/filters
router.get(
  '/filters',
  [],
  async (req, res) => {
  try {
    const activities = (await Activity.find()).map((item) => item.name)
    const facilities = (await Facility.find()).map((item) => item.name)
    res.json({ activities, facilities })
  } catch (e) {
    console.error(e)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

module.exports = router