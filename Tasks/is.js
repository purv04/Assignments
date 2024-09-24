function checkNumber() {
    
    const input = ("10");
    
    
    const number = Number(input);
    
    
    if (isNaN(number)) {
        console.log("Please enter a valid number.");
        return;
    }

    
    if (number > 0) {
        console.log("Positive");
    } else if (number < 0) {
        console.log("Negative");
    } else {
        console.log("Zero");
    }
}


checkNumber();