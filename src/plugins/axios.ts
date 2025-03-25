import axios from 'axios'
import i18n from '@/plugins/i18n'
import { sweetToastError } from '@/plugins/swal'

const $axios = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_URL,
    timeout: 15000,
})

const handleErrorResponse = (error: any) => {
    if (error.response.data.detail) {
        sweetToastError(error.response.data.detail)
    }

    return Promise.reject(error.response.data.errors)
}

$axios.interceptors.request.use(
    (config: any) => {
        config.headers['Accept-Language'] = i18n.global.locale.value
        return config
    },
    (error) => {
        return handleErrorResponse(error)
    }
)

export default $axios
