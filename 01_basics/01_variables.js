console.log("Hello World")
//variables - let and const
const accountId = 123
let accountEmail = "sisir@gmail.com"
var accountPassword = "123"
accountCity = "Jaipur"
let accountState 

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
