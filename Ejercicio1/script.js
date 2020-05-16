function palindrome(str) {
    let strMinus = str.toLowerCase();
    let strEnd = strMinus.replace(/[\W_]/g, "");
    let arrayStr = [];
    for (let i = 0; i<strEnd.length ; i++){
        arrayStr.unshift(strEnd[i]);
    }
    let strJoin = arrayStr.join("");
    
    if(strEnd === strJoin){
        return true;
    }else{
        return false;
    }
}
palindrome("Eye");