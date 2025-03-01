function firstAlpha(arr){
    if(arr.length===0) return null;
    let first=arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i]<first){
            first=arr[i]
        }
    }
    return first;
}
console.log(firstAlpha(["guna","umbrella"]));
function findFirstAlphabetically(arr) {
    if (arr.length === 0) return null; 
    let firstString = arr[0]; 
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < firstString) {
            firstString = arr[i]; 
        }
    }
    return firstString;
}
let string = ["banana", "apple", "cherry", "date","apricot"];
console.log(findFirstAlphabetically(string));
