<template>
    <div class="my-8">
        <div
            data-aos="fade-up"
            data-aos-duration="800"
            class="flex items-center mb-2 md:mb-4 lg:mb-6"
        >
            <span
                class="inline-block opacity-20 bg-gray h-[2px] w-8 mr-4"
            ></span>
            <h3 class="service-title !text-lg lg:text-2xl text-blue uppercase">
                {{ title }}
            </h3>
        </div>

        <main class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <router-link
                :to="{ name: 'ServiceSingle', params: { slug: service.slug } }"
                :data-aos="global.aosAnimation('fade-left', 'fade-up')"
                data-aos-duration="700"
                v-for="(service, index) in services"
                :key="index"
                class="cursor-pointer service-services bg-gray-100 p-2 md:p-5 rounded-[12px] border border-opacity-10 border-dark-100 border-solid transition-all duration-300 hover:border-[#4aa5ff]"
            >
                <h4
                    class="mb-1 align-self-stretch lg:mb-3 text-base text-dark-200 md:text-[16px] lg:text-[22px] font-bold leading-[26.4px] truncate"
                >
                    {{ service.title }}
                </h4>
                <p
                    class="service-subtitle text-dark-100 opacity-60 text-[12px] md:text-sm leading-[16.8px]"
                    :class="{
                        'line-clamp-3': service.description.length > 130,
                    }"
                >
                    {{ service.description }}
                </p>
            </router-link>
        </main>
    </div>
</template>
<script setup lang="ts">
import global from '@/plugins/global.ts'
import { useRouter } from 'vue-router'
import { ServiceMiniSerializer } from '@/types/components/service.types'
import { useServiceStore } from '@/stores/service'

const props = defineProps<{
    services: ServiceMiniSerializer[]
    title: string
    isHome?: boolean
}>()

const router = useRouter()
const serviceStore = useServiceStore()

const next = (service: ServiceMiniSerializer) => {
    serviceStore.selectedService = service
    router.push({ path: `/services/brief` })
}
</script>

<style scoped>
.service-services {
    transition: 0.3s ease-in-out !important;
}
.service-title {
    font-family: 'Greycliff CF';
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.72px;
    text-transform: uppercase;
}

.service-subtitle {
    overflow: hidden;
    color: rgba(7, 13, 24, 0.6);
    text-overflow: ellipsis;
    font-family: 'Greycliff CF';
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 16.8px */
}
</style>
