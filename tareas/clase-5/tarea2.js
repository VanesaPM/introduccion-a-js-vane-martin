let primerNombre;
let segundoNombre;
let apellido;
let edad;

function guardarDatos() {
  primerNombre = document.querySelector("#primer-nombre-usuario").value;
  segundoNombre = document.querySelector("#segundo-nombre-usuario").value;
  apellido = document.querySelector("#apellido-usuario").value;
  edad = document.querySelector("#edad-usuario").value;

  const titulo = document.createElement("h2");
  titulo.textContent = "Tus datos son:";
  document.querySelector("#datos-usuario").appendChild(titulo);

  const parrafoPrimerNombre = document.createElement("p");
  parrafoPrimerNombre.textContent = primerNombre;
  document.querySelector("#datos-usuario").appendChild(parrafoPrimerNombre);

  const parrafoSegundoNombre = document.createElement("p");
  parrafoSegundoNombre.textContent = segundoNombre;
  document.querySelector("#datos-usuario").appendChild(parrafoSegundoNombre);

  const parrafoApellido = document.createElement("p");
  parrafoApellido.textContent = apellido;
  document.querySelector("#datos-usuario").appendChild(parrafoApellido);

  const parrafoEdad = document.createElement("p");
  parrafoEdad.innerHTML = edad + " años";
  document.querySelector("#datos-usuario").appendChild(parrafoEdad);

  const nuevoTitulo = document.querySelector("h1");
  nuevoTitulo.textContent = nuevoTitulo.textContent + primerNombre;
}
