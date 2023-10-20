const {Router} = require('express')
const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')
const {check, validationResult} = require('express-validator')
const User = require('../models/User')
const router = Router()
const bodyParser = require('body-parser')

const jsonParser = bodyParser.json()

// /api/auth/register
router.post(
  '/register',
  [
    jsonParser,
    check('password', 'Password is too short')
    .isLength({ min: 6 }),
    check('email', 'Incorrect email').isEmail(),
  ],
  async (req, res) => {
  try {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: 'Incorrect data'
      })
    }

    console.log(req.body)
    const {email, password, username} = req.body

    const candidate = await User.findOne({ email })

    if (candidate) {
      return res.status(400).json({ message: 'User is already exists' })
    }

    const hashedPassword = await bcrypt.hash(password, 12)
    const user = new User({ email, password: hashedPassword, username })
    console.log(user)

    await user.save()

    res.status(204).json()

  } catch (e) {
    console.error(e)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

// /api/auth/login
router.post(
  '/login',
  [
    jsonParser,
    check('email', 'Incorrect email').normalizeEmail().isEmail(),
    check('password', 'Password is required').exists(),
    check('username', 'Username is required').exists()
  ],
  async (req, res) => {
  try {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: 'Incorrect data'
      })
    }

    const {email, password} = req.body
    const user = await User.findOne({ email })

    if (!user) {
      return res.status(400).json({ message: 'User not found' })
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
      return res.status(400).json({ message: 'Incorrect email or password' })
    }

    const token = jwt.sign(
      { userId: user.id },
      config.get('jwtSecret'),
      { expiresIn: '24h' }
    )

    res.json({ token })

  } catch (e) {
    res.status(500).json({ message: 'Something went wrong' })
  }
})


module.exports = router