/** @format */

// SECTION 1
// 1.
// let a = 0; valid
// const b = 1; valid
// //9 = a; -- Invalid as variables cannot start with a number
// //b = b + 5; --Invalid as const variables cannot be changed

// 2. Use the keywords: let or const; a name for the variable in camel case; asissgnment operator; and a value (optional);
// 3. Declare the new variable and use the assignment operator

// SECTION 2
// const a = 42.78
// const b = 1.1
// const c = -2
// const d = .5
// const e = 16

// console.log(Math.ceil(a));
// console.log(Math.floor(b));
// console.log(Math.abs(b - a));
// console.log(Math.max(a,b,c,d,e));
// console.log(Math.min(a,b,c,d,e));
// console.log(Math.sqrt(e));
// console.log(Math.pow(e, d));
// let dieZero = Math.floor(Math.random() * 6) + 1;
// console.log(dieZero);

// SECTION 3
// let firstVariable = "Hello World";
// firstVariable = 2;
// let secondVariable = firstVariable;
// secondVariable = "this is a string";
// console.log(firstVariable);
// let yourName = "Jason Bundy";
// console.log(`Hello, my name is ${yourName}`);

// SECTION 6
// let age = 1;
// if (age > 16) {
//   console.log("Here are the keys");
// } else {
//   console.log("Sorry, you're too young");
// }

// SECTION 7
// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// for (let i = 500; i >= 50; i--) {
//   console.log(i);
// }

// SECTION 8
// for (let i = 1; i <= 100; i += 2) {
//   console.log(`${i} is an odd number`);
// }

// SECTION 9
// for (let i = 0; i <= 100; i++) {
//   if (i % 5 === 0) {
//     console.log(`I found a ${i}. High five!`);
//   }
// }

// for (let i = 0; i <= 100; i++) {
//   if (i % 3 === 0) {
//     console.log(`I found a ${i}. Three is a crowd!`);
//   }
// }
// BONUS: PROJECT EULER
// let sum = 0;
// for (let i = 0; i < 1000; i++) {
//   if (i % 5 === 0 || i % 3 === 0) {
//     sum += i;
//   }
// }
// console.log(sum);

// SECTION 10
// let bankAccount = 0;
// // for (let i = 1; i <= 10; i++) {
// //   bankAccount += i;
// // }
// for (let i = 1; i <= 100; i++) {
//   bankAccount += (i * 2);
// }
// console.log(bankAccount);

// SECTION 11
// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// SECTION 12
// Used the following link for parts of the exercise:
// https://stackoverflow.com/questions/7944239/generating-fibonacci-sequence

let sum = 0;
let fibonacci = [0, 1] // used stackoverflow

for (let i = 2; i < 50; i++) {
  fibonacci[i] = (fibonacci[i - 2] + fibonacci[i - 1]); // used stackoverflow
  if (fibonacci[i] % 2 === 0) {
    sum += fibonacci[i];
    if (sum < 4000000) {
      console.log(sum);
    }
  }
}