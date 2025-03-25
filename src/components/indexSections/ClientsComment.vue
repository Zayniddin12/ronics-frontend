<template>
    <div
        class="clients-comment z-[-1] relative bg-[#F7F9FA] pt-18 lg:pb-[127px] md:py-16"
    >
        <div class="container relative py-6 sm:py-0">
            <div
                class="text-center section-title_blue mb-9 md:mb-11"
                data-aos="fade-up"
                data-aos-duration="500"
            >
                {{ $t('comment.title') }}
            </div>

            <swiper
                :modules="modules"
                class="relative md:mb-10 sm:mb-4 mb-0 clients-swiper md:mb-0"
                v-bind="settings"
            >
                <swiper-slide v-for="(item, index) in about" :key="index">
                    <clients-opinion-card
                        v-bind="{
                            image: item?.image,
                            full_name: item?.full_name,
                            position: item?.position,
                            title: item?.title,
                            text: item?.text,
                        }"
                    />
                </swiper-slide>
            </swiper>
            <div class="flex swiper_buttons">
                <button
                    class="swiper-next-button swiper-button group absolute bottom-[-20px] xs:bottom-[10px] md:bottom-5 left-auto md:left-[70px] right-[25px] md:right-auto z-10 cursor-pointer"
                    @click="next()"
                    aria-label="button"
                >
                    <svg
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle
                            cx="24"
                            cy="24"
                            r="23.5"
                            stroke="#F7F9FA"
                            stroke-opacity="0.8"
                            class="group-hover:stroke-[#D2D4D9]"
                        />
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M29.8224 18.2188L34.7722 22.9719C35.0759 23.2636 35.0759 23.7364 34.7722 24.0281L29.8224 28.7812C29.5187 29.0729 29.0262 29.0729 28.7225 28.7812C28.4188 28.4896 28.4188 28.0167 28.7225 27.725L32.3445 24.2469H12V22.7531H32.3445L28.7225 19.275C28.4188 18.9833 28.4188 18.5104 28.7225 18.2188C29.0262 17.9271 29.5187 17.9271 29.8224 18.2188Z"
                            fill="#C0C3C8"
                            class="group-hover:!fill-[#4AA5FF]"
                        />
                    </svg>
                </button>
                <button
                    class="swiper-prev-button group swiper-button absolute bottom-[-20px] xs:bottom-[10px] md:bottom-5 left-[26px] md:left-[0] z-10 group cursor-pointer"
                    @click="prev()"
                    aria-label="button"
                >
                    <svg
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle
                            cx="24"
                            cy="24"
                            r="23.5"
                            transform="rotate(-180 24 24)"
                            stroke="white"
                            stroke-opacity="0.8"
                            class="group-hover:stroke-[#D2D4D9]"
                        />
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M18.1776 29.7812L13.2278 25.0281C12.9241 24.7364 12.9241 24.2636 13.2278 23.9719L18.1776 19.2188C18.4813 18.9271 18.9738 18.9271 19.2775 19.2188C19.5812 19.5104 19.5812 19.9833 19.2775 20.275L15.6555 23.7531L36 23.7531V25.2469L15.6555 25.2469L19.2775 28.725C19.5812 29.0167 19.5812 29.4896 19.2775 29.7812C18.9738 30.0729 18.4813 30.0729 18.1776 29.7812Z"
                            fill="#C0C3C8"
                            class="group-hover:!fill-[#4AA5FF]"
                        />
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import ClientsOpinionCard from '@/stories/common/cards/ClientsOpinionCard.vue/ClientsOpinionCard.vue'
import UIcon from '@/stories/ui/UIcons/UIcons.vue'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation, Pagination } from 'swiper'
import 'swiper/css'
import useOnLanguageChange from '@/composables/useOnLanguageChange'
import { useReviewAbout } from '@/stores/reviewAbout'
import { computed, onMounted } from 'vue'

const modules = [Pagination, Navigation, Autoplay]

const aboutStore = useReviewAbout()
const about = computed(() => aboutStore.mainReviewAbout)

useOnLanguageChange(() => {
    aboutStore.fetchMainRevieweAbout()
})

onMounted(() => {
    aboutStore.fetchMainRevieweAbout()
    // console.log(about)
})
const settings = {
    loop: true,
    spaceBetween: 8,
    pagination: {
        clickable: true,
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
    background: rgba(130, 135, 146, 1) !important;
    width: max-content !important;
    justify-content: space-between;
}

.clients-comment .swiper-pagination-bullet-active {
    background: #4aa5ff !important;
    color: #4aa5ff !important;
    opacity: 1 !important;
    transition: 0.3s;
}

.clients-comment .swiper-pagination-bullet {
    width: 41px;
    height: 2px;
    transition: 0.3s;
    border-radius: 0px;
    background: #828792 !important;
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

.swiper-button:hover svg path {
    fill: #4aa5ff;
    transition: 0.3s ease-in-out;
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
