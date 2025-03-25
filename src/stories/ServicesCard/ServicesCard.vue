<template>
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <router-link
            v-for="(item, index) in serviceCard"
            :key="index"
            @click="scrollToTop"
            :data-aos-duration="`${index + 5}00`"
            :to="item.link ? item.link : 'link'"
            class="h-full p-3 transition duration-300 cursor-pointer services-card bg-gray-100 border border-opacity-10 border-dark-100 rounded-8 xs:rounded-12 sm:py-4 sm:px-4 lg:py-8 lg:px-8"
            :data-aos="global.aosAnimation('fade-right', 'fade-up')"
        >
            <div class="max-w-[380px]">
                <h3
                    class="text-dark text-base sm:text-[28px] lg:text-[38px] font-bold leading-120 mb-1 sm:mb-3 line-clamp-2"
                >
                    {{ $t(item?.title || '') }}
                </h3>
                <p
                    class="text-dark opacity-60 font-sans font-normal text-[14px] sm:text-sm lg:text-base leading-130 lg:leading-140 xs:leading-140 tracking-[0.2px] line-clamp-3"
                >
                    {{ $t(item?.subtitle || '') }}
                </p>
            </div>
        </router-link>
    </div>
</template>

<script lang="ts" setup>
import global from '@/plugins/global.ts'
export interface Props {
    serviceCard: Array<object>
}

withDefaults(defineProps<Props>(), {})

const scrollToTop = () => {
    setTimeout(() => window.scrollTo(0, 0), 800)
}
</script>

<style>
.services-card {
    transition: 0.4s ease-in-out !important;
}

.services-card:hover {
    box-shadow: 0px 2px 3px rgba(15, 15, 15, 0.35),
        0px 12px 60px rgba(37, 37, 37, 0.7);
}
</style>
