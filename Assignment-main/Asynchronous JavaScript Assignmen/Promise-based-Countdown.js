function countdown(number) {
    return new Promise((resolve) => {
      const intervalId = setInterval(() => {
        console.log(number);
        number--;
        if (number < 0) {
          clearInterval(intervalId);
          resolve();
        }
      }, 1000);
    });
  }
  
  // Example:
  countdown(5).then(() => console.log("Countdown completed!"));  