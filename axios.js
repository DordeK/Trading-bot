const axios = require('axios').default;
const getAcc = require('./Alpaca/getAcc')
const getVal = require('./Alpaca/getVal')
const getOpen = require('./Alpaca/isOpen')
const trade = require('./Alpaca/placeOrder')
const Alpaca = require('@alpacahq/alpaca-trade-api');
const Backtest = require('@kendelchopp/alpaca-js-backtesting');



const func = async () =>{

let testData;

// await axios({
//   method: 'get',
//   url: 'https://api.polygon.io/v2/aggs/ticker/' + process.env.STOCK + '/range/1/minute/2020-02-12/2021-02-12?unadjusted=true&sort=asc&limit=50000&apiKey=j6wu8zFIL2ZbAw4dZWxURDOhgSQh57DF',
// }).then((response)=>{
//     testData = response['data']['results']
// }, (error) => {
//     console.log(error.response.data);
// })

// myAccount == uporabnikov accout kot object, to kasneje uporabimo da izvrsimo trade
let myAccount = await getAcc.getAcc();

// preverimo ali je market odpret tradingHours = true | false
let tradingHours = await getOpen.isOpen();


    async function callOrder(bar1, bar2){
        console.log("tradable---> ",  ((bar1 && bar2) &&(bar1.c < bar1.o) &&(bar2.c > bar2.o) &&  (bar2.c > bar1.o) &&  (bar2.o < bar1.c) && (bar2.v > bar1.v)));

        if((bar1 && bar2)   &&
          (bar1.c < bar1.o) &&
          (bar2.c > bar2.o) &&
          (bar2.c > bar1.o) &&
          (bar2.o < bar1.c) &&
          (bar2.v > bar1.v))
          {
            let amountOfStockBuySell = Math.round((myAccount['equity'] *0.1)/bar1['c'])
            let placedOrder = await trade.placeOrder(process.env.STOCK, amountOfStockBuySell, bar1['c'])
            let sellOrder = await trade.sellOrder(process.env.STOCK, amountOfStockBuySell, bar2['c'], bar1['c'])
          }
    }


      if(tradingHours === true){
            console.log("CHECKING STOCK --->  ", process.env.STOCK);
            let val = await getVal.getVal();
            let bar1 = val[0];
            let bar2 = val[1];
            console.log(bar2, " | ", bar1);
            callOrder(bar1, bar2);
      }else{
            console.log("trading hours open/close:", tradingHours);
      }


console.log("-------------------------------------------------------------------\n");
}

setInterval(func, 1000);

    exports.func = func
