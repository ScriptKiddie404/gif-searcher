import React, { useState } from 'react';
import { AddCategory } from './Components/AddCategory';
import { Grid } from './Components/Grid';

export const App = () => {

    const [category, setCategory] = useState('Dog');

    return (
        <>
            <h1>Gif Searcher App</h1>
            <AddCategory setCategory={setCategory} />
            <hr />
            <Grid category={category} />
        </>
    )
}
