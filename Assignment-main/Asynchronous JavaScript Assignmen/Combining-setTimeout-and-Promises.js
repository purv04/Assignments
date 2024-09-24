// Define the wait function
function wait(delay) {
    return new Promise((resolve) => {
      setTimeout(resolve, delay);
    });
  }
  
  // Function that logs the message after a random delay
  function randomDelayMessage(message) {
    const randomDelay = Math.floor(Math.random() * 5000) + 1000; // Random delay between 1 and 5 seconds
    return wait(randomDelay).then(() => console.log(message));
  }
  
  // Example:
  randomDelayMessage("This message is delayed by a random time between 1 and 5 seconds.");  