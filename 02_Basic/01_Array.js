//**************ARRAY****************** *//

const arr =[2,4,56,77]
console.log(arr[2])

const favCricketer = ["Msdhoni" , "Ruturaj" , "Jadeja"]

const arr2 = new Array( 3, 4 , 6 ,7 ) // 0 index => 3 , 1 index=> 4 , 2 index =>4
console.log(arr2[1])

// Array methods

arr2.push(6) // insert an element at the end
arr2.push(8)
arr2.pop() // Delete an element at the end

arr2.unshift(0) // insert an element from the start
arr2.shift() // Delete an element from the start
console.log(arr2);
console.log(arr2.includes(3)); // it returns the boolean answer if the element is 
console.log(arr2.includes(8)); // present in array the o/p is true or if not present then false
console.log();

console.log(arr2.indexOf(3));

const newArr = arr2.join()

console.log(arr2);
console.log( newArr);


// slice, splice

console.log("A ", arr2);

const myn1 = arr2.slice(1, 3)

console.log(myn1);
console.log("B ", arr2);


const myn2 = arr2.splice(1, 2)
console.log("C ", arr2);
console.log(myn2);

