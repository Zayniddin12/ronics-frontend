<template>
    <div
        :class="[
            props.show
                ? 'visible opacity-100 -translate-y-1/3 z-10'
                : 'invisible opacity-0',
            classStyle,
        ]"
        class="absolute w-max flex items-center z-10 bottom-full -translate-y-1/4 left-1/2 -translate-x-1/2 group-hover:-translate-y-1/3 px-4 py-0 bg-dark-200 text-white text-sm leading-130 rounded-lg border border-dark-secondary text-center transition-all duration-300 group-hover:visible group-hover:opacity-100"
    >
        <span class="shrink-0">
            <slot></slot>
        </span>
        <!-- <img src="/src/assets/images/img1.png" alt="" class="absolute left-1/2 -translate-x-1/2 top-full" /> -->
        <span class="tool-tip" />
    </div>
</template>
<script setup lang="ts">
export interface Props {
    show?: boolean
    classStyle?: string
}

const props = withDefaults(defineProps<Props>(), {
    classStyle: '',
})
</script>
<style scoped>
.tool-tip {
    position: absolute;
    width: 14px;
    height: 14px;
    background-color: #181919;
    bottom: -10%;
    left: calc(50% - 7px);
    transform: rotate(45deg);
}
</style>
