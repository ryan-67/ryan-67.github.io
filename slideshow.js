let i = 0;
let j = 0;
let k = 0;
let music = [];
let food = [];
let sports = [];
let time = 1200;
music[0] = 'assets/homies.jpg';
music[1] = 'assets/bloo.jpg';
music[2] = 'assets/changmo.jpg';
music[3] = 'assets/since.jpg';
music[4] = 'assets/jayci.jpg';
food[0] = 'assets/onepot.jpg';
food[1] = 'assets/oreno.jpg';
food[2] = 'assets/chirashi.jpg';
food[3] = 'assets/mazesoba.jpg';
sports[0] = 'assets/hs_soccer.png';
sports[1] = 'assets/snowboard.jpg';
sports[2] = 'assets/im.png';

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