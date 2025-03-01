function gcd(a,b){
    while(b!==0){
        let temp=b
        b=a%b
        a=temp
    }
    return a;
}
function lcm(a,b,c){
    let result=gcd(a,b)
    return gcd(result,c)
}
console.log(lcm(8,16,32));
