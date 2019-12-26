let myFirstPromise = new Promise((resolve,reject) => {
  setTimeout(function() {
    resolve("SUCCESS!");
  }, 250);
});

myFirstPromise.then((successMessage) => {
  console.log("YAY!" + successMessage);
});



