function sayMyName (){
    console.log("Prince");
}

sayMyName() // call function...
sayMyName // reference...

function  addTwoNumbers(x,y){  //parameters
    // const x = 2;
    // const y = 3;
    console.log(x+y);
    
    
}

addTwoNumbers(3,5) // argument


function loginUserMessage(username = "prince"){

    if(!username){
        console.log("Please enter a username");
        return
    }
    
    return `${username} just loggedin`


    
}

const user = loginUserMessage()
console.log(user);


function calculateCartPrice(...num1){ // spread operator or rest operator 
    return num1
}

console.log(calculateCartPrice(200,400,600,55));





