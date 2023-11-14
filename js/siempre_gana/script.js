// Este es un programa que nunca pierde
// 1. Le preguntamos al usuario que elija un número
const bienvenida = 'Hola, escribe un número'
const eleccion_usuario = prompt(bienvenida)

// 2. Elegimos un número 1 mayor
const eleccion_programa = (eleccion_usuario + 1)

// 3. Le avisamos al usuario que perdió
alert('Yo elegí ' + eleccion_programa + '. Por lo tanto usted perdió.')
