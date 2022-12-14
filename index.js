const $empezar = document.querySelector("#empezar");
const $ronda = document.querySelector("#ronda");
const $perdiste = document.querySelector("#perdiste");

let ronda = 1;
let secuencia;

$empezar.onclick = function () {
  ronda = 1;
  $perdiste.innerText = "";
  $ronda.innerText = ronda;
  secuencia = crearSecuencia(ronda);
  mostrarSecuencia();
};

function encender(id) {
  const $cuadrado = document.querySelector("#" + id);

  $cuadrado.classList.add("encendido");

  setTimeout(() => {
    $cuadrado.classList.remove("encendido");
  }, 2000);
}

function obtenerEnteroAleatorioInclusivo(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function crearSecuencia(ronda) {
  const secuencia = [];

  for (let i = 0; i < ronda; i++) {
    secuencia[i] = obtenerEnteroAleatorioInclusivo(1, 4);
    if (secuencia[i] === 1) {
      secuencia[i] = "uno";
    }
    if (secuencia[i] === 2) {
      secuencia[i] = "dos";
    }
    if (secuencia[i] === 3) {
      secuencia[i] = "tres";
    }
    if (secuencia[i] === 4) {
      secuencia[i] = "cuatro";
    }
  }

  return secuencia;
}

TIEMPO_ENTRE_ENCENDIDOS = 3000;

function mostrarSecuencia() {
  var counter = 0;
  var interval = setInterval(function () {
    encender(secuencia[counter]);
    counter += 1;
    if (counter == secuencia.length) {
      clearInterval(interval);
    }
  }, TIEMPO_ENTRE_ENCENDIDOS);
}

let numeroDeClick = 0;

const $cuadrado1 = document.querySelector("#uno");
const $cuadrado2 = document.querySelector("#dos");
const $cuadrado3 = document.querySelector("#tres");
const $cuadrado4 = document.querySelector("#cuatro");

function compararClickConSecuencia(cuadrado) {
  encender(cuadrado.id);
  if (!(cuadrado.id === secuencia[numeroDeClick])) {
    $perdiste.innerText = "Perdiste";
    numeroDeClick = 0;

    return;
  }
  numeroDeClick++;
  if (numeroDeClick === ronda) {
    numeroDeClick = 0;
    ronda++;
    $ronda.innerText = ronda;
    secuencia = crearSecuencia(ronda);
    mostrarSecuencia();
    return;
  }
}

$cuadrado1.onclick = function () {
  compararClickConSecuencia(this);
};
$cuadrado2.onclick = function () {
  compararClickConSecuencia(this);
};
$cuadrado3.onclick = function () {
  compararClickConSecuencia(this);
};
$cuadrado4.onclick = function () {
  compararClickConSecuencia(this);
};
