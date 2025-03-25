<template>
    <div
        :data-aos="global.aosAnimation('fade-left', 'fade-up')"
        data-aos-duration="700"
        class="max-w-[280px] h-[320px] mx-auto group px-2 pt-2 pb-3 slider__item bg-dark-200 opacity-20 rounded-12 border border-opacity-10 hover:border-[#4AA5FF] transition-all duration-300 hover:border-[#4aa5ff]"
    >
        <router-link
            class="h-[300px] flex-container"
            :to="'/products/' + card.id + '/' + card.slug"
        >
            <div class="aspect-video w-full mb-4 rounded-[10px]">
                <img
                    :src="card.base_image"
                    :alt="card.title"
                    class="h-[199px] !w-full object-fill rounded-[10px]"
                />
            </div>
            <h5
                class="product-item__title mb-3 text-left text-[#ffffff] text-xl lg:text-[20px] leading-[26px] font-bold line-clamp-2"
            >
                {{ card.title.substring(0, 42)
                }}<span v-if="card.title.length > 42">...</span>
            </h5>

            <div
                class="flex items-center text-[#4AA5FF] bg-red text-[16px] font-normal"
            >
                {{ $t('products_list.card_link') }}

                <img
                    src="@/assets/icons/right.svg"
                    alt="Right Icon"
                    class="inline-block ml-1 transition-ease-in-out group-hover:translate-x-1"
                    width="20"
                    height="20"
                />
            </div>
        </router-link>
    </div>
</template>

<script setup lang="ts">
import global from '@/plugins/global.ts'
import { ProductListMini } from '@/types/components/product-item-card.types'
import { useRouter } from 'vue-router'

defineProps<{ card: ProductListMini; productId?: string | string[] }>()
</script>

<style scoped>
.slider__item {
    background-color: rgba(255, 255, 255, 0.1);
    border: 1px rgba(255, 255, 255, 0.12);
}
.product-item__title {
    font-family: 'Greycliff CF';
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%; /* 26px */
}

.flex-container {
    display: flex !important;
    flex-direction: column;
    justify-content: space-between !important;
}
</style>
