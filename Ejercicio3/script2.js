function rot13(str) {
    let strMinus = Array.from(str.toLowerCase());
    let valores =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let valorEqui = ['n','o','p','q','r','s','t','u','v','w','x','y','z','a','b','c','d','e','f','g','h','i','j','k','l','m'];   
    let arrayRot13 =[];       
    for (let i=0; i< strMinus.length; i++){
        let valor = strMinus[i];
        let idx = valores.indexOf(valor);
        if (idx != -1){
            arrayRot13.push(valorEqui[idx]);
        }else{
            arrayRot13.push(valor);
        }
    }
    let strRot13 = arrayRot13.join("");
    console.log(strRot13.toLocaleUpperCase());
  }
  
  rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");