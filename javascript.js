const reverseStrings=(str)=>{
    let reverseString="";
    for(let i=0;i<str.length;i++){
        reverseString = str[i] +reverseString;
    }
    return reverseString;

}

console.log(reverseStrings('emma'))