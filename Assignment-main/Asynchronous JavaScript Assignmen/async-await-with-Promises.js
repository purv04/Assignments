// Definition of the wait function
function wait(delay) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, delay);
    });
  }
  
  // Async function using the wait function
  async function delayedLogSequence(messages) {
    for (let [message, delay] of messages) {
      await wait(delay);
      console.log(message);
    }
  }
  
  // Example usage
  delayedLogSequence([["First message", 1000], ["Second message", 2000], ["Third message", 1500]]);  