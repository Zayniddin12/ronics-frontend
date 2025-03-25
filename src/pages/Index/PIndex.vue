<template>
    <section class="overflow-hidden">
        <PCHero />

        <!--scroll-->
        <div>
            <transition name="fade" mode="out-in">
                <div class="flex items-center justify-center">
                    <ThePortfolioNext :data-aos-duration="500" data-aos="fade-top"
                        class="absolute lg:bottom-20 bottom-10 translate-x-1/2 translate-y-1/2 z-0" ref="target"
                        :title="portfolioNewState?.title" />
                </div>
            </transition>
        </div>

        <!--      about-->
        <section class="bg-[#F7F9FA] pt-[60px] sm:pt-[150px] lg:pt-[201px] lg:pb-[15px]">
            <SAbout v-bind="{
                gallery1: gallery.photo1_list,
                gallery2: gallery.photo2_list,
            }" />
        </section>

        <!--      products catalog start-->
        <div class="container py-8 md:py-[60px] lg:py-[64px]">
            <p class="section-title_blue !text-dark-100 about-us mb-2"
                :data-aos="global.aosAnimation('fade-down', 'fade-up')" data-aos-duration="700">
                {{ $t('services.subtitle') }}
            </p>
            <div class="section-title_dark !text-[#070D18] mb-8 md:mb-[45px] lg:mb-[56px] leading-[120px]"
                :data-aos="global.aosAnimation('fade-down', 'fade-up')" data-aos-duration="600">
                {{ $t('services.category_heading') }}
            </div>

            <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <ProductCategoryCard v-for="(
                        productCategory, index
                    ) in productStore.productCategory" :key="index" :card="productCategory" />
            </div>
        </div>

        <!--      products catalog end-->

        <!--      top products start-->
        <div v-if="productStore.topProducts.length > 0" class="bg-dark-100 py-16">
            <div class="container">
                <p class="section-title_blue about-us" :data-aos="global.aosAnimation('fade-down', 'fade-up')"
                    data-aos-duration="700">
                    {{ $t('services.subtitle') }}
                </p>
                <div class="section-title_white mb-8 md:mb-[45px] lg:mb-16"
                    :data-aos="global.aosAnimation('fade-down', 'fade-up')" data-aos-duration="600">
                    {{ $t('services.top_rated') }}
                </div>

                <ProductTopRatedCarousel />
            </div>
        </div>

        <!--      top products end-->

        <!--    services start  -->
<!--        <div class="container">-->
<!--            <ServiceDirections v-for="(data, index) in serviceStore.result" :key="index" :title="data.title"-->
<!--                :services="data.services" is-home />-->
<!--        </div>-->
        <!-- end of services -->

        <div class="relative py-8 sm:py-0">
            <clients-comment />

            <PCPartners is-about />
            <!--   small form   -->
            <CustomerIdeaForm
                class="w-full lg:absolute -bottom-[63px] lg:left-[50%] lg:translate-x-[-50%] translate-x-0 mx-auto mt-16" />
        </div>

        <!--      partners-->
        <div class="bg-[#ffffff] md:pt-[159px] sm:py-[30px] py-[30px] partners" :class="{ '!py-16': isAbout }">
            <div class="container mx-auto">
                <partners-section />
            </div>
        </div>

        <div class="bg-[#193469] pt-[95px] hidden md:block">
            <div class="container">
                <JoinOurTeam data-aos="fade-up" data-aos-duration="600" class="" v-bind="{
                    vacancies: vacancyList,
                    title: 'aboutform.title',
                    text: 'aboutform.subtitle',
                }" />
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'
import CustomerIdeaForm from '@/components/CustomerIdeaForm.vue'
const domain = import.meta.env.VITE_APP_DOMAIN
import PCHero from './components/PCHero.vue'
import SAbout from '@/stories/About/SAbout.vue'
import { useServiceStore } from '@/stores/service'

import ServiceDirections from '@/components/aboutSections/ServiceDirections.vue'
import ClientsComment from '@/components/indexSections/ClientsComment.vue'
import PartnersSection from '@/components/indexSections/PartnersSection.vue'
import ProductCategoryCard from '@/components/ProductCategoryCard.vue'
import { useProductStore } from '@/stores/product'
const serviceStore = useServiceStore()
const getService = async () => {
    await serviceStore.get()
}

