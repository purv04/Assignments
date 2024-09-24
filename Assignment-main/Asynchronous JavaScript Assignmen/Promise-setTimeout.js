function wait(delay) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, delay);
    });
  }
  
  // Example:
  wait(3000).then(() => console.log("Resolved after 3 seconds"));
