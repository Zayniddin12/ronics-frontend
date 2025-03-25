<template>
    <div>
        <div class="$style.word-wrapper overflow-hidden">
            <h1
                class="flex items-center justify-center relative font-['Greycliff CF'] font-extrabold whitespace-nowrap text-[56px] leading-[67px] sm:text-[56px] sm:leading-[67px] md:text-[100px] md:leading-[140px] lg:text-[200px] lg:leading-[252px] stroke-[#ffffff1a] border-solid uppercase"
            >
                {{ title }}
                <span
                    class="flex items-center justify-center font-['Greycliff CF'] absolute top-[50%] left-[50%] translate-y-[-30%] -translate-x-2/4 uppercase !text-dark-100 !font-extrabold text-[40px] leading-[48px] sm:text-[40px] sm:leading-[48px] md:text-[56px] md:leading-[74px] lg:text-[78px] lg:leading-[94px]"
                >
                    {{ title }}
                </span>
            </h1>
        </div>
    </div>
</template>

<script setup lang="ts">
export interface Props {
    title: string
}

withDefaults(defineProps<Props>(), {
    title: '',
})
</script>

<style scoped>
h1 {
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 1px rgba(25, 52, 105, 0.1);
}

span {
    -webkit-text-fill-color: #193469;
}
</style>
