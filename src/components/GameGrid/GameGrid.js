import React, { useState } from 'react';
import './GameGrid.css';

const GameGrid = () => {

    let [whichPlayersTurn, setWhichPlayersTurn] = useState(1);
    let [gridData, setGridData] = useState(
            {
                square1: '',
                square2: '',
                square3: '',
                square4: '',
                square5: '',
                square6: '',
                square7: '',
                square8: '',
                square9: ''
            }
        );
    let tempGridData;

    function handleGridSquareClick(e) {

        if (document.getElementById(e.target.id).getAttribute('data-value') === '') {

            tempGridData = gridData;

            switch (e.target.id) {
                case 'one':
                    tempGridData.square1 = whichPlayersTurn === 1 ? 'O' : 'X';
                    break;

                case 'two':
                    tempGridData.square2 = whichPlayersTurn === 1 ? 'O' : 'X';
                    break;

                case 'three':
                    tempGridData.square3 = whichPlayersTurn === 1 ? 'O' : 'X';
                    break;

                case 'four':
                    tempGridData.square4 = whichPlayersTurn === 1 ? 'O' : 'X';
                    break;

                case 'five':
                    tempGridData.square5 = whichPlayersTurn === 1 ? 'O' : 'X';
                    break;
                
                case 'six':
                    tempGridData.square6 = whichPlayersTurn === 1 ? 'O' : 'X';
                    break;

                case 'seven':
                    tempGridData.square7 = whichPlayersTurn === 1 ? 'O' : 'X';
                    break;

                case 'eight':
                    tempGridData.square8 = whichPlayersTurn === 1 ? 'O' : 'X';
                    break;
                
                case 'nine':
                    tempGridData.square9 = whichPlayersTurn === 1 ? 'O' : 'X';
                    break;

                default:
                    console.log('hey')
            }

            setGridData(tempGridData);
            setWhichPlayersTurn(whichPlayersTurn === 1 ? 2 : 1);
        }
    }

    return (

        <div className="game-grid">

            <div onClick={handleGridSquareClick} data-value={gridData.square1} id="one"   className={`grid-square top left ${gridData.square1 === 'O' ? 'green' : 'pink'}`}>{gridData.square1}</div>
            <div onClick={handleGridSquareClick} data-value={gridData.square2} id="two"   className={`grid-square top ${gridData.square2 === 'O' ? 'green' : 'pink'}`}>{gridData.square2}</div>
            <div onClick={handleGridSquareClick} data-value={gridData.square3} id="three" className={`grid-square top right ${gridData.square3 === 'O' ? 'green' : 'pink'}`}>{gridData.square3}</div>
            <div onClick={handleGridSquareClick} data-value={gridData.square4} id="four"  className={`grid-square left ${gridData.square4 === 'O' ? 'green' : 'pink'}`}>{gridData.square4}</div>
            <div onClick={handleGridSquareClick} data-value={gridData.square5} id="five"  className={`grid-square ${gridData.square5 === 'O' ? 'green' : 'pink'}`}>{gridData.square5}</div>
            <div onClick={handleGridSquareClick} data-value={gridData.square6} id="six"   className={`grid-square right ${gridData.square6 === 'O' ? 'green' : 'pink'}`}>{gridData.square6}</div>
            <div onClick={handleGridSquareClick} data-value={gridData.square7} id="seven" className={`grid-square bottom left ${gridData.square7 === 'O' ? 'green' : 'pink'}`}>{gridData.square7}</div>
            <div onClick={handleGridSquareClick} data-value={gridData.square8} id="eight" className={`grid-square bottom ${gridData.square8 === 'O' ? 'green' : 'pink'}`}>{gridData.square8}</div>
            <div onClick={handleGridSquareClick} data-value={gridData.square9} id="nine"  className={`grid-square bottom right ${gridData.square9 === 'O' ? 'green' : 'pink'}`}>{gridData.square9}</div>

        </div>

    )

}

export default GameGrid;
