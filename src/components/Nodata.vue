<template>
    <div class="min-h-full flex items-center justify-center flex-col">
        <div class="flex items-center justify-center">
            <UIcon
                name="noData"
                class="mb-[1rem] mt-[4rem] md:mt-[2rem]"
            ></UIcon>
        </div>
        <h5
            class="mb-0 sm:mb-[2rem] max-w-[300px] md:max-w-[900px] font-bold md:text-[3rem] text-[2rem] text-center text-[#193469] mt-3"
        >
            {{ $t('no_information') }}
        </h5>
    </div>
</template>

<script setup lang="ts">
import UIcon from '@/stories/ui/UIcons/UIcons.vue'
</script>

<style lang="scss" scoped></style>
