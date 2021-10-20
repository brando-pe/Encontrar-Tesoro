// Posicionamiento del tesoro
let getRandomNumber = size => {
    return Math.floor(Math.random() * size);
}

// Obtener la distancia  del objetivo con el teorema de pitagoras
let getDistance = (e, target) => {
    let diffx = e.offsetX - target.x;
    let diffy = e.offsetY - target.y;
    return Math.sqrt((diffx*diffx) + (diffy*diffy));
}

// Validacion de distancia 
let getDistanceHint = distance => {
    if (distance < 30){
        return "Hirviendo";
    }else if (distance < 40){
        return "Muy Caliente";
    }else if (distance < 60){
        return "Caliente";
    }else if (distance < 100){
        return "Calido";
    }else if (distance < 180){
        return "Frio";
    }else if (distance < 360){
        return "Verdaderamente frio"
    }else{
        return "Congelado"
    }
}