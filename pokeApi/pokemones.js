fetch('https://pokeapi.co/api/v2/pokemon/143')
.then(miPokemon => miPokemon.json())
.then(snorlax => {
    let element = document.getElementById('snorlax')
    element.innerHTML = `<p> Nombre: ${snorlax.name}<p>
    <img src='${snorlax.sprites.front_default}'>
    <p> Estatura: ${snorlax.height}<p><p> Peso: ${snorlax.weight}<p>`;
    console.log(snorlax)
})
.catch(error=>console.log(error))



fetch('https://pokeapi.co/api/v2/pokemon/150')
.then(miPokemon1 => miPokemon1.json())
.then(mewtwo => {
    let element1 = document.getElementById('mewtwo')
    element1.innerHTML = `<p> Nombre: ${mewtwo.name}<p>
    <img src='${mewtwo.sprites.front_default}'>
    <p> Estatura: ${mewtwo.height}<p><p> Peso: ${mewtwo.weight}<p>`;
    console.log(mewtwo)
})
.catch(error=>console.log(error))



fetch('https://pokeapi.co/api/v2/pokemon/39')
.then(miPokemon2 => miPokemon2.json())
.then(jiggly => {
    let element2 = document.getElementById('jigglypuff')
    element2.innerHTML = `<p> Nombre: ${jiggly.name}<p>
    <img src='${jiggly.sprites.front_default}'>
    <p> Estatura: ${jiggly.height}<p><p> Peso: ${jiggly.weight}<p>`;
    console.log(jiggly)
})
.catch(error=>console.log(error))
