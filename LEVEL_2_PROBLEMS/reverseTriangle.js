/* Output:
3 3 3
  2 2
    1
*/
function pattern(n){
    for(let i=n;i>=1;i--){
        row=""
        for(let j=1;j<=n-i;j++){
            row+="  "
        }
        for(let j=1;j<=i;j++){
            row+=i+" "
        }
        console.log(row);
        
    }
}
pattern(3)