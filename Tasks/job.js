const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function checkLoanEligibility() {
    rl.question("Enter your job type (government/business/private): ", (jobInput) => {
        const job = jobInput.toLowerCase();

        if (job === 'government') {
            rl.question("Enter your salary: ", (salaryInput) => {
                const salary = parseFloat(salaryInput);

                if (salary > 50000) {
                    console.log("You can apply for a loan.");
                } else {
                    console.log("You cannot apply for a loan.");
                }
                rl.close();
            });
        } else if (job === 'business') {
            rl.question("Enter your yearly turnover (in lakhs): ", (turnoverInput) => {
                const turnover = parseFloat(turnoverInput);

                if (turnover > 20) {
                    console.log("You can apply for a loan.");
                } else {
                    console.log("You cannot apply for a loan.");
                }
                rl.close();
            });
        } else if (job === 'private') {
            console.log("No loan available for you.");
            rl.close();
        } else {
            console.log("Invalid job type. Please enter 'government', 'business', or 'private'.");
            rl.close();
        }
    });
}


checkLoanEligibility();