<template>
    <div class="flex items-center justify-center z-50 gap-3">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="42"
            viewBox="0 0 30 42"
            fill="none"
        >
            <path
                d="M15 1.5C7.54416 1.5 1.5 7.54416 1.5 15V27C1.5 34.4558 7.54416 40.5 15 40.5C22.4558 40.5 28.5 34.4558 28.5 27V15C28.5 7.54416 22.4558 1.5 15 1.5Z"
                stroke="#ffffff"
                stroke-width="3"
            />
            <path
                class="scrollable-el"
                d="M15 17V11"
                stroke="#4aa5ff"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
        <div>
            <p class="scroll-text flex flex-col text-white">
                <span class="inlibe-block mb-[6px]">{{
                    $t('main.scroll_title')
                }}</span>
                <span>{{ $t('main.scroll_subtitle') }}</span>
            </p>
        </div>
    </div>
</template>
<script setup lang="ts">
interface Props {
    title: string
}
defineProps<Props>()
</script>

<style scoped>
.scroll-text span:first-child {
    color: #fff;
    font-family: 'Montserrat', sans-serif;
    font-size: 14.42px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}
.scroll-text span:last-child {
    color: #fff;
    font-family: 'Montserrat';
    font-size: 9.614px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.scrollable-el {
    animation: scroll-down 3s ease-in-out forwards infinite;
}

@keyframes scroll-down {
    0%,
    100% {
        transform: translateY(0);
    }

    25%,
    75% {
        transform: translateY(10px);
    }

    50% {
        transform: translateY(5px);
    }
}
</style>
