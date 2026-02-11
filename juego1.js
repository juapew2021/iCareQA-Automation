// Inicio - Juego de adivinanza de números
// Definir variables
let numero = randint(1, 10)
let intentos = 3

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
if (numero >= 5) {
    console.log("¡Has ganado el tesoro!");
    intentos += 1
} else {
    console.log("No has ganado el tesoro.");
}
function randint(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function solicitarIntento() {
    if (intentos > 0) {
        rl.question("Adivina el número entre 1 y 10: ", (input) => {
            let intento = parseInt(input);
            if (intento === numero) {
                console.log("¡Felicidades! Has adivinado el número.");
                rl.close();
            } else {
                console.log("No has adivinado el número. Intenta de nuevo.");
                intentos--;
                solicitarIntento();
            }
        });
    } else {
        console.log("¡Has agotado tus intentos! El número era: " + numero);
        rl.close();
    }
}
solicitarIntento();
// Fin - Juego de adivinanza de números
