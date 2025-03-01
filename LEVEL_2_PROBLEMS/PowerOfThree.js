function isPowerOfThree(num) {
    while (num > 1) {
        if (num % 3 !== 0) return false;
        num = num / 3;
    }
    return num === 1;
}
console.log(isPowerOfThree(81)); 
console.log(isPowerOfThree(25));

function isPower(num){
    while(num>1){
        if(num%3!==0){
        return false;
        }
        num=num/3;
    }
    return num===1;
}
console.log(isPower(81));

