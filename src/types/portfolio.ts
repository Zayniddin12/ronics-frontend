import { TDefaultFetchData } from '@/types/default-fetch-data'

export interface TPortfolio {
    id: number
    title: string
    slug: string
    owner: string
    website: string
    google_play_url: string | null
    app_store_url: string | null
    app_gallery_url: string | null
    logo: string
    liked_users_count: number
    view_users_count: number
    category: string
    project_type: string
    technologies: {
        name: string
    }[]
    contents: [
        {
            id: 7
            content_type: string
            content: string | null
            order: number
            images: {
                image_url: string
                order: number
                thumbnail_image: string | null
            }[]
        }
    ]
    base_image: string
    thumbnail_logo: string | null
    thumbnail_base_image: {
        large: string
        medium: string
        small: string
    }
}

export interface TPortfoliosResponse extends TDefaultFetchData {
    results: TPortfolio[]
}
