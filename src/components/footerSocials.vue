<template>
    <div
        class="flex grid-cols-4 md:grid-cols-9 gap-3 mb-2 xs:mb-1 items-center justify-center"
    >
        <a
            v-for="(social, index) in socials"
            :key="index"
            :href="social.url"
            class="text-white social"
            target="_blank"
            aria-label="link"
        >
            <!--          :name="item.icons"-->
            <!--          class="icon-social w-6 h-6 md:w-7 md:h-7 md:text-xl "-->
            <!--        />-->
            <img
                class="md:hover:bg-green rounded-full md:hover:border-green border-[#6A6A6C] sm:border border-solid flex justify-center items-center transition duration-300 ease-in-out"
                :class="{ 'p-2': social.name == 'Youtube' }"
                :src="`/uic-images/socials/${social.name}.svg`"
                alt="social-icon"
            />
        </a>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
// import { footerSocialNetwork } from '@/config'
import { useContactsStore } from '@/stores/contacts'

const contactsStore = useContactsStore()
const contacts = computed(() => contactsStore.contacts ?? '')
const socials = computed(() => contactsStore.socials ?? [])

contactsStore.getContacts()
contactsStore.getSocials()
</script>

<style scoped>
@media screen and (max-width: 575px) {
    .icon-social svg {
        width: 20px;
        height: 20px;
    }
}
</style>
