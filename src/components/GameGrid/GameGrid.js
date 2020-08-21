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

        const elementId = e.target.id;
        const element = document.getElementById(elementId);

        // Ensure that player hasn't clicked on already occupied square
        if (element.getAttribute('data-value') === '') {

            tempGridData = gridData;

            // Set the square to O or X depending on which players turn it is
            // In single player mode this will always be 1
            tempGridData[elementId] = whichPlayersTurn === 1 ? 'O' : 'X';
            element.setAttribute('data-value', `${whichPlayersTurn === 1 ? 'O' : 'X'}`);

            setNumberOfTurns(numberOfTurns = numberOfTurns + 1);

            if (numberOfTurns >= 5) {
                decideWinner();
            }

            if (props.versusMode === 'single') {
                if (numberOfTurns < 9) {
                    computersTurn();
                }
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

        // Find a random number within the emptySquares array.
        const computersSquare = emptySquares[Math.floor(Math.random() * emptySquares.length)];


        // Add a X to that square
        gridData[computersSquare] = 'X';
        document.getElementById(computersSquare).setAttribute('data-value', 'X');
        setGridData(gridData);
        setNumberOfTurns(numberOfTurns = numberOfTurns + 1);
        if (numberOfTurns >= 5) {
            decideWinner();
        }

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
        setNumberOfTurns(0);

        for (let j = 0; j <= 8; j++) {
            document.getElementById(j).setAttribute('data-value', '');
        }
    }

    return (

        <>

            <div className="game-grid">

                <div onClick={handleGridSquareClick} data-value={gridData[0]} id="0"   className={`grid-square top left ${gridData[0] === 'O' ? 'green' : 'pink'}`}>{gridData[0]}</div>
                <div onClick={handleGridSquareClick} data-value={gridData[1]} id="1"   className={`grid-square top ${gridData[1] === 'O' ? 'green' : 'pink'}`}>{gridData[1]}</div>
                <div onClick={handleGridSquareClick} data-value={gridData[2]} id="2" className={`grid-square top right ${gridData[2] === 'O' ? 'green' : 'pink'}`}>{gridData[2]}</div>
                <div onClick={handleGridSquareClick} data-value={gridData[3]} id="3"  className={`grid-square left ${gridData[3] === 'O' ? 'green' : 'pink'}`}>{gridData[3]}</div>
                <div onClick={handleGridSquareClick} data-value={gridData[4]} id="4"  className={`grid-square ${gridData[4] === 'O' ? 'green' : 'pink'}`}>{gridData[4]}</div>
                <div onClick={handleGridSquareClick} data-value={gridData[5]} id="5"   className={`grid-square right ${gridData[5] === 'O' ? 'green' : 'pink'}`}>{gridData[5]}</div>
                <div onClick={handleGridSquareClick} data-value={gridData[6]} id="6" className={`grid-square bottom left ${gridData[6] === 'O' ? 'green' : 'pink'}`}>{gridData[6]}</div>
                <div onClick={handleGridSquareClick} data-value={gridData[7]} id="7" className={`grid-square bottom ${gridData[7] === 'O' ? 'green' : 'pink'}`}>{gridData[7]}</div>
                <div onClick={handleGridSquareClick} data-value={gridData[8]} id="8"  className={`grid-square bottom right ${gridData[8] === 'O' ? 'green' : 'pink'}`}>{gridData[8]}</div>

            </div>

            { winningPlayer !== 'Nobody' ? <WinnerModal id="vsModal" winner={winningPlayer} reset={resetGame} /> : false }

        </>

    )

}

export default GameGrid;
