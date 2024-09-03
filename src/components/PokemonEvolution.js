import React from 'react';
import './PokemonEvolution.css';

const PokemonEvolution = ({ evolution }) => (
    <div className="section">
        <h3>Evolution</h3>
        <ul>
            {evolution.map((evo, index) => (
                <li key={index}>
                    {evo.species_name} (Level {evo.min_level}) - {evo.trigger_name}
                </li>
            ))}
        </ul>
    </div>
);

export default PokemonEvolution;
