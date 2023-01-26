// Tonight's HW - Sections 2, 3, 6, 7 & 8

// I ) Section 2. Let's get Mathy!
console.log("\n__________________________ Section 2. Let's get Mathy! ___________________________________\n")

const a = 42.78
const b = 1.1
const c = -2
const d = .5
const e = 16

// Round a down
console.log("Rounds down to " +Math.floor(a))

// Round b up
console.log("Rounds up to " + Math.ceil(b))
console.log("Rounds to the nearest integer as " + Math.round(b))

// Find the absolute value of b - a
console.log("Absolute value of b - a is " +Math.abs(b - a))

// Find the largest number of a, b, c, d, e
console.log("Largest number of a, b, c, d, e is " +Math.max(a, b, c, d, e))

// Find the smallest number of a, b, c, d, e
console.log("Smallest number of a, b, c, d, e " +Math.min(a, b, c, d, e))

// Find the square root of e
console.log("Square root of e is" +Math.sqrt(e))

// Raise e to the power of d
console.log("e to the power of d is " +Math.pow(e, d))

// Make a digital die 0 generate a random number between 1 - 6
console.log("Zeroing a possible die throw " +Math.floor(Math.random(1, 6)))

// or a normal die
console.log("A possible die throw result is " +Math.floor(Math.random(1, 6) * 6))

/*
 * 
 * 
 * 
 * 
 */
console.log("\n")

// II) Section 3. Strings
console.log("__________________________  Section 3. Strings _________________________________________ \n")

// Strings - Switcharoo

// 1 ) Create a variable called firstVariable.
let firstVariable

// 2 ) assign it the value of a string: "Hello World"
firstVariable = "Hello World"

// 3 ) On the next line, change the value of this variable to a number.
// it can not be changed to a number it will print NAN
console.log("Using Parse Int to "+ "'" +`${typeof parseInt(firstVariable)}`+ "'" + " type." + " Can not be changed : " + parseInt(firstVariable))
// using Number
console.log("Using Number to " + "'" +`${typeof Number(firstVariable)}`+ "'" + " type." + " Can not be changed : " + parseInt(firstVariable))

// but if assigned to some number the value will be the number 
// assigned to it : in this case 17
// but the instruction does not say 'assign' so you can find it printed at the very last


// 4 ) store the value of firstVariable into a new variable called secondVariable
let secondVariable = firstVariable
console.log("Current value of second variable is " + "'" +secondVariable+ "'")

// 5 ) On the next line, change the value of secondVariable to a string.
console.log("Second variable to a string " + "'" +secondVariable.toString()+ "'" )

// 6 ) What is the value of firstVariable?
console.log("The value of first variable is " + "'" +firstVariable + "'")

firstVariable = 17
console.log("The result is " +firstVariable)

// Strings - Combine it

// 1) Create a variable called yourName and set it equal to your name as a string.
const yourName = "Fissha"

// 2) Write an expression that takes the string "Hello, my name is " and the variable yourName so that it prints a new string with them concatenated
// ex: Hello, my name is Jean Valjean

const thirdVariable = "Hello, my name is "

// the expression 
console.log(thirdVariable + yourName +"\n")

/*
 * 
 * 
 * 
 * 
 */

// III) Section 6. Driver's Ed

console.log("__________________________   Section 6. Driver's Ed _______________________________ \n")

// Write a variable that will hold a person's age.
let age = 16

// Write code that will print out "Here are the keys", if the age is 16 years or older.
if(age >= 16){
    console.log("Here are the keys")
}

console.log("\n")
// Change your code so that if the age is younger than 16, a message will print "Sorry, you're too young."
if(age < 16){
    console.log("Sorry, you're too young.")
}

/*
 * 
 * 
 * 
 * 
 */

// IV) Section 7. Just Loop It

console.log("__________________________  Section 7. Just Loop It __________________________")

// 1) Write code that will print out all the numbers in the range 0 - 10.
console.log("Printing numbers in the range 0 to 10\n")
for(let i = 0; i < 10; i++){
    console.log(i)
}
console.log("\n")

// 2) Write code that will print out all the numbers in the range 500 - 50.
console.log("Printing numbers in the range 500 to 50\n")
let j = 500
while(j > 50){
    // console.log(j)
    // process stdout of node js is helpful to print very large range
    process.stdout.write(`${j},`);
    j--
}
console.log("\n")

// Section 8. Let's get odd
console.log("__________________________   Section 8. Let's get odd __________________________ \n")

// 1) Print out the odd numbers that are within the range of 1 - 100.
console.log("Printing odd numbers in the range of 1 to 100\n")
for(let i = 1; i < 100; i++){
    if(i % 2 != 0){
        process.stdout.write(`${i},`)
    }
}
console.log("\n")
// 2) Adjust your code to add a message next to the odd number that says: "is an odd number".
console.log("Printing odd numbers in the range of 1 to 100 using the odd term as description\n")
for(let j = 1; j < 100; j++){
    if(j % 2 != 0){
        console.log(`${j} is an odd number`)
    }
}
// Example Output:

// 3 is an odd number
// 5 is an odd number
// 7 is an odd number


// Section 12. Fibonacci
console.log("__________________________ Section 12. Fibonacci __________________________")

// a fibonacci series for even values

console.log("Fibonacci sequences values of even valued terms in range of four million\n")
let n1=0;
let n2=1;
let totalSum;
for (let i = 0; i < 4000000; i++)
{	  
    if(i % 2 == 0){
        totalSum=n1+n2;
        n1=n2;
        n2=totalSum;
        process.stdout.write(`${n2}, `)
    }    
}	


