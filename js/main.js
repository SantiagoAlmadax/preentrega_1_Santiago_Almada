function pedirNumero(mensaje) {
    return parseInt(prompt(mensaje));
}

function pedirEdades(cantidad) {
    let edades = [];
    for (let i = 0; i < cantidad; i++) {
        let edad = pedirNumero(`Ingresa la edad ${i + 1}:`);
        edades.push(edad);
    }
    return edades;
}

function calcularPromedio(numeros) {
    let suma = 0;
    for (let numero of numeros) {
        suma += numero;
    }
    return suma / numeros.length;
}

function main() {
    let numeroDeEdades = pedirNumero("¿Cuántas edades vas a ingresar?");
    let edades = pedirEdades(numeroDeEdades);
    let promedio = calcularPromedio(edades);
    console.log(`El promedio de las edades es: ${promedio.toFixed(2)}`);
}

main();