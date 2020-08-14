import React from 'react';
import './App.css';
import Header from '../Header/Header.js';
import GameGrid from '../GameGrid/GameGrid.js';
import PlayerInfo from '../PlayerInfo/PlayerInfo.js';

const App = () => {

    return (

        <>

        <div className="desktop-app-container">

            <Header />

            <div className="page-grid">

                <div className="grid-item"><PlayerInfo playerName="Player One" symbol="O" /></div>
                <div className="grid-item"><GameGrid /></div>
                <div className="grid-item"><PlayerInfo playerName="Player Two" symbol="X" /></div>

            </div>

        </div>

        <div className="mobile-app-container">

            <Header />
            <GameGrid />
            <PlayerInfo playerName="Player One" symbol="O" />
            <PlayerInfo playerName="Player Two" symbol="X" />

        </div>

        </>

    )

}

export default App;
