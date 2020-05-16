function convertToRoman(num) {
    let numDeci = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let numRomanos = ["M", "CM","D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    let acum = [];

    
    for (let i = 0; i<numDeci.length; i++ ) {   
        let numCont = numDeci[i];     
        while (num>=numCont){
            acum.push(numRomanos[i]);
            num-=numCont;        
        }      
    }    
    let numRom = acum.join("");
    console.log(numRom);
   }
   

   convertToRoman(3999);