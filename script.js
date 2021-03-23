let d = new Date();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

document.querySelector('#day').innerHTML = days[d.getDay()] + ', ' + months[d.getMonth()] + '-' + d.getDate() + '-' + d.getFullYear();

function showTime() {
    let d = new Date();    
    // document.querySelector('#clock').innerHTML = d2.getHours() + ':' + checkTime(d2.getMinutes()) + ':' + checkTime(d2.getSeconds());
    document.querySelector('#clock').innerHTML = d.toLocaleTimeString();
    setTimeout(showTime, 1000);
}

showTime();
//setInterval(showTime, 1000);


// function checkTime(i) {
//          if (i < 10) {
//            i = "0" + i;
//          }
//          return i;
// }
