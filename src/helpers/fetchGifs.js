
export const fetchGifs = async () => {

    const APIkey = 'XETMpsYmiA3J11zhFZj7G0CCX8pRTyy6';
    const url = `api.giphy.com/v1/gifs/search?api_key=${APIkey}&q=Rick and Morty&limit=10`;
    const response = await fetch(url);
    const data = await response.json();

    return data;

}
