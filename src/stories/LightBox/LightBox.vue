<template>
    <LightModal
        :show="show"
        max-width="max-w-[700px] xl:max-w-[988px] !bg-transparent"
    >
        <template #header>
            <div></div>
        </template>
        <div class="relative">
            <u-icons
                @click="$emit('close')"
                name="close_icon"
                class="icon-x-ligthbox text-xl text-white absolute -top-8 right-0 md:-right-6 rotate-180 cursor-pointer transition hover:text-red"
            />
            <u-icons
                v-if="photos[checkActiveIndex]?.images.length > 1"
                name="arrowRight"
                class="button-next icon-arrow-slider-lightbox text-white absolute top-1/2 -right-16 cursor-pointer hover:text-blue transition-300"
            />
            <u-icons
                v-if="photos[checkActiveIndex]?.images.length > 1"
                name="arrowRight"
                class="button-prev icon-arrow-slider-lightbox text-white absolute top-1/2 -left-16 rotate-180 cursor-pointer hover:text-blue transition-300"
            />
            <Swiper
                :modules="modules"
                v-bind="settings"
                :navigation="{
                    nextEl: '.button-next',
                    prevEl: '.button-prev',
                }"
                @swiper="onSwiperInit"
            >
                <SwiperSlide
                    v-for="(item, index) in photos[checkActiveIndex]?.images"
                    :key="index"
                    class="h-auto max-h-[700px]"
                >
                    <div class="h-full">
                        <div class="h-full preloader-image">
                            <img
                                v-lazy="{ src: item?.image_url, delay: 500 }"
                                class="h-full max-h-[700px] object-contain mx-auto"
                                alt="video_thumbnail"
                            />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </LightModal>
</template>

<script setup lang="ts">
import UIcons from '@/stories/ui/UIcons/UIcons.vue'
import LightModal from '@/stories/Modal/Modal.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper'
import { computed, ref, watch } from 'vue'

interface Props {
    activeIndex: number
    activeType: string
    show?: boolean
    photos: any
    single?: boolean
}

const props = withDefaults(defineProps<Props>(), {})

const mainSwiper = ref()

const onSwiperInit = (e: any) => {
    mainSwiper.value = e
}

const settings = {
    spaceBetween: 20,
    grabCursor: true,
}

const loading = ref(null)

const emit = defineEmits(['close'])

const checkActiveIndex = computed(() => {
    return props.activeType === 'site' ? props.activeIndex : 0
})
function keyUp(event: any) {
    if (event.keyCode === 27) {
        emit('close')
    } else if (event.keyCode === 39) {
        mainSwiper.value.slideNext(300)
    } else if (event.keyCode === 37) {
        mainSwiper.value.slidePrev(300)
    }
}

const modules = [Navigation]

const openPreloader = () => {
    setTimeout(() => {
        loading.value = false
    }, 1000)
}

watch(
    () => props.show,
    () => {
        loading.value = true
        openPreloader()
        if (props.show) {
            setTimeout(() => {
                mainSwiper.value?.slideTo(props.activeIndex, 200)
            }, 200)
            document.addEventListener('keydown', keyUp)
        } else {
            document.removeEventListener('keydown', keyUp)
        }
    }
)
</script>

<style>
.icon-x-ligthbox svg path {
    transition: all 150ms linear;
}

.icon-x-ligthbox:hover svg path {
    stroke: #d23838;
}

.icon-arrow-slider-lightbox svg path {
    transition: all 150ms linear;
}

.icon-arrow-slider-lightbox:hover svg path {
    stroke: #4aa5ff;
}
</style>
