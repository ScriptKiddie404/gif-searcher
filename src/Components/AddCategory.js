import React from 'react'
import { useState } from 'react';

export const AddCategory = ({ setCategory }) => {

    const [inputState, setinputState] = useState('');

    const handleSubmit = (e) => {

        e.preventDefault();

        if (inputState.trim().length > 0) {
            setCategory(inputState);
            setinputState('');
        }

    }

    const handleInputChange = (e) => {
        setinputState(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputState}
                onChange={handleInputChange}
                placeholder={"Search something..."}
            />
        </form>
    )
}
