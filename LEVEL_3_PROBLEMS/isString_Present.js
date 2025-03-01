function isStringPresence(arr,s){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===s){
            return true;
        }

    }
    return false;
}
console.log(isStringPresence(["apple","banana","orange"],"orange"));
