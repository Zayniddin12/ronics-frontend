<template>
    <div class="cursor-pointer select-none partner-card__style">
        <a
            :href="link"
            target="_blank"
            style="-webkit-user-drag: none"
            aria-label="link"
        >
            <div
                class="w-full h-[127px] px-[20px] py-[15px] gap-4 partner_card transition duration-300 ease-in-out flex justify-center grayscale hover:grayscale-0 hover:sepia-0 items-center bg-[#F1F4FA] hover:bg-white rounded"
            >
                <img
                    style="-webkit-user-drag: none"
                    class="w-full h-full object-contain"
                    :src="image"
                    alt="partnerImg"
                />
            </div>
        </a>
    </div>
</template>

<script setup lang="ts">
export interface Props {
    image: string
    link: string
}

withDefaults(defineProps<Props>(), {
    image: 'https://picsum.photos/id/1/100',
    link: 'https://google.com',
})
</script>

<style scoped>
.partner_card {
    transition: all 0.3s linear;
}
.partner_card:hover {
    border-radius: 12px;
    border: 1px solid rgba(74, 165, 255, 0.18);
    background: #ffffff;
    box-shadow: 0px 24px 40px 0px rgba(181, 188, 204, 0.2);
}

@media (max-width: 766px) {
    .partner-card__style {
        margin: 10px 0 10px 0;
    }
}
</style>
