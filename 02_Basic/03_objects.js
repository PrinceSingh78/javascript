// single ton

//object literals
// Object.create

const mysym = Symbol("key1")
const  jsUser ={
    name : "Prince" ,// bydefault yeah string hi consider karega
    age : 22,
    location : "address",
    [mysym]:"key1", // for accessing a symbol using square bracket in the object
    email : "prince1234@gmail.com",
    isloggedin : false,
    lastLoginDays : ["monday","Saturday"]
}

console.log(jsUser.email);
console.log(jsUser["email"]); // yeah option se check kariye
console.log( typeof jsUser[mysym]);

jsUser.email = "prince555@gmail.com" // for changing the value
console.log(jsUser["email"]);

console.log(jsUser);
// Object.freeze(jsUser) //ab object change nh hogaa by using freeze


jsUser.greeting = function(){
    console.log("Hello JS user");
}
jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
 