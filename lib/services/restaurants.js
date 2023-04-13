const API_KEY = 'AIzaSyBuwvMIUfuI5y4RBYDE1W2lvgbsgR0jJV4';
const ENDPOINT = 'https://maps.googleapis.com/maps/api/place/textsearch/json';

export const searchRestaurants = async ({ search, }) => {
    console.log(search);
    if (search === '') return null

    try {
        const response = await fetch(`${ENDPOINT}?query=${search}&key=${API_KEY}`)
        const json = await response.json()

        const restaurants = json.Search
        return restaurants?.map(movie => ({
            id: movie.imdbID,
            title: movie.Title,
            year: movie.Year,
            type: movie.Type,
            poster: movie.Poster,
        }))
    } catch (e) {
        throw new error('Error searching restaurants')
    }
}