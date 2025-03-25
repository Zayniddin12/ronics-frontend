import Swal from 'sweetalert2'
import i18n from '@/plugins/i18n.js'
const { t } = i18n.global

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    },
})

export const sweetToastError = (title: string) =>
    Toast.fire({
        icon: 'error',
        title: t(title ?? ''),
        customClass: { container: 'my-error' },
    })
export const sweetToastSuccess = (title: string) =>
    Toast.fire({ icon: 'success', title: t(title ?? '') })
