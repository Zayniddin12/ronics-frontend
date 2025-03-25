<template>
    <div
        class="gallerySwiper md:bg-[#193469] relative rounded-[24px] px-4 sm:px-6 md:p-8 gallerySwiper_gallery md:pb-2.5"
        :class="{ '!pb-10': isVacancy }"
    >
        <h6
            v-if="title"
            data-aos="fade-up"
            data-aos-duration="800"
            class="text-[20px] font-bold leading-[130%]"
            :class="!desc ? 'mb-2 sm:mb-4 lg:mb-8' : ''"
        >
            {{ $t(title) }}
        </h6>
        <p
            v-if="desc"
            class="mt-3 about_text mb-5 sm:mb-7"
            data-aos="fade-up"
            data-aos-duration="800"
        >
            {{ $t(desc) }}
        </p>

        <!--    swiper1 galleryProps-->
        <div class="relative">
            <div class="relative">
                <swiper
                    v-if="photogallery?.length"
                    class="gallerySwiper-slider relative"
                    :class="
                        isVacancy
                            ? 'h-[200px]'
                            : 'h-[135px] sm:h-[150px] md:h-[200px]'
                    "
                    v-bind="settings"
                >
                    <swiper-slide
                        v-for="(item, index) in photogallery[0]?.photo_list.map(
                            (item) => item.photo
                        )"
                        :key="index"
                        @click="showImg(index)"
                    >
                        <GalleryCard
                            v-bind="{
                                img: item,
                                count: item?.count,
                                desc: item?.title,
                            }"
                        />
                        <div
                            @click="showImg(index)"
                            class="qwerty flex relative rounded-md cursor-pointer h-full"
                        >
                            <img
                                v-lazy="{ src: item, delay: 200 }"
                                alt="about Ronics"
                                class="w-full h-full rounded-md object-cover"
                            />
                            <div
                                class="absolute w-full left-0 right-0 bottom-0 top-0 rounded hover:bg-[#193469] duration-300"
                            />
                        </div>
                    </swiper-slide>
                </swiper>

                <div class="swiper__btns hidden md:block">
                    <button
                        class="absolute text-white z-10 left-5 top-1/2 -translate-y-1/2"
                        :class="`gallery-prev-${randomNum}`"
                        aria-label="button"
                    >
                        <u-icons name="gallerySliderLeft" />
                    </button>
                    <button
                        class="absolute text-white z-10 right-5 top-1/2 -translate-y-1/2"
                        :class="`gallery-next-${randomNum}`"
                        aria-label="button"
                    >
                        <u-icons name="gallerySliderRight" />
                    </button>
                </div>
            </div>
            <div
                class="gallery-pagination flex items-center justify-center mt-3 mb-2 md:mb-3 md:mt-6"
                :class="`gallery-pagination-${randomNum}`"
            ></div>
        </div>

        <vue-easy-lightbox
            :imgs="photogallery[0]?.photo_list.map((image) => image.photo)"
            :index="index"
            :visible="visible"
            @hide="handleHide"
            :maxZoom="2"
            :moveDisabled="false"
            class="z-index-20"
        >
            <template v-slot:prev-btn="{ prev }">
                <button
                    @click="prev"
                    class="lightbox--prev"
                    aria-label="button"
                >
                    <UIcons name="lightbox_arrow_right" />
                </button>
            </template>
            <template v-slot:next-btn="{ next }">
                <button
                    @click="next"
                    class="lightbox--next"
                    aria-label="button"
                >
                    <UIcons name="lightbox_arrow_left" />
                </button>
            </template>
        </vue-easy-lightbox>
    </div>
</template>

<script lang="ts" setup>
import { defineProps, ref } from 'vue'
import GalleryCard from '/src/stories/GaleryCard/GaleryCard.vue'
import UIcons from '@/stories/ui/UIcons/UIcons.vue'
import VueEasyLightbox from 'vue-easy-lightbox'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import { Autoplay, Navigation, Pagination } from 'swiper'
import { getRandomInt } from '@/helpers/getRandom'
import 'swiper/css'
import 'swiper/css/pagination'

export interface Props {
    images?: string[]
    videoProps?: Array<any>
    title?: string
    desc?: string
    sliderClass?: string
    isVacancy?: boolean
    photogallery?: Array<any>
}

const randomNum = getRandomInt(100)
const props = defineProps<Props>()

// LIGHTBOX
const visible = ref(false)
const index = ref()

const showImg = (i: number) => {
    index.value = i
    visible.value = true
}
const handleHide = () => {
    visible.value = false
}

const imageBreakpoints = {
    320: {
        slidesPerView: 1,
        spaceBetween: 15,
    },
    500: {
        slidesPerView: 2,
        spaceBetween: 15,
    },
    720: {
        slidesPerView: 2.5,
        spaceBetween: 30,
    },
    1000: {
        slidesPerView: 3,
        spaceBetween: 20,
    },
}

