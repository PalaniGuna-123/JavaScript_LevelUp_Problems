function count(str){
    const vowel="aeiouAEIOU"
    dist="";
    for(let char of str){
        if(vowel.includes(char) && !dist.includes(char)){
            dist+=char;
        }
    }
    console.log(dist.length);  
}
count("aeiou")