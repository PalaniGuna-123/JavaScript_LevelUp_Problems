// 1 1 1 1 1 
// *       * 
// *       * 
// *       * 
// 5 5 5 5 5 

function pattern(n){
    for(let i=1;i<=n;i++){
        let str="";
        if(i===1||i===n){
            for(let j=1;j<=n;j++){
            str+=i+" ";
        }
        }
        else{
        for(let j=1;j<=n;j++){
            if(j===1||j===n){
                str+="* "
            }
            else{
                str+="  "
            }
        }
        }
               console.log(str)    
    }

}
pattern(5)