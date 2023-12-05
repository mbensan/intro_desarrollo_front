function add_pokemon_list () {
  // 1. Nos traemos el ROW
  const pokemones_row = document.querySelector('#pokemones')
  // 2. Iteramos desde el 1 al 40, agregando las respectivas imagenes a un string vació
  let pokemones_html = ''
  for (let i=1; i<=40; i++) {
    pokemones_html += `
      <div class="col-3 p-3 poke-col">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png" class="w-100 d-block" alt="pomeon imagen" onclick="mostrar_detalle(${i})">
      </div>
    `
  }

  // 3. Agrego el string formado al tag pokemones_row
  pokemones_row.innerHTML = pokemones_html
}

add_pokemon_list()

async function mostrar_detalle(pokemon_id) {
  // 0. Nos traemos las etiquetas a utilizar
  const poke_img = document.querySelector('#poke-img')
  const poke_nombre = document.querySelector('#poke-nombre')
  const poke_tipo = document.querySelector('#poke-tipo')
  const poke_peso = document.querySelector('#poke-peso')


  // 1. Vamos a buscar los datos del pokemon solicitado
  let resp = await fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon_id)

  // 2. Desempaquetamos los datos
  const pokemon = await resp.json()

  // 3. Agregamos la imagen del pokemon
  poke_img.setAttribute('src', pokemon.sprites.front_shiny)

  // 4. Agregamos los datos del pokemon
  poke_nombre.innerHTML = pokemon.name
  poke_tipo.innerHTML = pokemon.types[0].type.name
  poke_peso.innerHTML = pokemon.weight
  console.log(pokemon);

}
