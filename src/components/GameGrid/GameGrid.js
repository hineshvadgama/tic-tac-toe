import React, { useState } from 'react';
import './GameGrid.css';
import WinnerModal from '../WinnerModal/WinnerModal.js';

const GameGrid = () => {

    let tempGridData;
    const playerOneWinningText = 'Player One Wins!';
    const playerTwoWinningText = 'Player Two Wins!';
    let [winnerText, setWinnerText] = useState('Nobody');
    let [whichPlayersTurn, setWhichPlayersTurn] = useState(1);
    let [numberOfTurns, setNumberOfTurns] = useState(0);
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

    function handleGridSquareClick(e) {

        // Ensure that player hasn't clicked on already occupied square
        if (document.getElementById(e.target.id).getAttribute('data-value') === '') {

            setNumberOfTurns(numberOfTurns + 1);

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
                    console.log('Unknown square');
            }

            setGridData(tempGridData);
            setWhichPlayersTurn(whichPlayersTurn === 1 ? 2 : 1);

            if (numberOfTurns >= 4) {
                decideWinner();
            }
        }
    }

    function decideWinner() {

        if (gridData.square1 === 'O' && gridData.square2 === 'O' && gridData.square3 === 'O') {
            setWinnerText(playerOneWinningText);
        }
        else if (gridData.square1 === 'X' && gridData.square2 === 'X' && gridData.square3 === 'X') {
            setWinnerText(playerTwoWinningText);
        }
        else if (gridData.square4 === 'O' && gridData.square5 === 'O' && gridData.square6 === 'O') {
            setWinnerText(playerOneWinningText);
        }
        else if (gridData.square4 === 'X' && gridData.square5 === 'X' && gridData.square6 === 'X') {
            setWinnerText(playerTwoWinningText);
        }
        else if (gridData.square7 === 'O' && gridData.square8 === 'O' && gridData.square9 === 'O') {
            setWinnerText(playerOneWinningText);
        }
        else if (gridData.square7 === 'X' && gridData.square8 === 'X' && gridData.square9 === 'X') {
            setWinnerText(playerTwoWinningText);
        }
        else if (gridData.square1 === 'O' && gridData.square4 === 'O' && gridData.square7 === 'O') {
            setWinnerText(playerOneWinningText);
        }
        else if (gridData.square1 === 'X' && gridData.square4 === 'X' && gridData.square7 === 'X') {
            setWinnerText(playerTwoWinningText);
        }
        else if (gridData.square2 === 'O' && gridData.square5 === 'O' && gridData.square8 === 'O') {
            setWinnerText(playerOneWinningText);
        }
        else if (gridData.square2 === 'X' && gridData.square5 === 'X' && gridData.square8 === 'X') {
            setWinnerText(playerTwoWinningText;
        }
        else if (gridData.square3 === 'O' && gridData.square6 === 'O' && gridData.square9 === 'O') {
            setWinnerText(playerOneWinningText);
        }
        else if (gridData.square3 === 'X' && gridData.square6 === 'X' && gridData.square9 === 'X') {
            setWinnerText(playerTwoWinningText);
        }
        else if (gridData.square1 === 'O' && gridData.square5 === 'O' && gridData.square9 === 'O') {
            setWinnerText(playerOneWinningText);
        }
        else if (gridData.square1 === 'X' && gridData.square5 === 'X' && gridData.square9 === 'X') {
            setWinnerText(playerTwoWinningText);
        }
        else if (gridData.square3 === 'O' && gridData.square5 === 'O' && gridData.square7 === 'O') {
            setWinnerText(playerOneWinningText);
        }
        else if (gridData.square3 === 'X' && gridData.square5 === 'X' && gridData.square7 === 'X') {
            setWinnerText(playerTwoWinningText);
        }
        else if (gridData.square1 !== '' && gridData.square2 !== '' && gridData.square3 !== '' && gridData.square4 !== ''
        && gridData.square5 !== '' && gridData.square5 !== '' && gridData.square6 !== '' && gridData.square7 !== ''
        && gridData.square8 !== '' && gridData.square9 !== '' && winnerText === 'Nobody') {
            setWinnerText("It's a tie");
        }

    }

    function resetGame() {
        setWinnerText('Nobody');
        setWhichPlayersTurn(1);
        setNumberOfTurns(0);
        setGridData(
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
        )
    }

    return (

        <>

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

            { winnerText !== 'Nobody' ? <WinnerModal winner={winnerText} reset={resetGame} /> : false }

        </>

    )

}

export default GameGrid;
