function gcd(A,B){
    while(B!==0){
        let temp=B
        B=A%B
        A=temp;
    }
    return A;
}
function lcm(A,B){
    return((A*B)/gcd(A,B));
}
console.log(lcm(5,7));
console.log(lcm(12,18));
console.log(lcm(5,10));
// lcm(12,18);
// lcm(5,7);