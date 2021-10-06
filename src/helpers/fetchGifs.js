export const fetchGifs = async (category) => {

    const APIKey = 'XETMpsYmiA3J11zhFZj7G0CCX8pRTyy6';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKey}&q=${encodeURI(category)}&limit=10`;
    const response = await fetch(url);
    const { data } = await response.json();

    return data;

}