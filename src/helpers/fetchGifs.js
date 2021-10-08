export const fetchGifs = async (category) => {

    const APIKey = 'XETMpsYmiA3J11zhFZj7G0CCX8pRTyy6';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKey}&q=${encodeURI(category)}&limit=10`;
    const response = await fetch(url);

    const { data } = await response.json();
    const gifs = data.map(gif => {
        return {
            id: gif.id,
            title: gif.tile,
            url: gif.images.fixed_height.url
        };
    });

    return gifs;

}