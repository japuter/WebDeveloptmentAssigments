'use strict';

let cordX = prompt('Enter x cordinate: ');
let cordY = prompt('Enter y cordinate: ');
let cordX2 = prompt('Enter x cordinate: ');
let cordY2 = prompt('Enter y cordinate: ');

//Convert sttring to int
cordX = parseInt(cordX);
cordY = parseInt(cordY);
cordX2 = parseInt(cordX2);
cordY2 = parseInt(cordY2);


let distance = Math.sqrt(Math.pow(cordX2 - cordX, 2) + Math.pow(cordY2 - cordY, 2));

document.getElementById('output').innerHTML = distance