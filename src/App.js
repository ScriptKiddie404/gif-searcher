import React, { useState } from 'react';
import { AddCategory } from './Components/AddCategory';
import { Grid } from './Components/Grid';

export const App = () => {

    const [categories, setCategories] = useState([]);

    return (
        <>
            <h1>Gif Searcher App</h1>
            <AddCategory setCategories={setCategories} />
            <hr />
            <Grid categories={categories} />
        </>
    )
}
