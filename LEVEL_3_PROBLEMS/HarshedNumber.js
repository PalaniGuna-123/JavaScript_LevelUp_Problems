// Example usage
// console.log(isHarshad(18)); // true
// console.log(isHarshad(13)); // false

// Write a program to check if a number is a "Harshad number." A Harshad number (or Given number) is an integer that is divisible by the sum of its digits. Given an integer n, print "Harshad" if it’s a Harshad number; otherwise, print "Not Harshad."

// Input: n = 18
// Expected Output: "Harshad"
// Explanation: The sum of the digits is 1+8=9, and 18mod  9=0, so 18 is a Harshad number.

// Input: n = 13
// Expected Output: "Not Harshad"
// Explanation: The sum of the digits is 1+3=4 and 13mod  4≠0 so 13 is not a Harshad number.
function isHarshad(num) {
    let sum = 0;
    let temp = num;
    while (temp > 0) {
        sum += temp % 10;
        temp = Math.floor(temp / 10);
    }
    return num % sum === 0;
}

// Example usage
console.log(isHarshad(18)); // true
console.log(isHarshad(13)); // false