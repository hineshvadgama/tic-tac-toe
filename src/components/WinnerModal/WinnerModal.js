import React from 'react';
import './WinnerModal.css';

const WinnerModal = (props) => {

    return (

        <div className="winner-modal-container">

            <h1 className="green">Player One Wins!</h1>
            
            <img src="../../img/trophy.png" />

            <button id="winner-modal-button">Play again!</button>

        </div>

    )

}

export default WinnerModal;
