// Your code goes here

// Mouse Over

let nav = document.querySelector("nav");

nav.addEventListener("mouseover", function(event) {
  event.target.style.color = "#17A2B8";

setTimeout(function() {
    event.target.style.color = "black";
  }, 5000);
}, false);

// Wheel

function zoom(event) {
  event.preventDefault();
    scale += event.deltaY * -0.01;

    scale = Math.min(Math.max(.8, scale), 1.2);

    el.style.transform = `scale(${scale})`
}
let scale = 1;
const el = document.querySelector('h1');
el.addEventListener('wheel', zoom);

// Load

window.addEventListener('load', (event) => {
    alert('Welcome to Fun Bus Travel Agency!')
});

// Mouse Enter
const italicize = document.querySelector(".footer");
italicize.addEventListener('mouseenter', () => {
  italicize.style.fontStyle = "italic";  
})

italicize.addEventListener('mouseleave', () => {
  italicize.style.fontStyle = "normal";
})

// Click
const intro = document.querySelector('.intro');
const introP = document.querySelector('p');

intro.addEventListener('click', () => {
    intro.style.background = '#17A2B8';
    intro.style.color = 'white';
});    

  introP.addEventListener('click', (event) => {
    event.stopPropagation();
});

// Mouse Out

let noBorder = document.querySelector('img');
noBorder.addEventListener('mouseout', function(event) {
  event.target.style.border = 'none';
});

// Focus
const focused = document.querySelector('a');

focused.addEventListener('focus', (event) => {
  event.target.style.color = 'red';    
});

// Blur
focused.addEventListener('blur', (event) => {
  event.target.style.opacity = '0.5';    
});

// Double Click
const bold = document.querySelector('html');
bold.addEventListener("dblclick", (event) => {
  event.target.style.transform = "scale(1.2)";
});

// Resize
const heightOutput = document.querySelector('h4');
const widthOutput = document.querySelector('.btn');

function reportWindowSize() {
  heightOutput.textContent = window.innerHeight;
  widthOutput.textContent = window.innerWidth;
}

window.addEventListener('resize', reportWindowSize);

