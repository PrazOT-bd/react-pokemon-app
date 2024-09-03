import React from 'react';

const typeColors = {
    grass: '#78C850',
    fire: '#F08030',
    water: '#6890F0',
    bug: '#A8B820',
    normal: '#A8A878',
    poison: '#A040A0',
    electric: '#F8D030',
    ground: '#E0C068',
    fairy: '#EE99AC',
    fighting: '#C03028',
    psychic: '#F85888',
    rock: '#B8A038',
    ghost: '#705898',
    ice: '#98D8D8',
    dragon: '#7038F8',
    dark: '#705848',
    steel: '#B8B8D0',
    flying: '#A890F0',
};

const PokemonBackground = ({ types, children }) => {
    const backgroundColor = types && types.length > 0 ? typeColors[types[0].type.name] || '#f5f5f5' : '#ffffff';

    return (
        <div style={{ backgroundColor }}>
            {children}
        </div>
    );
};

export default PokemonBackground;
