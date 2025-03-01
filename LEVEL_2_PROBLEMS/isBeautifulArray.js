function isBeautifulArray(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
       sum+=arr[i]; 
    }
    if(sum %2===0 && sum %3===0 && sum %5===0){
        console.log(1);
        
    }
    else{
        console.log(0);
        
    }
}
isBeautifulArray([5,25,35,-5,30])
isBeautifulArray([2,4,6,8]);