/** PART A **/




//Add the values you want to convert here.
let cConverter = 5;
let fConverter = 78;

let convertedFahrenheit = (cConverter * 9/5) + 32;
let convertedCelsius = (fConverter - 32) * 5 / 9;


console.log(`You're Input Celsius ${cConverter}°C is ${convertedFahrenheit.toFixed(1)}°F`)
console.log(`You're Input Fahrenheit ${fConverter}°F is ${convertedCelsius.toFixed(1)}°C`)


/** PART B **/


//Weight is lbs' and height is inches;
let johnWeight = 115;
let johnHeight = 60;

let tonyWeight = 140;
let tonyHeight = 67;

let johnnyHigher = true;

let johnBMI = (johnWeight / (johnHeight ** 2) * 703).toFixed(1);
let tonyBMI = (tonyWeight / (tonyHeight ** 2) * 703).toFixed(1);


if(johnBMI > tonyBMI) {
    johnnyHigher = true;
} else {
    johnnyHigher = false;
}

console.log(`John's BMI ${johnBMI} is higher than Tony's BMI ${tonyBMI}, that is ${johnnyHigher}`)


/** PART C **/



let userInput = prompt("Can you enter any number for me?");


userInput = parseInt(userInput);

if(typeof userInput !== 'number') {
    console.log("Please enter a number into console bro.")
} else if (userInput === 10) {
    console.log("You win 10 points!")
} else if (userInput === 8) {
    console.log("You win 8 points!")
} else {
    console.log("NOT MATCHED!")
}

