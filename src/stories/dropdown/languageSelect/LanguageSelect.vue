<template>
    <div
        ref="isSelect"
        class="max-w-[70px] bg-[#ffffff33] !border-[1px] border-[#ffffff33] rounded-8 z-10 text-[#ffffff99] cursor-pointer"
        :class="
            isHomePage ? 'border-transparent' : 'border-[1px] border-dark-100'
        "
    >
        <div class="relative z-[100] selector">
            <div
                @click="showOptions = !showOptions"
                class="flex items-center justify-center gap-1 py-[10px] px-[12px]"
            >
                <div class="flex icon-wrapper fill-opacity-[#fff]">
                    <u-icons
                        :name="[
                            scrollPosition && !isHomePage
                                ? 'globe_dark'
                                : 'globe_white',
                        ]"
                        class="relative globe !flex transition duration-500 -mt-0.5 ease-in-out"
                        :class="[
                            {
                                ' !fill-[#fff] !fill-opacity-1 transition duration-300 ease':
                                    showOptions,
                            },
                            { '!fill-dark-100': !isHomePage },
                        ]"
                    />
                </div>
                <div
                    class="text-[13px] font-bold leading-3 md:leading-4 uppercase"
                >
                    <span
                        :class="[
                            // {
                            //     'text-white transition duration-300 ease ':
                            //         showOptions,
                            // },
                            { 'text-dark-100': scrollPosition && !isHomePage },
                        ]"  
                    >
                        {{ activeItem.title }}
                    </span>
                </div>
            </div>

            <transition name="fade">
                <!-- showOptions ? 'transition duration-500 ease-in-out' : ' ' -->

                <div
                    v-if="showOptions"
                    :class="[
                        borderStyle ? borderStyle : 'border-[#ffffff33]',
                        showOptions
                            ? 'transition duration-500 ease-in-out'
                            : ' ',
                        !isHomePage ? '!ms-[-0.5px] !w-[69.5px]' : '',

                        // isHomePage ? 'w-[68px] !ms-[0.5px] mt-[-150px]' : ''
                        scrollPosition
                            ? '!w-[69.5px] !ms-[-1px]'
                            : '!w-[69.5px] !ms-[-1px]',
                        !isHomePage && !scrollPosition
                            ? '!w-[67.9px] !ms-[0px]'
                            : '',
                    ]"
                    class="language-window absolute z-[1000] top-full border border-solid rounded-8 pt-1.5 -mt-1.5"
                >
                    <ul
                        @click="showOptions = !showOptions"
                        class="overflow-hidden text-left list-none duration-500 ease-in-out rounded-b-lg bg-transparent options-wrapper py-1"
                        :class="!isHomePage ? 'w-[900px]' : ''"
                    >
                        <template
                            v-for="(item, index) in languages"
                            :key="index"
                        >
                            <li
                                v-if="item.short !== activeItem.short"
                                :class="{ current: item.title === activeItem }"
                                @click="$emit('select', item)"
                                class="option flex items-center gap-2 text-[13px] font-bold leading-[16px] group transition duration-300 ease-in-out mb-2 last:mb-0 px-2"
                            >
                                <div
                                    class="icon-wrapper flex items-center w-[16px] h-[16px] group-hover:text-white"
                                >
                                    <u-icons
                                        name="globe_white"
                                        class="iconClassAcordion flex w-full items-center h-full transition duration-500 ease-in-out"
                                        :class="{
                                            current: item.title === activeItem,
                                        }"
                                    />
                                </div>
                                <span class="group-hover:text-white">{{
                                    item.title
                                }}</span>
                            </li>
                        </template>
                    </ul>
                </div>
            </transition>
        </div>
    </div>
</template>

<script setup lang="ts">
import UIcons from '@/stories/ui/UIcons/UIcons.vue'
import { onClickOutside } from '@vueuse/core'
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'

export interface Props {
    borderStyle?: boolean
    languages: any
    activeItem: any
    scrollPosition: any
}

withDefaults(defineProps<Props>(), {
    activeItem: 'en',
})

let showOptions = ref(false)
const route = useRoute()
const isSelect = ref(null)

onClickOutside(isSelect, () => {
    showOptions.value = false
})

const isHomePage = computed(() => route.path === '/')
</script>

<style scoped>
.current {
    color: white;
}

.language-window {
    border-top: transparent;
    border-radius: 0 0 8px 8px;
    background-color: #4aa5ff;
    margin-top: -5px !important;
    margin-left: -0.5px;
}

/* TRANSITION */

.fade-enter-active {
    animation: fade 0.3s ease-in-out;
}

.fade-leave-active {
    animation: fade 0.3s ease-in-out reverse;
}

@keyframes fade {
    0% {
        opacity: 0;
        transition: 0.3s linear;
    }

    100% {
        opacity: 1;
        transition: 0.3s linear;
    }
}
</style>
