function getDayType(dayNumber) {
    switch (dayNumber) {
        case 6: 
        case 7: 
            return "Weekend";
        case 1: 
        case 2: 
        case 3: 
        case 4: 
        case 5: 
            return "Weekday";
        default:
            return "Invalid input"; 
    }
}
console.log(getDayType(6)); 
console.log(getDayType(7)); 
console.log(getDayType(3)); 
console.log(getDayType(1)); 
console.log(getDayType(8));