import { defineStore } from 'pinia'
import axios from '@/plugins/axios'
import { TDefaultFetchData } from '@/types/default-fetch-data'
import { ProductListCardTypes } from '@/types/components/product-list-card.types'
import {
    ProductItemCardTypes,
    ProductListMini,
} from '@/types/components/product-item-card.types'
import { ProductSingleTypes } from '@/types/components/product-single.types'

interface ProductCategoryResponse extends TDefaultFetchData {
    results: ProductListCardTypes[]
}

export const useProductStore = defineStore('product', {
    state: () => {
        return {
            productCategory: [] as ProductListCardTypes[],
            isHaveNext: false,
            offset: '',
            products: [] as ProductListMini[],
            currentProduct: {} as ProductSingleTypes,
            relatedProducts: [] as ProductListMini[],
            topProducts: [] as ProductListMini[],
            currentCategoryName: '',
        }
    },

    actions: {
        async getCategoryByName() {
            const res = await axios.get<ProductCategoryResponse>(
                '/product-category-list/'
            )
            this.productCategory = res.data.results
        },
        async getProductByCategoryId(
            categoryId: string,
            offset?: string,
            search?: string,
            resetSearch?: boolean
        ) {
            const res = await axios.get<ProductItemCardTypes>(
                search
                    ? `/products/?search=${search}&category=${categoryId}&limit=10${
                          offset ? `&offset=${offset}` : ''
                      }`
                    : `/products/?category=${categoryId}&limit=10${
                          offset ? `&offset=${offset}` : ''
                      }`
            )
            this.isHaveNext = res.data.next !== null
            try {
                this.offset =
                    new URL(res?.data?.next ?? '').searchParams.get('offset') ??
                    ''
            } catch (e) {
                console.log(e)
            }
            if (this.offset && !search && !resetSearch) {
                this.products.push(...(res?.data?.results ?? []))
            } else {
                this.products = res.data.results
            }
        },

        async getProductItemBySlug(slug: string) {
            const res = await axios.get<ProductSingleTypes>(
                `/products/${slug}/`
            )
            this.currentProduct = res.data
        },

        async getRelatedProducts(slug: string) {
            const res = await axios.get<ProductListMini[]>(
                `/related-products/${slug}/`
            )
            this.relatedProducts = res.data?.slice(0, 4) || []
        },

        async getTopProducts() {
            const res = await axios.get<ProductItemCardTypes>(
                `/products/?is_top=true`
            )
            this.topProducts = res.data.results
        },
    },
})
