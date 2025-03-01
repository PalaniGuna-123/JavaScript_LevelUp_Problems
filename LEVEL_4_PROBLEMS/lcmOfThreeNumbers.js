function gcd(a,b){
    while(b!==0){
        let temp=b
        b=a%b
        a=temp;
    }
    return a;
}
function lcm(a,b,c){
    let lcm_ab=((a*b)/gcd(a,b))
    return ((lcm_ab*c)/gcd(lcm_ab,c))
}
console.log(lcm(4,5,6));
