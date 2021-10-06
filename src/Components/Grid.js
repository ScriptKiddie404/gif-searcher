import React from 'react'
import { GridItem } from './GridItem';


export const Grid = ({ categories }) => {
    return (
        <>
            {
                categories.map(category => (
                    <GridItem category={category} key={category} />
                ))
            }
        </>
    );
}
