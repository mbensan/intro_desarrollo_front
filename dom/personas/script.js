const form_nueva_persona = document.querySelector('#form-nueva-persona')

form_nueva_persona.addEventListener('submit', function add_persona(event) {
  // 0. Evitamos que se recargue la página 
  event.preventDefault()

  // 1. Obtenemos las etiquetas
  const input_nombre = document.querySelector('#nombre')
  const input_descripcion = document.querySelector('#descripcion')
  const input_foto_url = document.querySelector('#foto_url')

  const row_personas = document.querySelector('#personas')

  // 2. Obtenemos los valores (casi siempre vienen como texto)
  const nombre = input_nombre.value
  const descripcion = input_descripcion.value
  const foto_url = input_foto_url.value

  // 3. Agregamos la nueva CARD a la row_personas
  row_personas.innerHTML += `
    <div class="col-4">
      <div class="card">
        <img src="${foto_url}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${nombre}</h5>
          <p class="card-text">${descripcion}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  `

  // 4.Limpiamos los campos del formulario
  input_nombre.value = ''
  input_descripcion.value = ''
  input_foto_url.value = ''

  console.log('Llegamos al callback!!');
})