import axios from 'axios';

const API_URL = 'https://pokeapi.co/api/v2/';

export const getPokemonList = (offset, limit) => {
    return axios.get(`${API_URL}pokemon?offset=${offset}&limit=${limit}`);
};

export const getPokemonDetail = (name) => {
    return axios.get(`${API_URL}pokemon/${name}`);
};

export const getEvolutionChain = (url) => {
    return axios.get(url);
};
