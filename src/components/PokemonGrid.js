import React from 'react';
import PokemonItem from './PokemonItem';
import './PokemonGrid.css';

function PokemonGrid({ pokemons }) {
    return (
        <div className="pokemon-grid">
            {pokemons.map((pokemon, index) => (
                <PokemonItem key={index} pokemon={pokemon} />
            ))}
        </div>
    );
}

export default PokemonGrid;
