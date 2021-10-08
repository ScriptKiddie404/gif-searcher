import React from 'react';

export const GridItem = ({ url, title }) => {
    // https://animate.style/
    return (
        <img className={"animate__animated animate__backInUp"} src={url} alt={title} />
    );
}
