const fetchPokemon = () => {
  const pokeNameInput = document.getElementById("pokeName");
  let pokeName = pokeNameInput.value;
  pokeName = pokeName.toLowerCase();
  const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
  fetch(url)
    .then((res) => {
      if (res.status != "200") {
        console.log(res);
        pokeImage("./assets/img/sad.gif");
      } else {
        return res.json();
      }
    })
    .then((data) => {
      if (data) {
        console.log(data);
        let pokeImg = data.sprites.other.home.front_default;
        pokeImage(pokeImg);
        console.log(pokeImg);

        let pokenombre = data.species.name;
        let poketipo = data.types[0].type.name;
        let pokemov1 = data.moves[0].move.name;
        let pokemov2 = data.moves[1].move.name;
        let pokemov3 = data.moves[2].move.name;
        let pokehp = data.stats[0].base_stat;
        let pokeataque = data.stats[1].base_stat;
        let pokedefensa = data.stats[2].base_stat;

        const nombre = document.getElementById("nombre");
        nombre.innerHTML = pokenombre;

        const tipo = document.getElementById("tipo");
        tipo.innerHTML = poketipo;

        const mov1 = document.getElementById("mov1");
        mov1.innerHTML = pokemov1;
        const mov2 = document.getElementById("mov2");
        mov2.innerHTML = pokemov2;
        const mov3 = document.getElementById("mov3");
        mov3.innerHTML = pokemov3;

        const hp = document.getElementById("hp");
        hp.innerHTML = pokehp;

        const ataque = document.getElementById("ataque");
        ataque.innerHTML = pokeataque;
        const defensa = document.getElementById("defensa");
        defensa.innerHTML = pokedefensa;
      }
    });
};

const pokeImage = (url) => {
  const pokePhoto = document.getElementById("pokeImg");
  pokePhoto.src = url;
};
