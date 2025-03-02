// Question 2: Monotonic Array - An array is monotonic if it is either monotone increasing or
//  monotone decreasing. An array is monotone increasing if all its elements from left to right are non-decreasing. 
//  An array is monotone decreasing if all  its elements from left to right are non-increasing. 
//  Given an integer array return true if the given array is monotonic, or false otherwise.

function monotonic(arr){
    if(arr.length===0){
        return true
    }
    let first=arr[0]
    let last=arr[arr.length-1]
    if(first===last){
        for(let i=0;i<arr.length-1;i++){
            if(arr[i+1]!==arr[i]){
                return false
            }
        }
    }
    else if(first<last){
        for(let i=0;i<arr.length-1;i++){
            if(arr[i+1]<arr[i]){
                return false;
            }
        }
    }else{
        for(let i=0;i<arr.length-1;i++){
            if(arr[i+1]>arr[i]){
                return false;
            }
        }
    }
    return true;
}
console.log(monotonic([1,9,3,4,4,]));

