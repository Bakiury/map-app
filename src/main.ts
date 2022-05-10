import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
mapboxgl.accessToken = 'pk.eyJ1IjoiYmFraXVyeSIsImEiOiJjbDMwaW03MzkxcDZsM2ZwMmZnemNzNzI4In0.U4xGtcGL6tB4an3ShYfGpw';

if (!navigator.geolocation) {
    throw new Error('Tu navegador no soporta el Geolocation');
}

createApp(App)
    .use(store)
    .use(router)
    .mount('#app');
