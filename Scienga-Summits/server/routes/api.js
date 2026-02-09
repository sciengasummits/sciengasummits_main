const express = require('express')
const router = express.Router()
const Registration = require('../models/Registration')
const Contact = require('../models/Contact')
const Subscriber = require('../models/Subscriber')

router.post('/register', async (req, res) => {
  try {
    const doc = await Registration.create(req.body)
    res.json({ ok: true, id: doc._id })
  } catch (err) {
    console.error(err)
    res.status(500).json({ ok: false, error: err.message })
  }
})

router.post('/contact', async (req, res) => {
  try {
    const doc = await Contact.create(req.body)
    res.json({ ok: true, id: doc._id })
  } catch (err) {
    console.error(err)
    res.status(500).json({ ok: false, error: err.message })
  }
})

router.post('/subscribe', async (req, res) => {
  try {
    const { email } = req.body
    const existing = await Subscriber.findOne({ email })
    if (existing) {
      return res.json({ ok: true, message: 'Already subscribed' })
    }
    const doc = await Subscriber.create(req.body)
    res.json({ ok: true, id: doc._id })
  } catch (err) {
    console.error(err)
    res.status(500).json({ ok: false, error: err.message })
  }
})

module.exports = router
