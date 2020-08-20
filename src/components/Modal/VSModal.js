import React from 'react';
import './Modal.css';
import TrophyImage from '../../img/trophy.png';

const VSModal = (props) => {

    return (

        <div className="modal-container">

            <h1 className="green">Select vs Mode</h1>

            <img src={TrophyImage} />

            <button id="modal-button" onClick={props.singlePlayerMode}>vs Computer</button>
            <button id="modal-button" onClick={props.multiplayerMode}>vs Human</button>
            
        </div>

    )

}

export default VSModal;
