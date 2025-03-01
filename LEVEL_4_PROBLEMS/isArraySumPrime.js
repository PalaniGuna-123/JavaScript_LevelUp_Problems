function isArraySumPrime(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i]
    }
    if(isPrime(sum)){
        console.log("yes");
        
    }
    else{
        console.log("No");
        
    }
}
function isPrime(num){
    if(num<=1) return false;
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num % i ===0){
            return false;
        }
    }
    return true;
}
isArraySumPrime([2,5])
isArraySumPrime([2,5,1])