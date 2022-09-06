// TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
// Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
// Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad,
// la menor edad y el promedio del grupo familiar.

// Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente,
// borrando los inputs ya creados (investigar cómo en MDN).

function calcularMayorEdad(numeros) {
  let mayorEdad = numeros[0];
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > mayorEdad) {
      mayorEdad = numeros[i];
    }
  }
  return mayorEdad;
}

function calcularMenorEdad(numeros) {
  let menorEdad = numeros[0];
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] < menorEdad) {
      menorEdad = numeros[i];
    }
  }
  return menorEdad;
}

function calcularPromedio(numeros) {
  let promedio = 0;
  for (let i = 0; i < numeros.length; i++) {
    promedio += numeros[i] / numeros.length;
  }
  return promedio;
}
const continuar = document.querySelector("#proximo-paso");
continuar.onclick = function (event) {
  let $cantidadIntegrantes = document.querySelector("#cantidad-de-integrantes");
  let cantidadIntegrantes = $cantidadIntegrantes.value;
  console.log(cantidadIntegrantes);

  crearIntegrante(cantidadIntegrantes);
  crearIntegrantes(cantidadIntegrantes);
  event.preventDefault();
};

function crearIntegrantes(cantidadIntegrantes) {
  for (let i = 0; i < cantidadIntegrantes; i++) {
    crearIntegrante[i];
  }
}

function crearIntegrante(indice) {
  const $div = document.createElement("div");
  $div.className = "integrante";
  const $label = document.createElement("label");
  $label.textContent = "Edad del integrante #" + indice + 1;
  const $input = document.createElement("input");
  $input.type = "number";

  $div.appendChild($label);
  $div.appendChild($input);

  const $integrante = document.querySelector("#integrantes");
  $integrante.appendChild($div);
}
