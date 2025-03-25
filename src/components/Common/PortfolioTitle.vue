<template>
    <div class="container-video">
        <p
            :class="isPortfolio ? 'bg-[#1E1E20]' : 'bg-[#141415]'"
            class="font-bold uppercase text-[32px] md:text-[64px] text-white leading-[130%]"
        >
            portfolio
        </p>
    </div>
</template>

<script setup lang="ts">
interface Props {
    isPortfolio?: boolean
}
defineProps<Props>()
</script>

<style scoped>
.container-video {
    position: relative;
    width: 350px;
    overflow: hidden;
}

.container-video > .bg-video {
    width: 100%;
    height: 100%;
}

/* background-color and color should be the same as the below otherwise it won't work */
.container-video > .text {
    position: absolute;
    inset: 0;
    place-items: center;
    mix-blend-mode: darken;
    /* Mix Blend Mode does the all magic */
    user-select: none;
    line-height: 60px;
}

@media (max-width: 768px) {
    .container-video {
        width: 174px;
    }
    .container-video > .text {
        line-height: 32px;
    }
}
</style>
