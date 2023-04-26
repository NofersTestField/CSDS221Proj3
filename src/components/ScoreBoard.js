import React from 'react';

export const ScoreBoard = ({scores, xPlaying}) => {
    const {xScore, oScore} = scores;
    return (
        <div className='score-board'>
            <div className={`score x-score ${xPlaying && 'active'}`}>{xScore} - X</div>
            <div className={`score o-score ${!xPlaying && 'active'}`}>O - {oScore}</div>
        </div>
    );
}