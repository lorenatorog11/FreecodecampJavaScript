function checkCashRegister(price, cash, cid) {
    let equivalente = {
        "ONE HUNDRED": 100.0,
        "TWENTY": 20.0,
        "TEN": 10.0,
        "FIVE": 5.0,
        "ONE": 1.0,
        "QUARTER": 0.25,
        "DIME": 0.1,
        "NICKEL": 0.05,
        "PENNY": 0.01,
    }

    let mensaje = {
        status: "INSUFFICIENT_FUNDS",
        change: [],
    }
    let cambio = cash - price;
    let dineroCaja = 0;

    for (let i =0; i< cid.length; i++){
        dineroCaja += cid[i][1];
    }
    if(cambio>dineroCaja){
        mensaje.status = "INSUFFICIENT_FUNDS";
        console.log (mensaje);
    }else if(cambio == dineroCaja){
        mensaje.status = "CLOSED";
        mensaje.change = cid;
        console.log (mensaje);
    }else if(cambio<dineroCaja){
        let cidReverse = cid.reverse();
        cidReverse.forEach(element => {            
            let moneda = element;
            let contador = 0;
            let mensaje1= [];
            while(cambio>=equivalente[moneda[0]] && moneda[1]>=equivalente[moneda[0]]){
                contador++;
                cambio -= equivalente[moneda[0]];
                mensaje.status = "OPEN",
                mensaje1 = [moneda[0] , (contador * (equivalente[moneda[0]])).toFixed(1)];
            }
            if(mensaje1 != 0){
                mensaje.change.push(mensaje1);
            }            
        });
        console.log(mensaje);
    }
    }


    checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);