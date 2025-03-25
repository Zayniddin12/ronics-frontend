<template>
    <div :class="{ 'bg-[#F7F9FA]': route.name === 'single' }">
        <c-loader v-if="indexStore.loading" />

        <RouterView v-slot="{ Component }">
            <transition :name="route.meta.transition || 'layout'" mode="out-in">
                <div :key="route.name">
                    <component :is="detectLayout">
                        <transition mode="out-in" name="fade">
                            <div>
                                <MetaInfo :data="indexStore.meta" />
                                <Component :is="Component" />
                            </div>
                        </transition>
                    </component>
                </div>
            </transition>
        </RouterView>
    </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import CLoader from '@/components/CLoader.vue'
import LDefault from '@/layouts/LDefault.vue'
import LBrief from '@/layouts/LBrief.vue'
import LEmpty from '@/layouts/LEmpty.vue'
import LMain from '@/layouts/LMain.vue'

import { useIndexStore } from '@/stores/MetaInfo'
import MetaInfo from '@/components/MetaInfo.vue'
import { usePageChange } from '@/stores/page-change'

const indexStore = useIndexStore()
const storePageChange = usePageChange()
const route = useRoute()
const loading = ref(true)

const layouts: { [key: string]: any } = {
    default: LDefault,
    empty: LEmpty,
    brief: LBrief,
    mainPage: LMain,
    error: LEmpty,
}
// const loading = ref(true);

const detectLayout = computed(() => {
    return layouts[route.meta.layout || ('default' as string)]
})

onMounted(() => {
    const generateUniqueId = () =>
        Date.now().toString(36) + Math.random().toString(36).substr(2)
    const visitorId = localStorage.getItem('visitorId')
    if (!visitorId) {
        localStorage.setItem('visitorId', generateUniqueId())
    }
})
watch(
    () => route.fullPath,
    () => {
        indexStore.setMetaInfo({
            title: 'Ronix',
            tagName: 'title',
            // title: $t("auth_meta"),
        })
    }
)

watch(
    () => storePageChange.loading,
    (newValue) => {
        if (!storePageChange.loading) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            })
            const body = document.body
            body.style.paddingRight = '0'
            body.style.overflow = 'auto'
        }
    }
)

onMounted(() => {
    setTimeout(() => {
        indexStore.loading = false
    }, 1000)
})
</script>

<style>
.page-enter-active,
.page-leave-active {
    transition: all 0.3s ease-out;
}

.page-enter,
.page-leave-to {
    opacity: 0;
    transform: translateY(10px);
    transition: all 0.3s ease-out;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
    transition: all 0.75s ease-out;
}

.slide-enter-to {
    position: absolute;
    right: 0;
}

.slide-enter-from {
    position: absolute;
    right: -100%;
}

.slide-leave-to {
    position: absolute;
    left: -100%;
}

.slide-leave-from {
    position: absolute;
    left: 0;
}

/* Scale */
.scale-enter-active,
.scale-leave-active {
    transition: all 0.3s ease-in-out;
}

.scale-enter-from,
.scale-leave-to {
    opacity: 0;
    transform: scale(0.9);
}

a,
button {
    cursor: pointer;
}
</style>
