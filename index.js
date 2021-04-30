const express = require('express')
const path = require('path');
const exp = require('./axios.js')

require('dotenv').config()


const app = express()
app.use(express.static('public'))

exp.func()




app.listen('3003')
