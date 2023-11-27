function modificar_dom () {
  const h5_animales = document.querySelectorAll('h5.card-title');
  // 1. Moficamos el color del Leon
  h5_animales[0].style.color = 'green'
  // 2. Subrallamos la oveja
  h5_animales[1].style['text-decoration'] = 'underline'
  // 3. Podemos añadir una clase a la Vaca
  h5_animales[2].classList.add('text-center')
  console.log(h5_animales)

  // 4. Podemos modificar las clases y los atributos de un TAG
  const foto_zoo = document.querySelector('#foto-zoo')
  foto_zoo.style.width = '100%'
  const antiguo_src = foto_zoo.getAttribute('src')
  console.log('El SRC antiguo de la foto de portada es: ' + antiguo_src)

  foto_zoo.setAttribute('src', 'dinozoo.jpg')

  // 5. Podemos modificar el contenido (sólo texto o html también) de una etiqueta
  h5_animales[3].textContent = '<i>Elefante Fresia</i>'
  h5_animales[3].innerHTML = '<i>Elefante Fresia</i>'
}
modificar_dom()