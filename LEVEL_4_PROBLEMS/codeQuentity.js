function calculateTotal(cart){
    let total=0;
    for(let item of cart){
        let[code,quantity]=item.split(" ");
        quantity= parseInt(quantity,10);
        if(code==="M"){
            total+=500 * quantity;
        } else if(code ==="J"){
            total+=3000 * quantity;
        } else if(code === "T"){
            total+=1500 * quantity;
        }else if(code === "P"){
            total+=10 * quantity;        
        }
    }
    console.log(total);
    

}
calculateTotal(["M 3", "J 1", "T 2"]);