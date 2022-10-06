

/* ------------------------------ GLOBAL VARIABLES --------------------------- */
const planet_moon = document.querySelector('#planet-moon');
const planet_mars = document.querySelector('#planet-mars');
const moon_europa = document.querySelector('#moon-europa');
const moon_titan = document.querySelector('#moon-titan');
const moon_image = document.querySelector('#moon-image');
const mars_image = document.querySelector('#mars-image');
const europa_image = document.querySelector('#europa-image');
const titan_image = document.querySelector('#titan-image');
const moon = document.querySelector('#moon');
const mars = document.querySelector('#mars');
const europa = document.querySelector('#europa');
const titan = document.querySelector('#titan');





/* functions to display section by section */

/* display planet moon image and details */
planet_moon.addEventListener('click', ()=>{
    moon.style.display = "block";
    moon_image.style.display = "inline-block";
    mars.style.display = "none";
    mars_image.style.display = "none";
    europa.style.display = "none";
    europa_image.style.display = "none";
    titan.style.display = "none";
    titan_image.style.display = "none";
})


/* display planet mars image and details */
planet_mars.addEventListener('click', ()=>{
    mars.style.display = "block";
    mars_image.style.display = "inline-block";
    moon.style.display = "none";
    moon_image.style.display = "none";
    europa.style.display = "none";
    europa_image.style.display = "none";
    titan.style.display = "none";
    titan_image.style.display = "none";
})


/* display moon europa image and details */
moon_europa.addEventListener('click', ()=>{
    europa.style.display = "block";
    europa_image.style.display = "inline-block";
    moon.style.display = "none";
    moon_image.style.display = "none";
    mars.style.display = "none";
    mars_image.style.display = "none";
    titan.style.display = "none";
    titan_image.style.display = "none";
})


/* display moon titan image and details */
moon_titan.addEventListener('click', ()=>{
    titan.style.display = "block";
    titan_image.style.display = "inline-block";
    moon.style.display = "none";
    moon_image.style.display = "none";
    mars.style.display = "none";
    mars_image.style.display = "none";
    europa.style.display = "none";
    europa_image.style.display = "none";
})
