/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad,
la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente,
borrando los inputs ya creados (investigar cómo en MDN).
*/

function crearIntegrantes() {
  const $cantidad = document.querySelector("#cantidad");
  const cantidad = $cantidad.value;
  console.log(cantidad);
  for (let i = 0; i < cantidad; i++) {
    const $label = document.createElement("label");
    $label.textContent = `Integrante ${i + 1}`;
    const $input = document.createElement("input");
    $input.type = "number";
    $input.className = "numero";
    $label.appendChild($input);
    document.querySelector("#integrantes").appendChild($label);
    document
      .querySelector("#integrantes")
      .appendChild(document.createElement("br"));
  }
}

let edades = [];
function obtenerEdad() {
  const $integrantes = document.querySelectorAll(".numero");

  for (let i = 0; i < $integrantes.length; i++) {
    edades.push(Number($integrantes[i].value));
  }
  console.log(edades);
  return edades;
}
function calcularMayorEdad() {
  let mayorEdad = edades[0];
  for (let i = 1; i < edades.length; i++) {
    if (edades[i] > mayorEdad) {
      mayorEdad = edades[i];
    }
  }
  return mayorEdad;
}

function calcularMenorEdad() {
  let menorEdad = edades[0];
  for (let i = 1; i < edades.length; i++) {
    if (edades[i] < menorEdad) {
      menorEdad = edades[i];
    }
  }
  return menorEdad;
}

function calcularPromedio() {
  let totalEdad = 0;
  for (let i = 0; i < edades.length; i++) {
    totalEdad += edades[i];
  }
  return totalEdad / edades.length;
}
function calcular() {
  obtenerEdad();
  const mayor = document.querySelector("#mayor");
  mayor.textContent = `La mayor edad es ${calcularMayorEdad()}`;
  const menor = document.querySelector("#menor");
  menor.textContent = `La menor edad es ${calcularMenorEdad()}`;
  const promedio = document.querySelector("#promedio");
  promedio.textContent = `El promedio de edad es ${calcularPromedio()}`;
}

/*function borrar() {
  const integrantes = document.querySelector("#integrantes");
  integrantes.remove;
  const mayor = document.querySelector("#mayor");
  mayor.remove;
  const menor = document.querySelector("#menor");
  menor.remove;
  const promedio = document.querySelector("#promedio");
  promedio.remove;
  //const integrantes = document.querySelector("#integrantes");
  //integrantes.value = "";
}*/
