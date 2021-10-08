import { useState, useEffect } from "react";
import { fetchGifs } from "../helpers/fetchGifs";


export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {

        fetchGifs(category).then(gifs => {
            setTimeout(() => {
                setState({
                    data: gifs,
                    loading: false
                });
            }, 1500);
        });

    }, [category]);

    return state;


}
