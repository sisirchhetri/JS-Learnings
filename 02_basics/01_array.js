// Arrays

console.log(" Arrays ", 3, 2, 1 , "Go")

//Types of Declarations of arrays
const arr1 = [1, 2, "value", false] //heterogeneous datatype
const strArr =["a" , "b", "c"]

const arr =[1, 2, 3, 4, 5] //Shallow Copies (HEAP)

const new_arr  = new Array(1,3)

console.log(arr)


//Operations and Methods in Arrays
console.log(arr[0])

console.log("PUSH ", arr.push(10)) // appends the element and returns the new array size
console.log(arr)

//POP
console.log("POP ", arr.pop()) //pops the last element and pops the ele
console.log("New Array : ", arr)

//Unshift & Shift
console.log("UNSHIFT : ", arr.unshift(11) ) //inserts new ele, start of the arr & return new array length

console.log("New Array :" , arr)

console.log("SHIFT : ", arr.shift() ) //removes  ele, start of the arr & return element

console.log("New Array :" , arr)
console.log()

//Includes
console.log("INCLUDES : " , arr.includes(3)) //returns boolean type
console.log()

//IndexOf
console.log("indexOf : ", arr.indexOf(2)) //return pos or -1 if not present

//Join
const joinStr = arr.join() //DOESN'T CHANGES THE ARRAY
console.log("Orginal Array : ", arr)
console.log("New Array (JOIN) : ", joinStr) //STRING...


//slice and splice ::: Interview Question Difference between them
console.log("A : ", arr)
console.log("SLICE : ", arr.slice(1,3)) //start and end index  
console.log("Original Array after Slice : ", arr) //Doesn't alter original array
console.log()

//Splice :::Alter the original array and returns the elements in the range
console.log("B : ", arr)
console.log("SPLICE : ", arr.splice(1,3)) //returns the elements deleted (start(index), nof.elements to deleted(3 --here))
console.log("Original Array after Splice : ", arr)



