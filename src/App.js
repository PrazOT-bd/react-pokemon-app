import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PokemonList from './components/PokemonList';
import PokemonDetail from './components/PokemonDetail';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<PokemonList />} />
                    <Route path="/pokemon/:name" element={<PokemonDetail />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
