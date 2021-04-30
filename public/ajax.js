
$(document).ready(function(){
$.ajax(console.log("page is loaded loading ajax.js file in public folder"));
});



function button1func(){
  var element = document.getElementById("ul");
  $("ul").empty();
  console.log("executing js on the browser 'ajax.js' in public ")
  let informacije=""
$.ajax({
  url:'https://paper-api.alpaca.markets/v2/account',
  headers: {
     'APCA-API-KEY-ID': 'PK53YQN84SGAMP4LOBEN',
     'APCA-API-SECRET-KEY': 'IxnL0bfBZGdJ2np5WBvHxBrOfdgIyESsoK3bE6X9'
  },
  type: 'GET',
  dataType: 'json',
  success: function (data, textStatus, xhr) {
                Object.keys(data).forEach(key => {
                informacije+=`<li><strong>${key}</strong>:${data[key]}</li>\n`
                });

                element.innerHTML+=informacije;
             },
  error: function (xhr, textStatus, errorThrown) {
                 console.log('Error in Operation');
             }
           })
         }
