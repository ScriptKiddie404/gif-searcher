import React, { useState, useEffect } from 'react'
import { GridItem } from './GridItem';
import { fetchGifs } from '../helpers/fetchGifs';


export const Grid = ({ categories }) => {

    const [images, setimages] = useState([]);

    useEffect(() => {

        fetchGifs(categories).then(data => {
            setimages(data);
        });

    }, [categories]);


    return (
        <>
            {
                images.map(image => (
                    <GridItem url={image.url} title={image.title} key={image.id} />
                ))
            }
        </>
    );
}
