import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaArrowLeft } from 'react-icons/fa';
import { getPokemonDetail, getEvolutionChain } from '../api';
import PokemonBackground from './PokemonBackground';
import PokemonHeader from './PokemonHeader';
import PokemonAbout from './PokemonAbout';
import PokemonStats from './PokemonStats';
import PokemonEvolution from './PokemonEvolution';
import PokemonMoves from './PokemonMoves';
import SectionButtons from './SectionButtons';
import './PokemonDetail.css';

function PokemonDetail() {
    const { name } = useParams();
    const navigate = useNavigate();
    const [pokemon, setPokemon] = useState(null);
    const [species, setSpecies] = useState(null);
    const [evolution, setEvolution] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [activeSection, setActiveSection] = useState('about');

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                setLoading(true);
                const response = await getPokemonDetail(name);
                setPokemon(response.data);

                const speciesResponse = await axios.get(response.data.species.url);
                setSpecies(speciesResponse.data);
                const evolutionResponse = await getEvolutionChain(speciesResponse.data.evolution_chain.url);
                setEvolution(parseEvolutionChain(evolutionResponse.data.chain));
            } catch (err) {
                console.error('Failed to load Pokémon details:', err);
                setError('Failed to load Pokémon details. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchPokemon();
    }, [name]);

    const parseEvolutionChain = (chain) => {
        let evolutions = [];
        let current = chain;

        do {
            evolutions.push({
                species_name: current.species.name,
                min_level: current.evolution_details[0]?.min_level || 1,
                trigger_name: current.evolution_details[0]?.trigger.name || null,
                item: current.evolution_details[0]?.item || null
            });
            current = current.evolves_to[0];
        } while (current && current.evolves_to);

        return evolutions;
    };

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    if (error) {
        return <div className="error">{error}</div>;
    }

    if (!pokemon) {
        return null;
    }

    return (
        <PokemonBackground types={pokemon.types}>
            <div className="pokemon-detail">
                <div className="back-arrow" onClick={() => navigate('/')}>
                    <FaArrowLeft size={30} />
                </div>
                <div className="pokemon-sn"># {pokemon.id}</div> 
                <PokemonHeader pokemon={pokemon} />
                <SectionButtons activeSection={activeSection} setActiveSection={setActiveSection} />
                {activeSection === 'about' && <PokemonAbout pokemon={pokemon} species={species} />}
                {activeSection === 'stats' && <PokemonStats stats={pokemon.stats} />}
                {activeSection === 'evolution' && <PokemonEvolution evolution={evolution} />}
                {activeSection === 'moves' && <PokemonMoves moves={pokemon.moves} />}
            </div>
        </PokemonBackground>
    );
}

export default PokemonDetail;
