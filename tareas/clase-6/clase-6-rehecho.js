/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad,
la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente,
borrando los inputs ya creados (investigar cómo en MDN).
*/

/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar)
 inputs+labels
para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor
 salario anual,
menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/
let $cantidadIntegrantes;
let cantidadIntegrantes;

document.querySelector("#siguiente").onclick = function (event) {
  $cantidadIntegrantes = document.querySelector("#cantidad-integrantes");
  cantidadIntegrantes = Number($cantidadIntegrantes.value);

  borrarIntegrantesAnteriores();
  crearIntegrantes(cantidadIntegrantes);

  event.preventDefault();
};

document.querySelector("#calcular-edades").onclick = function (event) {
  obtenerEdadIntegrantes();
  calcularMayorEdad();
  calcularMenorEdad();
  calcularPromedioEdad();

  mostrarResultadoEdades();
  event.preventDefault();
};
document.querySelector("#resetear").onclick = function resetear() {
  borrarIntegrantesAnteriores();
  ocultarBotonCalcular();
  ocultarResultados();
  borrarDatosAnteriores();
  ocultarAgragrSalarioAnual();
  ocultarBotonCalcularSalario();
  borrarSalarios();
  ocultarAgragrSalarioAnual();
  ocultarResultadoSalarios();
};

function crearIntegrantes(cantidadIntegrantes) {
  for (let i = 0; i < cantidadIntegrantes; i++) {
    crearIntegrante(i);
  }
  if (cantidadIntegrantes > 0) {
    mostrarBotonCalcular();
    mostrarAgregarSalarioAnual();
  } else {
    resetear();
  }
}

function crearIntegrante(integrante) {
  const $div = document.createElement("div");
  $div.className = "integrante";

  const $label = document.createElement("label");
  $label.textContent = `Edad del integrante ${integrante + 1}`;
  const $input = document.createElement("input");
  $input.type = "number";
  $input.className = "numero";

  $div.appendChild($label);
  $div.appendChild($input);

  const integrantes = document.querySelector("#integrantes");
  integrantes.appendChild($div);
}

