import { computed } from 'vue'

export function useDomainVariables() {
    const isUsDomain = import.meta.env.VITE_APP_DOMAIN == 'us'

    const phoneNumber = computed(() => {
        return isUsDomain ? '+998 71 200 93 99' : '+998 71 200 93 99'
    })

    const address = computed(() => {
        return isUsDomain ? 'address_us' : 'address_uz'
    })

    const email = computed(() => {
        return isUsDomain ? 'info@ronics.uz' : 'info@ronics.uz'
    })

    const url = computed(() => {
        return isUsDomain ? '/' : '/'
    })

    const map = computed(() => {
        return isUsDomain
            ? 'https://goo.gl/maps/q9Jvx6VCU1GxkN1c7'
            : 'https://yandex.com/maps/-/CCUZF6Eq1D'
    })

    return {
        isUsDomain,
        phoneNumber,
        address,
        email,
        map,
        url,
    }
}
// +1 331 481-1908
