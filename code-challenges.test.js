// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]

describe("myObject", () => {
  it("returns an array with a sentence about each person with their name capitalized.", () => {
  console.log(myObject(people))
  expect(myObject(people.name)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])

  
  })
})
// ReferenceError: myObject is not defined
// Psedocode 1. Create a function called myObject
//           2. Input is a function that takes in an array of objects
//           3. Use Object.values to return an array of values of the enumerable properties of an object 
//           4. Use .map to iterate over the array, trying to use .split with the .name to return that array of "people"
//           At this point im just stuck.
//           5. Output is to return an array with a sentence about each person with their name capitalized.


const myObject = (array) => {
let word = (Object.values(array)).map((value) => {
return (value.name.split(" ").map(people).join(" ").concat(' ').concat(value.occupation))
}).toUppercase() 
return word
}
 

  // let newArray = Object.values(people)

  // return newArray.toUpperCase()

  // let newArray = Object.values(object)
  // return newArray



// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// b) Create the function that makes the test pass.

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

// b) Create the function that makes the test pass.


describe("divThree", () => {
  it("returns the sum of all the numbers cubed", () => {
    console.log(divThree(hodgepodge1))
    expect(divThree(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(divThree(hodgepodge2)).toEqual([ 2, 1, -1 ])
  
  })
})

// ReferenceError: divThree is not defined

// Pseudocode : 1. Create a function called divThree
//              2. Input takes in a mixed data array
//              3. Use .filer to iterate over the array, use typeof to return only "number"
//              4  Use .map to iterate over the new array and return that array with the remainder of those numbers divided by 3 
//              5. Output returns an array of only the REMAINDERS of the numbers when divided by 3.



const divThree = (array) => {
  return array.filter((value) => {
    return typeof value === "number" }).map(value => value % 3)

}

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

// b) Create the function that makes the test pass.


describe("mySum", () => {
  it("returns the sum of all the numbers cubed", () => {
    console.log(mySum(cubeAndSum1))
    expect(mySum(cubeAndSum1)).toEqual(99)
    expect(mySum(cubeAndSum2)).toEqual(1125)
  
  })
})
// ReferenceError: mySum is not defined

// Pseudocode : 1. Create a function called mySum
//              2. Input takes in an array of numbers
//              3. Use .reduce to return the sum of all the numbers in the array
//              4  Use Math.pow() to return the value to a power, in this case since its cubed the 3rd power. The zero is where it starts in the iteration for .reduce
//              5. Output returns returns the sum of all the numbers cubed.



 const mySum = (array) => {
 return array.reduce((a,b) => a += Math.pow(b,3),0)}


// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 2 passed, 3 total