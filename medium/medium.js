/*
Javascript Challenges 
MEDIUM 

Write a function that will allow you to calculate how many slices of pizza x each person y would get if they shared 
evenly. The function should return an interpolated string like Each person gets 4.00 slices of pizza; from our 8-slice 
pizza x being a decimal in case there is no way to split the pizza evenly.
*/

// calculates slices of pizza (x) each person (y) would get if they shared evenly (/2 or %)
// output should return with .00 double decimal.

const pizzapizza = (pizzaSlice, pizzaShare) => {
    let pizzaShareCal = pizzaSlice / pizzaShare;
    let pizzaShareAns = pizzaShareCal.toFixed(2);
    return function() {
        console.log(`Each person gets ${pizzaShareAns} slices of pizza; from our ${pizzaSlice}`);
    }
}

const pizzaCal = pizzapizza(10, 8);
pizzaCal();