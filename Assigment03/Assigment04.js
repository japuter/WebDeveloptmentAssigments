'use strict';
let firstSide = prompt("Enter the length of first side")
let secondSide = prompt("Enter the length of second side")
let thirdSide = prompt("Enter the length of third side")

firstSide = parseFloat(firstSide);
secondSide = parseFloat(secondSide);
thirdSide = parseFloat(thirdSide);


if(firstSide === secondSide && secondSide === thirdSide) {
    document.getElementById('output').innerHTML = 'Triangle is equilateral, meaning each side is the same lenght';
}
else if(firstSide === secondSide || secondSide === thirdSide || firstSide === thirdSide) {
    document.getElementById('output').innerHTML = 'Triangle is is isosceles, meaning two sides are equal';
}
else {
    document.getElementById('output').innerText = 'The triangle is scalene, meaning none of the sides are equal.'
}