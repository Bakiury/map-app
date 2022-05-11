import mapboxgl from 'mapbox-gl';
import { MutationTree } from 'vuex';
import { MapState } from './state';

const mutation: MutationTree<MapState> = {
    setMap(state: MapState, map: mapboxgl.Map) {
        state.map = map;
    }
}

export default mutation;