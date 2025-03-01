// factorial(1) = 1
// factorial(2) = 2
// factorial(3) = 6
// factorial(4) = 24
// Total = 1 + 2 + 6 + 24 = 33


function factorial(n){
    if(n===0 || n===1){
        return 1;
    }
    let fact=1;
    for(let i=1;i<=n;i++){
        fact*=i       
    }
    return fact;
}
function sum_of_fact(n){
    sum=0;
    for(let i=1;i<=n;i++){
        sum+=factorial(i);
    }
    console.log(sum);
}
sum_of_fact(4)