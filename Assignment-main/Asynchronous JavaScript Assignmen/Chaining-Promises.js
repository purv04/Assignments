// Define the wait function
function wait(delay) {
    return new Promise((resolve) => {
      setTimeout(resolve, delay);
    });
  }
  
  // Chaining Promises function
  function delayedLogSequence(messages) {
    let promise = Promise.resolve();
  
    messages.forEach(([message, delay]) => {
      promise = promise.then(() => wait(delay).then(() => console.log(message)));
    });
  
    return promise;
  }
  
  // Example usage
  delayedLogSequence([["First message", 1000], ["Second message", 2000], ["Third message", 1500]]);  