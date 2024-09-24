function sumArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    console.log('Sum of the array:', sum);
  }
  
  // Example
  const numbersArray = [1, 2, 3, 4, 5];
  sumArray(numbersArray); // Output: Sum of the array: 15
  