// * * * * 
//  3 3 3 
//   * * 
//    1 

function star(n){
    for(let i=n;i>=1;i--){
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