// 1
// * *
// 3
// * * * *

function output(n){
    for(i=1;i<=n;i++){
        if(i%2!==0){
            console.log(i)
            continue;
        }
        let str="";
        for(let j=1;j<=i;j++){
            str+="* "

        }
        console.log(str); 
    }
}
output(4)