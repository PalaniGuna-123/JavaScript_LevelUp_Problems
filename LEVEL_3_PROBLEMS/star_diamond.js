//    1 
//   * * 
//  3 3 3 
// * * * * 
//  3 3 3 
//   * * 
//    1 
function star(n){
    for(let i=1;i<=n;i++){
        gap=""
        for(let j=1;j<=n-i;j++){
            gap+=" "
        }
        for(let j=1;j<=i;j++){
            if(i%2===0){
                gap+="* "
            }
            else{
                gap+=i+" "
            }
        }
        console.log(gap);
        
    }
    for(let i=n-1;i>=1;i--){
        gap=""
        for(let j=1;j<=n-i;j++){
            gap+=" "
        }
        for(let j=1;j<=i;j++){
            if(i%2===0){
                gap+="* "
            }
            else{
                gap+=i+" "
            }
        }
        console.log(gap);
        
    }
}
star(4)