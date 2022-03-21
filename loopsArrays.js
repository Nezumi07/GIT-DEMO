// let  coffeeOrder = [
//     "Alex -Cortado",
//     "Ben- Cortado",
//     "Charlie - Whatever's new"
// ];

// console.log(coffeeOrder);
// console.log(coffeeOrder[2]);

// 0 is the first item

// coffeeOrder[1] = "Simon - Earl Grey Tea";
// console.log(coffeeOrder);

// console.log(coffeeOrder.length);

// .length adds number of orders

// coffeeOrder.push("Simon - Yorkshire tea");
// console.log(coffeeOrder);

// adds order using push

// coffeeOrder.pop();
// console.log(coffeeOrder);

//pop removes last item

// let topSongs = [
//     "Radiohead, paranoid android",
//     "Jimmy Eat world, Sweetness",
//     "Persona 5 OST, Layercake"
// ]

// console.log(topSongs)

// topSongs.push("Rush, YYZ");
// topSongs.push("Daft Punk, Something about us")
// console.log(topSongs)

// topSongs.pop();
// console.log(topSongs)

// let myCats = ['Vader', 'Boss', 'Yoshi', 'Kirby']
// let removed = myCats.splice(2, 0, 'Monji', 'Hyuji')

// console.log(myCats)

//check research to understand better mdn

//loops

// let favDrinks = 
// ["Water",
//  "7up",
//  "Tea",
//  "Coffee"   

// ];

// for (let i = 0; i < favDrinks.length; i++){


// gets certain multiple number in the order    
// console.log(favDrinks[i]);
// }

// let multiplesTwo = [];

// for (let i = 0; i <= 20; i++){
//   if (i % 2 == 0){
//     multiplesTwo.push(i);
//   }
// };

// console.log(`Numbers divisible by 2 between 0 & 20 are: ${multiplesTwo}`);

//while loops, do something

// let age = 15;

// while (age < 18){
//     console.log("You are a child");

//     age ++
// }

// console.log("You are an adult!")

// RNG card game

// let cards = ["Diamond", "Spade", "Heart", "Club" ];
// let currentCard = "Club";

// while (currentCard != "Spade"){

//   console.log(currentCard);
//   currentCard = cards[Math.floor(Math.random()*4)]
// }



// console.log(currentCard);

//activity 1 -------------------------------

let favFilms = [
  "Amelie",
  "Bladerunner",
  "City of lost children",
  "Royal tenenbaums",
  "Dune"
];

favFilms.push("Wall E", "Rushmore")

favFilms.pop();

for (let i = 0; i < favFilms.length; i++){

console.log(favFilms[i]);
}



//activity 2 ----------------------------------


// Genereates a number between 0 to 1;
Math.random();


let rngSix = 0;

for (i = 0; i < 6; i++){
rngSix = Math.floor(Math.random() * 50) + 1; 
console.log(rngSix);
}



// activity 3 ----------------------------------
//If we can create a loop to put 0-9 on the screen, how can we count from 9-0?


let numbers = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9
];

console.log(numbers.reverse())

// Activity 3
for (let i = 9; i>=0; i--){
console.log(i)
}

// Displays 4 films stored in an array. Use a for loop to show each film in the array. 
// Use an if statement to check if the 3rd film in the array is Ghostbusters.If it is, 
// return “Yay it’s Ghostbusters”. If it isn’t return “Boo! we want Ghostbusters!

//activity 4 ----------------------------------

let films = [
  "Ponyo",
  "Ghostbusters",
  "Ghost in the Shell",
  "Spirited Away"
];

for (let i = 0; i < films.length; i++){
  if (films[1] == "Ghostbusters"){
    console.log("Yay, it's ghostbusters!");
    break
  } else {
    console.log("Boo! We want ghostbusters!")
    break
  }
}

//activity 5 ----------------------------------

// Generate a random number between 1 and 30 six times.
// For each random number generated, check if this number of divisible by 7 or not.
// Log out a message to the console if it is divisible by 7 or not.

let num = Math.floor(Math.random()*30);
for (let i = 0 ; i < 6 ; i++){
  console.log(num)

  if (num % 7 == 0){
    console.log(`${num} is divisible by 7`)
  }
  num = Math.floor(Math.random()*30);
}

//activity 6 ----------------------------------

//Imagine you’re a programmer for a social media platform! You have been tasked with building a prototype for a mutual followers program
//> Create 2 arrays of followers e.g. bobsFollowers & hannahsFollowers. In these arrays place 4 names as strings. Make sure there are 2 names that are in BOTH arrays.
//> Using a nested loop iterate over both arrays and console.log out the matching follower.


