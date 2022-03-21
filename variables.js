// let firstName = "Simon";
// const secondName = "Lee";
// let age = "32";

// console.log(firstName);

// let i = 10;
// console.log(i)
// i = i+2;
// console.log(i)
// i+=2;
// console.log(i)

// let favouriteDrink = "Boba tea";
// console.log(favouriteDrink);

// console.log ("My favourite drink is " + favouriteDrink + ".");

// console.log ("Hi, my name is " +firstName + " I am" );

// age = 49;
// favouriteDrink = "7up";

// console.log(`Hi my name is ${firstName}. I am ${age} and my favourite drink is ${favouriteDrink}. `);

// activity 1 ------------------------------------------        

const firstName = "Simon";
let age = 32;
let favColour = "Turquoise";

age = 49;
favColour = "Magenta";

console.log (`Hi My name is ${firstName}, I am ${age} and my favourite colour is ${favColour}`);

//activity 2 ------------------------------------------

let breakFast = "Cereal";
let lunch = "Katsu Curry with rice";
let dinner = "Ramen with egg and beef";

console.log(`Tomorrow I will eat ${breakFast}, ${lunch} and ${dinner}!`);

// activity 3 ------------------------------------------

const birthday = new Date("04/02/2022");
const today = Date.now();
const timeSpan = birthday.getTime() - today;
const timeDifference = timeSpan / (1000*60*60*24);

console.log(Math.floor(timeDifference))

//activity 4 ------------------------------------------

let space1 = "   "
let space2 = " x "
let space3 = " o "
let space4 = " x | o |   "
let space5 = " x | x |   "
let space6 = " o |   |   "
let space7 = "   |   |   "
let space8 = "- - - - - -"
let space9 = "|"

console.log(`${space7}`)
console.log(`${space4}`)
console.log(`${space1}${space9}${space1}${space9}`)
console.log(`${space8}`)
console.log(`${space7}`)
console.log(`${space5}`)
console.log(`${space1}${space9}${space1}${space9}`)
console.log(`${space8}`)
console.log(`${space7}`)
console.log(`${space6}`)
console.log(`${space1}${space9}${space1}${space9}`)


