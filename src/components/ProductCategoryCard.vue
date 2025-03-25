<template>
    <div
        :data-aos="global.aosAnimation('fade-left', 'fade-up')"
        data-aos-duration="700"
        class="p-3 lg:p-6 bg-gray-100 rounded-[12px] cursor-pointer border border-opacity-10 transition-all duration-300 hover:border-[#4aa5ff]"
        @click="next"
    >
        <div class="flex mb-2 lg:mb-4">
            <div
                class="w-12 h-12 flex items-center justify-center bg-vacancy-card-footer-bg-active rounded-[12px]"
            >
                <img
                    :src="card.icon"
                    :alt="card.icon"
                    class="inline-block p-3 object-none"
                    width="100"
                    height="100"
                />
            </div>
            <div
                class="w-6 h-6 flex items-center justify-center ml-auto bg-[#1934691A] rounded-full"
            >
                <img
                    src="../assets/icons/arrow-right.svg"
                    alt="Arrow Right Icon"
                    class="inline-block"
                    width="12"
                    height="12"
                />
            </div>
        </div>
        <h5
            class="text-dark-200 text-base lg:text-[22px] leading-[26.4px] font-bold line-clamp-3"
        >
            {{ card.name }}
        </h5>
    </div>
</template>

<script setup lang="ts">
import global from '@/plugins/global.ts'
import { ProductListCardTypes } from '@/types/components/product-list-card.types'
import { useRouter } from 'vue-router'
import { useProductStore } from '@/stores/product'

const router = useRouter()
const productStore = useProductStore()

const props = defineProps<{ card: ProductListCardTypes }>()

const next = () => {
    productStore.currentCategoryName = props.card.name
    productStore.products = []
    router.push({ path: `/products/${props.card.id}` })
}
</script>
