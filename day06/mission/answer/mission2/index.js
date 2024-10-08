const API_URL = 'https://pokemon-api-ecru-eta.vercel.app/main';

const getPokemonData = async () => {
    try {
        let response = await fetch(API_URL);
        let data = await response.json();
        let pokemonArray = data.data;
        let answer = pokemonArray.filter((elm) => elm.color === 'green');
        console.log(answer);
    } catch (error) {
        console.log(`error : ${error}`);
    }
};

getPokemonData();
