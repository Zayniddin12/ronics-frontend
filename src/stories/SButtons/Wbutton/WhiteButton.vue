<template>
    <div class="group" :class="customClassGroup">
        <router-link
            v-if="link"
            :to="link"
            class="flex w-full pr-4 pl-8 items-center justify-center rounded-lg md:rounded-12 transition duration-500 ease-in-out bg-[#4aa5ff] cursor-pointer hover:!bg-red"
            :class="customClass"
        >
            <p
                class="text-white sm:text-base lg:!leading-130 leading-[16px] font-bold py-[10px] sm:py-[10px] lg:!pt-[13px] lg:!pb-[14px] flex justify-center items-center whitespace-nowrap lg:!text-[16px] text-[13px] md:!text-[16px] gap-x-[10px] lg:!gap-x-[24px]"
            >
                {{ $t(title) }}

                <u-icons
                    class="transition duration-500 ease-in-out group-hover:rotate-45 w-[16px] h-[16px] lg:w-[24px] lg:h-[24px] flex items-center"
                    :class="customIconClass"
                    :name="icon"
                />
            </p>
        </router-link>

        <div
            v-else
            class="flex button-hover w-full items-center justify-center rounded-lg md:rounded-12 transition duration-500 ease-in-out bg-[#4aa5ff] cursor-pointer py-[10px] sm:py-[14px] hover:bg-transparent border border-blue"
            :class="customClass"
        >
            <div v-if="loading" class="spinner" />
            <p
                v-else
                class="text-white text-center sm:text-base lg:!leading-130 transition duration-500 ease-in-out leading-[16px] group-hover:text-blue font-bold flex justify-center items-center lg:!text-[16px] text-[13px] md:!text-[16px] gap-x-[10px] lg:!gap-x-[24px]"
            >
                {{ $t(title) }}

                <u-icons
                    class="transition duration-500 ease-in-out group-hover:rotate-45 w-[16px] h-[16px] lg:w-[24px] lg:h-[24px] flex items-center"
                    :class="customIconClass"
                    :name="icon"
                />
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import UIcons from '@/stories/ui/UIcons/UIcons.vue'

export interface Props {
    title?: string
    link?: string
    icon?: string
    customClass?: string
    customIconClass?: string
    customClassGroup?: string
    loading?: boolean
}
withDefaults(defineProps<Props>(), {
    title: 'Title',
    icon: 'arrow_right',
    customClass: '',
    customIconClass: '',
})
</script>

<style scoped>
.customer-form__btn p {
    display: inline-block;
    max-width: 113px;
    color: #193469;
    margin-right: 32px !important;
}

.customer i svg path {
    fill: #193469 !important;
}

.customer-form__btn > div {
    padding: 17px 24px 19px !important;
}

.spinner {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 3.8px solid #ffffff;
    animation: spinner-bulqg1 0.96s infinite linear alternate,
        spinner-oaa3wk 1.92s infinite linear;
}

.button-hover:hover .spinner {
    border: 3.8px solid #4aa5ff;
}

@keyframes spinner-bulqg1 {
    0% {
        clip-path: polygon(
            50% 50%,
            0 0,
            50% 0%,
            50% 0%,
            50% 0%,
            50% 0%,
            50% 0%
        );
    }

    12.5% {
        clip-path: polygon(
            50% 50%,
            0 0,
            50% 0%,
            100% 0%,
            100% 0%,
            100% 0%,
            100% 0%
        );
    }

    25% {
        clip-path: polygon(
            50% 50%,
            0 0,
            50% 0%,
            100% 0%,
            100% 100%,
            100% 100%,
            100% 100%
        );
    }

    50% {
        clip-path: polygon(
            50% 50%,
            0 0,
            50% 0%,
            100% 0%,
            100% 100%,
            50% 100%,
            0% 100%
        );
    }

    62.5% {
        clip-path: polygon(
            50% 50%,
            100% 0,
            100% 0%,
            100% 0%,
            100% 100%,
            50% 100%,
            0% 100%
        );
    }

    75% {
        clip-path: polygon(
            50% 50%,
            100% 100%,
            100% 100%,
            100% 100%,
            100% 100%,
            50% 100%,
            0% 100%
        );
    }

    100% {
        clip-path: polygon(
            50% 50%,
            50% 100%,
            50% 100%,
            50% 100%,
            50% 100%,
            50% 100%,
            0% 100%
        );
    }
}

@keyframes spinner-oaa3wk {
    0% {
        transform: scaleY(1) rotate(0deg);
    }

    49.99% {
        transform: scaleY(1) rotate(135deg);
    }

    50% {
        transform: scaleY(-1) rotate(0deg);
    }

    100% {
        transform: scaleY(-1) rotate(-135deg);
    }
}
</style>
