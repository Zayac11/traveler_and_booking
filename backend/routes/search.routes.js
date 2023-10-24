const {Router} = require('express')
const auth = require('../middleware/auth.middleware')
const Hotel = require('../models/Hotel')
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
    const hotel = await Hotel.find()

    res.json({ hotels: hotel })
  } catch (e) {
    console.error(e)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

module.exports = router