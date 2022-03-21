// const  cashWithdrawal = (amount,accnum) => {
//     console.log(`Withdrawings ${amount} from account ${accnum}`);
// }


// cashWithdrawal (300,123456);
// cashWithdrawal (1000,654321);
// cashWithdrawal(125,3712931233);

// --------------------------------------------------------------------


// const addUp = (num1, num2) => {
//     return num1 + num2;
// }

// console.log(addUp(7,3));


// --------------------------------------------------------------------

//activity 1 Take code and turn into arrow function syntax

const factorial = (n) => {
    if((n === 0) || (n === 1)) {
        return 1;
    } else {
        return (n * factorial(n-1));
    }
}

console.log(factorial(33));

// --------------------------------------------------------------------

//activity 2 Edit the below snippet to include two parameters and a running order count updated when the function is called:

let orderCount = 0;

const takeOrder = (topping, drink) => {
    console.log(`Pizza with ${topping} and ${drink}`);
    orderCount++;
    console.log(orderCount)

}

takeOrder ("pineapple", "coke");
takeOrder ("pepperoni", "7up");


//activity 3 > Dispenses cash if your pin number is correct and your balance is equal to, or more than, the amount you’re trying to withdraw!


let pinNum = 4321;
let cashOut = 1000;
let cashAmount = 1000;


const pinEntry = () => {
    if (pinNum == 4321) {
        console.log("PIN is correct, Welcome!");
        takeCash();
    } else { 
        console.log("INCORRECT PIN, Go Away!");
    }
}    

const takeCash = () => {
    if (cashAmount < cashOut){    
    console.log("Not enough cash!!");
    
    } else if (cashAmount >= cashOut) {
        console.log(`Enjoy the £${cashOut}`)
    }
}

pinEntry();