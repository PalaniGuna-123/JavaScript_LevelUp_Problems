function printPattern(n){
    for(let i=n;i>=1;i--){
        let res='';
        let gap='';
        let sym='';
        for(j=1;j<=i;j++){
            sym+=j+' ';
        }
        for(k=0;k<n-i;k++){
            gap+=' ';
        }
        res=gap+sym;
        console.log(res);
        
    }
}
printPattern(5)

function inverted(n){
    for(i=n-1;i>=1;i++){
        row=""
        for(j=1;j<=n-i;j++){
            row+=" "
        }
        for(k=1;k<=n;k++){
            row+=j+" "
        }
        console.log(row);
    }
    
}
inverted(4)