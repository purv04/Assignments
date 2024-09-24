function delayedMessage(message, delay) {
    setTimeout(() => {
      console.log(message);
    }, delay);
  }
  
  // Example:
  delayedMessage("Hello, after 2 seconds!", 2000);