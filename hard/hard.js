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


const information = () => {
    const PII = {
        name: "bob",
        SSN: "123-456-7890",
    }
    return function getName() {
        return PII.name;
    }
}

console.log(PII.name);