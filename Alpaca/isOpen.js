const axios = require('axios');


const isOpen = async ()=>{

let obj

await axios({
    method: 'get',
    url:'https://paper-api.alpaca.markets/v2/clock',
    headers: {
          'APCA-API-KEY-ID': process.env.API_KEY_ID,
          'APCA-API-SECRET-KEY': process.env.API_SECRET_KEY
    }
  }).then(resArr =>{
     obj = resArr.data.is_open
  })
   return obj


}


exports.isOpen = isOpen
