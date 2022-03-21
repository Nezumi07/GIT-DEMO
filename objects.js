// const person = {

//     name:"Simon",
//     age:32

// }

// console.log(person.age);

// let day = {

//     weekendAlarm: "No alarm needed"
//     weekdayAlarm: "Get up at 7am"
// }

//alarm task ---------------------------

let day = "Monday";

const alarmClock = {
    weekendAlarm: "No alarm needed",
    weekdayAlarm: "Get up at 7am"
};

if (day == "Saturday" || day == "Sunday"){
    alarm = alarmClock.weekendAlarm;
    console.log(`Hello Myles: ${alarm}`)
} else {
    alarm = alarmClock.weekdayAlarm;
    console.log(`Hello Myles: ${alarm}`)
}

// activity 1 -------------------------------------------

// A function called sayHi and when it’s called, it should return “Hello my name is ${this.name}”



const person = {

    name:"Simon",
    age:32,
    favSongs: ["Paranoid Android", "Gravity Song","Sweetness","Chop Suey"],
    sayHi() {
        if(this.name){
        return `Hello my name is ${this.name}`;
    }
    

}
}

console.log(person.sayHi())

// activity 2 -------------------------------------------

// Create an object called pet with the key values of: name, typeOfPet, age, colour
// And methods called eat and drink. They should return a string saying [Your Pet Name] is eating/drinking.

const pet = {

    name:"Yoshi",
    typeOfPet: "Cat",
    age: 5,
    colour: "orange",

    eatDrink() {
        if(this.name){
        return `${this.name} is eating/drinking `;}
    }
}

console.log(pet.eatDrink())

// activity 3 -------------------------------------------

// Create an object called coffeeShop with key values of: branch, drinks with prices, food with prices
// And methods called drinksOrdered and foodOrdered.
// They should return a string saying [Your order] is ... with all items chosen with costs and total costs.


const coffeeShop= {

    branch: "Starducks",
    foodOne: "Chips £5",
    foodTwo: "Spaghetti £6",
    foodThree: "Pizza £7",

    drinkOne: "Coke £2",
    drinkTwo: "Sprite £3",
    drinkThree: "Fanta £4",

    foodOrdered() {
        if(this.foodOne){
        return `Tasty ${this.foodOne}`;}
    }

    // drinksOrdered() {
    //     if(this.drinkOne, this.drinkTwo){
    //     return `Quenching ${this.drinkOne} ${this.drinkTwo}`;}
    // }


    
}


console.log(coffeeShop.foodOrdered())

