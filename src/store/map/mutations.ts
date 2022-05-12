import mapboxgl from 'mapbox-gl';
import { MutationTree } from 'vuex';
import { MapState } from './state';
import { Feature } from '@/interfaces/places';

const mutation: MutationTree<MapState> = {
    setMap(state: MapState, map: mapboxgl.Map) {
        state.map = map;
    },

    setPlaceMakers(state, places: Feature[]) {
        // Delete markers
        state.markers.forEach(marker => marker.remove());
        state.markers = [];

        if (!state.map) return;

        // Create the new markers
        for (const place of places) {
            const [lng, lat] = place.center;

            const popup = new mapboxgl.Popup({ offset: [0, -25] })
                .setLngLat([lng, lat])
                .setHTML(`
                    <h4>${ place.text }</h4>
                    <p>${ place.place_name }</p>
                `);

            const marker = new mapboxgl.Marker()
                .setLngLat([lng, lat])
                .setPopup(popup)
                .addTo(state.map);

            state.markers.push(marker);
        }
    }
}

export default mutation;