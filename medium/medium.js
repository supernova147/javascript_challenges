/*
Javascript Challenges 
MEDIUM 

Write a function that will allow you to calculate how many slices of pizza x each person y would get if they shared 
evenly. The function should return an interpolated string like Each person gets 4.00 slices of pizza; from our 8-slice 
pizza x being a decimal in case there is no way to split the pizza evenly.
*/

// calculates slices of pizza (x) each person (y) would get if they shared evenly (/2 or %)
// output should return with .00 double decimal.

const pizzapizza = (pizzaSlice, pizzaShare) => { //parent function is made, pizzaSlice & pizzaShare vars are also declared (however contain no value)
    let pizzaShareCal = pizzaSlice / pizzaShare; //declaring a value to mathematically calculate how much pizza is shared amongst a group of people
    let pizzaShareAns = pizzaShareCal.toFixed(2); //the answer is then ran through another var (pizzaShareAns) & using a tofixed() method to include two decimal points in the final answer.
    return function() { //child function which returns the console log.
        console.log(`Each person gets ${pizzaShareAns} slices of pizza; from our ${pizzaSlice}`);
    } //above the consolelog contains the calculated share of each slice & how many pizza slices there were in total.
}

const pizzaCal = pizzapizza(12, 7); //constant pizzaCal is made to "call" the closure; also includes the amount of pizza slices & how many people it will be shared across.
pizzaCal(); //closure is called