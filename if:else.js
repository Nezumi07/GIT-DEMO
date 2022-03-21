// let place = "Stockport";
// let weather = "Sunny";

// if (place == "Manc" || weather == "Sunny"){
//     console.log("Check again");

// }

// else if (place == "Manc" && weather == "Rain"){
//     console.log("Obviously!");

// }

// else {
//     console.log ("What it's not raining?!")
// }

//activity 1 --------------------------------

let age = 18;
let country = "mozambique";

if (age >=18 && country == "UK"){
    console.log("Join us for a pint!");
}

else {
    console.log ("Get out of here!");
}

// activity 2 --------------------------------

let pizzaTopping = "Mozzarella";

switch (pizzaTopping){

    case "Beef":
    case "Mozzarella":
    case "Pepperoni":
    case "Bacon":
        console.log("Scrantastic");
        break;
    case "Sweetcorn":
    case "Ham":
    case "Peppers":
    case "Mushrooms":
        console.log("Don't mind that mate");
        break;
    default:
        console.log ("Get that out my face!");
}


// activity 3 --------------------------------

let password = "urghh";
let length = password.length;

if (length >= 8){
    console.log("Password accepted!");
}

else {
    console.log ("Password is too short!");
}


// activity 4 --------------------------------

let numm = 7

if (numm % 5 == 0 || numm % 3 == 0){
    console.log("Number is divisible by 3 or 5")
}
else {
    console.log("This doesn't divide into 3 or 5")
}

//activity 5 --------------------------------

let num = 60;

if (num % 15 == 0) {
    console.log("FIZZBUZZ")
}
else if (num % 5 == 0){
    console.log("FIZZ")
}
else if (num % 3 == 0){
    console.log("BUZZ")
}
else {
    console.log("Buzz off!!")
}

//activity 6 --------------------------------

let nummm = 52125
let checkstart = String(nummm)[0]
let checkend = String(nummm).slice(-1)


if (checkstart == checkend){
    console.log("Palindrome baby!")
}    

else {
    console.log("Not a palindrome")
}    

//activity 7 --------------------------------

let time = 11
let placeOfWork = "Codenation"
let townOfHome = "Stockport" 

if (time == 9, 10, 11){
    console.log(`Studying and coding at ${placeOfWork}`)
}
else if (time == 8){
    console.log(`Heading into work at ${placeOfWork}`)
}
else if (time == 1, 2, 3, 4, 5, 6, 7) {
    console.log(`Snoozing away at ${townOfHome}`)
}
else {
    console.log("Probably playing Elden Ring")
}

//activity 8 --------------------------------

