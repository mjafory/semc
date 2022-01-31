/** PART A: Class Activity **/

const nets = [80, 82, 100];
const knicks = [80, 90, 106];

const netsGame2 = [98, 110, 101];
const knicksGame2 = [108, 92, 110];

const netsGame3 = [80, 90, 100];
const knicksGame3 = [100, 110, 105];

function whoIsAWinner(team1, team2) {
    let sumNets = 0;
    let sumKnicks = 0;

    for (let score1 of team1) {
        sumNets += score1;
    }


    for (let score2 of team2) {
        sumKnicks += score2;
    }

    let avgNets = sumNets/nets.length;
    let avgKnicks = sumKnicks/knicks.length;

    if(avgNets >= 100 && avgNets >= 100) {
        console.log("The team have a draw")
    } else if(avgKnicks > avgNets && avgKnicks >= 100) {
        console.log("Knicks Win!");
    } else if (avgNets > avgKnicks && avgNets >= 100) {
        console.log("Nets Win!");
    } else {
        console.log("Neither team wins the trophy")
    }
}


whoIsAWinner(nets, knicks);
whoIsAWinner(netsGame2, knicksGame2);
whoIsAWinner(netsGame3, knicksGame3);


/** Part B: Create a tip calculator function for whoever goes eating in a restaurant **/

function calculateTip(num1) {
    return(num1 < 30 || num1 > 100 ? (num1 * .15) : (num1 * .20))
}

console.log(`The was bill 275, the tip was ${calculateTip(275)} and the total value was ${275 + calculateTip(275)}`);
console.log(`The was bill 26, the tip was ${calculateTip(26)} and the total value was ${26 + calculateTip(26)}`);
console.log(`The was bill 90, the tip was ${calculateTip(90)} and the total value was ${90 + calculateTip(90)}`);

/** Part C: Create 2 functions (Arrow Function Only) to convert temperature **/

let cConverter = 0;
let cConverter1 = 100;
let cConverter2 = 10;

let fConverter = 32;
let fConverter1 = 10;
let fConverter2 = 102;

const ConvertCelsiusToFahrenheit = (temp) => {
     let converted = (temp * 9/5) + 32;
     console.log(`You're Input Celsius ${temp}°C is ${converted.toFixed(1)}°F`)
}

const ConvertFahrenheitToCelsius = (temp) => {
    let converted = (temp - 32) * 5 / 9;
    console.log(`You're Input Fahrenheit ${temp}°F is ${converted.toFixed(1)}°C`)
}

ConvertCelsiusToFahrenheit(cConverter);
ConvertCelsiusToFahrenheit(cConverter1);
ConvertCelsiusToFahrenheit(cConverter2);

ConvertFahrenheitToCelsius(fConverter);
ConvertFahrenheitToCelsius(fConverter1);
ConvertFahrenheitToCelsius(fConverter2);
