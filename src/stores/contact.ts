import { defineStore } from 'pinia'
import axios from '@/plugins/axios'
import { ContactForm } from '@/types/contact.types'

export const useContactStore = defineStore('Contact', {
    actions: {
        async contact(form: ContactForm) {
            await axios.post('/contact-us/', form)
        },
    },
})


