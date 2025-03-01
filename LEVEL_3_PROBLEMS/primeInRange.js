// function isPrime(num){
//     if(num <=1) return false;

//     for(let i=2; i<=Math.sqrt(num);i++){
//         if(num % i===0) return false;

//     }
//     return true;
// }
// function range(a,b){
//     let primes=[];
//     for(i=a;i<=b;i++){
//         if(isPrime(i)){
//             primes.push(i);
//         }
//     }
    
//     let output=primes.length > 0 ? primes.join(", ") : "NO primes this range"
//     console.log(output);
// }
// range (8,10);
// range (10,30)
function isPrime(num){
    if(num<=1) return false;
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num % i===0){
            return false;
        }
    }
    return true;
}
function range(a,b){
    let primes=[]
    for(i=a;i<=b;i++){
        if(isPrime(i)){
            primes.push(i);
        }
    }
    let output =primes.length>0 ? primes.join(", ") : "No primes this range"
    console.log(output);
    
}
range (8,10);
range (10,30)