const vacancy = {
    320: {
        slidesPerView: 1.2,
        spaceBetween: 15,
    },
    500: {
        slidesPerView: 2,
        spaceBetween: 15,
    },
    720: {
        slidesPerView: 2.5,
        spaceBetween: 20,
    },
    840: {
        slidesPerView: 3,
        spaceBetween: 20,
    },
    1000: {
        slidesPerView: 3.5,
        spaceBetween: 20,
    },
}
const modules = [Pagination, Autoplay, Navigation]
const settings = {
    loop: false,
    spaceBetween: 20,
    centeredSlides: false,
    grabCursor: true,
    navigation: {
        nextEl: `.gallery-next-${randomNum}`,
        prevEl: `.gallery-prev-${randomNum}`,
    },
    pagination: {
        el: `.gallery-pagination-${randomNum}`,
        clickable: true,
        custom: true,
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    breakpoints: props.isVacancy ? vacancy : imageBreakpoints,
    modules: modules,
}
</script>

<style scoped>
.gallerySwiper .swiper:before {
    content: '';
    position: absolute;
    left: -8px;
    top: 0;
    width: 180px;
    height: 100%;
    background: linear-gradient(90deg, #193469 0%, rgba(25, 52, 105, 0) 100%);
    pointer-events: none;
    z-index: 6;
}

.gallerySwiper .swiper:after {
    content: '';
    position: absolute;
    right: -2px;
    top: 0;
    width: 180px;
    height: 100%;
    background: linear-gradient(90deg, rgba(37, 37, 39, 0) 0%, #252527 100%);
    pointer-events: none;
    z-index: 6;
}

@media (max-width: 820px) {
    .gallerySwiper .swiper:before {
        display: none;
    }

    .gallerySwiper .swiper:after {
        display: none;
    }
}
</style>

<style>
/*.gallerySwiper .swiper {*/
/*  height: 350px;*/
/*}*/

/*.gallerySwiper_gallery .swiper {*/
/*  height: 260px;*/
/*}*/

/*.gallerySwiper.height_min {*/
/*  height: 400px;*/
/*}*/

/*.gallerySwiper .swiper-slide-active {*/
/*  height: 700px;*/
/*}*/

.video-slider .swiper-pagination {
    transform: translateX(-50%);
    background: rgba(255, 255, 255, 0.2);
    width: 254px;
    height: 2px;
}

/* only-child */

.gallery-pagination .swiper-pagination-bullet {
    margin: 0 !important;
    border-radius: 0;
    width: 41px;
    height: 2px;
    background: rgba(255, 255, 255, 0.2);
}

.gallery-pagination .swiper-pagination-bullet-active {
    background: #fff;
}

.swiper__btns .swiper-button-disabled {
    display: none;
}

.swiper__btns svg circle {
    transform: scale(0);
    transform-origin: center;
    transition: 0.3s ease-in-out;
}

.swiper__btns button:hover svg circle {
    transform: scale(1);
}

.swiper__btns button:hover svg path {
    fill: #4aa5ff;
    transition: 0.3s ease-in-out;
}

.lightbox--prev,
.lightbox--next {
    color: #fff;
    position: absolute;
    top: 50%;
    transform: rotateY(180deg);
    z-index: 11;
}

.lightbox--next {
    right: 10%;
}

.lightbox--prev {
    left: 10%;
}

.gallerySwiper .vel-modal {
    background: linear-gradient(180deg, rgba(30, 30, 32, 0.8) 0%, #1e1e20 100%);
    backdrop-filter: blur(8px);
}

.gallerySwiper .btn__close {
    top: 10%;
    right: 10%;
}

.gallerySwiper .btn__next {
    display: none;
}

.gallerySwiper .btn__prev {
    display: none;
}

.gallerySwiper .vel-toolbar {
    display: none;
}

.vel-img {
    width: 586px;
    border-radius: 12px;
    pointer-events: none;
    object-fit: cover;
    object-position: center;
}

@media (max-width: 767px) {
    .vel-img {
        width: auto;
        height: auto;
    }

    .photogallery--wrap .btn__close {
        top: 10%;
        right: 15%;
    }

    .lightbox--next {
        top: 75%;
        right: 8%;
        z-index: 10000;
    }

    .lightbox--prev {
        top: 75%;
        left: 8%;
        z-index: 10000;
    }
}

@media screen and (min-width: 980px) and (max-width: 1059.9px) {
    .gallery-post-wrap {
        max-width: 955px;
        width: 950px;
    }

    .photogallery--wrap .btn__close {
        top: 10%;
        right: 10%;
    }

    .lightbox--next {
        right: 15%;
    }

    .lightbox--prev {
        left: 15%;
    }
}

@media screen and (min-width: 1060px) and (max-width: 1199.9px) {
    .gallery-post-wrap {
        max-width: 991px;
        width: 990px !important;
    }

    .photogallery--wrap .btn__close {
        top: 10%;
        right: 15%;
    }

    .lightbox--next {
        right: 15%;
    }

    .lightbox--prev {
        left: 15%;
    }
}

@media screen and (min-width: 1200px) {
    .gallery-post-wrap {
        width: 100%;
        left: 10%;
        width: 990px;
    }

    .photogallery--wrap .btn__close {
        top: 7%;
        right: 15%;
    }

    .lightbox--next {
        right: 20%;
    }

    .lightbox--prev {
        left: 20%;
    }
}

.vti__dropdown {
    padding: 16px !important;
    border-radius: 8px 0 0 8px;
    transition: 0.3s ease-in-out;
}

.vti__dropdown:hover {
    /*padding: 13px !important;*/
    background-color: #2e2e30;
}

.vue-tel-input {
    border: none;
    border-radius: 8px;
    background-color: #141415;
}

.vue-tel-input:hover .vue-tel-input:focus-within {
    box-shadow: none;
    border-color: #4aa5ff;
}

.vti__dropdown-list {
    max-width: 300px !important;
    top: 45px !important;
    z-index: 12;
    border-radius: 8px;
    background-color: #141415;
    border: none;
}

.vti__dropdown-item.highlighted {
    background-color: #5f5f5f;
}

.vue-tel-input:focus-within {
    box-shadow: inset 0 1px 1px #00000013, 0 0 3px #4aa5ff !important;
    border-color: #4aa5ff !important;
}

.vue-tel-input {
    border: 1px solid transparent;
}

.vue-tel-input._phone-error {
    border: 1px solid red;
}

.vti__dropdown-item strong,
.vti__dropdown-item span {
    color: white;
    opacity: 0.7;
}
</style>
