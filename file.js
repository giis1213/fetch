const fetch = require('node-fetch');

async function getPokemon(pokemon) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        if (!response.ok) {
            throw new Error(`Error fetching Pokémon: ${response.statusText}`);
        }
        const data = await response.json();

        const name = data.name.charAt(0).toUpperCase() + data.name.slice(1);

        const types = data.types.map(t => t.type.name).join(', ');

        const abilities = data.abilities.map(a => a.ability.name).join(', ');

        const stats = data.stats.map(stat => `${stat.stat.name}: ${stat.base_stat}`).join('; ');

        console.log(`Nombre: ${name}`);
        console.log(`Tipo(s): ${types}`);
        console.log(`Habilidades: ${abilities}`);
        console.log(`Stats: ${stats}`);
    } catch (error) {
        console.error(error);
    }
}

getPokemon('pikachu'); 
