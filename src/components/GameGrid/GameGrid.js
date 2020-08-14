import React from 'react';
import './GameGrid.css';

const GameGrid = () => {

    return (

        <div className="game-grid">

            <div id="1" className="grid-square top left">X</div>
            <div id="2" className="grid-square top">O</div>
            <div id="3" className="grid-square top right">X</div>
            <div id="4" className="grid-square left">O</div>
            <div id="5" className="grid-square">X</div>
            <div id="6" className="grid-square right">O</div>
            <div id="7" className="grid-square bottom left">X</div>
            <div id="8" className="grid-square bottom">O</div>
            <div id="9" className="grid-square bottom right">X</div>

        </div>

    )

}

export default GameGrid;
