// 7. El prompt anterior guarde en una variable de javascript ese string y lo muestre en
// pantalla (consola o body) concatenado con un texto tipo “Hola soy “ + variable.
let nombre = prompt('Introduce tu nombre');
document.getElementById('bienvenido').innerHTML='Hola ' + nombre + ' bienvenido a mi página :)';

// 8. Escribe un programa con una variable de tipo number (a) y un condicional que evalúe
// si el entero es par o impar utilizando el operador %.
let numero = prompt('Introduce un numero');
if (numero % 2 == 0 ) {
    document.getElementById("numero").innerHTML='Tu numero es par';
} else {
    document.getElementById("numero").innerHTML='Tu numero es impar';
}

//9. Escribe un programa que pida al usuario un número entero positivo(mediante la
// función prompt) y muestre por pantalla la cuenta hacia delante desde ese número
// hasta 20, utilizando saltos de línea como separación y si es superior a 20 que lo indique
// por pantalla.
let entero = prompt ('Escribe un numero entero positivo');
if (entero > 20){
    console.log("Es mayor a 20");
}
for (let i = entero; i <= 20; i++) {
    console.log (i);
}

// 11. Escribe un programa con un array que almacene los nombres de tres colores. A
// continuación, crea otro array vacío e inserta en él todos los elementos del primer
// arraymediante un for...of y el método push

let colores= ['Morado', 'Azul', 'Rosa'];
let colores2= [];
for (const color of colores) {
    colores2.push(color);    
}   
    console.log(colores2);

// 12. Crea un archivo TypeSript, aunque sea vacio y realiza la transpilación, explica paso a
// paso que has hecho.

// 1) He creado un archivo con la extension ".ts"
// 2) Abrí el terminal cmd desde la carpeta donde guarde el archivo y ejecute el comando "npm install -g typescript" para instalar el compilador
// 3) Luego ejecute en el cmd el comando "tsc practica-modulo2.ts", al ejecutarlo se ha creado un nuevo archivo pero con la extension ".js"

// 13. Como revisamos las versiones de TS, Node, el instalador de paquetes y Angular,
// escribe los comandos en consola necesarios.

// npm install -g typescript
// tsc --version
// tsc archivo.ts
// node archivo.js
// npm init
// npm install -g @angular/cli
// ng serve

