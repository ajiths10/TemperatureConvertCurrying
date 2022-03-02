//convert Celsius to Kelvin

let temp = function (x){
    return function (y,q){
        if (q=='c'){
            console.log(`${y+x}K`);
        }else{
            console.log(`${y-x}C`);
        }
    }
}

let convertTemp = temp(273);
convertTemp(35,'c');
convertTemp(308,'k');
