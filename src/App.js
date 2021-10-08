import React, { useState } from 'react';
import { AddCategory } from './Components/AddCategory';
import { Grid } from './Components/Grid';

export const App = () => {

    const [category, setCategory] = useState('Dog');

    return (
        <>
            <div className="search_section">
                <h1>GIF SEARCHER APP</h1>
                <AddCategory setCategory={setCategory} />
            </div>
            <Grid category={category} />
        </>
    )
}
