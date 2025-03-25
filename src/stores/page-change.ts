import { defineStore } from 'pinia'

export const usePageChange = defineStore('page-change', {
    state: () => ({
        trigger: 0,
        loading: true,
    }),
    actions: {
        changeTrigger() {
            this.trigger++
            this.loading = true
        },
    },
})
