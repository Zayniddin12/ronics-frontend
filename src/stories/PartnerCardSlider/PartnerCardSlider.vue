<template>
    <div>
        <swiper
            :breakpoints="{
                375: {
                    slidesPerView: 2,
                    spaceBetween: 8,
                },
                576: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 17,
                },
                992: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                },
            }"
            :slidesPerView="1"
            :spaceBetween="8"
            :grid="{
                rows: 1,
            }"
            :modules="modules"
            :pagination="{
                clickable: true,
                el: '.my-pagination',
            }"
            class="swiper_shadow"
        >
            <!-- :loop="true" -->
            <swiper-slide v-for="(item, index) in sliderCard" :key="index">
                <PartnerCard
                    v-bind="{
                        link: item?.company_site,
                        image: item?.photo,
                    }"
                />
            </swiper-slide>
        </swiper>
        <div
            class="my-pagination flex items-center justify-center mt-3 mb-2 md:mb-16 md:mt-16 swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"
        ></div>
    </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { Grid, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import PartnerCard from '@/stories/PartnerCard/PartnerCard.vue'
import 'swiper/css'
import 'swiper/css/grid'
import 'swiper/css/pagination'

export interface Props {
    img: string
    sliderCard: Array<object>
}

const props = defineProps<Props>();

//withDefaults(props, {})

const modules = [Pagination, Grid]

</script>

<style>
.my-pagination {
    text-align: center;
}

.swiper-pagination-bullet.swiper-pagination-bullet-active {
    background-color: gray !important;
}

.swiper-grid-column > .swiper-wrapper {
    flex-direction: row;
    align-items: flex-end;
}
.partner-card .swiper-pagination-bullet {
    margin: 0 !important;
    border-radius: 0;
    width: 41px;
    height: 2px;
    background: rgba(255, 255, 255, 0.2);
}
.swiper-pagination-bullet {
    color: #828792;
    background-color: #828792 !important;
    width: 41px;
    height: 2px;
}
.swiper-pagination-bullet {
    border-radius: 0;
}

.swiper_shadow {
    margin: -30px;
    padding: 30px !important;
}

@media (max-width: 767.9px) {
    .swiper-pagination-bullet {
        margin-top: 30px !important;
    }
}
</style>
