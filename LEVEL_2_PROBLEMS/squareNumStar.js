// 1 2 3 4 
// * * * * 
// 1 2 3 4 
// * * * * 
function mixed(n){
    for(let i=1;i<=n;i++){
        let str=""
        for(let j=1;j<=n;j++){
            if(i%2===0){
                str+="* "
            }
            else{
                str+=j+" "
            }
        }
        console.log(str);
        
    }
}
mixed(4)