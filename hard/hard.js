/*
Javascript Challenges 
HARD

The object should have at least two properties: name and SSN. 
Only the name property should be accessible, and it should be called through a public function.
The SSN property should not be accessible at all.
You can use 'getName' or other get methods to access data that people might need

*/

//
//


const information = () => { //parent function
    const PII = { //object named PII that contains name & SSN.
        name: "bob",
        SSN: "123-456-7890",
    }
    return function () {
        return PII.name; //required to return the private 'name' from the PII object.
    }
}

const accessinfo = information(); // constant accessinfo is made to 'call' the closure
console.log(accessinfo()); //console logging the output of the function, which returns the name.