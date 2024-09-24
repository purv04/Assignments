const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter a number: ', (userInput) => {
    const number = Number(userInput);

    if (isNaN(number)) {
        console.log("Invalid input. Please enter a valid number.");
    } else {
        if (number % 2 === 0) {
            console.log("Number is even");
        } else {
            console.log("Number is odd");
        }
    }

    rl.close();
});