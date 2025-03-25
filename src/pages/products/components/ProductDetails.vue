<template>
    <section
        :data-aos="global.aosAnimation('fade-left', 'fade-up')"
        data-aos-duration="700"
        class="max-w-[990px] mx-auto bg-white rounded-[24px] p-3 lg:p-8"
    >
        <h1
            class="font-greyCliff text-2xl lg:text-4xl text-dark-100 font-bold mb-3 lg:mb-6"
        >
            {{ $t('products_list.details.title') }}
        </h1>

        <ul>
            <li
                class="text-sm md:text-xl text-dark-100 leading-7 font-medium mb-[5px]"
            >
                {{ $t('products_list.details.list1') }}:
                <strong>{{ details.title }}</strong>
            </li>
            <li
                class="text-sm md:text-xl text-dark-100 leading-7 font-medium mb-[5px]"
            >
                {{ $t('products_list.details.list2') }}:
                <strong>{{ details.equipment }}</strong>
            </li>
            <li
                class="text-sm md:text-xl text-dark-100 leading-7 font-medium mb-[5px]"
            >
                {{ $t('products_list.details.list3') }}:
                <strong>{{ details.power_input }}</strong>
            </li>
            <li
                class="text-sm md:text-xl text-dark-100 leading-7 font-medium mb-[5px]"
            >
                {{ $t('products_list.details.list4') }}:
                <strong>{{ details.warranty_period }}</strong>
            </li>
            <li
                class="text-sm md:text-xl text-dark-100 leading-7 font-medium mb-[5px]"
            >
                {{ $t('products_list.details.list5') }}:
                <strong>{{ details.power_voltage }}</strong>
            </li>
            <li
                class="text-sm md:text-xl text-dark-100 leading-7 font-medium mb-[5px]"
            >
                {{ $t('products_list.details.list6') }}:
                <strong>{{ details.communication_interface }}</strong>
            </li>
            <li
                class="text-sm md:text-xl text-dark-100 leading-7 font-medium mb-[5px]"
            >
                {{ $t('products_list.details.list7') }}:
                <strong>{{ details.function }}</strong>
            </li>
            <li
                class="text-sm md:text-xl text-dark-100 leading-7 font-medium mb-[5px]"
            >
                {{ $t('products_list.details.list8') }}:
                <strong>{{ details.drive_count }}</strong>
            </li>
            <li
                class="text-sm md:text-xl text-dark-100 leading-7 font-medium mb-[5px]"
            >
                {{ $t('products_list.details.list9') }}:
                <strong v-if="details.price">
                    {{
                        global.numberFunction(details.price) +
                        ' ' +
                        $t('products_list.details.currency')
                    }}
                </strong>
                <strong v-else>{{
                    $t('products_list.details.no_price')
                }}</strong>
            </li>

            <!--    pdf download button    -->
            <li
                v-if="details.file"
                class="text-sm md:text-xl text-dark-100 leading-7 font-medium mb-0 lg:mb-8 flex items-center gap-3"
            >
                {{ $t('instructions') }}:
                <a
                    class="w-fit flex items-center justify-center py-3 px-4 rounded-lg border-2 border-black-100 group transition duration-500 ease-in-out hover:border-gray"
                    :href="details.file"
                    target="_blank"
                >
                    <img
                        width="30px"
                        height="30px"
                        class="mr-2"
                        src="@/assets/icons/pdf.png"
                        alt="pdf-icon"
                    />
                    <span
                        class="inline-block lg:max-w-[135px] mr-8 text-left text-sm sm:text-base font-bold text-dark-100"
                        >{{ $t('buttons.btn9') }}
                    </span>
                    <u-icons
                        name="download_icon"
                        class="inline-block ml-auto"
                    />
                </a>
            </li>
        </ul>

        <!--        video part  -->
        <div v-if="details.video?.includes('jpg')">
            <img
                class="max-w-full w-auto h-auto mx-auto rounded-[16px] border-[1px]"
                :src="details.video"
                alt="Screenshot"
            />
        </div>
        <div v-else-if="details.video_url">
            <div
                class="relative overflow-hidden w-full"
                style="padding-top: 56.25%"
            >
                <iframe
                    class="absolute top-0 left-0 w-full h-full rounded-2xl"
                    :src="youtubeEmbedUrl"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                ></iframe>
            </div>
        </div>
        <div v-else-if="details.video" class="relative border-[#FFFFFF1A]">
            <video
                controls
                :poster="details.base_image"
                class="max-w-full w-auto h-auto max-h-[500px] mx-auto rounded-2xl border relative"
            >
                Sorry, your browser doesn't support embedded videos, but don't
                worry, you can
                <a href="https://archive.org/details/BigBuckBunny_124"
                    >download it</a
                >
                and watch it with your favorite video player!
                <source :src="details.video" />
            </video>
        </div>
    </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import global from '@/plugins/global.ts'
import { ProductSingleTypes } from '@/types/components/product-single.types'
import UIcons from '@/stories/ui/UIcons/UIcons.vue'

const props = defineProps<{
    details: ProductSingleTypes
}>()

const youtubeEmbedUrl = computed(() => {
    const url = new URL(props.details?.video_url)

    // Check if the URL is already an embed URL
    if (
        url.hostname === 'www.youtube.com' &&
        url.pathname.startsWith('/embed/')
    ) {
        return this.videoUrl
    }

    // Extract video ID from standard YouTube URL
    const videoId = url.searchParams.get('v')
    return `https://www.youtube.com/embed/${videoId}`
})
</script>

<style scoped>
.video::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #14141499 !important;
}
</style>
