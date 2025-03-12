// question here
// Question 1: Sorted Squared Array - You are given an array of Integers in which each 
// subsequent value is not less than the previous value. Write a function that takes this 
// array as an input and returns a new array with the squares of each 
// number sorted in ascending order.
function sortedSquarredArray(array) {
    let newArray = new Array(array.length).fill(0);
    for (let i = 0; i < array.length; i++) {
        newArray[i] = array[i] * array[i]; 
    }
    newArray.sort((a, b) => a - b);  
    return newArray;
}
console.log(sortedSquarredArray([12,-6,-7,-4]));//n log Space complexity O of 


// Method two

function effective(arr){
    let newArray=new Array(arr.length).fill(0)
    let leftpointer=0
    let rightpointer=arr.length-1
    for(let i=arr.length-1;i>=0;i--){
        let leftsquared=Math.pow(arr[leftpointer],2)
        let rightsquared=Math.pow(arr[rightpointer],2)
        if(leftsquared>rightsquared){
            newArray[i]=leftsquared
            leftpointer++
        }else{
            newArray[i]=rightsquared
            rightpointer--
        }
    }
    return newArray;
}
console.log(effective([-3,-4,-8,9]));




