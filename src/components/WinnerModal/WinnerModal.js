import React from 'react';
import './WinnerModal.css';

const WinnerModal = (props) => {

    const classColour = props.winner === 'Player One' ? 'green' : 'pink';
    const style = {backgroundColor: props.winner === 'Player One' ? '##4bfa4b' : '#ff2bea'}

    return (

        <div className="winner-modal-container">

            <h1 className={classColour}>{props.winner} Wins!</h1>
            
            <img src="../../img/trophy.png" />

            <button id="winner-modal-button" style={style}>Play again!</button>

        </div>

    )

}

export default WinnerModal;
