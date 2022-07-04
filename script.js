let darkMode = localStorage.getItem('darkMode'); 
const darkModeToggle = document.querySelector('#dark-mode-toggle');

const enableDarkMode = () => {
  document.body.classList.add('darkmode');
  localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
  document.body.classList.remove('darkmode');
  localStorage.setItem('darkMode', null);
}
 
if (darkMode === 'enabled') {
  enableDarkMode();
}

darkModeToggle.addEventListener('click', () => {
  darkMode = localStorage.getItem('darkMode'); 
  if (darkMode !== 'enabled') {
    enableDarkMode();
  } else {  
    disableDarkMode(); 
  }
});


// const slideshowImages = document.querySelectorAll(".slideshow-img")
// const nextImgDelay = 900;
// let currImgCounter = 0;

// slideshowImages[currImgCounter].style.display = "block";
// // slideshowImages[currImgCounter].style.opacity = 1;
// setInterval(nextImg, nextImgDelay);

// function nextImg() {
//   slideshowImages[currImgCounter].style.display = "none";
//   //slideshowImages[currImgCounter].style.opacity = 0;
//   currImgCounter = (currImgCounter + 1) % slideshowImages.length;
//   slideshowImages[currImgCounter].style.display = "block";
//   //slideshowImages[currImgCounter].style.opacity = 1;
// }
