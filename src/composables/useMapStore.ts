import { computed } from 'vue';
import { useStore } from 'vuex'
import { StateInterface } from '@/store';
import mapboxgl from 'mapbox-gl';
import { Feature } from '@/interfaces/places';

export const useMapStore = () => {
    const store = useStore<StateInterface>();

    return {
        map: computed(() => store.state.map.map),
        distance: computed(() => store.state.map.distance),
        duration: computed(() => store.state.map.duration),

        // Getters
        isMapReady: computed<boolean>(() => store.getters['map/isMapReady']),

        // Mutations
        setMap: (map: mapboxgl.Map) => store.commit('map/setMap', map),
        setPlaceMakers: (places: Feature[]) => store.commit('map/setPlaceMakers', places),

        // Actions
    }
}