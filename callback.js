function AfterOneSecond(callback) {
  console.log("Waiting for 1 second");

  setTimeout(() => {
    callback();
  }, 1000);
}

AfterOneSecond(() => {
  console.log("This message is shown after one second");
});
