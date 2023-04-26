import React from 'react';

import { Box } from './Box';

export const PlayBoard = ({board, handleClick}) => {
    return (
        <div className='play-board'>
            {board.map((value, idx) => {
                return <Box value={value} handleClick={() => value === null && handleClick(idx)} key={idx} />
            })}
        </div>
    );
}