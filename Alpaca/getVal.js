const axios = require('axios').default;
require('dotenv').config()

let ret


const getVal = async () =>{
const min = 60000
const current = new Date()
const past = new Date(current -(2*min)).toISOString()
const now = new Date(current).toISOString()

console.log("NOW--->",now,"  PAST--->", past);


await axios({
  method:'get',
  url:`https://data.alpaca.markets/v1/bars/minute?symbols=${process.env.STOCK}&start=${past}&end=${now}`,
  headers:{'APCA-API-KEY-ID': process.env.API_KEY_ID,
    'APCA-API-SECRET-KEY': process.env.API_SECRET_KEY
  }
}
).then((response)=>{
     let proc = process.env.STOCK;
      ret = response.data[`${proc}`]
  },(error) =>{
    return error['response']['data']
  })
        return ret
}


exports.getVal = getVal
