function addNumbers(a, b, callback) {
    const sum = a + b;
    callback(sum);
}

addNumbers(5, 10, (result) => {
    console.log("The sum is:", result);
});
