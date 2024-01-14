// Objects ---> singleton object ; through constructor
//Object.create;

//Object Literals

const mySymbol = Symbol ("key1") //Interview **

const jsUser ={
    'id': 'a01',
    name : 'Sisir', //keys are processed as string i.e. here 'name' as a string
    'full name' : 'Sisir Chhetri',
    age: 20,
    country :'India',
    email :'sisir@gmail.com',
    accountActive : true,
    lastLogin : ['Sunday','Saturday', 'Friday'],
    [mySymbol]:"myKey1"
}

//Accessing elements
// console.log(jsUser)
// console.log(jsUser.age)
// console.log(jsUser.id)
// console.log(jsUser['age'])  //[]require key to be within '' as a string....
// console.log(jsUser["full name"]) //only using [] notation... these types of key being accessed

//console.log(jsUser)
/* {
    id: 'a01',
    name: 'Sisir',
    'full name': 'Sisir Chhetri',
    age: 20,
    country: 'India',
    email: 'sisir@gmail.com',
    accountActive: true,
    lastLogin: [ 'Sunday', 'Saturday', 'Friday' ],
    mySymbol: 'myKey1' 
  } */
//console.log(`${jsUser.mySymbol} : dataytpe of mySymbol : ${typeof jsUser.mySymbol}`)
//myKey1 : dataytpe : string ()

//mySymbol is not being used as a symbol type
//Now being used as Symbol with[]
/* {
    id: 'a01',
    name: 'Sisir',
    'full name': 'Sisir Chhetri',
    age: 20,
    country: 'India',
    email: 'sisir@gmail.com',
    accountActive: true,
    lastLogin: [ 'Sunday', 'Saturday', 'Friday' ],
    [Symbol(key1)]: 'myKey1'
  } */
  //undefined : dataytpe of mySymbol : undefined

jsUser.email ="sisir@yahoo.com" 
//Object.freeze(jsUser)
jsUser.email ="sisir@apple.com" 
//Freezing the Object
//console.log(jsUser);


jsUser.greetings= function(){
    console.log("Hello User");
}
console.log(jsUser.greetings) //[Function (anonymous)] -> function reference
console.log(jsUser.greetings()) 
//Output : Hello User
//undefined

jsUser.greetingsTwo= function(){
    console.log(`Hello User : ${this.name}`);
}

console.log(jsUser.greetingsTwo()) 
// Output -> Hello User : Sisir  
//undefined