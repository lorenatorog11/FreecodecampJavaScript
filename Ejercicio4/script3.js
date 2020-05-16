function telephoneCheck(str) {
    let expReg = /^(1?(\s|[-])?(\d{3}|[(]\d{3}[)]))(\s|[-])?\d{3}(\s|[-])?(\d{4})$/; 
    let result = expReg.test(str);
    console.log(result);
   }
  
  
  telephoneCheck("(300)-281-9125");
  