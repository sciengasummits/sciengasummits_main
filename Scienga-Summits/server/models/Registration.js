const mongoose = require('mongoose')

const RegistrationSchema = new mongoose.Schema({
  name: String,
  email: String,
  plan: String,
  createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Registration', RegistrationSchema)
