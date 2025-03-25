<template>
    <section class="pt-[100px] md:pt-[120px] lg:pt-[189px] pb-[64px]">
        <div class="container">
            <h1
                class="mb-4 lg:mb-11 text-dark-100 text-2xl lg:text-[48px] leading-[57px] font-bold font-greyCliff"
            >
                {{ $t('contact.title') }}
            </h1>

            <main class="grid gap-6 grid-cols-1 lg:grid-cols-2">
                <ContactForm />
                <ContactMap />
            </main>
        </div>
    </section>
</template>

<script setup lang="ts">
import ContactForm from '@/pages/contact/ContactForm.vue'
import ContactMap from '@/pages/contact/ContactMap.vue'
</script>
