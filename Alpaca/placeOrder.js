const axios = require('axios').default;


let _id = 0;



const placeOrder  = async (stock, amount, currentPriceOfStock) =>{
  _id++;
  //buy stock
  await axios({
  method:'post',
  url:`https://paper-api.alpaca.markets/v2/orders`,
  headers:{
        'APCA-API-KEY-ID': process.env.API_KEY_ID,
        'APCA-API-SECRET-KEY': process.env.API_SECRET_KEY
  },
  data: {
    symbol: stock,
    qty: amount,
    side: 'buy',
    type: 'market',
    time_in_force:'day'
  }
}).then((response) =>{
  console.log(response['data']);
  return response['data']
},
(error)=>{
  console.log(error['response']['data'])
  return response['response']['data']
  })
}



const sellOrder  = async (stock, amount, bar1Close, bar2Close) =>{
  let lowerPercent = 5;
  let lower = bar2Close - ((bar2Close*lowerPercent)/100)
  let upper = (bar2Close - bar1Close)  *2;

// set when should stock be sold
  await axios({
  method:'post',
  url:`https://paper-api.alpaca.markets/v2/orders`,
  headers:{
        'APCA-API-KEY-ID': process.env.API_KEY_ID,
        'APCA-API-SECRET-KEY': process.env.API_SECRET_KEY
  },
  data: {
    symbol: stock,
    qty: amount,
    side: 'sell',
    type: 'trailing_stop',
    time_in_force:'day',
    trail_percent: 5,
  }
}).then((response) =>{
  console.log('placing selling data');
  console.log(response['data']);
  return response['data']
},
(error)=>{
  console.log(error['response']['data']);
  return error['response']['data']
  })
}




exports.placeOrder = placeOrder;
exports.sellOrder = sellOrder;
