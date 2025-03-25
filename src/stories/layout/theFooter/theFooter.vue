<template>
    <footer
        class="mt-auto bg-[#193469] w-full h-full pt-[30px] md:pt-10 xs:pb-0 relative z-1 pb-[18px]"
    >
        <div class="container">
            <div
                class="justify-center items-center flex pb-7 lg:!hidden xs:flex"
            >
                <a
                    class="bottom-footer__logo"
                    :href="'/'"
                    rel="noopener noreferrer"
                    aria-label="link"
                >
                    <u-icons class="text-white" name="project_small_logo" />
                </a>
            </div>
            <div
                class="flex justify-center sm:justify-center md:justify-center lg:!justify-between"
            >
                <ul
                    class="flex gap-x-5 px-3 md:px-0 lg:!gap-x-12 items-center lg:!justify-start justify-center flex-wrap"
                >
                    <li v-for="(item, index) in data" :key="index">
                        <router-link
                            :to="item.links"
                            class="cursor-pointer text-white text-opacity-60 hover:text-opacity-100 transition duration-300 ease-in-out text-base uppercase xs:text-[13px] font-semibold lg:!text-base"
                            @click="scrollToTop"
                            >{{ $t(item?.link || '') }}
                        </router-link>
                    </li>
                </ul>
                <div class="hidden lg:!flex group cursor-pointer">
                    <div
                        class="footer_arrow border-[1px] group-hover:border-[#4aa5ff] transition duration-300 ease-in-out flex items-center justify-center w-12 h-12 rounded-[50%]"
                        @click="scrollToTop"
                    >
                        <svg
                            width="11"
                            height="23"
                            viewBox="0 0 11 23"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="text-[#FFFFFF99] transition duration-300 ease-in-out"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M0.218756 5.17755L4.97187 0.227806C5.26355 -0.0759356 5.73645 -0.0759356 6.02812 0.227806L10.7812 5.17755C11.0729 5.48129 11.0729 5.97375 10.7812 6.2775C10.4896 6.58124 10.0167 6.58124 9.72499 6.2775L6.24688 2.6555L6.24688 23L4.75312 23L4.75312 2.6555L1.275 6.2775C0.983329 6.58124 0.510431 6.58124 0.218756 6.2775C-0.0729195 5.97375 -0.0729195 5.48129 0.218756 5.17755Z"
                                fill="white"
                                fill-opacity="0.6"
                            />
                        </svg>
                    </div>
                </div>
            </div>
            <div
                class="flex justify-center lg:!justify-start lg:!items-center mb-5 md:mb-10 lg:mb-[50px]"
            >
                <div
                    class="flex flex-col pt-[12px] ss:flex-row xs:items-center lg:items-center gap-x-8 sm:gap-y-0 gap-y-4"
                >
                    <!--        footer socials links-->
                    <FooterSocials />

                    <div
                        class="flex flex-col gap-y-2 xs:flex-row justify-center xs:gap-x-4 xs:pt-2 sm:!pt-0 lg:!pt-0 lg:!items-center items-center"
                    >
                        <div
                            class="flex gap-x-1 sm:!gap-x-3 items-center xs:justify-center"
                        >
                            <u-icons class="text-white" name="email" />
                            <a
                                :href="`mailto:${contacts.email}`"
                                class="text-base text-white md:text-[#FFFFFF99] hover:text-white transition duration-300 ease-in-out text-[15px] lg:!text-[16px] xs:leading-[18px] font-normal"
                                target="_blank"
                                aria-label="link"
                                >{{ contacts.email }}</a
                            >
                        </div>
                        <div
                            class="flex items-center xs:justify-center sm:!gap-x-3 xs:gap-x-1"
                        >
                            <u-icons class="text-white" name="tel" />
                            <a
                                :href="
                                    'tel:' +
                                    global.formatPhone(contacts.phone_number)
                                "
                                class="text-base text-white md:text-[#FFFFFF99] hover:text-white transition duration-300 ease-in-out font-normal text-[15px] lg:!text-[16px] xs:leading-[18px] lg:!w-[132px] xs:w-[124px]"
                                target="_blank"
                                aria-label="link"
                                >{{
                                    global.formatPhone(contacts.phone_number)
                                }}</a
                            >
                        </div>
                    </div>
                </div>
            </div>
            <hr class="text-[#FFFFFF] opacity-[0.1]" />
            <div
                class="mt-[18px] flex flex-col-reverse h-auto md:flex-row items-center md:justify-between"
            >
                <div class="mt-4 sm:!mb-9 mb-[28px]">
                    <p
                        class="text-[#FFFFFF] opacity-[0.6] text-base font-medium xs:text-[13px] sm:!text-base"
                    >
                        © <span>{{ new Date().getFullYear() }}</span> ronics.uz
                    </p>
                </div>

                <div class="hidden lg:inline mb-[16px]">
                    <router-link
                        class="md:gap-[8px] flex items-center justify-center lg:!flex text-center uic"
                        to="/"
                    >
                        <u-icons
                            class="uicLogo text-white opacity-[0.8]"
                            name="project_small_logo"
                        />
                        <u-icons
                            class="uicIcon text-white opacity-[0.8] md:opacity-0"
                            name="project_name_logo"
                        />
                    </router-link>
                </div>
                <div class="w-full md:!w-auto">
                    <a
                        class="group flex items-center justify-between border-[1px] border-solid transition duration-300 ease-in-out hover:border-[#4aa5ff] border-[#FFFFFF33] rounded-12 mb-[16px] py-1 xs:py-0"
                        :href="contacts.geo_link"
                        target="_blank"
                        aria-label="link"
                    >
                        <div class="flex items-center pl-3">
                            <u-icons
                                class="text-[#FFFFFF99] sm:mr-[10px] mr-0 lg:!ml-[19.5px] lg:!mr-[11.5px]"
                                name="footer_map"
                            />
                            <h3
                                class="text-[#FFFFFF] flex-wrap text-base font-medium opacity-[0.6] text-[13px] lg:!text-[16px] leading-[19px]"
                            >
                                {{ contacts.geo_name }}
                            </h3>
                        </div>

                        <div
                            class="whitespace-nowrap lg:!px-2.5 px-2 sm:px-2 xs:py-2 lg:!pt-[3px] lg:!pb-[6px] font-normal group-hover:bg-[#4aa5ff] transition duration-300 ease-in-out bg-[#FFFFFF29] text-white rounded-6 lg:!text-[16px] xs:mb-[6px] xs:ml-[14px] xs:my-[6px] ml-[14px] mr-[6px] xs:text-[13px]"
                        >
                            {{ $t('in_map') }}
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script lang="ts" setup>
import global from '@/plugins/global.ts'
import UIcons from '@/stories/ui/UIcons/UIcons.vue'
// import { useDomainVariables } from '@/composables/useDomainVariables'
import FooterSocials from '@/components/footerSocials.vue'
import { computed } from 'vue'
import { useContactsStore } from '@/stores/contacts'

