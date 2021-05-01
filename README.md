# Trading-bot
 # This program is trading bot that checks price of stock-market every minute and decides if trade should be executed or not.



 * When certen conditions are met the trade is executed.
 	* Imidiately after trade is executed selling spot is choosen,
 	* when stock's price hits that spot the stock is traded,
 	* selling spot is 10% below and 20% abow buying price,
 	* trades are executed through Alpaca api



 * Technologies used:
 	* express framework	 
	* node.js,
	* axios,
	* alpca api


  #### This program can be expanded by adding option to trade mutiple stocks at once, for now it is only possible to trade one stock at once,





	gif of program runing


 # ** Building this program i worked with a loat of api calls. Because of that i upgraded my knowladge of axios library api calls and async programing **

	
	
  * Starting program:
  	* git clone https://github.com/DordeK/Trading-bot.git
	* npm install
	* npm run
