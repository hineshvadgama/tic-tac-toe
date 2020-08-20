import React, { useState, useEffect } from 'react';
import './App.css';
import Header from '../Header/Header.js';
import GameGrid from '../GameGrid/GameGrid.js';
import PlayerInfo from '../PlayerInfo/PlayerInfo.js';
import VSModal from '../Modal/VSModal.js';

const App = () => {

    let [versusMode, setVersusMode] = useState('not set');

    const playerOneName = versusMode === 'multi' ? 'Player One' : 'You';
    const playerTwoName = versusMode === 'multi' ? 'Player Two' : 'Computer';

    const vsModal = versusMode === 'not set' ? <VSModal singlePlayerMode={setSinglePlayerMode} multiplayerMode={setMultiplayerMode} /> : '';

    function setSinglePlayerMode() {
        setVersusMode('single');
    }

    function setMultiplayerMode() {
        setVersusMode('multi');
    }

    function returnPlayerOneComponent() {
        const playerOneComponent = versusMode !== 'not set' ? <PlayerInfo playerName={playerOneName} symbol="O" /> : '';
        return playerOneComponent;
    }

    function returnPlayerTwoComponent() {
        const playerTwoComponent = versusMode !== 'not set' ? <PlayerInfo playerName={playerTwoName} symbol="X" /> : '';
        return playerTwoComponent;
    }

    function returnGameGridComponent() {
        const gameGridComponent = versusMode !== 'not set' ? <GameGrid playerOneName={playerOneName} playerTwoName={playerTwoName} versusMode={versusMode} /> : '';
        return gameGridComponent;
    }

    return (

        <>

            <div className="desktop-app-container">

                <Header />

                {vsModal}

                <div className="page-grid">

                    <div className="grid-item">{returnPlayerOneComponent()}</div>
                    <div className="grid-item">{returnGameGridComponent()}</div>
                    <div className="grid-item">{returnPlayerTwoComponent()}</div>

                </div>

            </div>

            <div className="mobile-app-container">

                <Header />

                {vsModal}

                {returnGameGridComponent()}
                {returnPlayerOneComponent()}
                {returnPlayerTwoComponent()}

            </div>

        </>

    )

}

export default App;
