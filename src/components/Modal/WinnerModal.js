import React from 'react';
import './Modal.css';
import TrophyImage from '../../img/trophy.png';

const WinnerModal = (props) => {

    const classColour = props.winner === 'Player One' || props.winner === 'You' ? 'green' : 'pink';
    const buttonStyle = {backgroundColor: props.winner === 'Player Two' || props.winner === 'Computer' ? '#ff2bea' : '#4bfa4b'}
    let winnerHeaderText = '';
    
    if (props.winner === 'Player One') {
        winnerHeaderText = `${props.winner} Wins!`;
    }
    else if (props.winner === 'Player Two') {
        winnerHeaderText = `${props.winner} Wins!`;
    }
    else if (props.winner === 'You') {
        winnerHeaderText = `${props.winner} Won!`;
    }
    else if (props.winner === 'Computer') {
        winnerHeaderText = 'You Lost';
    }
    else if (props.winner === 'tie') {
        winnerHeaderText = "It's a tie";
    }

    return (

        <div className="modal-container" id={props.id}>

            <h1 className={classColour}>{winnerHeaderText}</h1>
            
            <img src={TrophyImage} />

            <div className="modal-button-container">
                <button id="modal-button" onClick={props.reset} style={buttonStyle}>Play again!</button>
            </div>

        </div>

    )

}

export default WinnerModal;
