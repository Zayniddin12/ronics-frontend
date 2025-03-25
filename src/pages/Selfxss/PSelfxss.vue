<template>
    <div class="container pt-[100px] sm:pt-[150px] lg:pt-[200px]">
        <div class="max-w-[930px] mx-auto text-[#E0E0E0]">
            <i18n-t keypath="selfxss_text1" tag="p" scope="global">
                <template v-slot:action>
                    <span class="font-medium text-[20px] text-[#fff]"
                        >Self-XSS (self cross-site scripting)</span
                    >
                </template>
            </i18n-t>
            <i18n-t keypath="selfxss_text2" tag="p" scope="global" class="mt-3"
                ><template v-slot:action>
                    <span class="font-medium text-[20px] text-[#fff]"
                        >Self-XSS</span
                    >
                </template>
            </i18n-t>
            <p class="mt-3">{{ $t('selfxss_text3') }}</p>
            <p class="mt-3">{{ $t('selfxss_text4') }}</p>
            <p class="mt-3">{{ $t('selfxss_text5') }}</p>
            <p class="mt-3">{{ $t('selfxss_text6') }}</p>
            <p class="mt-3">{{ $t('selfxss_text7') }}</p>
            <p class="mt-3">{{ $t('selfxss_text8') }}</p>
            <p class="mt-6 font-medium text-[20px] text-white">
                {{ $t('selfxss_text9') }}
            </p>
            <div class="text-right">
                <a
                    href="https://uicgroup.us/"
                    class="text-[#4aa5ff] text-[18px] mt-10 block font-medium hover:text-[#049282] duration-300"
                >
                    {{ $t('selfxss_text10') }}
                </a>
                <p class="mt-2 text-[22px] font-medium">
                    {{ $t('selfxss_text11') }}
                </p>
                <p class="mt-3 font-medium">
                    {{ $t('selfxss_text12') }}
                </p>
            </div>
        </div>
    </div>
</template>
