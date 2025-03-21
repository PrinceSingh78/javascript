const user={
    username : "prince",
    price : 667,

   welcomeMessage: function(){
        console.log(`${this.username},welcome to website`);
        // welcomeMessage(user)
        console.log(this); // this describe the current context in the value...
        
   } 
}

// user.welcomeMessage()
// user.username = "dhoni"
// user.welcomeMessage()
//  console.log(this);

// function jijaji(){
//     let username = "sam"
//     console.log(this.username);
    
// }

// jijaji()


// **************** Arrow function ***************** 

const jijaji = () => {
    let name = "sam"
    console.log(this.name);
} 

jijaji()

const add = (x,y) => {   // curly braces use kiya toh return keyword use karna paregaa 
     return x + y
}

console.log( add(5,6));

//********Implicity return******//
const addtwo = (x,y) => ( x + y ) // parentesis use kiya toh nh likhna parge
console.log(addtwo(5,6));

const ad = (x,y) => ({username:"Prince"})

console.log(ad());

const myArray = [4,3,5,6,]
// myArray.forEach()
