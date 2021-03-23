let d = new Date();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

document.querySelector('#day').innerHTML = days[d.getDay()] + ', ' + months[d.getMonth()] + '-' + d.getDate() + '-' + d.getFullYear();

function showTime() {
    //  document.querySelector('#clock').innerHTML = d.getHours() + ':' + checkTime(d.getMinutes()) + ':' + checkTime(d.getSeconds());
    document.querySelector('#clock').innerHTML = d.toLocaleTimeString();
    setInterval(showTime(), 1000);
}

showTime();

// window.addEventListener('load', function(){
//     showTime();
// });
  

// function checkTime(i) {
//          if (i < 10) {
//            i = "0" + i;
//          }
//          return i;
// }
