import React from 'react';
import './SectionButtons.css';

const SectionButtons = ({ activeSection, setActiveSection }) => (
    <div className="section-buttons">
        <button className={activeSection === 'about' ? 'active' : ''} onClick={() => setActiveSection('about')}>About</button>
        <button className={activeSection === 'stats' ? 'active' : ''} onClick={() => setActiveSection('stats')}>Base Stats</button>
        <button className={activeSection === 'evolution' ? 'active' : ''} onClick={() => setActiveSection('evolution')}>Evolution</button>
        <button className={activeSection === 'moves' ? 'active' : ''} onClick={() => setActiveSection('moves')}>Moves</button>
    </div>
);

export default SectionButtons;
