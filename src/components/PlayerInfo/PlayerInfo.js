import React from 'react';
import './PlayerInfo.css';  

const PlayerInfo = (props) => {

    return (

        <>
            <h1 className={`player-info ${props.playerName === 'Player One' ? 'green' : 'pink'}`}>{props.playerName}</h1>
            <h1 className={`player-info ${props.playerName === 'Player One' ? 'green' : 'pink'}`}>{props.symbol}</h1>
        </>

    )

}

export default PlayerInfo;
