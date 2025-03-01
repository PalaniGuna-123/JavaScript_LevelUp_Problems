// Output for Input [2, 3, 4, 5, 3, 2, 4, 3, 3, 3]:
// The maximum value is 5, and it occurs 1 time. Therefore, the output is:
function NumOccurrence(arr){
    let max=arr[0]
    let count=0;
    for(i=1;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i]
            count=1
        }else if(arr[i]===max){
            count++;
        }
    }
    return count;

}
console.log(NumOccurrence([2,3,4,5,3,2,4,3,3,3]));
