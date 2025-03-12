const name = "Prince"
const surName = "Singh"
// console.log(name + " " +surName);

console.log(`Hello my name is ${name} ${surName}`); // Use backticks to write the string in a modern way

const superHero = new String('Ms Dhoni')//remember it can also save the empty string
console.log(superHero [0]);
console.log(superHero.__proto__);
console.log(superHero.length);

console.log(superHero.toUpperCase());
console.log(superHero.charAt(4));
console.log(superHero.indexOf('D'));


const newString = superHero.substring(0, 4)//do subcortinate of the string
console.log(newString);

const anotherString = superHero.slice(-8, 4)//do the slicing of the string
console.log(anotherString);

const newStringOne = "   Prince   "
console.log(newStringOne);
console.log(newStringOne.trim());// it is used to trim the string use mdn to do more research on it...

const url = "https://prince.com/prince%20singh"

console.log(url.replace('prince' , 'vikram'))

console.log(url.includes('sundar'))

console.log(superHero.split('-'));
