import React from 'react';
import './PokemonAbout.css';

const PokemonAbout = ({ pokemon, species }) => (
    <div className="section">
        <h3>About</h3>
        <p><strong>Type:</strong> {pokemon.types.map(typeInfo => typeInfo.type.name).join(', ')}</p>
        <p><strong>Height:</strong> {pokemon.height / 10} m</p>
        <p><strong>Weight:</strong> {pokemon.weight / 10} kg</p>
        <p><strong>Abilities:</strong> {pokemon.abilities.map(abilityInfo => abilityInfo.ability.name).join(', ')}</p>
        {species && (
            <div className="breeding">
                <h3>Breeding</h3>
                <p><strong>Gender Ratio:</strong> {species.gender_rate !== -1 ? `${species.gender_rate * 12.5}% male, ${(8 - species.gender_rate) * 12.5}% female` : "Genderless"}</p>
                <p><strong>Egg Groups:</strong> {species.egg_groups.map(group => group.name).join(', ')}</p>
                <p><strong>Hatch Steps:</strong> {255 * (species.hatch_counter + 1)} steps</p>
            </div>
        )}
    </div>
);

export default PokemonAbout;
