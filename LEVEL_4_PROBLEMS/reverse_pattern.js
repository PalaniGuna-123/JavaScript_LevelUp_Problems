function printPattern(n) {
    for(let i=n;i>0;i--){
        str="";
        for(let j=1;j<=i;j++){
            str+=i;
        }
        for(let k=1;k<=(n-i)*2;k++){
            str+=" ";
        }
        console.log(str+str);
    } 
}
printPattern(7)

function print(n){
    for(let i=1;i<=n;i++){
        str=""
        for(let j=1;j<=i;j++){
            str+=i;
        }
        for(let k=1;k<=(n-i)*2;k++){
            str+=" ";
        }
        console.log(str+str);     
    }
}
print(7)

function pat(n){
    for(let i=1;i<=n;i++){
        let str=""
        for(let j=1;j<=i;j++){
            str+=i
        }
        for(let k=1;k<=(n-i)*2;k++){
            str+=" ";
        }
        console.log(str+str);
        
    }
}
pat(4)