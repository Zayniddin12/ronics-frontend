<template>
    <div
        class="grid p-8 md:p-10 lg:pt-12 pb-16 lg:pb-16 md:gap-y-3 lg:gap-y-8 lg:px-14 md:grid-cols-12 rounded-xl items-start"
    >
        <div :class="customClass" class="xl:col-span-7 col-span-12">
            <h2
                v-if="title"
                class="font-greyCliff font-bold text-center md:text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl md:!leading-[120%] text-white max-w-[631px] mb-4 md:mb-8"
            >
                {{ $t(title || '') }} :)
            </h2>
            <p
                v-if="text"
                class="font-roboto text-[16px] text-center md:text-left font-normal !leading-[120%] sm:!leading-[140%] text-[#e0e0e0] text-opacity-60 max-w-[622px] tracking-[0.2px]"
            >
                {{ $t(text) }}
            </p>
        </div>
        <ul
            v-if="vacancies?.length"
            class="xl:col-span-5 col-span-12 ml-0 lg:ml-5 grid gap-6 lg:mt-0 mt-8"
        >
            <li v-for="(item, index) in vacancies" :key="index">
                <!--     link chopildi `/vacancy/${item.id}`-->
                <!--              @click="scrollEvent"-->
                <div
                    class="flex items-start font-medium text-sm md:text-lg !leading-[130%] tracking-[0.002em] text-white hover:text-[#4AA5FF] transition duration-300 ease-in-out hover:transition hover:duration-300"
                >
                    <svg
                        class="mr-2 min-w-[32px] inline translate-y-2.5"
                        data-v-8f9e4d0e=""
                        fill="none"
                        height="2"
                        viewBox="0 0 32 2"
                        width="32"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect
                            data-v-8f9e4d0e=""
                            fill="white"
                            height="32"
                            opacity="0.2"
                            transform="rotate(-90 0 2)"
                            width="2"
                            y="2"
                        ></rect>
                    </svg>
                    <span
                        class="leading-[23.4px] text-[18px] font-medium font-greyCliff"
                    >
                        {{ $t(item.title) }}
                    </span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
export interface Props {
    link?: string
    title?: string
    text?: string
    customClass: string
    vacancies: Array<object>
}

withDefaults(defineProps<Props>(), {
    vacancies: () => [
        { title: 'footer_list.title1' },
        { title: 'footer_list.title2' },
        { title: 'footer_list.title3' },
        { title: 'footer_list.title4' },
        { title: 'footer_list.title5' },
        { title: 'footer_list.title6' },
    ],
})
function scrollEvent() {}
</script>
