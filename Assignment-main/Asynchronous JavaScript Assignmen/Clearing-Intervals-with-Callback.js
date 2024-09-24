function countdown(number, callback) {
    const intervalId = setInterval(() => {
      console.log(number);
      number--;
      if (number < 0) {
        clearInterval(intervalId);
        if (callback) callback();
      }
    }, 1000);
  }
  
  // Example:
  countdown(5, () => console.log("Countdown finished!"));
  