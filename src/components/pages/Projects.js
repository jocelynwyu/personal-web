import React from 'react';
import '../../App.css';
import Cards from './Cards';
import './Cards.css';

function Projects() {
    return(
        <div className='everything-container'>
            <div className='ed-title'>
                <p><br/>Projects</p>
            </div>
            <Cards />
        </div>
    );
}

export default Projects;