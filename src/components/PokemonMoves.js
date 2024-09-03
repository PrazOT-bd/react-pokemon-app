import React from 'react';
import './PokemonMoves.css';

const PokemonMoves = ({ moves }) => (
    <div className="section moves">
        <h3>Moves</h3>
        <ul>
            {moves.slice(0, 10).map((moveInfo, index) => (
                <li key={index}>
                    {moveInfo.move.name}
                </li>
            ))}
        </ul>
        {moves.length > 10 && <p>...and more</p>}
    </div>
);

export default PokemonMoves;
