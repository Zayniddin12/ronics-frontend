import { TCategory } from '@/types/category'

export interface ProductSingleTypes {
    id: number
    category: TCategory[]
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
    file: string
    images: ProductSliderImages[]
    is_top: boolean
    price: string
}

export interface ProductSliderImages {
    image: string
}
