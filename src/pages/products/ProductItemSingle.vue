<template>
    <CLoader v-if="loading" />

    <section>
        <div class="container">
            <div data-aos="fade-up" data-aos-duration="800" class="mb-8">
                <img
                    src="../../assets/icons/arrow-left.svg"
                    alt="Back Icon"
                    class="cursor-pointer hover:bg-[#1934691A] hover:rounded-full"
                    @click="router.back()"
                />
            </div>

            <ProductSwiper
                class="mb-[45px]"
                :images="productStore.currentProduct.images"
                :category="productStore.currentProduct.category"
            />
            <!--            product details-->
            <ProductDetails
                :details="productStore.currentProduct"
                class="mb-[64px]"
            />
            <CustomerIdeaForm :product-id="productId" class="!my-[64px]" />
        </div>

        <div
            v-if="productStore.relatedProducts.length > 0"
            class="bg-white py-6 lg:pt-[64px] lg:pb-[88px]"
        >
            <div class="container">
                <h1
                    class="mb-4 lg:mb-[44px] text-dark-100 text-2xl lg:text-[36px] leading-[43.2px] font-bold"
                >
                    {{ $t('products_list.related_title') }}
                </h1>
                <div
                    class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
                >
                    <ProductItemCard
                        v-for="(product, index) in productStore.relatedProducts"
                        :key="index"
                        :card="product"
                        related
                        :product-id="currentCategoryId"
                    />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import ProductSwiper from './components/ProductSwiper.vue'
import ProductDetails from '@/pages/products/components/ProductDetails.vue'
import { useProductStore } from '@/stores/product'
import { useRoute, useRouter } from 'vue-router'
import ProductItemCard from '@/pages/products/ProductItemCard.vue'
import CLoader from '@/components/CLoader.vue'
import { ref, computed } from 'vue'
import CustomerIdeaForm from '@/components/CustomerIdeaForm.vue'

const route = useRoute()
const router = useRouter()
const productStore = useProductStore()

const loading = ref(false)
const currentSlug = route.params?.slug as string
const currentCategoryId = route.params?.id
const productId = computed(() => productStore.currentProduct?.id || null)

const get = async () => {
    try {
        loading.value = true
        await productStore.getProductItemBySlug(currentSlug)
        await productStore.getRelatedProducts(currentSlug)
        loading.value = false
    } catch (e) {
        loading.value = false
    }
}

get()
</script>
