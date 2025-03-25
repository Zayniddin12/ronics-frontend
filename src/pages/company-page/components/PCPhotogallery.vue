<template>
    <div class="photogallery py-[40px]">
        <div class="container !px-0 md:!px-[15px]">
            <div
                class="text-center section-title_blue"
                data-aos="fade-up"
                data-aos-duration="500"
            >
                {{ $t('gallery.subtitle') }}
            </div>
            <div
                class="section-title_dark text-center mb-[32px]"
                data-aos="fade-up"
                data-aos-duration="700"
            >
                {{ $t('gallery.title') }}
            </div>

            <gallery-card-slider
                :photogallery="photogallery"
                data-aos="fade-up"
                data-aos-duration="700"
                :sliderClass="'companySlider'"
                is-vacancy
            />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { computed, onMounted } from 'vue'
import GalleryCardSlider from '@/stories/GalleryCardSlider/GalleryCardSlider.vue'
import useOnLanguageChange from '@/composables/useOnLanguageChange'
import { useGalleryStore } from '@/stores/gallery'

const galleryStore = useGalleryStore()
const photogallery = computed(() => galleryStore.mainPhotogallery)

onMounted(() => {
    galleryStore.fetchPhotogallery()
    galleryStore.fetchPhotogallerySingle()
})
useOnLanguageChange(() => {
    galleryStore.fetchPhotogallery()
})
</script>

<style scoped>
.photogallery {
    background-image: url('@/assets/photo_gallery.png');
    background-size: contain;
    background-repeat: no-repeat !important;
}
</style>
