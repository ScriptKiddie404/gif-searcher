import { GridItem } from './GridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';


export const Grid = ({ category }) => {


    const { data: gifs } = useFetchGifs(category);


    return (
        <>
            <div className="general_grid">
                {
                    gifs.map(gif => (
                        <GridItem url={gif.url} title={gif.title} key={gif.id} />
                    ))
                }
            </div>
        </>
    );
}
