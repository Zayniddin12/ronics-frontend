import { defineStore } from 'pinia'
import axios from '@/plugins/axios'

export const useContactsStore = defineStore('Contacts', {
    state: () => ({
        mainContacts: [],
        mainSocials: [],
    }),
    actions: {
        async fetchMainContacts() {
            return new Promise((resolve, reject) => {
                axios
                    .get('/contacts')
                    .then(({ data }) => {
                        this.mainContacts = data.results
                        resolve(data)
                    })
                    .catch((error) => {
                        reject(error)
                    })
            })
        },
        async fetchSocials() {
            return new Promise((resolve, reject) => {
                axios
                    .get('/social')
                    .then(({ data }) => {
                        this.mainSocials = data.results
                        resolve(data)
                    })
                    .catch((error) => {
                        reject(error)
                    })
            })
        },
        // async fetchContacts() {
        //     const res = await axios.get('/contacts')
        //     this.mainContacts = res.data.res
        // },
    },
})
