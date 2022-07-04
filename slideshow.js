let i = 0;
let j = 0;
let k = 0;
let music = [];
let food = [];
let sports = [];
let time = 1200;
var image = document.createElement("img");
music[0] = image.src = "./assets/homies.jpg";
music[1] = image.src = "./assets/bloo.jpg";
music[2] = image.src = "./assets/changmo.jpg";
music[3] = image.src = "./assets/since.jpg";
music[4] = image.src = "./assets/jayci.jpg";
food[0] = image.src = "./assets/onepot.jpg";
food[1] = image.src = "./assets/oreno.jpg";
food[2] = image.src = "./assets/chirashi.jpg";
food[3] = image.src = "./assets/mazesoba.jpg";
sports[0] = image.src = "./assets/hs_soccer.png";
sports[1] = image.src = "./assets/snowboard.jpg";
sports[2] = image.src = "./assets/im.png";

function changeImg() {
  document.slide4.src = music[i];
  document.slide1.src = food[j];
  document.slide3.src = sports[k];
  if (i < music.length-1) {
    i++;
  } else {
    i = 0;
  }
  if (j < food.length-1) {
    j++;
  } else {
    j = 0;
  }
  if (k < sports.length-1) {
    k++;
  } else {
    k = 0;
  }
  setTimeout("changeImg()", time);
}

window.onload = changeImg;

