<template>
    <div class="container m-auto">
        <div
            class="partner__shadow grid gap-4 overflow-hidden lg:grid-cols-5 sm:grid-cols-3 grid-cols-2"
        >
            <PartnerCard
                v-for="item in partners"
                :key="item"
                v-bind="{ link: item?.company_site, image: item?.photo }"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onUnmounted, onMounted, ref } from 'vue'
import { Pagination } from 'swiper'
import PartnerCard from '@/stories/PartnerCard/PartnerCard.vue'
import 'swiper/css'
import 'swiper/css/pagination'

export interface Props {
    image?: string
    partners?: []
}
withDefaults(defineProps<Props>(), {})

// Define a reactive variable for window width
const windowWidth = ref<number>(window.innerWidth);

// Function to update windowWidth on resize
const onWidthChange = () => {
    windowWidth.value = window.innerWidth;
};

// Add event listener on mounted
onMounted(() => {
    window.addEventListener('resize', onWidthChange);
});

// Remove event listener on unmounted
onUnmounted(() => {
    window.removeEventListener('resize', onWidthChange);
});

const modules = [Pagination]
</script>

<style scoped>
.swiper-pagination-bullet.swiper-pagination-bullet-active {
    background: white !important;
    opacity: 1 !important;
    color: #ffff !important;
}

.swiper-pagination-bullet {
    width: 41px !important;
    height: 2px !important;
    border-radius: 0 !important;
    background: #fff !important;
    opacity: 0.2 !important;
    margin: 0 !important;
}

.partners-swiper .swiper-wrapper {
    gap: 20px;
}

.swiper-slide {
    margin-top: 0 !important;
}

.swiper-horizontal > .swiper-pagination-bullets,
.swiper-pagination-bullets.swiper-pagination-horizontal,
.swiper-pagination-custom,
.swiper-pagination-fraction {
    display: flex;
    justify-content: center;
}

.partner__shadow {
    margin: -30px;
    padding: 30px;
}
</style>
