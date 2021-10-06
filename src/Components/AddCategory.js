import React from 'react'
import { useState } from 'react';

export const AddCategory = () => {

    const [inputState, setinputState] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

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