const contactsStore = useContactsStore()
const contacts = computed(() => contactsStore.contacts ?? '')
contactsStore.getContacts()

export interface Props {
    link?: string
    links?: string
    tel?: string
    map?: string
    map_link?: string
    data?: Array<object>
    icon?: Array<object>
    address?: string
}

// const { phoneNumber, email, url, map, address } = useDomainVariables()

const scrollToTop = () => {
    setTimeout(() => window.scrollTo(0, 0), 100)
}

const data = [
    {
        link: 'header.about',
        links: '/about',
    },
    // {
    //     link: 'header.service',
    //     links: '/services',
    // },
    {
        link: 'header.products',
        links: '/products',
    },
    {
        link: 'header.contact',
        links: '/contact',
    },
]

withDefaults(defineProps<Props>(), {})
</script>

<style scoped>
* {
    flex-grow: 0 !important;
}

.footer-bottom {
    width: max-content;
}

.uiclogo:hover {
    transform: translateX(-20px);
}

.uic .uicLogo:hover ~ .uicIcon {
    transform: translateX(0);
    z-index: 1;
    opacity: 1;
}

.uic .uicIcon {
    transition: 0.3s ease-in-out;
    transform: translateX(20%);
}
.footer_arrow:hover svg path {
    fill: #4aa5ff;
    transition: 0.3s ease-in-out;
}
</style>
