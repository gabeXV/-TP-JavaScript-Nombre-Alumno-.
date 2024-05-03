let num1 = parseFloat(prompt("Ingrese el primer numero:"));
let num2 = parseFloat(prompt("Ingrese el segundo numero:"));
let num3 = parseFloat(prompt("Ingrese el tercer numero:"));

let mayor, medio, menor;

if (num1 > num2 && num1 > num3) {
    mayor = num1;
    if (num2 > num3) {
        medio = num2;
        menor = num3;
    } else {
        medio = num3;
        menor = num2;
    }
} else if (num2 > num1 && num2 > num3) {
    mayor = num2;
    if (num1 > num3) {
        medio = num1;
        menor = num3;
    } else {
        medio = num3;
        menor = num1;
    }
} else {
    mayor = num3;
    if (num1 > num2) {
        medio = num1;
        menor = num2;
    } else {
        medio = num2;
        menor = num1;
    }
}

console.log(`Los numeros en orden ascendente son: ${menor}, ${medio}, ${mayor}`);
