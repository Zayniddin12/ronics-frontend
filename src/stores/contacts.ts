import { defineStore } from 'pinia'
import axios from '@/plugins/axios'
import { OurContacts } from '@/types/contacts.types'
import { TDefaultFetchData } from '@/types/default-fetch-data'
import { ref } from 'vue'
interface IContacts extends TDefaultFetchData {
    results: OurContacts[]
}

export const useContactsStore = defineStore('Contacts', () => {
    const contacts = ref()
    const socials = ref()

    const getContacts = async () => {
        const res = await axios.get<IContacts>(`/contacts/`)
        contacts.value = res.data.results[0]
    }

    const getSocials = async () => {
        const res = await axios.get<IContacts>(`/social/`)
        socials.value = res.data.results
        console.log(socials.value)
    }

    return {
        contacts,
        socials,
        getContacts,
        getSocials,
    }
})
