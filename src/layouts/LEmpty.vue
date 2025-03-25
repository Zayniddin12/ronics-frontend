<template>
    <div class="text-white error-wrapp">
        <TheHeader
            v-bind="{ mainPage: false, scrollPosition: transparentHeader }"
            :class="[
                test && route.path === '/' ? '!absolute' : '!fixed',
                transparentHeader
                    ? 'header-transparent border-transparent'
                    : 'border-dark-100 backdrop-blur-[12px]',
            ]"
        />
        <error-section />
    </div>
</template>
<script setup lang="ts">
import ErrorSection from '@/pages/ErrorPage/ErrorSection.vue'
import { useIndexStore } from '@/stores/MetaInfo'
import { onMounted, ref, watch } from 'vue'
import TheHeader from '@/stories/layout/theHeader/TheHeader.vue'
import { useScrollPosition } from '@/composables/useScrollPosition'
import { useRoute } from 'vue-router'

const route = useRoute()
const { scrollPosition } = useScrollPosition()

const transparentHeader = ref(true)
const test = ref(true)

const $indexStore = useIndexStore()

onMounted(() => {
    $indexStore.setMetaInfo({
        title: 'Page not found',
        tagName: 'title',
    })
})
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
.error-wrapp {
    /*overflow: hidden !important;*/
    /*height: 100vh;*/
}
.header-transparent {
    background-color: transparent;
}
</style>
