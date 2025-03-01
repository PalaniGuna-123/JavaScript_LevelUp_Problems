function findSpecialNumbers(m, n) {
    for (let num = m; num <= n; num++) {
        let digit1 = Math.floor(num / 10); // First digit
        let digit2 = num % 10; // Second digit
        let sum = digit1 + digit2;
        let product = digit1 * digit2;
        if (sum + product === num) {
            console.log(num);
        }
    }
}

// Example
findSpecialNumbers(11, 19);
// Output: 19