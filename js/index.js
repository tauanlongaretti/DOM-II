// Your code goes here

// Mouse Over

let nav = document.querySelector("nav");
  
nav.addEventListener("mouseover", function(event) {   
  event.target.style.color = "#17A2B8";

setTimeout(function() {
    event.target.style.color = "";
  }, 1000);
}, false);

// Wheel

function zoom(event) {
    scale += event.deltaY * -0.01;

    scale = Math.min(Math.max(.8, scale), 1.2);

    el.style.transform = `scale(${scale})`
}
let scale = 1;
const el = document.querySelector('h1');
el.addEventListener('wheel', zoom);

// Load

// window.addEventListener('load', (event) => {
//     alert('Welcome to Fun Bus Travel Agency!')
// });

// Focus

const focus = document.querySelector(".main-navigation");
focus.addEventListener('focus', (event) => {
    event.target.style.background = '#d1d1d1';
});


