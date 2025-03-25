const formatDate = (dateArg: any, fullDate: any) => {
    const date = new Date(dateArg.toLocaleString())
    const monthNames = [
        'Yanvar',
        'Fevral',
        'Mart',
        'Aprel',
        'May',
        'Iyun',
        'Iyul',
        'Avgust',
        'Sentyabr',
        'Oktyabr',
        'Noyabr',
        'Dekabr',
    ]
    const year = date.getFullYear()
    let monthNumber: string | number = date.getMonth() + 1
    const monthName = monthNames[monthNumber - 1]
    let monthDate: string | number = date.getDate()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    monthNumber = monthNumber < 10 ? '0' + monthNumber : monthNumber
    monthDate = monthDate < 10 ? '0' + monthDate : monthDate
    if (fullDate) {
        return `${monthDate}.${monthNumber}.${year}`
    } else {
        return `${monthDate} ${monthName}, ${hours}:${minutes}`
    }
}
const formatDateFormat = (dateArg: any, fullDate: any) => {
    const date = new Date(dateArg.toLocaleString())
    const monthNames = [
        'Yanvar',
        'Fevral',
        'Mart',
        'Aprel',
        'May',
        'Iyun',
        'Iyul',
        'Avgust',
        'Sentyabr',
        'Oktyabr',
        'Noyabr',
        'Dekabr',
    ]
    const year = date.getFullYear()
    let monthNumber: string | number = date.getMonth() + 1
    const monthName = monthNames[monthNumber - 1]
    let monthDate: string | number = date.getDate()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    monthNumber = monthNumber < 10 ? '0' + monthNumber : monthNumber
    monthDate = monthDate < 10 ? '0' + monthDate : monthDate
    if (fullDate) {
        return `${monthDate}.${monthNumber}.${year}`
    } else {
        return `${monthDate} ${monthName}, ${hours}:${minutes}`
    }
}
export const numberFunction = (number: number): string => {
    return number?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}

const getImgUrl = (url: string) => {
    return new URL(`../assets/image/${url}`, import.meta.url).href
}

const aosAnimation = (oldVal: string, newVal: string) => {
    if (window.innerWidth < 550) {
        return newVal
    } else return oldVal
}

const formatPhone = (phone: string | undefined): string => {
    const numericString = phone ? phone.replace(/\D/g, '') : ''
    const formatedString = numericString.replace(
        /^(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})$/,
        '+$1 $2 $3 $4 $5'
    )

    return formatedString
}

export default {
    formatDate,
    getImgUrl,
    numberFunction,
    aosAnimation,
    formatDateFormat,
    formatPhone,
}
