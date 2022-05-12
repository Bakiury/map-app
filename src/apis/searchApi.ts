import axios from 'axios';

const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        language: 'es',
        access_token: 'pk.eyJ1IjoiYmFraXVyeSIsImEiOiJjbDMwaW03MzkxcDZsM2ZwMmZnemNzNzI4In0.U4xGtcGL6tB4an3ShYfGpw'
    }
});

export default searchApi;