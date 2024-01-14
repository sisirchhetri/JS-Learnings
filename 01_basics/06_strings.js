let name ="Ravi", age ="22"

//old way string concatenation
console.log(name +" "+ age)

//new way through string interpolation
console.log(`My name is ${name} and age is ${age}`)


const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

//Declaration through string object..
name = new String(name)

console.log(name)//[String: 'Ravi']
console.log(name.toString())

console.log(name.length )
console.log(name.toUpperCase())
//indexOf(), substring(), slice(), trim(), replace(), split()


