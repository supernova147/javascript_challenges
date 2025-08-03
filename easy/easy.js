/*
Javascript Challenges 
EASY 
A local gym wants to implement an "exercise of the day" program where there is a free class for that day that promotes 
a certain exercise. The gym needs some backend logic to update its system to reflect which exercise will be promoted 
that day. Write a function that will take as an input the name of an exercise and console log a message like Today's 
exercise: running 
*/

// Takes input of the name of the exercise 
// & consoles logs a message like: "Today's exercise: running"
const exerciseOfTheDay = () => {
    let exercise = '';
    return function() {
        exercise = 'Swimming';
        console.log(`Today's exercise: ${exercise}`);
    }
}

const exercise_announce = exerciseOfTheDay();
exercise_announce();

//closure notes:
/* 


*/
// const secureBooking = function() {
//     let passengerCount = 0;

//     return function() {
//         passengerCount++;
//         console.log('${passengerCount} passengers');
//     }
// } // call stack - order in which functions were called

// const booker =secureBooking();
