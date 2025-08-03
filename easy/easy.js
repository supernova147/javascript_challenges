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
const exerciseOfTheDay = () => { //Parent function 'exerciseOfTheDay'
    let exercise = ''; //var declared for string value for exercise
    return function() { //child function which returns the chosen var & console log.
        exercise = 'Swimming'; //chosen exercise is swimming
        console.log(`Today's exercise: ${exercise}`); //outputs to the console the chosen exercise
    }
}

const exercise_announce = exerciseOfTheDay(); //constant exercise_announce is made to "call" the closure
exercise_announce(); //closure is ran

