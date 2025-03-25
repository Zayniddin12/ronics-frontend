<template>
    <section
        v-if="images && images.length > 0"
        class="max-w-[990px] mx-auto bg-white rounded-[24px]"
    >
        <div class="thumb-example p-2 lg:p-6 rel">
            <swiper
                class="mb-[21px] pb-4 border-[1px] border-[#1934691A] rounded-[12px] relative"
                :modules="modules"
                :space-between="10"
                :navigation="{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }"
                :thumbs="{ swiper: thumbsSwiper }"
            >
                <swiper-slide
                    class="slide"
                    v-for="(image, index) in images"
                    :key="index"
                >
                  <div class="w-full h-full flex items-center justify-center">
                    <img
                        :src="image.image"
                        alt="Image"
                        class="w-full"
                    />
                  </div>
                </swiper-slide>

                <!--                buttons-->
                <div
                    class="w-full px-1 md:px-6 max-w-[990px] absolute top-[50%] z-20 -translate-y-[50%] flex"
                >
                    <div
                        class="swiper-button-prev flex items-center justify-center cursor-pointer"
                    >
                        <svg
                            width="12"
                            height="16"
                            viewBox="0 0 9 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="mr-[2px]"
                        >
                            <path
                                d="M7.8668 14.4023L1.4668 8.00234L7.8668 1.60235"
                                stroke="#63676C"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </div>
                    <div
                        class="swiper-button-next flex items-center justify-center ml-auto cursor-pointer"
                    >
                        <svg
                            width="12"
                            height="16"
                            viewBox="0 0 9 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1.1332 14.4023L7.5332 8.00234L1.1332 1.60235"
                                stroke="#63676C"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </div>
                </div>
            </swiper>

            <swiper
                class="thumbs-swiper pb-2 lg:pb-6"
                :modules="modules"
                :space-between="10"
                :slides-per-view="isMobile ? 3 : 8"
                :watch-slides-progress="true"
                :prevent-clicks="false"
                :prevent-clicks-propagation="false"
                @swiper="setThumbsSwiper"
            >
                <swiper-slide
                    class="slide flex items-center p-1 !h-[64px] border-[1px] border-[#1934691A] rounded-[8px] cursor-pointer overflow-hidden"
                    v-for="(image, index) in images"
                    :key="index"
                >
                    <img
                        :src="image.image"
                        alt="Image"
                        class="inline-block !w-full !h-auto object-fill"
                    />
                </swiper-slide>
            </swiper>
        </div>

        <!--        category name-->
        <h1
            class="pl-2 pb-2 lg:pl-6 lg:pb-6 md:text-left text-dark-100 text-xl lg:text-[36px] leading-[43.2px] font-bold truncate"
        >
            {{ category?.name }}
        </h1>
    </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { Navigation, Thumbs } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import type SwiperClass from 'swiper'
import 'swiper/css'
import 'swiper/css/thumbs'

export default defineComponent({
    name: 'ProductSwiper',
    title: 'Thumbs gallery with Two-way control',
    url: import.meta.url,

    props: {
        images: {
            type: Array,
            required: true,
        },
        category: {
            type: Array,
            required: true,
        },
    },

    components: {
        Swiper,
        SwiperSlide,
    },

    setup() {
        const isMobile = ref(false)
        const thumbsSwiper = ref<SwiperClass>()

        const setThumbsSwiper = (swiper: SwiperClass) => {
            thumbsSwiper.value = swiper
        }

        onMounted(() => {
            if (window.innerWidth <= 760) {
                isMobile.value = true
            }
        })

        return {
            modules: [Navigation, Thumbs],
            setThumbsSwiper,
            thumbsSwiper,
            isMobile,
        }
    },
})
</script>

<style scoped>
.thumb-example {
    max-width: 942px;
    margin: 0 auto;
}

.top-swiper .thumbs-swiper .slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.top-swiper .slide img,
.thumbs-swiper .slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.top-swiper {
    height: 80%;
    width: 100%;
}

.thumbs-swiper {
    height: 20%;
    box-sizing: border-box;
    padding: 10px 0;
}
.thumbs-swiper .slide {
    width: 25%;
    height: 100%;
    opacity: 1;
}
.thumbs-swiper .slide.swiper-slide-thumb-active {
    border: 4.14px solid #4aa5ff !important;
}
.thumbs-swiper .slide:first-child::before {
    content: '';
    width: 100%;
    background: linear-gradient(
        90deg,
        #ffffff 0%,
        rgba(255, 255, 255, 0) 100%
    ) !important;
}
.swiper-button-prev,
.swiper-button-next {
    width: 40px !important;
    height: 40px !important;
    border-radius: 50% !important;
    display: flex !important;
    align-items: center !important;
    justify-items: center !important;
    padding: 4px !important;
    background: white !important;
    z-index: 1;
}

@media (max-width: 760px) {
    .swiper-button-prev,
    .swiper-button-next {
        width: 30px !important;
        height: 30px !important;
    }
}
.swiper-button-prev::after,
.swiper-button-next::after {
    display: none !important;
}

.thumbs-swiper.swiper-button-prev {
    width: 12px !important;
    height: 6px !important;
}
.thumbs-swiper.swiper-button-next::after {
    color: #63676c !important;
    width: 12px !important;
    height: 6px !important;
}
.swiper-button-disabled {
    background: #f0f3f7 !important;
    cursor: default;
}
</style>
