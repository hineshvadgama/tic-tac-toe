import React from 'react';
import './GameGrid.css';

const GameGrid = () => {

    return (

        <div className="game-grid">

            <div id="one"   className="grid-square top left">X</div>
            <div id="two"   className="grid-square top">O</div>
            <div id="three" className="grid-square top right">X</div>
            <div id="four"  className="grid-square left">O</div>
            <div id="five"  className="grid-square">X</div>
            <div id="six"   className="grid-square right">O</div>
            <div id="seven" className="grid-square bottom left">X</div>
            <div id="eight" className="grid-square bottom">O</div>
            <div id="nine"  className="grid-square bottom right">X</div>

        </div>

    )

}

export default GameGrid;
