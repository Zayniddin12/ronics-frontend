import { TDefaultFetchData } from '@/types/default-fetch-data'
import { TCategory } from '@/types/category'
import { ProductSliderImages } from '@/types/components/product-single.types'

export interface ServiceTypes extends TDefaultFetchData {
    results: ServiceTypeListSerializer[]
}

export interface ServiceTypeListSerializer {
    id: number
    title: string
    services: ServiceMiniSerializer[]
}

export interface ServiceMiniSerializer {
    id: number
    title: string
    description: string
    slug?: string
    base_image?: string
}

export interface ServiceSingleTypes {
    id: number
    type: number
    title: string
    slug: string
    base_image: string
    function: string
    equipment: string
    power_input: string
    drive_count: string
    warranty_period: string
    power_voltage: string
    communication_interface: string
    video: string
    video_url: string
    file: string
    images: ServiceSliderImages[]
    is_top: boolean
    price: string
}

export interface ServiceSliderImages {
    image: string
}