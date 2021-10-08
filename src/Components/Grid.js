import { GridItem } from './GridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';


export const Grid = ({ category }) => {


    const { data: gifs, loading } = useFetchGifs(category);


    return (
        <>
            <h3>{category}</h3>
            
            <div>
                {
                    gifs.map(gif => (
                        <GridItem url={gif.url} title={gif.title} key={gif.id} />
                    ))
                }
            </div>
        </>
    );
}
