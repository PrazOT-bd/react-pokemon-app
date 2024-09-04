import React from 'react';
import './Thumbnail.css';

function Thumbnail({ name, image, type }) {
    return (
        <div className="thumbnail" style={{ backgroundColor: getTypeColor(type) }}>
            <img src={image} alt={name} className="thumbnail-image" />
            <div className="thumbnail-name">{name}</div>
        </div>
    );
}

function getTypeColor(type) {
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
    return typeColors[type] || '#f5f5f5';
}

export default Thumbnail;
