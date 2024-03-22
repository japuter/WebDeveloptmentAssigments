'use strict';

let Celsius = prompt('Enter tempature in Celsius: ');
let Fahrenheit = (Celsius * 9/5) + 32;

document.getElementById('outputFahrenheit').innerHTML = 'Temperature in Fahrenheit: ' + Fahrenheit + ' F'