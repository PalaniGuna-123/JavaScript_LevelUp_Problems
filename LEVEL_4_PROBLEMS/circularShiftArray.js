function circularShiftRight(arr){
    if(arr.length === 0) return;
    let lastELement = arr[arr.length -1];

    for(let i=arr.length-1;i>0;i--){
        arr[i]=arr[i-1];
    }
    arr[0]=lastELement;
        let result="";
        for(let i=0;i<arr.length;i++){
            result+=arr[i]+" ";
        }
        console.log(result);

    }
circularShiftRight([1,2,3,4 ])