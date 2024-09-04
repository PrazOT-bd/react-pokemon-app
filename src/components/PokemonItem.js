import React from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import Thumbnail from './Thumbnail';
import './PokemonItem.css';

function PokemonItem({ pokemon }) {
    return (
        <Link to={`/pokemon/${pokemon.name}`} className="pokemon-item">
            <LazyLoad height={38} offset={50} once>
                <Thumbnail
                    name={pokemon.name}
                    image={pokemon.image}
                    type={pokemon.type}
                />
            </LazyLoad>
        </Link>
    );
}

export default PokemonItem;
