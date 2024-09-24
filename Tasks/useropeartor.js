const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculate() {
    rl.question("Enter the first number: ", (firstInput) => {
        const number1 = parseFloat(firstInput);
        
        rl.question("Enter the second number: ", (secondInput) => {
            const number2 = parseFloat(secondInput);
            
            rl.question("Enter the operator (+, -, *, /): ", (operator) => {
                let result;

                if (isNaN(number1) || isNaN(number2)) {
                    console.log("Invalid input. Please enter valid numbers.");
                } else {
                    switch (operator) {
                        case '+':
                            result = number1 + number2;
                            console.log(`${number1} + ${number2} = ${result}`); // Corrected with backticks
                            break;
                        case '-':
                            result = number1 - number2;
                            console.log(`${number1} - ${number2} = ${result}`); // Corrected with backticks
                            break;
                        case '*':
                            result = number1 * number2;
                            console.log(`${number1} * ${number2} = ${result}`); // Corrected with backticks
                            break;
                        case '/':
                            if (number2 !== 0) {
                                result = number1 / number2;
                                console.log(`${number1} / ${number2} = ${result}`); // Corrected with backticks
                            } else {
                                console.log("Invalid input. Division by zero is not allowed.");
                            }
                            break;
                        default:
                            console.log("Invalid input. Please enter a valid operator (+, -, *, /).");
                    }
                }

                rl.close(); 
            });
        });
    });
}

calculate();
