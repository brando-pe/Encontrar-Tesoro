const width = 400; 
const height = 400; 

// Medidas del tesoro
let target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
}

// Variables
const $map = document.querySelector("#map");
const $distance = document.querySelector("#distance");
let clicks =0

// Funcion click en el mapa
$map.addEventListener("click", function(e){
    clicks++; // Incrementador 
    let distance =  getDistance(e, target); // Obtengo la distancia
    let distanceHint =getDistanceHint(distance); // Textos alternativos de ayuda a encontrar el tesoro
    $distance.innerHTML = `<h1>${distanceHint}</h1>`; // colocarlo en el HTML

    // Validar cuando gane el usuario 
    if(distance < 20){
        alert(`Enconstraste el tesoro en ${clicks} clicks`)

        //Resetearel juego
        location.reload()
    }
})