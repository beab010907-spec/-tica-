const palabras = [
    "RESPETO",
    "JUSTICIA",
    "HONESTIDAD",
    "SOLIDARIDAD",
    "EQUIDAD",
    "RESPONSABILIDAD"
];

let palabra = "";
let letrasAdivinadas = [];
let intentos = 6;

function iniciarJuego() {
    palabra = palabras[Math.floor(Math.random() * palabras.length)];
    letrasAdivinadas = [];
    intentos = 6;
    document.getElementById("intentos").textContent = "Intentos restantes: " + intentos;
    mostrarPalabra();
    crearBotones();
}

function mostrarPalabra() {
    let display = "";
    for (let letra of palabra) {
        display += letrasAdivinadas.includes(letra) ? letra + " " : "_ ";
    }
    document.getElementById("palabra").textContent = display;
}

function crearBotones() {
    const letrasDiv = document.getElementById("letras");
    letrasDiv.innerHTML = "";
    for (let i = 65; i <= 90; i++) {
        const btn = document.createElement("button");
        btn.textContent = String.fromCharCode(i);
        btn.onclick = () => seleccionarLetra(btn.textContent, btn);
        letrasDiv.appendChild(btn);
    }
}

function seleccionarLetra(letra, boton) {
    boton.disabled = true;
    if (palabra.includes(letra)) {
        letrasAdivinadas.push(letra);
    } else {
        intentos--;
        document.getElementById("intentos").textContent = "Intentos restantes: " + intentos;
    }
    mostrarPalabra();
    verificarFin();
}

function verificarFin() {
    if (!document.getElementById("palabra").textContent.includes("_")) {
        alert("🎉 ¡Ganaste! La palabra era: " + palabra);
    }
    if (intentos === 0) {
        alert("😢 Perdiste. La palabra era: " + palabra);
    }
}

function reiniciar() {
    iniciarJuego();
}

iniciarJuego();
