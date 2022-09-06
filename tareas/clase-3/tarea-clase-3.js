// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.



/*let nombreUsuario = prompt('Cual es tu nombre?')
const miNombre = 'Vanesa'
let nombrePariente = 'Osvaldo'

if (nombreUsuario === miNombre){
    console.log(`Hola Tocayo, yo tambien me llamo ${miNombre}`)
}else if (nombreUsuario === nombrePariente){
    console.log(`Hola ${nombreUsuario} te llamas igual que mi primo` )
}else console.log(`Hola ${nombreUsuario}`)





function calcularmiEdad (numero1, numero2){
    return numero1 - numero2
}

/*let edadUsuario = Number(prompt('Cuantos años tenes?'))
let anioActual = 2022
const anioNacimiento = 1973
const miEdad = calcularmiEdad(anioActual, anioNacimiento)

if (edadUsuario < miEdad){
    console.log('Sos menor que yo')
}else if (edadUsuario > miEdad){
    console.log('Sos mayor que yo')
}else if (edadUsuario === miEdad){
    console.log('Tenemos la misma edad')
}else console.log('Por favor ingresa un numero')*/





let pedirDni = prompt('Tenes documento? ' + 'Contesta si o no');
let preguntarEdad;


if (pedirDni.toLowerCase() === 'si'){
    preguntarEdad = Number(prompt('Cuantos años tenes?'));
}if (preguntarEdad >= 18){
    console.log('Podes entrar al bar');
}else if (preguntarEdad < 18){
    console.log('Sos menor de edad, no podes entrar');
}else if (pedirDni.toLowerCase() === 'no'){
    console.log('Sin documento no podes entrar');
}else{ 
    console.log('No entiendo tu respuesta')
}