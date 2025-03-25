<template>
    <!--    loading service-->

    <CLoader v-if="loading"></CLoader>

    <!--    services-->
    <section class="pt-[100px] md:pt-[120px] lg:pt-[189px] lg:mb-[96px]">
        <div class="container">
            <NavigationHeader :title="$t('services.heading')" />

            <ServiceDirections
                v-for="(data, index) in serviceStore.result"
                :key="index"
                :title="data.title"
                :services="data.services"
            />
        </div>
    </section>
</template>

<script setup lang="ts">
import { useServiceStore } from '@/stores/service'
import NavigationHeader from '@/components/NavigationHeader.vue'
import ServiceDirections from '@/components/aboutSections/ServiceDirections.vue'
import CLoader from '@/components/CLoader.vue'
import { ref } from 'vue'
const serviceStore = useServiceStore()

const loading = ref(false)

const getService = async () => {
    try {
        loading.value = true
        await serviceStore.get()
        loading.value = false
    } catch (e) {
        loading.value = false
    }
}

getService()
</script>
