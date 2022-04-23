function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
var cool_subtitle_num = getRandomInt(1000,9999);
const interval = setInterval(function() {   
     let subtitle = document.getElementById("casino");
subtitle.innerHTML = "Работает на " + cool_subtitle_num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " серверах";
  cool_subtitle_num++;
 }, 2333);

// Get session cookie
var session = getCookie('session')
var e = document.getElementById("session");
e.innerHTML = session;

     
