var geometry = require('./index.js');

console.log( 'The area of a circle of radius 4 is '
           + geometry.circlearea(4));
console.log('The circumference of a circle with radius 4 is', geometry.circlecircumference(4));

console.log('The area of a square with side 4 is', geometry.squarearea(4));
console.log('The perimeter of a square with side 4 is', geometry.squareperimeter(4));

console.log('The area of a triangle with base 2 and height 4 is', geometry.trianglearea(2,4));
console.log('The perimeter of a triangle with base 2, height 4, and hypotenuse 6 is', geometry.triangleperimeter(2,4,6));