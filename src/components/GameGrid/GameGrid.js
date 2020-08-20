import React, { useState, useEffect } from 'react';
import './GameGrid.css';
import WinnerModal from '../Modal/WinnerModal.js';

const GameGrid = (props) => {

    let tempGridData;
    let [winningPlayer, setWinningPlayer] = useState('Nobody');
    let [whichPlayersTurn, setWhichPlayersTurn] = useState(1);
    let [numberOfTurns, setNumberOfTurns] = useState(0);
    let [gridData, setGridData] = useState(['', '', '', '', '', '', '', '', '']);

    function handleGridSquareClick(e) {

        // Ensure that player hasn't clicked on already occupied square
        if (document.getElementById(e.target.id).getAttribute('data-value') === '') {

            tempGridData = gridData;

            switch (e.target.id) {
                case 'one':
                    tempGridData[0] = whichPlayersTurn === 1 ? 'O' : 'X';
                    break;

                case 'two':
                    tempGridData[1] = whichPlayersTurn === 1 ? 'O' : 'X';
                    break;

                case 'three':
                    tempGridData[2] = whichPlayersTurn === 1 ? 'O' : 'X';
                    break;

                case 'four':
                    tempGridData[3] = whichPlayersTurn === 1 ? 'O' : 'X';
                    break;

                case 'five':
                    tempGridData[4] = whichPlayersTurn === 1 ? 'O' : 'X';
                    break;
                
                case 'six':
                    tempGridData[5] = whichPlayersTurn === 1 ? 'O' : 'X';
                    break;

                case 'seven':
                    tempGridData[6] = whichPlayersTurn === 1 ? 'O' : 'X';
                    break;

                case 'eight':
                    tempGridData[7] = whichPlayersTurn === 1 ? 'O' : 'X';
                    break;
                
                case 'nine':
                    tempGridData[8] = whichPlayersTurn === 1 ? 'O' : 'X';
                    break;

                default:
                    console.log('Unknown square');
            }

            setNumberOfTurns(numberOfTurns = numberOfTurns + 1);

            if (numberOfTurns >= 3) {
                decideWinner();
            }

            if (props.versusMode === 'single') {
                computersTurn();
            }
            else {
                setGridData(tempGridData);
                setWhichPlayersTurn(whichPlayersTurn === 1 ? 2 : 1);
            }

        }
    }

    function computersTurn() {
        // Create an array of all the numbers that haven't been used yet.
        let emptySquares = [];
        for (let i = 0; i < tempGridData.length; i++) {
            if (tempGridData[i] === '') {
                emptySquares.push(i);
            }
        }

        // Find a random number within that set of numbers.
        const computersSquare = emptySquares[Math.floor(Math.random() * emptySquares.length)];
        // Add a X to that square
        gridData[computersSquare] = 'X';
        setGridData(gridData);

    }

    function decideWinner() {

        if (gridData[0] === 'O' && gridData[1] === 'O' && gridData[2] === 'O') {
            setWinningPlayer(props.playerOneName);
        }
        else if (gridData[0] === 'X' && gridData[1] === 'X' && gridData[2] === 'X') {
            setWinningPlayer(props.playerTwoName);
        }
        else if (gridData[3] === 'O' && gridData[4] === 'O' && gridData[5] === 'O') {
            setWinningPlayer(props.playerOneName);
        }
        else if (gridData[3] === 'X' && gridData[4] === 'X' && gridData[5] === 'X') {
            setWinningPlayer(props.playerTwoName);
        }
        else if (gridData[6] === 'O' && gridData[7] === 'O' && gridData[8] === 'O') {
            setWinningPlayer(props.playerOneName);
        }
        else if (gridData[6] === 'X' && gridData[7] === 'X' && gridData[8] === 'X') {
            setWinningPlayer(props.playerTwoName);
        }
        else if (gridData[0] === 'O' && gridData[3] === 'O' && gridData[6] === 'O') {
            setWinningPlayer(props.playerOneName);
        }
        else if (gridData[0] === 'X' && gridData[3] === 'X' && gridData[6] === 'X') {
            setWinningPlayer(props.playerTwoName);
        }
        else if (gridData[1] === 'O' && gridData[4] === 'O' && gridData[7] === 'O') {
            setWinningPlayer(props.playerOneName);
        }
        else if (gridData[1] === 'X' && gridData[4] === 'X' && gridData[7] === 'X') {
            setWinningPlayer(props.playerTwoName);
        }
        else if (gridData[2] === 'O' && gridData[5] === 'O' && gridData[8] === 'O') {
            setWinningPlayer(props.playerOneName);
        }
        else if (gridData[2] === 'X' && gridData[5] === 'X' && gridData[8] === 'X') {
            setWinningPlayer(props.playerTwoName);
        }
        else if (gridData[0] === 'O' && gridData[4] === 'O' && gridData[8] === 'O') {
            setWinningPlayer(props.playerOneName);
        }
        else if (gridData[0] === 'X' && gridData[4] === 'X' && gridData[8] === 'X') {
            setWinningPlayer(props.playerTwoName);
        }
        else if (gridData[2] === 'O' && gridData[4] === 'O' && gridData[6] === 'O') {
            setWinningPlayer(props.playerOneName);
        }
        else if (gridData[2] === 'X' && gridData[4] === 'X' && gridData[6] === 'X') {
            setWinningPlayer(props.playerTwoName);
        }
        else if (gridData[0] !== '' && gridData[1] !== '' && gridData[2] !== '' && gridData[3] !== ''
        && gridData[4] !== '' && gridData[4] !== '' && gridData[5] !== '' && gridData[6] !== ''
        && gridData[7] !== '' && gridData[8] !== '' && winningPlayer === 'Nobody') {
            setWinningPlayer('tie');
        }

    }

    function resetGame() {
        setWinningPlayer('Nobody');
        setWhichPlayersTurn(1);
        setGridData(['', '', '', '', '', '', '', '', '']);
    }

    return (

        <>

            <div className="game-grid">

                <div onClick={handleGridSquareClick} data-value={gridData[0]} id="one"   className={`grid-square top left ${gridData[0] === 'O' ? 'green' : 'pink'}`}>{gridData[0]}</div>
                <div onClick={handleGridSquareClick} data-value={gridData[1]} id="two"   className={`grid-square top ${gridData[1] === 'O' ? 'green' : 'pink'}`}>{gridData[1]}</div>
                <div onClick={handleGridSquareClick} data-value={gridData[2]} id="three" className={`grid-square top right ${gridData[2] === 'O' ? 'green' : 'pink'}`}>{gridData[2]}</div>
                <div onClick={handleGridSquareClick} data-value={gridData[3]} id="four"  className={`grid-square left ${gridData[3] === 'O' ? 'green' : 'pink'}`}>{gridData[3]}</div>
                <div onClick={handleGridSquareClick} data-value={gridData[4]} id="five"  className={`grid-square ${gridData[4] === 'O' ? 'green' : 'pink'}`}>{gridData[4]}</div>
                <div onClick={handleGridSquareClick} data-value={gridData[5]} id="six"   className={`grid-square right ${gridData[5] === 'O' ? 'green' : 'pink'}`}>{gridData[5]}</div>
                <div onClick={handleGridSquareClick} data-value={gridData[6]} id="seven" className={`grid-square bottom left ${gridData[6] === 'O' ? 'green' : 'pink'}`}>{gridData[6]}</div>
                <div onClick={handleGridSquareClick} data-value={gridData[7]} id="eight" className={`grid-square bottom ${gridData[7] === 'O' ? 'green' : 'pink'}`}>{gridData[7]}</div>
                <div onClick={handleGridSquareClick} data-value={gridData[8]} id="nine"  className={`grid-square bottom right ${gridData[8] === 'O' ? 'green' : 'pink'}`}>{gridData[8]}</div>

            </div>

            { winningPlayer !== 'Nobody' ? <WinnerModal winner={winningPlayer} reset={resetGame} /> : false }

        </>

    )

}

export default GameGrid;
