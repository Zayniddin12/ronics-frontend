<template>
    <CLoader v-if="loading" />
    <section class="container pt-[100px] md:pt-[120px] lg:pt-[189px] pb-[64px]">
        <NavigationHeader :title="$t('products_list.title')" />

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-3">
            <ProductCategoryCard
                v-for="(productCategory, index) in productStore.productCategory"
                :key="index"
                :card="productCategory"
            />
        </div>
    </section>
</template>

<script setup lang="ts">
import ProductCategoryCard from '@/components/ProductCategoryCard.vue'
import NavigationHeader from '@/components/NavigationHeader.vue'
import { useProductStore } from '@/stores/product'
import CLoader from '@/components/CLoader.vue'
import { ref } from 'vue'

const productStore = useProductStore()

const loading = ref(false)

const get = async () => {
    try {
        loading.value = true
        await productStore.getCategoryByName()
        loading.value = false
    } catch (e) {
        loading.value = false
    }
}

get()
</script>
