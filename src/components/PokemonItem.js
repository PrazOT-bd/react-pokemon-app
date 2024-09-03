import React from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import './PokemonItem.css';

function PokemonItem({ pokemon }) {
    return (
        <Link to={`/pokemon/${pokemon.name}`} className="pokemon-item">
            <LazyLoad height={96} offset={100} once>
                <img src={pokemon.image} alt={pokemon.name} />
            </LazyLoad>
            <p>{pokemon.name}</p>
        </Link>
    );
}

export default PokemonItem;
