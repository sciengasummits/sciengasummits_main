require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const api = require('./routes/api')

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', api)

const PORT = process.env.PORT || 4000
const MONGO = process.env.MONGO_URI || process.env.MONGO || ''

if(!MONGO){
  console.warn('MONGO_URI not set. Set MONGO_URI in .env or environment variables.')
}

mongoose.connect(MONGO, {useNewUrlParser:true, useUnifiedTopology:true}).then(()=>{
  console.log('Connected to MongoDB')
  app.listen(PORT, ()=>console.log(`Server running on port ${PORT}`))
}).catch(err => {
  console.error('Mongo connection error:', err.message)
  app.listen(PORT, ()=>console.log(`Server running on port ${PORT} (no DB)`))
})
