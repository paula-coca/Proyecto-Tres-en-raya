let imagenCirculo;
let imagenEquis;
document.addEventListener('DOMContentLoaded', () => {
    let nombre = window.location.href;
    if (nombre.includes("classicTheme")) {
        imagenCirculo = "url('./src/assets/images/circunferencia_tiza.png')";
        imagenEquis = "url('./src/assets/images/equis_tiza.png')";
    } else {
        imagenCirculo = "url('./src/assets/images/circuloUncharted.png')";
        imagenEquis = "url('./src/assets/images/equisUncharted.png')";
    }
    const casillas = document.querySelectorAll('.tablero .casilla');
    const cuentaTurnos = document.querySelector('.turnoSiguiente');
    const victoriasX = document.querySelector('#victoriasX h3');
    const victoriasO = document.querySelector('#victoriasO h3');
    let turn = true; // true para X, false para O
    let victoriasXCount = 0;
    let victoriasOCount = 0;

    const combinacionesGanadoras = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontales
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Verticales
        [0, 4, 8], [2, 4, 6]             // Diagonales
    ];

    function verificarVictoria() {
        for (const combinacion of combinacionesGanadoras) {
            const [a, b, c] = combinacion;
            if (
                casillas[a].style.backgroundImage &&
                casillas[a].style.backgroundImage === casillas[b].style.backgroundImage &&
                casillas[a].style.backgroundImage === casillas[c].style.backgroundImage
            ) {
                return casillas[a].style.backgroundImage.includes("equis") ? 'X' : 'O';
            }
        }
        return null;
    }

    let ganador = null;

    function reiniciarTablero() {
        casillas.forEach(casilla => casilla.style.backgroundImage = "");
        cuentaTurnos.textContent = 'Turno de X';
        turn = true;
        ganador = null;
    }

    function verificarEmpate() {
        let empate = true;
        for (let casilla of casillas) {
            if (!casilla.style.backgroundImage) empate = false;
        }
        return empate;
    }

    casillas.forEach(casilla => {
        casilla.addEventListener('click', () => {
            if (ganador !== null) return;
            if (!casilla.style.backgroundImage) {
                if (turn) {
                    casilla.style.backgroundImage =  imagenEquis;
                } else {
                    casilla.style.backgroundImage = imagenCirculo;
                }
                casilla.style.backgroundSize = "cover";
                casilla.style.backgroundPosition = "center";
                casilla.style.backgroundRepeat = "no-repeat";

                ganador = verificarVictoria();
                if (ganador) {
                    if (ganador === 'X') {
                        victoriasXCount++;
                    } else {
                        victoriasOCount++;
                    }
                    victoriasX.textContent = "X = " + victoriasXCount;
                    victoriasO.textContent = "O = " + victoriasOCount;
                    cuentaTurnos.textContent = "¡" + ganador + " ha ganado!";
                } else {
                    empate = verificarEmpate();
                    if (!empate) {
                        turn = !turn;
                        cuentaTurnos.textContent = turn ? 'Turno de X' : 'Turno de O';
                    } else {
                        cuentaTurnos.textContent = "¡Empate!";
                    }
                    
                }
            }
        });
    });

    document.getElementById('reiniciar').addEventListener('click', reiniciarTablero);
    document.getElementById('atras').addEventListener('click', () => window.location.href="./index.html");
});
