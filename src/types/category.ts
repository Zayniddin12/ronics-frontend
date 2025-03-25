import { TDefaultFetchData } from '@/types/default-fetch-data'

export interface TCategory {
    id: number
    name: string
}

export interface TCategoryResponse extends TDefaultFetchData {
    results: TCategory[]
}
