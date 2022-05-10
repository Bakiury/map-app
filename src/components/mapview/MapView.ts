import { defineComponent } from 'vue';
import { usePlacesStore } from '@/composables';

export default defineComponent({
    name: 'MapView',
    setup() {
        const { isLoading, userLocation, isUserLocationReady } = usePlacesStore();

        return {
            isLoading,
            userLocation,
            isUserLocationReady
        }
    },
})