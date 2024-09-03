import React, { useState, useEffect, useCallback } from 'react';
import { getPokemonList, getPokemonDetail } from '../api';
import SearchBar from './SearchBar';
import PokemonGrid from './PokemonGrid';
import Loading from './Loading';
import ErrorMessage from './ErrorMessage';
import './PokemonList.css';

function PokemonList() {
    const [pokemons, setPokemons] = useState([]);
    const [filteredPokemons, setFilteredPokemons] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [offset, setOffset] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [notFound, setNotFound] = useState(false);

    const loadMorePokemons = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);

            const response = await getPokemonList(offset, 20);
            const newPokemons = await Promise.all(
                response.data.results.map(async (pokemon) => {
                    try {
                        const detail = await getPokemonDetail(pokemon.name);
                        return {
                            name: pokemon.name,
                            image: detail.data.sprites.front_default,
                            type: detail.data.types[0]?.type?.name,
                        };
                    } catch (err) {
                        console.error(`Failed to load details for ${pokemon.name}:`, err);
                        return null;
                    }
                })
            );

            const validNewPokemons = newPokemons.filter(pokemon => pokemon !== null);
            setPokemons(prevPokemons => [...prevPokemons, ...validNewPokemons]);
            setOffset(prevOffset => prevOffset + 20);
        } catch (err) {
            handleErrors(err);
        } finally {
            setLoading(false);
        }
    }, [offset]);

    const handleErrors = (err) => {
        if (!err.response) {
            setError('Network error: Please check your internet connection.');
        } else if (err.response.status >= 400 && err.response.status < 500) {
            setError('Client error: Unable to fetch Pokémon data.');
        } else if (err.response.status >= 500) {
            setError('Server error: Pokémon server is unavailable.');
        } else {
            setError('An error occurred. Please try again later.');
        }
    };

    useEffect(() => {
        loadMorePokemons();
    }, [loadMorePokemons]);

    useEffect(() => {
        const results = pokemons.filter(pokemon =>
            pokemon.name.toLowerCase().includes(searchQuery)
        );
        setFilteredPokemons(results);
        setNotFound(results.length === 0 && searchQuery !== '');
    }, [pokemons, searchQuery]);

    return (
        <div className="pokemon-list">
            <h1 className="pokedex-header">Pokedex</h1>
            <SearchBar setSearchQuery={setSearchQuery} />
            {error && <ErrorMessage message={error} />}
            {notFound && <div className="not-found">No Pokémon found.</div>}
            <PokemonGrid pokemons={filteredPokemons} />
            {loading && <Loading />}
            {!loading && (
                <button onClick={loadMorePokemons} className="load-more-btn" disabled={loading}>
                    {loading ? 'Loading...' : 'Load More'}
                </button>
            )}
        </div>
    );
}

export default PokemonList;
