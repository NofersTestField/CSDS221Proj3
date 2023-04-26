import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-regular-svg-icons'

export const Box = ({value, handleClick}) => {
    return (
        <button className={`box ${value === null ? '' : value === "X" ? 'x-box' : 'o-box'}`} onClick={handleClick}>
            { value === null ? "" : value === "X" ? <FontAwesomeIcon className='icons' icon={faXmark} /> : <FontAwesomeIcon className='icons' icon={faCircle} /> }
        </button>
    );
}