function factorial(num) {
    if (num <0) return "Factorial not defined for negative numbers";
    if (num === 0 || num === 1) return 1;
    
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}

module.exports = factorial;