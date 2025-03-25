<template>
    <div
        class="relative"
        style="
            width: 100%;
            height: 100%;
            position: relative;
            overflow: hidden;
            border: 1px solid #f1f4fa;
            border-radius: 24px;
        "
    >
        <iframe
            width="100%"
            height="480"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=486&amp;hl=en&amp;q=1%20%D0%A3%D0%BB%D0%B8%D1%86%D0%B0%20%D0%A4%D0%B8%D0%B4%D0%BE%D0%BA%D0%BE%D1%80,%20Tashkent,%20%D0%A3%D0%B7%D0%B1%D0%B5%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ><a href="https://www.maps.ie/population/"
                >Population Estimator map</a
            ></iframe
        >

        <div class="contact-map !w-full absolute bottom-0 left-0 right-0"></div>

        <div
            class="lg:max-w-[394px] max-w-[300px] absolute bottom-[12px] left-[12px] lg:bottom-[24px] md:left-[16px] md:bottom-[16px] lg:left-[24px] z-50"
        >
            <a
                class="max-w-full p-[6px] group flex items-center border-[1px] !border-[#1934695C] border-solid transition duration-300 ease-in-out hover:!border-[#4aa5ff] border-[#FFFFFF33] rounded-12"
                :href="contacts.geo_link"
                target="_blank"
                aria-label="link"
            >
                <div class="w-[60%] md:w-3/4 flex items-center pl-3">
                    <img
                        src="../../assets/icons/direction.svg"
                        alt="Icon"
                        class="inline-block mr-1"
                    />
                    <h3
                        class="w-3/4 lg:w-full text-dark-100 flex-wrap text-base font-medium opacity-60 text-[13px] lg:!text-[16px] leading-[19px] truncate"
                    >
                        {{ contacts.geo_name }}
                    </h3>
                </div>

                <div
                    class="px-2 !ml-2 w-[80px] h-7 ml-auto flex items-center justify-center whitespace-nowrap font-medium group-hover:bg-[#4aa5ff] transition duration-300 ease-in-out bg-[#1934695C] text-dark-100 rounded-6"
                >
                    {{ $t('in_map') }}
                </div>
            </a>
        </div>
    </div>
</template>

<script setup lang="ts">
// import { useDomainVariables } from '@/composables/useDomainVariables'
import { computed } from 'vue'
import { useContactsStore } from '@/stores/contacts'

const contactsStore = useContactsStore()
const contacts = computed(() => contactsStore.contacts ?? '')
contactsStore.getContacts()

// const { map, address } = useDomainVariables()
</script>

<style scoped>
.gm-style .place-card-large {
    display: none !important;
}
.contact-map {
    height: 480px;
    top: 30px;

    background: linear-gradient(
        -180deg,
        rgba(241, 244, 250, 0) 0%,
        #f1f4fa 100%
    ) !important;
}

@media (max-width: 760px) {
    iframe {
        max-height: 360px !important;
    }
}
</style>
