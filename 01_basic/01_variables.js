const accountId=144553
let accountEmail="ritiikasin345gmail.com"
var accountPassword="1234"
accountCity="jaunpur"
// in js we can declare variale wiithout using any keyword but this is not right apprroach
// accountId=2//not allowed
let accountState;
// if only define our variable without any value assign then we got undefined
accountEmail="hc12.email.com"
accountPassword="123"
accountCity="benguluru"
/*prefer not to use var
because of issue in block scope and functional scope 
 */
console.log(accountId);
console.table([accountId,accountEmail,accountCity,accountState])