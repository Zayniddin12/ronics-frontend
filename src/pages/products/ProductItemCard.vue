<template>
    <div
        :data-aos="global.aosAnimation('fade-left', 'fade-up')"
        data-aos-duration="700"
        class="py-6 px-4 lg:p-6 cursor-pointer bg-gray-100 rounded-[24px] border border-opacity-10 hover:border-[#4AA5FF] transition-all duration-300 hover:border-[#4aa5ff]"
        @click="router.push({ path: `/products/${productId}/${card.slug}` })"
        :class="{ '!px-2 !pt-2 !pb-4': related }"
    >
        <div class="mb-4 rounded-[10px]">
            <img :src="card.base_image" :alt="card.title" />
        </div>
        <h5
            class="product-item__title mb-3 text-[#193469] text-base lg:text-[20px] lg:leading-[26px] font-bold line-clamp-2"
        >
            {{ card.title }}
        </h5>
        <p class="flex items-center text-[#4AA5FF] bg-red">
            {{ $t('products_list.card_link') }}

            <img
                src="../../assets/icons/right.svg"
                alt="Right Icon"
                class="inline-block ml-1"
            />
        </p>
    </div>
</template>

<script setup lang="ts">
import global from '@/plugins/global.ts'
import { ProductListMini } from '@/types/components/product-item-card.types'
import { useRouter } from 'vue-router'

const router = useRouter()

defineProps<{
    card: ProductListMini
    productId?: string | string[]
    related?: boolean
}>()
</script>

<style scoped>
.product-item__title {
    font-family: 'Greycliff CF';
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%; /* 26px */
}
</style>
