import { useMapStore, usePlacesStore } from '@/composables';
import { computed, defineComponent } from 'vue';

export default defineComponent({
    name: 'MyLocationBtn',
    setup() {
        const { userLocation, isUserLocationReady } = usePlacesStore();
        const { map, isMapReady } = useMapStore();

        return {
            isBtnReady: computed<boolean>(() => isUserLocationReady.value && isMapReady.value),

            onMyLocationClick: () => {
                map.value?.flyTo({
                    center: userLocation.value,
                    zoom: 14
                })
            }
        }
    },
})