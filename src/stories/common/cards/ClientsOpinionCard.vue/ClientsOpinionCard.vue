<template>
    <div
        class="grid grid-cols-12 md:gap-x-[21px] gap-x-0 grid-rows-3 md:gap-y-[35px] md:grid-flow-col md:pb-12"
    >
        <div
            class="flex items-start justify-center order-last col-span-12 gap-5 pb-3 mb-6 md:col-span-6 md:justify-start md:order-first md:mt-0 mt-14 md:mb-0 md:pb-0"
            data-aos="fade-up"
            data-aos-duration="500"
        >
            <img
                :alt="props.alt"
                :src="props.image"
                class="md:w-[60px] w-[39px] md:h-[60px] h-[39px] rounded-[50%] object-cover object-center"
                width="60"
                height="60"
            />
            <div class="grid md:gap-1.5 gap-1">
                <h2
                    class="font-['Greycliff CF'] font-bold sm:text-base text-[13px] text-dark-100 sm:!leading-[20.8px] !leading-[16px] uppercase line-clamp-1"
                >
                    {{ props.full_name }}
                </h2>
                <h3
                    class="font-roboto font-normal sm:text-base text-[13px] text-[#828792] sm:!leading-[22.4px] !leading-[18px] tracking-[0.2px] line-clamp-1"
                    v-html="props.position"
                ></h3>
            </div>
        </div>
        <div
            class="order-first col-span-12 md:col-span-6 md:row-span-2 row-span-full blockquote-icon-wrapper"
            data-aos="fade-up"
            data-aos-duration="600"
        >
            <u-icons
                class="md:w-[36px] w-[32px] md:h-[36px] h-[32px] text-[#4aa5ff]"
                name="blockquote"
            />
            <div class="mt-0 mb-3 md:mt-3 md:mb-5 min-h-[63px]">
                <div
                    class="client-comment-content font-bold sm:text-xl text-[15px] line-clamp-2 text-dark-100 md:!leading-[28px] sm:leading-[21px] leading-[21px]"
                    v-html="props.title"
                ></div>
            </div>
        </div>
        <div
            class="col-span-12 row-span-3 md:col-span-6"
            data-aos="fade-up"
            data-aos-duration="700"
        >
            <div
                class="client-comment-content lg-pt-[30px] font-roboto font-normal sm:text-base text-[13px] sm:!leading-[22px] !leading-[18px] tracking-[0.2px] text-[#828792] overflow-hidden"
                v-html="props.text"
            ></div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import UIcons from '@/stories/ui/UIcons/UIcons.vue'

export interface Props {
    image?: string
    alt?: string
    full_name?: string
    position?: string
    title?: string
    text?: string
    // service?: string
    // clientSite?: string
    // clientMoreComment?: string
    // clientSiteLink?: string
}

const props = withDefaults(defineProps<Props>(), {
    alt: 'test',
})
</script>
<style scoped>
@media (max-width: 768px) {
    .blockquote-icon-wrapper i svg,
    .blockquote-icon-wrapper i svg path {
        width: 32px !important;
        height: 32px !important;
    }
}
</style>

<style>
.client-comment-content span {
    font-family: 'Greycliff CF', 'Roboto', sans-serif !important;
}
</style>
