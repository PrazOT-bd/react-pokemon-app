import React from 'react';
import { Link } from 'react-router-dom';
import Thumbnail from './Thumbnail';
import './PokemonGrid.css';

function PokemonGrid({ pokemons }) {
    return (
        <div className="pokemon-grid">
            {pokemons.map((pokemon, index) => (
                <Link to={`/pokemon/${pokemon.name}`} key={index} className="pokemon-item">
                    <Thumbnail
                        name={pokemon.name}
                        image={pokemon.image}
                        type={pokemon.type}
                    />
                </Link>
            ))}
        </div>
    );
}

export default PokemonGrid;
