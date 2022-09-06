//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

function guardarValores() {
  const segundos = document.querySelectorAll(".segundos");
  const minutos = document.querySelectorAll(".minutos");
  const horas = document.querySelectorAll(".horas");

  let totalSegundos = 0;
  for (let i = 0; i < segundos.length; i++) {
    totalSegundos = totalSegundos + Number(segundos[i].value);
  }

  let totalMinutos = 0;
  for (let i = 0; i < minutos.length; i++) {
    totalMinutos = totalMinutos + Number(minutos[i].value);
  }

  let totalHoras = 0;
  for (let i = 0; i < horas.length; i++) {
    totalHoras = totalHoras + Number(horas[i].value);
  }
  while ((totalSegundos > 59, totalMinutos > 59)) {
    totalSegundos = totalSegundos - 60;
    totalMinutos = totalMinutos + 1 - 60;
    totalHoras = totalHoras + 1;
  }

  const parrafoHoras = document.createElement("p");
  parrafoHoras.textContent = totalHoras + " horas";
  document.querySelector("#total-horas").appendChild(parrafoHoras);

  const parrafoMinutos = document.createElement("p");
  parrafoMinutos.textContent = totalMinutos + " minutos";
  document.querySelector("#total-minutos").appendChild(parrafoMinutos);

  const parrafoSegundos = document.createElement("p");
  parrafoSegundos.textContent = totalSegundos + " segundos";
  document.querySelector("#total-segundos").appendChild(parrafoSegundos);
}
