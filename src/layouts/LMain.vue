<template>
    <div class="h-full overflow-hidden" style="min-height: 100vh">
        <TheHeader
            v-bind="{ mainPage: true, scrollPosition: transparentHeader }"
            :class="[
                test && route.path === '/' ? '!absolute' : '!fixed',
                transparentHeader
                    ? 'header-transparent border-transparent'
                    : 'border-dark-100 backdrop-blur-[12px]',
            ]"
        />
        <slot />
        <Footer
            v-bind="{
                links: 'https://ronics.uz/',
                email: 'info@ronics.uz',
                map: '',
                map_link: '',
                tel: '+998 71 200 93 99',
            }"
        />
    </div>
</template>

<script lang="ts" setup>
import TheHeader from '@/stories/layout/theHeader/TheHeader.vue'
import Footer from '@/stories/layout/theFooter/theFooter.vue'
import { ref, watch } from 'vue'
import { useScrollPosition } from '@/composables/useScrollPosition'
import { useRoute } from 'vue-router'

const route = useRoute()
const { scrollPosition } = useScrollPosition()

const transparentHeader = ref(true)
const test = ref(true)
watch(
    () => scrollPosition.value,
    (newValue) => {
        if (window.innerWidth > 60) {
            if (newValue >= 60 || route.path !== '/') {
                transparentHeader.value = false
            }
            if (newValue > 0) {
                test.value = false
            } else {
                transparentHeader.value = true
            }
        } else {
            if (newValue >= 172 || route.path !== '/') {
                transparentHeader.value = false
            }
            if (newValue > 0) {
                test.value = false
            } else {
                transparentHeader.value = true
            }
        }
    }
)
</script>

<style scoped>
.header-transparent {
    background-color: transparent;
}
</style>
