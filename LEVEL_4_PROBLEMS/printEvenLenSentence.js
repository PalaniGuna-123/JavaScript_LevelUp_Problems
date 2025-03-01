function sentence(str){
    let strs=str.split(" ");
    let out="";
    for(let i=0;i<strs.length;i++){
        if(strs[i].length %2===0){
            if(out===""){
                out+=strs[i];
            }
            else{
                out+=","+strs[i];
            }
        }
         console.log(out);
    }
   
    
}
sentence("two fi guy");

