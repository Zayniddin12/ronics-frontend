import { defineStore } from 'pinia'
import axios from '@/plugins/axios'
export const useMainSliderListStore = defineStore('sliderId', {
    state: () => ({
        mainSliderList: 0,
    }),
    actions: {
        async fetchMainSliderList() {
            return new Promise((resolve, reject) => {
                axios
                    .get('/main-slider-list')
                    .then(({ data }) => {
                        this.mainSliderList = data.results
                        resolve(data)
                    })
                    .catch((err) => {
                        reject(err)
                    })
            })
        },
    },
})
