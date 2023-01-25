// SECTION 1

//1. to assign a value to a variable, we use let, const, or var and then an = sign

//Which line(s) is/are valid?
// let a = 0; valid
// const b = 1; valid
// 9 = a; not valid
// b = b + 5; valid if line 2 is there

//2. we can change the value of a variable by reassigning it with an = sign
//3. We can assign an existing variable to a new variable if we use an = sign. Put the old variable on the left and the one you want to change on the right. 


// SECTION 2

// const a = 42.78
// const b = 1.1
// const c = -2
// const d = .5
// const e = 16

// console.log(Math.floor(a))
// console.log(Math.ceil(b))
// console.log(Math.abs(b-a))
// console.log(Math.max(a, b, c, d, e))
// console.log(Math.min(a, b, c, d, e))
// console.log(Math.sqrt(e))
// console.log(Math.pow(e, d))
// let die = Math.floor((Math.random() * 6)+1);
// console.log(die)


// SECTION 3

//1 and 2 Create a variable called firstVariable. assign it the value of a string: "Hello World"
// let firstVariable = "Hello World"
//3 On the next line, change the value of this variable to a number.
// firstVariable = 7
//4 store the value of firstVariable into a new variable called secondVariable
// let secondVariable = firstVariable
//5 On the next line, change the value of secondVariable to a string.
// secondVariable = "Hello New World"
//6 What is the value of firstVariable?
// console.log(firstVariable) // the value is still 7
// let yourName = "Duncan Wood"
// console.log(`Hello, my name is ${yourName}`)

// SECTION 4
// const a = 6;
// const b = 100;
// const c = -5;
// const d = 3000;
// const e = 'Jelly Bean';

// a _ b; => a < b;
// c _ d; => c < d;
// 'Peanut' _ 'Peanut'; 'Peanut' === 'Peanut';
// a _ b _ c; a < b > c;
// a _ a _ d; a == a < d;
// e _ 'Jelly Bean'; e == 'Jelly Bean';
// 48 _ '48'; 48 == '48'
// 'e' _ 'Eh' e !== 'Eh'


// SECTION 6

// let age = 15
// if (age >= 16) {
//     console.log("Here are the keys")
// } else if (age < 16) {
//     console.log("Sorry, you're too young.")
// }


// SECTION 7

// for (i = 0; i <= 10; i++) {
//     console.log(i);
// }

// for (i = 500; i >= 50; i--) {
//     console.log(i);
// }


// SECTION 8

// for (let i = 1; i <= 100; i+=2) {
//     console.log(i + " is an odd number");
// }