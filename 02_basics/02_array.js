//concatinating arrays
const arr =[1, 2]
const arr1 =[3, 4]
/*
console.log(arr.push(arr1))
console.log(arr) //  [ 1, 2, [ 3,4 ] ] merging into the same array...
console.log(arr[2][0]) //-- 3
*/

//Using concat
//console.log(arr.concat(arr1, ['n1','n2'])) // [ 1, 2, 3, 4, 'n1', 'n2' ] returns new array

//Using spread operator
const fruits =['apple', 'mango', 'orange']
const vegis =['carrot', 'tomato', 'cucumber']

const food = [...fruits, ...vegis] //using spread operator 

//console.log(food) //[ 'apple', 'mango', 'orange', 'carrot', 'tomato', 'cucumber' ]

//Converting into a single array when there is an array inside an array and ....
//  [1,2 [3,4], [5,6,[7,8] ]]  ---mistake with comman ,  //[ 1, undefined, 5, 6, 7, 8 ]
const another_array = [1,2 ,[3,4], [5,6,[7,8] ]]        

const flat_array =another_array.flat(Infinity)
console.log(flat_array) /* [
    1, 2, 3, 4,
    5, 6, 7, 8 
  ]   */                   
//console.log(flat_array[4])
  

//Useful when scarping any data- which may be in obj, array, strings
//but we want in array, coz we can iterate over it 


console.log(Array.isArray("123")) //false
console.log(Array.isArray([1,2])) //true

//Converting String, numbers into array
//console.log(Array.from('Hello')); //[ 'H', 'e', 'l', 'l', 'o' ]

//console.log(Array.from(1)) //[]

//Objects -> Arrays ---Interesting For Interview*********
console.log(Array.from( {name : 'sisir'})) //[] if it can't create array return empty []

const a =12
const b =10
const c=123

console.log(Array.of(a, b, c));
/* [
    1, 2, 3, 4,
    5, 6, 7, 8
] */