console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
/**
 * Adds (name) into the string, 'Welcome aboard, (name)'
 * 
 * @param {string} name Takes name to add to string returned
 */
function helloName( name ) {
  return `Welcome aboard, ${name}`;
}
// Remember to call the function to test
console.log('Should welcome aboard Brendan:', helloName('Brendan'));


// 3. Function to add two numbers together & return the result
/**
 * 
 * @param {number} firstNumber One of two values to be summed
 * @param {number} secondNumber second of two values
 * @returns The sum of firstNumber and secondNumber
 */

function addNumbers( firstNumber, secondNumber ) {
   return firstNumber + secondNumber;
}
console.log('Total should be 666:',addNumbers(665,1));


// 4. Function to multiply three numbers & return the result
/**
 * 
 * @param {number} firstNumber 
 * @param {number} secondNumber
 * @param {number} thirdNumber
 * @returns The total of three numbers multiplied together
 */
function multiplyThree(firstNumber, secondNumber, thirdNumber){
  return firstNumber*secondNumber*thirdNumber;
}

console.log('Should be 27:', multiplyThree(3,3,3));

/**
 * 
 * @param {number} number Number provided to determine whether it's even or odd
 * @returns True if number greater than 0 and false if it is otherwise
 */

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  } else {
    return false;
  }
}

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );

/**
 * 
 * @param {array} array Array which to check the last item of
 * @return Returns the last array item or undefined if the array is empty
 */

// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast( array ) {
  if (array[array.length - 1] === '') {
    return undefined
  } else {
    return array[array.length - 1]
  }
}

let testArray = ['one', 'two', 'three'];
let testArrayTwo = ['one'];
let testEmptyArray = []; 

console.log('Should be three:', getLast(testArray));
console.log('Should be one:', getLast(testArrayTwo));
console.log('Should be undefined:', getLast(testEmptyArray));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 

/**
 * 
 * @param {string, number, boolean} value Value to find in the array
 * @param {array} array Array to search for the value
 * @returns True if the value is found in the array, false if not found
 */

function find( value, array ){
  for (let search of array) {
    if (value === search) {
      return true;
    } else {
      return false;
    }
  }
}

let testNumberArray = [3, 14, 34];
let testBooleanArray = [false, true];


console.log('Should be true:', find('one', testArray));
console.log('Should be true:', find(3, testNumberArray));
console.log('Should be true:', find(true, testBooleanArray));
console.log('Should be false:', find('four', testArray));
console.log('Should be false:', find(9, testNumberArray));
console.log('Should be false:', find('test', testBooleanArray));
console.log('Should be false:', find(3, testBooleanArray));

/*
I was curious whether find() would work if provided an array for value and noticed 
the first console log came back false but I don't think I understand why. 
let testArrayArray = [1, 2, [3,3]];
console.log('Should be true:', find([3,3], testArrayArray));
console.log('Should be true:', find(7, testArrayArray));
*/

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise

/**
 * 
 * @param {string} letter Letter to check against first letter of a string
 * @param {string} string String to check the first letter of
 * @returns True if letter matches first letter of string, otherwise returns false
 */
function isFirstLetter(letter, string) {
  if (letter === string.charAt(0)) {
    return true;
  } else {
    return false;
  }
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array

/**
 * 
 * @param {array} array Array to add the values of
 * @returns Sum of all array values
 */

function sumAll(array) {
  let sum = 0
  // TODO: loop to add items
  for (let value of array) {
    sum += value;
  }
  return sum;
}

console.log('Should be 51:', sumAll(testNumberArray));
console.log('Should be 0onetwothree:', sumAll(testArray));

/*
Neat finding out for type conversion true is converted to 1 and false to 0.
console.log('Testing to see what booleans added together equals:', sumAll(testBooleanArray));
*/

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

/**
 * @param {array} array 
 */



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
