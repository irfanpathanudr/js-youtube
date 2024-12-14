const accountId = 144553
let accountEmail = "irfan@google.com"
var accountPassword = 12345
accountCity = "Udaipur"
let accountState;  //undefined 

// accountId = 12 //TypeError: Assignment to constant variable.
accountEmail = "hc@hc.com"
accountPassword = 54321
accountCity = "Jaipur"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and funcional scops 
*/

console.table([accountEmail,accountPassword,accountCity, accountState])
