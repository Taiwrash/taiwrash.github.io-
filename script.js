const userDay = document.querySelector('.day');
const userMonth = document.querySelector('.month');
const userYear = document.querySelector('.year');
const nick = document.querySelector('.nick');

const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
    let parsedMonth = parseInt(userMonth.value);
    let parsedDay = parseInt(userDay.value) -1;
    let parsedYear = parseInt(userYear.value);
    let parsedNick = nick.value;

   const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
   const weekDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

   const newDate = new Date(parsedDay, parsedMonth, parsedYear);
   const newDay = weekDay[newDate.getDay()];
   const newMonth = months[parsedMonth];

   const message = document.querySelector('.message');

   if(newDay != undefined && newMonth != undefined) {
       message.innerText = 'Hey'+' '+ parsedNick + ', '+ 'the day you are searching for is'+ ' '+ newDay + ' '+ newMonth +' '+ parsedDay+', '+parsedYear;
   }
   else{
       message.innerText = 'Hey'+' '+ parsedNick + ', '+ "Please kindly fill out the date appropriately";
   }

});
