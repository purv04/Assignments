function checkNumber(num) {
    if (num > 0) {
      console.log('Positive');
    } else if (num < 0) {
      console.log('Negative');
    } else {
      console.log('Zero');
    }
  }
  
  // Example
  checkNumber(5);   // Output: Positive
  checkNumber(-3);  // Output: Negative
  checkNumber(0);   // Output: Zero
  