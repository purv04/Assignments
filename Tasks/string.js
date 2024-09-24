function getFullName() {
    const firstName = "Vaishali:";
    const lastName = "Rajpurohit:";

    // Use backticks for template literals
    const fullName = `${firstName} ${lastName}`.trim(); 

    if (fullName) {
        console.log("Full Name: " + fullName);
    } else {
        console.log("No name entered.");
    }
}

getFullName();
