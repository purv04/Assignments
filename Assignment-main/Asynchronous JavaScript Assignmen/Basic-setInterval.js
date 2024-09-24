function countdown(number) {
    const intervalId = setInterval(() => {
      console.log(number);
      number--;
      if (number < 0) {
        clearInterval(intervalId);
      }
    }, 1000);
  }
  
  // Example:
  countdown(5); // Logs 5, 4, 3, 2, 1, 0 every second and stops.
  