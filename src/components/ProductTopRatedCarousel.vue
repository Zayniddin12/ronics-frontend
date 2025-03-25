<template>
    <div class="clients-comment">
        <div class="container relative lg:!px-0">
            <swiper
                :modules="modules"
                slides-per-view="4"
                class="relative lg:-ml-3 lg:-mr-3 clients-swiper"
                v-bind="settings"
            >
                <swiper-slide v-for="(item, index) in product" :key="index">
                    <ProductSliderItem :card="item" />
                </swiper-slide>
            </swiper>
            <div
                class="flex justify-center items-center sm:absolute sm:left-0 sm:top-1/2 sm:w-full sm:translate-y-[-50%] translate-y-0 -bottom-16 sm:mt-0 mt-4"
            >
                <button
                    class="swiper-prev-button swiper-button py-2 sm:pl-[7px] pr-[9px] rounded-full cursor-pointer lg:ml-[-72px]"
                    @click="prev()"
                    aria-label="button"
                >
                    <u-icon
                        class="text-[#828792] md:text-[#828792] transition duration-300"
                        name="left_chevron"
                    />
                </button>
                <button
                    class="swiper-next-button swiper-button ml-auto z-10 cursor-pointer lg:-mr-16"
                    @click="next()"
                    aria-label="button"
                >
                    <u-icon
                        class="text-[#828792] md:text-[#828792] transition duration-300"
                        name="right_chevron"
                    />
                </button>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import UIcon from '@/stories/ui/UIcons/UIcons.vue'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation, Pagination } from 'swiper'
import 'swiper/css'
import useOnLanguageChange from '@/composables/useOnLanguageChange'
import { useReviewAbout } from '@/stores/reviewAbout'
import { computed, onMounted } from 'vue'

import { useProductStore } from '@/stores/product'
import ProductSliderItem from '@/components/ProductSliderItem.vue'

const modules = [Pagination, Navigation, Autoplay]

const aboutStore = useReviewAbout()
const about = computed(() => aboutStore.mainReviewAbout)
const productStore = useProductStore()
const product = computed(() => productStore.topProducts)

useOnLanguageChange(() => {
    aboutStore.fetchMainRevieweAbout()
})

onMounted(() => {
    aboutStore.fetchMainRevieweAbout()
    productStore.getTopProducts()
    // console.log(about)
})

const settings = {
    loop: false,
    spaceBetween: 8,
    pagination: {
        clickable: true,
    },
    'grab-cursor': true,
    breakpoints: {
        300: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        400: {
            slidesPerView: 1,
            spaceBetween: 24,
        },
        500: {
            slidesPerView: 1,
        },
        720: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        900: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 24,
        },
    },
}

function next() {
    const swiper = document.querySelector('.clients-swiper').swiper
    swiper.slideNext()
}

function prev() {
    const swiper = document.querySelector('.clients-swiper').swiper
    swiper.slidePrev()
}
</script>

<style>
.clients-comment .swiper-pagination {
    display: flex;
    background: transparent !important;
    width: max-content !important;
    justify-content: space-between;
}

.clients-comment .swiper-pagination-bullet-active {
    background: transparent !important;
    color: transparent !important;
    opacity: 1 !important;
    transition: 0.3s;
}

.clients-comment .swiper-pagination-bullet {
    width: 0px;
    height: 0px;
    transition: 0.3s;
    border-radius: 0px;
    opacity: 0.2;
}

.swiper-button svg circle {
    transform: scale(0);
    transform-origin: center;
    transition: 0.3s ease-in-out;
}

.swiper-button:hover svg circle {
    transform: scale(1);
}
.swiper-button:hover svg rect {
    fill: #87a9ed !important;
    transition: 0.3s ease-in-out;
}
.swiper-button:hover svg path {
    fill: #475d87 !important;
    transition: 0.3s ease-in-out;
}

.swiper-pagination {
    display: none !important;
}

@media (max-width: 767.9px) {
    .clients-comment .swiper-pagination {
        position: absolute;
        bottom: 0;
        left: 50% !important;
        transform: translateX(-50%) !important;
    }
}
</style>
