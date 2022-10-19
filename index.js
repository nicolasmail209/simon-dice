
const $empezar = document.querySelector("#empezar");
const $ronda = document.querySelector("#ronda");
const $perdiste = document.querySelector("#perdiste");

let ronda = 1;
let secuencia;

$empezar.onclick = function(){

    ronda = 1;
    $perdiste.innerText = "";
    $ronda.innerText = ronda;
    secuencia = crearSecuencia(ronda);
    transformarSecuenciaAPalabras();
    mostrarSecuencia();
}



function encender(id){
    
    const $cuadrado = document.querySelector("#" + id);

    if(id === "uno"){
        $cuadrado.style.backgroundColor = "rgb(4, 252, 4)";
        
        setTimeout(() => {
            $cuadrado.style.backgroundColor = "rgb(1, 112, 1)";
          }, 2000)
    }
    if(id === "dos"){
        $cuadrado.style.backgroundColor = "rgb(241, 3, 3)";
        
        setTimeout(() => {
            $cuadrado.style.backgroundColor = "rgb(138, 2, 2)";
          }, 2000)
    }
    if(id === "tres"){
        $cuadrado.style.backgroundColor = "rgb(3, 3, 243)";
        
        setTimeout(() => {
            $cuadrado.style.backgroundColor = "rgb(2, 2, 129)";
          }, 2000)
    }
    if(id === "cuatro"){
        $cuadrado.style.backgroundColor = "rgb(247, 247, 6)";
        
        setTimeout(() => {
            $cuadrado.style.backgroundColor = "rgb(151, 151, 3)";
          }, 2000)
    }
    
}


function crearSecuencia(ronda){
    
    const secuencia = [];

    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    for(let i = 0; i < ronda; i++){
        secuencia[i] = getRandomIntInclusive(1, 2);
    }

    return secuencia;
}


function transformarSecuenciaAPalabras(){
for(let i = 0; i < secuencia.length; i++){
    if(secuencia[i] === 1){
        secuencia[i] = "uno";
    }
    if(secuencia[i] === 2){
        secuencia[i] = "dos";
    }
    if(secuencia[i] === 3){
        secuencia[i] = "tres";
    }
    if(secuencia[i] === 4){
        secuencia[i] = "cuatro";
    }
}
}


function mostrarSecuencia(){
var counter = 0;
var interval = setInterval(function(){
   encender(secuencia[counter]);
   counter+=1;
   if (counter == (secuencia.length)) { clearInterval(interval); }
}, 3000);
}


//function compararSecuencia(ronda){
    //const ronda = ronda;
    let numeroDeClick = 0;

    

    const $div1 = document.querySelector("#uno");
    const $div2 = document.querySelector("#dos");
    const $div3 = document.querySelector("#tres");
    const $div4 = document.querySelector("#cuatro");

    $div1.onclick = function(){
        encender(this.id);
        if(!(this.id === secuencia[numeroDeClick])){
            $perdiste.innerText = "Perdiste";
            numeroDeClick = 0;
            /*ronda = 1;
            secuencia = crearSecuencia(ronda);
            transformarSecuenciaAPalabras();
            mostrarSecuencia();*/
            return; 
        }
        numeroDeClick++;
        if(numeroDeClick === ronda){
            numeroDeClick = 0;
            ronda++;
            $ronda.innerText = ronda;
            secuencia = crearSecuencia(ronda);
            transformarSecuenciaAPalabras();
            mostrarSecuencia();
            return;
        }
        //return false;
    }
    $div2.onclick = function(){
        encender(this.id);
        if(!(this.id === secuencia[numeroDeClick])){
            $perdiste.innerText = "Perdiste";
            numeroDeClick = 0;
            /*ronda = 1;
            secuencia = crearSecuencia(ronda);
            transformarSecuenciaAPalabras();
            mostrarSecuencia();*/
            return; 
        }
        numeroDeClick++;
        if(numeroDeClick === ronda){
            numeroDeClick = 0;
            ronda++;
            $ronda.innerText = ronda;
            secuencia = crearSecuencia(ronda);
            transformarSecuenciaAPalabras();
            mostrarSecuencia();
            return;
        }
        //return false;
    }

    

//}

/*
const $div1 = document.querySelector("#uno");
$div1.onclick = function(){
    console.log(this.id);
    return false;
}
*/