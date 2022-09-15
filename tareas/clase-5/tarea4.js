//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
//  1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto
//  -"El promedio es..."
//  2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto
//  "El número más pequeño es..."
//  3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto
//  "El número más grande es..."
//  4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto
//  "El número más frecuente es..."
let nodeList = document.querySelectorAll("li");

let arrayDeValores = [];
for (let i = 0; i < nodeList.length; i++) {
  arrayDeValores.push(Number(nodeList[i].textContent));
  console.log(nodeList[i].innerText);
  console.log(arrayDeValores);
}

function calcularPromedio(numeros) {
  let totalSuma = 0;
  for (let i = 0; i < numeros.length; i++) {
    totalSuma = totalSuma + numeros[i];
  }
  let promedio = totalSuma / numeros.length;
  return promedio;
}
console.log(calcularPromedio(arrayDeValores));

let minimo = arrayDeValores[0];
for (let i = 0; i < arrayDeValores.length; i++) {
  if (minimo > arrayDeValores[i]) {
    minimo = arrayDeValores[i];
  }
}
console.log(minimo);

let maximo = arrayDeValores[0];
for (let i = 0; i < arrayDeValores.length; i++) {
  if (maximo < arrayDeValores[i]) {
    maximo = arrayDeValores[i];
  }
}
console.log(maximo);

function obtenerNumeroMasRepetido(arrayDeValores) {
  let numeroMasRepetido = 0;
  let cantidadNumeroMasRepetido = 1;
  for (let i = 0; i < arrayDeValores.length; i++) {
    let cantidadRepeticiones = 0;
    for (let j = 0; j < arrayDeValores.length; j++) {
      if (arrayDeValores[i] === arrayDeValores[j]) {
        cantidadRepeticiones++;
      }
    }
    if (cantidadRepeticiones > cantidadNumeroMasRepetido) {
      cantidadNumeroMasRepetido = cantidadRepeticiones;
      numeroMasRepetido = arrayDeValores[i];
    }
  }
  return numeroMasRepetido;
}
console.log(obtenerNumeroMasRepetido(arrayDeValores));

function calcular() {
  const numeroPromedio = document.querySelector("#promedio");
  numeroPromedio.textContent = `El promedio es ${calcularPromedio(
    arrayDeValores
  )}`;
  const numeroMenor = document.querySelector("#menor");
  numeroMenor.textContent = `El numero mas pequeño es ${minimo}`;
  const numeroMayor = document.querySelector("#mayor");
  numeroMayor.textContent = `El numero mas grande es ${maximo}`;
  const frecuente = document.querySelector("#frecuente");
  frecuente.textContent = `El numero que mas se repite es ${obtenerNumeroMasRepetido(
    arrayDeValores
  )}`;
}
