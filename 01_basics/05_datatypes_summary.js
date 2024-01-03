//  Primitive ----> Stored in Stack 

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('12233')
const anotherId = Symbol('122343')

console.log(id === anotherId);
console.log("Variable - null " + typeof outsideTemp)//object
console.log("Variable - undefined " + typeof userEmail)//undefined
console.log("Variable - number " + typeof scoreValue)//undefined

const bigNumber = 3456543576654356754n

console.log("var bigInteger : "+ typeof bigNumber)//bigint



// Reference (Non primitive) --> Stored in Heap

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "rajesh",
    age: 22,
}

console.log(myObj.name)

const myFunction = function(){
    console.log("Hello world");
}

let funVar= function(){
    console.log("new fun")
}

console.log(typeof anotherId); //symbol
console.log("var function : "+ typeof myFunction);//function
console.log("var array : "+ typeof heros); //object
myFunction()

//reference for docs...variable type and their datatypes..
// https://262.ecma-international.org/5.1/#sec-11.4.3