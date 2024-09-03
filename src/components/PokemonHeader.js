import React from 'react';
import './PokemonHeader.css';

const PokemonHeader = ({ pokemon }) => (
    <div className="pokemon-header">
        <h1>{pokemon.name}</h1>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} className="pokemon-image" />
    </div>
);

export default PokemonHeader;
