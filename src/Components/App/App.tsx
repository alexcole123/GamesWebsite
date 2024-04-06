import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Games } from '../games/games';
import { Timer } from '../timer/timer';

function App(): JSX.Element {
    const x = 10 // Semicolon Injection
    return ( 
        <div className="App">

            <h1>Ghost</h1>
            <p>Best gaming website!</p>

            <Games />
            <Timer />
        </div>
    );
}

export default App;
