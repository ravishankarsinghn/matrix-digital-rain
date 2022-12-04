"use strict";

const canvas = document.getElementById("matrix");
const context = canvas.getContext("2d");

// set height and width
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

// character for fall matrix
// we can change it to any character
const latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const num = "0123456789";

// joining all character
// we can assign any value to "alphabet" variable, that we want to iritate
// const character = latin + num;
const character = "01";

// assigning font-size and width of the columns
const fontSize = 16;
const columns = canvas.width / fontSize;

const rainDrops = [];

for (let x = 0; x < columns; x++) rainDrops[x] = 1;

// creating draw function for filling and create matrix
const draw = () => {
  context.fillStyle = "rgba(0,0,0,0.05)";
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = "#0F0";
  context.font = fontSize + "px monospace";

  for (let i = 0; i < rainDrops.length; i++) {
    const text = character.charAt(Math.floor(Math.random() * character.length));
    context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

    if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975)
      rainDrops[i] = 0;

    rainDrops[i]++;
  }
};

// calling draw() function on using 30 milisenconds interval
setInterval(draw, 30);
