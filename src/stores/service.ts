import { defineStore } from 'pinia'
import axios from '@/plugins/axios'
import {
    ServiceTypes,
    ServiceTypeListSerializer,
    ServiceMiniSerializer,
    ServiceSingleTypes,
} from '@/types/components/service.types'

export const useServiceStore = defineStore('Service', {
    state: () => {
        return {
            result: [] as ServiceTypeListSerializer[],
            selectedService: {} as ServiceMiniSerializer,
            dropdownServices: [],
            currentService: {} as ServiceSingleTypes,
        }
    },

    actions: {
        async get() {
            const res = await axios.get<ServiceTypes>('/service-list/')
            this.result = res.data.results
        },

        async getAllServiceTitle() {
            const res = await axios.get('/services/')
            this.dropdownServices = res.data.results
        },

        async getServiceDetailBySlug(slug: string) {
            const res = await axios.get<ServiceSingleTypes>(
                `/service/detail/${slug}/`
            )
            this.currentService = res.data
        },
    },
})
