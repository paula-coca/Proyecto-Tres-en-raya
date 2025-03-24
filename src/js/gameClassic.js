/*document.addEventListener('DOMContentLoaded', () => {
    const casillas = document.querySelectorAll('.tablero .casilla');
    const cuentaTurnos = document.querySelector('.turnoSiguiente');
    let turn = true; // Variable para alternar turnos (true para X, false para O)

    casillas.forEach((casilla) => {
        casilla.addEventListener('click', () => {
            // Verifica que la casilla esté vacía (sin backgroundImage)
            if (!casilla.style.backgroundImage) {
                if (turn) {
                    // Aplica imagen de X
                    casilla.style.backgroundImage = "url('./src/assets/images/x_tiza.png')";
                    cuentaTurnos.textContent = 'Es el turno de O';
                } else {
                    // Aplica imagen de O
                    casilla.style.backgroundImage = "url('./src/assets/images/circunferencia_tiza.png')";
                    cuentaTurnos.textContent = 'Es el turno de X';
                }
                // Asegúrate de que las imágenes se ajusten a la casilla
                casilla.style.backgroundSize = "cover";
                casilla.style.backgroundPosition = "center";
                casilla.style.backgroundRepeat = "no-repeat";

                // Cambia el turno
                turn = !turn;
            }
        });
    });
});
*/
