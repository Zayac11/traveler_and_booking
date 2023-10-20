const {Router} = require('express')
const auth = require('../middleware/auth.middleware')
const User = require('../models/User')
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

module.exports = router