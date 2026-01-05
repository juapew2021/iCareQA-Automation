// Inicio - Calculemos el resultado de dos números
// Definir variables
let numero1;
let numero2;
let resultado;
let operacion;

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función para solicitar números y operación al usuario
function solicitarDatos(callback) {
    rl.question("Ingrese el primer número: ", (input1) => {
        numero1 = parseFloat(input1);
        rl.question("Ingrese el segundo número: ", (input2) => {
            numero2 = parseFloat(input2);
            rl.question("Ingrese la operación (+, -, *, /): ", (op) => {
                operacion = op;
                callback();
            });
        });
    });
}

// Función para realizar la operación
function calcularResultado() {
    switch (operacion) {
        case "+":
            resultado = numero1 + numero2;
            break;
        case "-":
            resultado = numero1 - numero2;
            break;
        case "*":
            resultado = numero1 * numero2;
            break;
        case "/":
            resultado = numero1 / numero2;
            break;
    }
}

// Función para mostrar el resultado
function mostrarResultado() {
    console.log("El resultado de " + numero1 + " " + operacion + " " + numero2 + " es: " + resultado);
    rl.close();
}

// Ejecutar las funciones
solicitarDatos(() => {
    calcularResultado();
    mostrarResultado();
});

// Fin - Calculemos el resultado de dos números


