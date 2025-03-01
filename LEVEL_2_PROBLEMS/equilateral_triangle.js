//equilateral triangle out put

//    *
//   ***
//  *****
// *******
function equilateral(n){
    for(i=1;i<=n;i++){
        row=""
        for(j=1;j<=n-i;j++){
            row+=" "
        }
        for(k=1;k<=2*i-1;k++){
            row+="*"
        }
        console.log(row);
    }
}
equilateral(5)


