/*
Javascript Challenges 
VERY HARD 

Create a Person constructor that has three properties: name, job, and age.
Give the Person an 'exercise' method that console logs whatever you want, e.g. "Running is fun! - said no one ever".
Give the Person a 'fetchJob' method that console logs the person's name and job, e.g. "Brad is a back-end developer".
*/


const Person = function (name, job, age) { //function or constructor function which creates a person.
    this.name = name; //taking the parameters & creating properties matching their value(s)
    this.job = job;
    this.age = age;
};

const person1 = new Person('Bob', 'builder', 30); //calls the person function & creates the object
console.log(person1); //testing, the object, person1 is called & console logs everything in the person1 const (name, job, age)

//creating methods below in order to use them later on for each person. 
Person.prototype.exercise = function () { //exercise method; console logs message
        console.log("Exercise is great! It helps you stay fit and strong!");
}
Person.prototype.fetchjob = function () { //fetchjob method, gets the job of the person & name.
        console.log(this.name + ' is a ' + this.job);
}

person1.fetchjob(); //calls the fetchjob method

// const programmer = function () { --- Note to self: Continue working on the rest of the code.

// }
