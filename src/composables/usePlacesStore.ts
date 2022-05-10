import { onMounted } from 'vue';
import { useStore } from 'vuex';
import { StateInterface } from '@/store';

export const usePlacesStore = () => {
    const store = useStore<StateInterface>();

    onMounted(() => {
        if (!store.getters['places/isUserLocationReady']) {
            store.dispatch('places/getIinitialLocation');
        }
    });

    return {

    }
}