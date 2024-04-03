const { createHash } = require('crypto');

const Input = document.getElementById("hashInput");
const inputValue = Input.value;

// Create a string hash
function hash(input) {
    input = inputValue;

    if (input === input) {
        console.log("working");
    }
    
    return createHash('sha256').update(input).digest('hex');
}


