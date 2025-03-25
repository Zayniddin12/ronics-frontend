<template>
    <header
        ref="header"
        class="duration-300 transition-all header w-screen right-0 z-[100] sticky top-[0px] bg-dark-100"
    >
        <div
            :class="scrollPosition ? 'pt-6 lg:pt-[62px] pb-2' : 'py-[15px]'"
            class="container flex items-center justify-between transition-all duration-300"
        >
            <transition name="closeBtn">
                <button
                    class="text-white inline-flex lg:!hidden rounded-12"
                    :class="{
                        'hover:border-[1px] hover:border-dark-100': !mainPage,
                    }"
                    @click="closeBtn"
                    aria-label="button"
                >
                    <u-icons
                        v-if="mainPage"
                        class="py-1.5 px-1.5 rounded-[10px]"
                        name="hamburger_icon"
                    />

                    <u-icons
                        v-else
                        class="py-1.5 px-1.5 rounded-[10px]"
                        :name="
                            !scrollPosition
                                ? 'hamburger_icon'
                                : 'hamburger_dark'
                        "
                    />
                </button>
            </transition>

            <router-link
                data-aos="fade-on"
                data-aos-duration="2000"
                to="/"
                class="flex items-center justify-center"
                aria-label="link"
            >
                <img
                    v-if="mainPage && scrollPosition"
                    src="../../../assets/icons/white-logo.svg"
                    alt="Logo"
                    class="hidden md:inline-flex"
                />

                <u-icons
                    v-if="scrollPosition && !mainPage"
                    class="text-white md:!hidden !inline-flex"
                    name="project_small_logo_blue"
                />

                <u-icons
                    v-if="!scrollPosition && !mainPage"
                    class="text-white md:!hidden !inline-flex"
                    name="project_small_logo"
                />

                <u-icons
                    v-if="mainPage && !scrollPosition"
                    class="text-white md:!hidden !inline-flex"
                    name="project_small_logo"
                />

                <u-icons
                    v-if="!mainPage && scrollPosition"
                    class="!hidden md:!inline-flex text-[#fff] logo_text"
                    name="project_colored_logo"
                />

                <u-icons
                    v-if="!scrollPosition"
                    class="text-white logo_fixed !hidden md:!inline-flex"
                    name="project_small_logo"
                />
            </router-link>
            <nav>
                <div
                    class="flex flex-row-reverse items-center md:gap-x-12"
                    data-aos="fade-on"
                    data-aos-duration="1000"
                >
                    <div
                        class="menu__language bg-[#263549] flex group border-[1px] border-[#7E8794] rounded-[12px] cursor-pointer lg:flex hidden items-center gap-[1px] duration-200 w-auto h-[38px] px-[11px] overflow-hidden"
                        :class="[
                            { '!bg-dark-100': !scrollPosition },
                            { '!bg-white !border-[#19346933]': !mainPage },
                        ]"
                    >
                        <u-icons
                            v-if="mainPage"
                            class="text-[#fff]"
                            name="globus"
                        />
                        <img
                            v-else
                            src="../../../assets/icons/globus.svg"
                            alt="Icon"
                        />
                        <p
                            class="transition-all font-medium font-[16px] text-white duration-300 max-w-0 opacity-0 whitespace-nowrap group-hover:mr-[12px] group-hover:!opacity-1 group-hover:max-w-[105px]"
                            :class="{
                                '!text-dark-100 lg:!text-[#193469]': !mainPage,
                            }"
                        >
                            {{ $t('header.choose_lang') }}
                        </p>

                        <router-link
                            v-for="(item, index) in languages"
                            :key="index"
                            :class="[
                                activeItem.short === item.short
                                    ? '1 active-item font-bold text-base max-w-[20px] !opacity-1 text-[#fff]'
                                    : '2 opacity-0 font-bold font-base text-[#ffffff66]',
                                customClassLang ? customClassPage : '',
                                {
                                    '!text-dark-100 hover:text-dark-200':
                                        !mainPage,
                                },
                            ]"
                            to="#"
                            class="lang__links max-w-0 font-[16px] font-bold text-[#FFFFFF66] hover:text-dark-200 group-hover:mx-[6px] group-hover:opacity-1 group-hover:max-w-[20px] transition-all duration-300 mt-[2px]"
                            :active-class="{ 'opacity-100': !mainPage }"
                            @click="changeLanguage(item)"
                            aria-label="link"
                        >
                            {{ item.title }}
                        </router-link>
                    </div>

                    <!-- adaptive language-menu -->
                    <ul
                        class="items-center gap-0 duration-300 menu__body lg:flex hidden md:gap-5 lg:gap-6 xl:gap-12 translate-y-[3px]"
                    >
                        <li v-for="(item, index) in headerMenu" :key="index">
                            <router-link
                                v-if="mainPage || !scrollPosition"
                                :class="[
                                    index === activePage
                                        ? 'active text-white'
                                        : '',
                                    { customClassPage: '' },
                                    { '!text-white': !mainPage },
                                ]"
                                :to="item.link"
                                class="font-medium text-sm lg:text-base text-white !leading-[19px] tracking-[0.03em] uppercase cursor-pointer transition duration-500 ease-in-out lg:inline-flex hover:transition hover:duration-500 hover:ease-in-out"
                                @click="activePage = index"
                                aria-label="link"
                            >
                                {{ $t(item.name) }}
                            </router-link>

                            <!--                            for other route-->
                            <router-link
                                v-if="!mainPage && scrollPosition"
                                :class="[
                                    index === activePage
                                        ? 'active text-[#4AA5FF]'
                                        : '',
                                    { customClassPage: '' },
                                ]"
                                :to="item.link"
                                class="font-medium text-sm lg:text-base text-[#19346999] !leading-[19px] tracking-[0.03em] uppercase cursor-pointer hover:text-[#4AA5FF] transition duration-500 ease-in-out lg:inline-flex hover:transition hover:duration-500 hover:ease-in-out"
                                @click="activePage = index"
                                aria-label="link"
                            >
                                {{ $t(item.name) }}
                            </router-link>
                        </li>

                        <li>
                            <a
                                class="text-[18px] xl:text-[24px] font-bold text-[#FFFFFF94] border-bottom duration-300"
                                :class="[
                                    {
                                        '!text-[#19346994]': !mainPage,
                                    },
                                    {
                                        '!text-[#FFFFFF94]':
                                            !mainPage && !scrollPosition,
                                    },
                                ]"
                                :href="`tel:${global.formatPhone(
                                    contacts.phone_number
                                )}`"
                                aria-label="link"
                            >
                                {{
                                    global
                                        .formatPhone(contacts.phone_number)
                                        .slice(0, 7)
                                }}
                                <span
                                    class="ml-2 text-white"
                                    :class="[
                                        mainPage
                                            ? 'text-white'
                                            : '!text-dark-100',
                                        {
                                            '!text-white':
                                                !mainPage && !scrollPosition,
                                        },
                                    ]"
                                >
                                    {{
                                        global
                                            .formatPhone(contacts.phone_number)
                                            .slice(-9)
                                    }}
                                </span>
                            </a>
                        </li>
                    </ul>
                    <LanguageSelect
                        class="inline-flex lg:hidden"
                        :scroll-position="scrollPosition"
                        :active-item="activeItem"
                        :languages="langs"
                        @select="changeLanguage"
                    />
                </div>
            </nav>
            <div
                :class="
                    positionMenu
                        ? 'translate-x-[0%]'
                        : 'translate-x-[-100%] scale-75'
                "
                class="fixed top-0 left-0 right-0 bottom-0 duration-300 bg-[#1e1e20e0] backdrop-blur-2xl w-full h-[100vh] overflow-hidden"
            >
                <button
                    class="text-white absolute top-[26px] left-[10px]"
                    @click="closeBtn"
                    aria-label="button"
                >
                    <u-icons name="close_menu" />
                </button>
                <div
                    class="burger-menu flex items-center justify-center flex-col gap-4 absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
                >
                    <router-link
                        data-aos="fade-on"
                        data-aos-duration="2000"
                        to="/"
                        aria-label="link"
                        @click=";(activePage = index)((positionMenu = false))"
                        class="after:hidden"
                    >
                        <img
                            src="../../../assets/icons/white-logo.svg"
                            alt="Logo"
                            class="mb-8"
                        />
                    </router-link>

                    <router-link
                        v-for="(item, index) in headerMenu"
                        :key="index"
                        :class="[
                            index === activePage ? 'active' : '',
                            { customClassPage: '' },
                        ]"
                        :to="item.link"
                        class="font-semibold text-[21px] leading-[25px] tracking-[0.03em] text-white uppercase"
                        @click=";(activePage = index)((positionMenu = false))"
                        aria-label="link"
                    >
                        {{ $t(item.name) }}
                    </router-link>
                </div>
                <div
                    class="absolute bottom-[160px] left-[50%] translate-x-[-50%] flex items-center justify-center gap-8"
                    @click="positionMenu = false"
                >
                    <footer-socials />
                </div>
                <a
                    :href="`tel:${global.formatPhone(contacts.phone_number)}`"
                    class="absolute bottom-[100px] flex items-center gap-1 font-bold text-[18px] left-[50%] translate-x-[-50%]"
                    @click="positionMenu = false"
                    aria-label="link"
                >
                    <span class="text-[#4AA5FF]"
                        >{{ global.formatPhone(contacts.phone_number) }}
                    </span>
                </a>
            </div>
        </div>
    </header>
</template>
<script lang="ts" setup>
import DarkButton from '@/stories/SButtons/DButton/DarkButton.vue'
import UIcons from '@/stories/ui/UIcons/UIcons.vue'
import LanguageSelect from '@/stories/dropdown/languageSelect/LanguageSelect.vue'
import headerMenu from '@/stories/layout/theHeader/data/Menu'
import { ref, watch, onMounted } from 'vue'
import { useDomainVariables } from '@/composables/useDomainVariables'
import FooterSocials from '@/components/footerSocials.vue'

import global from '@/plugins/global.ts'
import { computed } from 'vue'
import { useContactsStore } from '@/stores/contacts'

const contactsStore = useContactsStore()
const contacts = computed(() => contactsStore.contacts ?? '')
contactsStore.getContacts()

export interface Props {
    title?: string
    iconName?: string
    adaptiveIconName?: string
    customClassIcon?: string
    customClassLang?: string
    customClassPage?: string
    customClassNav?: string
    mainPage?: boolean
    scrollPosition?: any
}

const { phoneNumber, isUsDomain } = useDomainVariables()

let locale = localStorage.getItem('locale') || 'en'

let activeItem = ref({
    title: locale?.toUpperCase(),
    short: locale,
})

function changeLanguage(i: { title: string; short: string }) {
    if (activeItem.value.short !== i.short) {
        localStorage.setItem('locale', i.short)
        window.location.reload()
    }
}

let activePage = ref(null)
let positionMenu = ref(false)
const header = ref(null)
watch(positionMenu, (currentValue) => {
    if (currentValue) {
        document.body.classList.toggle('overflow-hidden')
    } else {
        document.body.classList.remove('overflow-hidden')
    }
})

function closeBtn() {
    positionMenu.value = !positionMenu.value
}

let languages = [
    { title: 'EN', short: 'en' },
    { title: 'RU', short: 'ru' },
    { title: 'UZ', short: 'uz' },
]

const langs = isUsDomain ? languages.filter((el) => el.short !== '') : languages

withDefaults(defineProps<Props>(), {})

onMounted(() => {
    if (!locale) {
        if (import.meta.env.VITE_APP_LANGUAGE) {
            activeItem.value.short = import.meta.env.VITE_APP_LANGUAGE
        } else activeItem.value.short = 'en'
    }
})
</script>

<style scoped>
.menu__language:hover + .menu__body {
    margin-left: -200px;
}

.menu__language:hover p {
    opacity: 1;
}

.menu__language:hover a {
    opacity: 1;
}

ul .router-link-exact-active {
    font-weight: semibold;
    color: #4aa5ff;
    position: relative;
    transition: 0.3s ease-in-out;
}

ul .router-link-exact-active:after {
    position: absolute;
    bottom: -8px;
    left: 50%;
    content: '';
    width: 32px;
    height: 2px;
    background-color: #4aa5ff;
    animation: active-page 0.4s ease-out;
    transform: translateX(-50%);
    transition: 0.3s ease-in-out;
}

ul .router-link-active {
    font-weight: semibold;
    color: #4aa5ff;
    position: relative;
    transition: 0.3s ease-in-out;
}

ul .router-link-active:after {
    position: absolute;
    bottom: -8px;
    left: 50%;
    content: '';
    width: 32px;
    height: 2px;
    background-color: #4aa5ff;
    animation: active-page 0.4s ease-out;
    transform: translateX(-50%);
    transition: 0.3s ease-in-out;
}

.burger-menu .router-link-exact-active {
    position: relative;
    color: #4aa5ff;
}

.burger-menu .router-link-exact-active:after {
    position: absolute;
    bottom: -8px;
    left: 50%;
    content: '';
    width: 32px;
    height: 2px;
    background-color: #ffffff;
    animation: active-page 0.4s ease-out;
    transform: translateX(-50%);
    transition: 0.3s ease-in-out;
}

.burger-menu .router-link-active {
    position: relative;
    color: #4aa5ff;
}

.burger-menu .router-link-active:after {
    position: absolute;
    bottom: -8px;
    left: 50%;
    content: '';
    width: 32px;
    height: 2px;
    background-color: #4aa5ff;
    animation: active-page 0.4s ease-out;
    transform: translateX(-50%);
    transition: 0.3s ease-in-out;
}

.closeBtn-enter-active {
    animation: close 0.4s ease-out;
}

@keyframes active-page {
    0% {
        transition: 5s ease-in-out;
    }

    100% {
        transition: 5s ease-in-out;
    }
}

@keyframes close {
    0% {
        transition: 0.3s ease-in-out;
        transform: translateX(-60px);
    }

    100% {
        transition: 0.3s ease-in-out;
        transform: translateX(0);
    }
}

/* ==== */
.lang-anim-enter-active {
    animation: lang 0.4s ease-out;
}

@keyframes lang {
    0% {
        transform: translateX(10px);
        transition: 0.3s ease-in-out;
    }

    100% {
        transform: translateX(0);
        transition: 0.3s ease-in-out;
    }
}
</style>
