// 3. Given a string, the task is to reverse the order of the words in the given string.
// Examples:
// Input: s = “hello everyone”
// Output: s = “everyone hello”
// Input: s = “i love programming very much”
// Output: s = “much very programming love i”

function reverseString(str){
    stri=str.split(" ")
    string=''
    for(i=stri.length-1;i>=0;i--){
      string+=stri[i]+" "
        
    }
  console.log(string);
  
}
reverseString('i love programming very much')