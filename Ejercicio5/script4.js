function checkCashRegister(price, cash, cid) {
    let equivalente = [
        ["ONE HUNDRED", 100.0],
        ["TWENTY", 20.0],
        ["TEN", 10.0],
        ["FIVE", 5.0],
        ["ONE", 1.0],
        ["QUARTER", 0.25],
        ["DIME", 0.1],
        ["NICKEL", 0.05],
        ["PENNY", 0.01],
    ]


    let cambio = Math.round((cash - price) *100);
    let newEquivalente = equivalente.map(element=>[element[0], Math.round(element[1]*100)]);
    let newCid = cid.map(element=>[element[0], Math.round(element[1]*100)]);

    let mensaje = {
        status: "INSUFFICIENT_FUNDS",
        change: [],
    }
    let dineroCaja= 0;
    let dinero = newCid.map(element => 
        dineroCaja+=element[1]);

    if(cambio>dineroCaja){
        mensaje.status = "INSUFFICIENT_FUNDS";
        console.log (mensaje);
    }else if(cambio == dineroCaja){
        mensaje.status = "CLOSED";
        mensaje.change = cid;
        console.log (mensaje);
    }else if(cambio<dineroCaja){
        let cidReverse = newCid.reverse();
        let mensaje2= [];
        for (let i = 0; i<cidReverse.length; i++){
            let dineroDisponible = cidReverse[i][1];
            let acumulador = 0;
            let cambioFinal = [];
            while(cambio>=newEquivalente[i][1] && dineroDisponible>0){
                dineroDisponible-=newEquivalente[i][1];
                cambio-=newEquivalente[i][1];
                acumulador +=newEquivalente[i][1];
                cambioFinal= [cidReverse[i][0],acumulador/100]
            }  
            mensaje2.push(cambioFinal)
                    
        }
        if(cambio===0){
            mensaje.status = "OPEN";
            mensaje.change = mensaje2.filter(element=>element.length>0);
            console.log(mensaje);
        }else{
            console.log(mensaje);
        }
    }
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])