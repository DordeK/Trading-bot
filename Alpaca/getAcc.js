const axios = require('axios');
require('dotenv').config()

// returna uporabnikov accout kot object, to kasneje uporabimo da izvrsimo trade
const getAcc = async ()=>{
let obj
await axios({
    method: 'get',
    url:'https://paper-api.alpaca.markets/v2/account',
    headers: {
          'APCA-API-KEY-ID': process.env.API_KEY_ID,
          'APCA-API-SECRET-KEY': process.env.API_SECRET_KEY
    },
  }).then(resArr =>{
     obj = resArr.data
  })
   return obj
}


exports.getAcc = getAcc
