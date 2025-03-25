<template>
    <section
        :data-aos="global.aosAnimation('fade-left', 'fade-up')"
        data-aos-duration="700"
        class="max-w-[990px] mx-auto bg-white rounded-[24px] p-3 lg:p-8"
    >
        <h1
            class="font-greyCliff text-2xl lg:text-4xl text-dark-100 font-bold mb-3 lg:mb-6"
        >
           Service Detail Info Page
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
                <strong v-if="details.price">{{
                        global.numberFunction(details.price) +
                        ' ' +
                        $t('products_list.details.currency')
                    }}</strong>
                <strong v-else>{{
                        $t('products_list.details.no_price')
                    }}</strong>
            </li>

            <!--    pdf download button    -->
            <li
                class="text-sm md:text-xl text-dark-100 leading-7 font-medium mb-0 lg:mb-8 flex items-center gap-3"
            >
                {{ $t('instructions') }}:
                <a
                    v-if="details.file"
                    class="w-fit flex items-center justify-center py-3 px-4 rounded-lg border-2 border-black-100 group transition duration-500 ease-in-out hover:border-gray"
                    :href="details.file"
                    target="_blank"
                >
                    <img width="30px" height="30px" class="mr-2" src="@/assets/icons/pdf.png" alt="pdf-icon">
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
        <div v-else-if="details.video" class="relative border-[#FFFFFF1A]">
            <video
                controls
                :poster="details.base_image"
                class="max-w-full w-auto h-auto max-h-[500px] mx-auto rounded-[16px] border-[1px] relative"
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
import global from '@/plugins/global.ts'
import UIcons from '@/stories/ui/UIcons/UIcons.vue'
import { ServiceSingleTypes } from '@/types/components/service.types'

defineProps<{
    details: ServiceSingleTypes
}>()
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

video {
}
</style>
