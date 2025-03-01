//   *
//  ***
// *****
//  ***
//   *


function diamond(n){
    for(let i=1;i<=n;i++){
        row=""
        for(j=1;j<=n-i;j++){
            row+=" "
        }
        for(let k=1;k<=2*i-1;k++){
            row+="*"
        }
        console.log(row);
    }
    for(let i=n-1;i>=1;i--){
        row=""
        for(j=1;j<=n-i;j++){
            row+=" "
        }
        for(let k=1;k<=2*i-1;k++){
            row+="*"
        }
        console.log(row);
    }
}
diamond(3)