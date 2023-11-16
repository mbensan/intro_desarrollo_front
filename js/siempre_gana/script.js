// Este es un programa que nunca pierde
// 1. Le preguntamos al usuario que elija un número
const bienvenida = 'Hola, escribe un número'
let eleccion_usuario = prompt(bienvenida)

// 1.5 Transformar la "eleccion_usuario" a número entero
eleccion_usuario = parseInt(eleccion_usuario)

// 2. Elegimos un número 1 mayor
const eleccion_programa = (eleccion_usuario + 1)

// 3. Le avisamos al usuario que perdió
alert('Yo elegí ' + eleccion_programa + '. Por lo tanto usted perdió.')
