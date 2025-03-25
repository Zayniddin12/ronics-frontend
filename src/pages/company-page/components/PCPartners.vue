<template>
    <CLoader v-if="loading" />

    <div
        class="bg-[#ffffff] md:py-[159px] sm:py-[30px] py-[30px]"
        :class="{ '!py-16': isAbout }"
    >
        <div class="container">
            <div class="mx-auto">
                <div
                    class="section-title_blue mb-[13px]"
                    :data-aos="global.aosAnimation('fade-right', 'fade-up')"
                    data-aos-duration="600"
                >
                    {{ $t('partners.subtitle') }}
                </div>
                <div
                    class="section-title_dark !text-dark-100 lg:leading-[43px] md:leading-[38px] sm:leading-[34px] leading-[34px] md:text-[36px] sm:text-[28px] text-[28px] mb-[36px] md:mb-[50px] lg:mb-[64px]"
                    :data-aos="global.aosAnimation('fade-right', 'fade-up')"
                    data-aos-duration="800"
                >
                    {{ $t('partners.title') }}
                </div>

                <!--  sm gacha grid, keyin swiper  -->

                <partner-cards
                    class="partners-slider hidden sm:block"
                    :data-aos="global.aosAnimation('fade-left', 'fade-up')"
                    data-aos-duration="1000"
                    v-bind="{
                        partners: partners,
                    }"
                />
                <partner-card-slider
                    class="partners-slider block sm:hidden"
                    :data-aos="global.aosAnimation('fade-left', 'fade-up')"
                    data-aos-duration="1000"
                    :sliderCard="partners"
                />
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'
import PartnersSection from '@/components/indexSections/PartnersSection.vue'
import PartnerCards from '@/stories/PartnerCards/PartnerCards.vue'
import { usePartnersStore } from '@/stores/partners'
import global from '@/plugins/global.ts'
import useOnLanguageChange from '@/composables/useOnLanguageChange'
import CLoader from '@/components/CLoader.vue'
import PartnerCardSlider from '@/stories/PartnerCardSlider/PartnerCardSlider.vue'

defineProps<{ isAbout?: boolean }>()

const partnersStore = usePartnersStore()
const partners = computed(() => partnersStore.mainPartners)

const loading = ref(true)

onMounted(() => {
    partnersStore.fetchMainPartners().finally(() => {
        loading.value = false
    })
})
useOnLanguageChange(() => {
    partnersStore.fetchMainPartners()
})
</script>
