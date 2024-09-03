import React from 'react';
import './PokemonStats.css';

const PokemonStats = ({ stats }) => {
    const totalBaseStats = stats.reduce((total, statInfo) => total + statInfo.base_stat, 0);

    return (
        <div className="section stats">
            <h3>Base Stats</h3>
            <ul>
                {stats.map((statInfo, index) => (
                    <li key={index}>
                        <strong>{statInfo.stat.name}:</strong> {statInfo.base_stat}
                    </li>
                ))}
            </ul>
            <div className="total-stats">
                <h3>Total:</h3> {totalBaseStats}
            </div>
        </div>
    );
};

export default PokemonStats;