getService()

const productStore = useProductStore()
productStore.getCategoryByName()

productStore.getTopProducts()

import ThePortfolioNext from '@/pages/portfolio/component/ThePortfolioNext/ThePortfolioNext.vue'

import { useGalleryStore } from '@/stores/gallery'
// import { useVacancyStore } from '@/stores/vacancy'
// import { usePortfolioStore } from '@/stores/portfolio'
import useOnLanguageChange from '@/composables/useOnLanguageChange'

// modal

const route = useRoute()

import global from '@/plugins/global.ts'

// import 'swiper/css'
// import 'swiper/css/free-mode'
import { useIndexStore } from '@/stores/MetaInfo'

const $indexStore = useIndexStore()
import JoinOurTeam from '@/stories/common/block/JoinUs/JoinOurTeam.vue'

import { useRoute, useRouter } from 'vue-router'

import ProductTopRatedCarousel from '@/components/ProductTopRatedCarousel.vue'

const galleryStore = useGalleryStore()
// const vacancyStore = useVacancyStore()
// const portfolioStore = usePortfolioStore()
// const categoryStore = usePortfolioStore()
//F
const gallery = computed(() => galleryStore.mainGallery)
// const portfolios = computed(() => portfolioStore.portfolioHomePage)
// const categories = computed(() => categoryStore.mainCategories)

onMounted(async () => {
    await galleryStore.fetchMainTeamImages()
    // await vacancyStore.fetchMainVacancy(4)
    // await portfolioStore.fetchPortfolioHomePage(1)
    // await categoryStore.fetchPortfolioCategories()
    $indexStore.loading = false
})
onMounted(() => {
    $indexStore.setMetaInfo({
        title: 'Ronics',
        tagName: 'title',
        // title: t("auth_meta"),
    })
})
useOnLanguageChange(() => {
    galleryStore.fetchMainTeamImages()
    // portfolioStore.fetchPortfolioHomePage(1)
    // categoryStore.fetchPortfolioCategories()
})

const gsapIf = ref(false)
setTimeout(() => {
    gsapIf.value = true
}, 600)
</script>

<style scoped>
/*modal start*/
.modal-container {
    position: fixed;
    width: 100%;
    height: 100vh;
    background: rgba(25, 52, 105, 0.68);
    backdrop-filter: blur(16px);
    z-index: 10000;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

.modal {
    z-index: 998;
    background: #ffffff;
    border-radius: 8px;
    position: relative;
    font-family: 'Roboto';
    font-style: normal;
}

@media screen and (min-width: 370px) and (max-width: 575.9px) {
    .modal {
        top: 5%;
    }
}

@media screen and (min-width: 576px) and (max-width: 767.9px) {
    .modal {
        top: 7%;
    }
}

@media screen and (min-width: 768px) and (max-width: 991.9px) {
    .modal {
        top: 8%;
    }
}

@media screen and (min-width: 992px) and (max-width: 1199.9px) {
    .modal {
        top: 6%;
    }
}

@media screen and (min-width: 1200px) {
    .modal {
        top: 3%;
    }
}

/*modal end*/

.about-us {
    position: relative;
    width: max-content;
}

.about-us::after {
    content: '';
    display: block;
    position: absolute !important;
    right: -40px;
    top: 48% !important;
    width: 32px;
    height: 1.3px;
    background: #fff;
    opacity: 0.2;
}
</style>

<style>
.category-slider {
    width: max-content;
}

.close--icon svg {
    width: 20px;
}

.scroll-mini::-webkit-scrollbar {
    width: 0;
    height: 0;
}

.partners .swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal {
    background-color: #e74c3c !important;
    color: #1042f5 !important;
}

.partners .swiper-pagination-bullet swiper-pagination-bullet-active {
    background-color: #e74c3c !important;
    color: #1042f5 !important;
}

.swiper-pagination-bullet swiper-pagination-bullet-active {
    background-color: #e74c3c !important;
    color: #1042f5 !important;
}
</style>
