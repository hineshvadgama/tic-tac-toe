import React from 'react';

const PlayerInfo = (props) => {

    return (

        <>
            <h2>{props.playerName}</h2>
            <strong>{props.symbol}</strong>
        </>

    )

}

export default PlayerInfo;
