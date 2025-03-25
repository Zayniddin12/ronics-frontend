import { TDefaultFetchData } from '@/types/default-fetch-data'

export interface ProductItemCardTypes extends TDefaultFetchData {
    results: ProductListMini[]
}

export interface ProductListMini {
    id?: number
    title: string
    slug?: string
    category: number
    base_image?: string
}
