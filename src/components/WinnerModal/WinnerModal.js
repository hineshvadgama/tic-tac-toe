import React from 'react';
import './WinnerModal.css';
import TrophyImage from '../../img/trophy.png';

const WinnerModal = (props) => {

    const classColour = props.winner === 'Player One Wins!' ? 'green' : 'pink';
    const style = {backgroundColor: props.winner === 'Player Two Wins!' ? '#ff2bea' : '#4bfa4b'}

    return (

        <div className="winner-modal-container">

            <h1 className={classColour}>{props.winner}</h1>
            
            <img src={TrophyImage} />

            <button id="winner-modal-button" onClick={props.reset} style={style}>Play again!</button>

        </div>

    )

}

export default WinnerModal;
