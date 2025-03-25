<template>
    <CLoader v-if="loading" />
    <div class="h-[25vh]"></div>
    <section>
        <div class="container">
            <div data-aos="fade-up" data-aos-duration="800" class="mb-8">
                <img
                    src="../../assets/icons/arrow-left.svg"
                    alt="Back Icon"
                    class="cursor-pointer hover:bg-[#1934691A] hover:rounded-full"
                    @click="router.back()"
                />
            </div>
            <ServiceSwiper
                class="mb-[45px]"
                :images="serviceStore.currentService.images"

            />
            <!--            product details-->
            <ServiceDetails
                :details="serviceStore.currentService"
                class="mb-[64px]"
            />
            <CustomerIdeaForm :product-id="serviceStore.currentService.id" class="!my-[64px]" />
        </div>


    </section>
</template>

<script setup lang="ts">
import ServiceSwiper from './components/ServiceSwiper.vue'
import ServiceDetails from './components/ServiceDetails.vue'

import { useRoute, useRouter } from 'vue-router'
import CLoader from '@/components/CLoader.vue'
import { ref } from 'vue'
import CustomerIdeaForm from '@/components/CustomerIdeaForm.vue'
import { useServiceStore } from '@/stores/service'
import ServiceDirections from '@/components/aboutSections/ServiceDirections.vue'

const route = useRoute()
const router = useRouter()
const serviceStore = useServiceStore()

const loading = ref(false)
const currentSlug = route.params?.slug as string

const get = async () => {
    try {
        loading.value = true
        await serviceStore.getServiceDetailBySlug(currentSlug)
        loading.value = false
    } catch (e) {
        loading.value = false
    }
}

get()
</script>