function borrarIntegrantesAnteriores() {
  const $integrantes = document.querySelectorAll(".integrante");
  for (let i = 0; i < $integrantes.length; i++) {
    $integrantes[i].remove();
  }
}
let edades = [];
function obtenerEdadIntegrantes() {
  const $integrantes = document.querySelectorAll(".numero");

  for (let i = 0; i < $integrantes.length; i++) {
    edades.push(Number($integrantes[i].value));
  }

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

function calcularPromedioEdad() {
  let totalEdad = 0;
  for (let i = 0; i < edades.length; i++) {
    totalEdad += edades[i];
  }
  return totalEdad / edades.length;
}

function borrarDatosAnteriores() {
  let edades = document.querySelectorAll(".numero");
  for (let i = 0; i < edades; i++) {
    edades[i].remove();
  }
}

function ocultarResultados() {
  document.querySelector("#calculos-edad").className = "oculto";
}
function mostrarResultadoEdades() {
  document.querySelector("#calculos-edad").className = "";
  const mayorEdad = document.querySelector("#mayor-edad");
  mayorEdad.textContent = `La mayor edad es: ${calcularMayorEdad()}`;
  const menorEdad = document.querySelector("#menor-edad");
  menorEdad.textContent = `La menor edad es: ${calcularMenorEdad()}`;
  const promedioEdad = document.querySelector("#promedio-edad");
  promedioEdad.textContent = `El promedio de edad es: ${calcularPromedioEdad()}`;
}
function mostrarBotonCalcular() {
  document.querySelector("#calcular-edades").className = "";
}
function ocultarBotonCalcular() {
  document.querySelector("#calcular-edades").className = "oculto";
}
function mostrarAgregarSalarioAnual() {
  document.querySelector("#agregar-salario-anual").className = "";
}

function ocultarAgragrSalarioAnual() {
  document.querySelector("#agregar-salario-anual").className = "oculto";
}

function mostrarBotonCalcularSalario() {
  document.querySelector("#calcular-salarios").className = "";
}

function ocultarBotonCalcularSalario() {
  document.querySelector("#calcular-salarios").className = "oculto";
}

document.querySelector("#agregar-salario-anual").onclick =
  function agregarSalarioAnual() {
    for (let i = 0; i < cantidadIntegrantes; i++) {
      crearInputSalario(i);
      if (cantidadIntegrantes > 0) {
        mostrarBotonCalcularSalario();
      }
    }
  };

function crearInputSalario(integrante) {
  const $div = document.createElement("div");
  $div.className = "salario-anual";

  const $label = document.createElement("label");
  $label.textContent = `Salario anual del integrante ${integrante + 1}`;
  const $input = document.createElement("input");
  $input.type = "number";
  $input.className = "valor-salario";

  $div.appendChild($label);
  $div.appendChild($input);

  const integrantes = document.querySelector("#salario-anual");
  integrantes.appendChild($div);
}

function borrarSalarios() {
  const $salarios = document.querySelectorAll(".salario-anual");
  for (let i = 0; i < $salarios.length; i++) {
    $salarios[i].remove();
  }
}

document.querySelector("#calcular-salarios").onclick = function () {
  obtenerSalariosAnuales();
  calcularMayorSalarioAnual();
  calcularMenorSalarioAnual();
  calcularSalarioAnualPromedio();

  mostrarResultadoSalarios();
};

let salarios = [];
function obtenerSalariosAnuales() {
  const $salarios = document.querySelectorAll(".valor-salario");

  for (let i = 0; i < $salarios.length; i++) {
    salarios.push(Number($salarios[i].value));
  }

  return salarios;
}
function calcularMayorSalarioAnual() {
  let mayorSalarioAnual = salarios[0];
  for (let i = 1; i < salarios.length; i++) {
    if (salarios[i] > mayorSalarioAnual) {
      mayorSalarioAnual = salarios[i];
    }
  }
  return mayorSalarioAnual;
}
function calcularMenorSalarioAnual() {
  let menorSalarioAnual = salarios[0];
  for (let i = 1; i > salarios.length; i++) {
    if (salarios[i] > menorSalarioAnual) {
      menorSalarioAnual = salarios[i];
    }
  }
  return menorSalarioAnual;
}
function calcularSalarioAnualPromedio() {
  let totalSalarioAnual = 0;
  for (let i = 0; i < salarios.length; i++) {
    totalSalarioAnual += salarios[i];
  }
  return totalSalarioAnual / salarios.length;
}
function calcularSalarioMensualPromedio() {
  let totalSalarioAnual = 0;
  for (let i = 0; i < salarios.length; i++) {
    totalSalarioAnual += salarios[i];
  }
  return totalSalarioAnual / salarios.length / 12;
}

function ocultarResultadoSalarios() {
  document.querySelector("#calculos-salario").className = "oculto";
}

function mostrarResultadoSalarios() {
  document.querySelector("#calculos-salario").className = "";
  const mayorSalarioAnual = document.querySelector("#mayor-salario-anual");
  mayorSalarioAnual.textContent = `El mayor salario anual es: ${calcularMayorSalarioAnual()}`;
  const menorSalarioAnual = document.querySelector("#menor-salario-anual");
  menorSalarioAnual.textContent = `El menor salario anual es: ${calcularMenorSalarioAnual()}`;
  const promedioSalarioAnual = document.querySelector(
    "#promedio-salario-anual"
  );
  promedioSalarioAnual.textContent = `El promedio de salario anual es:
   ${calcularSalarioAnualPromedio()}`;
  const promedioSalarioMensual = document.querySelector(
    "#promedio-salario-mensual"
  );
  promedioSalarioMensual.textContent = `El promedio de salario mensual es: 
  ${calcularSalarioMensualPromedio()}`;
}
