<template>
  <div class="main-block bg-main_shadow" id="main-block">
    <!-- CONTENT -->
    <div v-if="true" class="container main-block__container absolute z-90 flex items-center">
      <div class="w-full">
<!--        <Swiper-->
<!--          ref="swiperRef"-->
<!--          v-if="list?.length"-->
<!--          v-bind="settings"-->
<!--          :modules="modules"-->
<!--          @slide-change="onSlideChange"-->
<!--          @swiper="onSwiperInit"-->
<!--        >-->
<!--          <SwiperSlide v-for="(item, index) in list" :key="index" class="!w-full">-->
<!--            <h2-->
<!--              class="text-white !font-greyCliff lg:text-[48px] lg:leading-[58px] md:text-[40px] md:leading-[50px] sm:text-[32px] sm:leading-[40px] text-[28px] leading-[34px] pb-[15px] font-bold"-->
<!--              data-aos="fade-left"-->
<!--              data-aos-duration="1600"-->
<!--            >-->
<!--              {{ item?.title }}-->
<!--            </h2>-->
<!--            <p-->
<!--              class="text-[#ffffff99] uppercase tracking-[0.03em] lg:leading-[22px] lg:text-[18px] md:leading-[20px] md:text-[16px] sm:leading-[18px] sm:text-[14px] leading-[16px] text-[13px] font-medium sm:mb-[49px] mb-[32px]"-->
<!--              data-aos="fade-left"-->
<!--              data-aos-duration="1700"-->
<!--            >-->
<!--              {{ item?.subtitle }}-->
<!--            </p>-->
<!--          </SwiperSlide>-->
<!--        </Swiper>-->

         <div class="!w-full flex lg:flex-row flex-col justify-between items-center">
             <div class="lg:!w-1/2 w-full lg:!text-left !text-center">
                 <h2
                     class="text-white !font-greyCliff lg:text-[48px] lg:leading-[58px] md:text-[40px] md:leading-[50px] sm:text-[32px] sm:leading-[40px] text-[32px] leading-[54px] pb-[15px] font-bold"
                     data-aos="fade-left"
                     data-aos-duration="1600"
                 >
                     {{ list[0]?.title }}
                 </h2>
                 <p
                     class="text-[#ffffff99] uppercase tracking-[0.03em] lg:leading-[22px] lg:text-[18px] md:leading-[20px] md:text-[16px] sm:leading-[18px] sm:text-[14px] leading-[16px] text-[13px] font-medium lg:mb-0 mb-5"
                     data-aos="fade-left"
                     data-aos-duration="1700"
                 >
                     {{ list[0]?.subtitle }}
                 </p>
             </div>

             <div class="sm:flex sm:flex-row flex-col gap-x-10 hidden">
                 <div class="mt-[61px]">
                     <SAboutCard v-bind="{
                        customClass: '!w-[220px] !h-[300px]',
                    }" v-if="gallery?.photo1_list" :aboutCard="gallery?.photo1_list" />
                 </div>
                 <div class="">
                     <SAboutCard
                         v-bind="{customClass: '!w-[220px] !h-[300px]'}"
                         v-if="gallery?.photo1_list"
                         :aboutCard="gallery?.photo2_list"
                         data-aos="fade-down"
                     />
                 </div>
             </div>
         </div>

        <div class="flex sm:items-center gap-[16px] flex-col sm:flex-row items-start lg:mt-[49px] mt-5" data-aos="fade-left" data-aos-duration="1900">
          <!-- font-sofia  -->
          <SButton
            text="modal.title"
            button-class="hero-brief__btn font-semibold"
            class="text-center sm:!w-auto !w-full"
            @click="clickShowModal"
          />

          <a :href="'tel:' + global.formatPhone(contacts.phone_number)" class="hero_btn rounded-12 !text-center sm:!w-auto !w-full">
            <u-icons name="phone_icon" />
            <span class="hero_btn-text">
              {{ global.formatPhone(contacts.phone_number) }}
            </span>
          </a>
        </div>
<!--        <div v-if="list?.length > 1" class="flex gap-5 relative mt-3 2xl:top-2/4 2xl:-translate-y-1/2 2xl:w-full  2xl:mt-11">-->
<!--          <button-->
<!--            ref="prevButtonRef"-->
<!--            class="entrance-prev w-8 h-8 md:w-12 md:h-12 rounded-full flex-center text-2xl md:text-3xl leading-6 text-white border-[1px] border-white hover:text-gray-300 hover:border-gray-300 transition-ease-in-out rotate-180 ml-0 2xl:-ml-16 group active:scale-95"-->
<!--            @click="goToPreviousSlide"-->
<!--          >-->
<!--            <img-->
<!--              src="@/assets/right-arrow.svg"-->
<!--              alt="right_arrow"-->
<!--              class="py-3 px-3 transition-all group-hover:brightness-75 group-hover:opacity-75"-->
<!--            />-->
<!--          </button>-->
<!--          <button-->
<!--            ref="nextButtonRef"-->
<!--            class="entrance-next w-8 h-8 md:w-12 md:h-12 rounded-full flex-center text-2xl md:text-3xl leading-6 text-white border-[1px] border-white hover:text-gray-300 hover:border-gray-300 transition-ease-in-out ml-0 2xl:-mr-16 group active:scale-95"-->
<!--            @click="goToNextSlide"-->
<!--          >-->
<!--            <img-->
<!--              src="@/assets/right-arrow.svg"-->
<!--              alt="right_arrow"-->
<!--              class="py-3 px-3 transition-all group-hover:brightness-75 group-hover:opacity-75"-->
<!--            />-->
<!--          </button>-->
<!--        </div>-->
      </div>
    </div>

    <!-- modal-->
    <teleport to="body">
      <Transition name="slide-fade">
        <div v-if="showModal" class="modal-container">
          <div :key="showModal" class="modal">
            <div class="absolute top-5 right-0 sm:right-5 text-[#828792] group">
              <svg
                @click="clickShowClose"
                class="group cursor-pointer w-[32px] h-[32px]"
                width="36"
                height="36"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M33.8986 33.8995L14.0996 14.1005"
                  stroke="#828792"
                  class="close group-hover:stroke-red-500 duration-300"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.1004 33.9002L33.8994 14.1012"
                  stroke="#828792"
                  class="close group-hover:stroke-red-500 duration-300"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            <!--form-->
            <div class="rounded-xl border border-[#ffffff14] flex flex-col bg-[#ffffff] w-[350px] md:w-[450px] justify-center gap-8 px-7 py-6 h-full">
              <div class="flex flex-col gap-8">
                <div class="flex flex-col justify-center w-full gap-8">
                  <div class="text-center pt-6">
                    <h4
                      class="text-[18px] xl:text-[24px] font-greyCliff font-bold text-[#070D18] mb-2 leading-[28.8px]"
                    >
                      {{ $t('modal.title') }}
                    </h4>

                    <p
                      class="text-[18px] xl:text-[18px] font-normal font-greyCliff text-[#828792] leading-[19.6px]"
                    >
                      {{ $t('modal.desc') }}
                    </p>
                  </div>

                  <basic-input
                    minlength="2"
                    v-model="form.name"
                    :error="vForm.name.$error"
                    class="w-full text-[#828792]"
                    v-bind="{
                      minLength: 2,
                      height: '48px',
                      backgroundColor: '#ECEFF5',
                      type: 'text',
                      placeholder: 'introduce_yourself',
                      label: 'Ismingiz',
                    }"
                  />
                  <div class="w-full">
                    <p
                      class="mb-3 font-roboto font-medium text-[16px] text-[#828792]"
                    >
                      {{ $t('form.phone') }}
                    </p>
                    <vue-tel-input
                      v-model="form.phone"
                      :class="vForm.phone.$error ? '_phone-error' : ''"
                      :defaultCountry="isUz === 'uz' ? 'UZ' : 998"
                      :validCharactersOnly="true"
                      :error="vForm.phone.$error"
                      class="h-[48px] bg-[#F1F4FA] text-dark-100 vue-tel-input"
                      v-bind="bindProps"
                      @validate="handleValidation"
                      ref="telInput"
                    >
                    </vue-tel-input>
                  </div>
                </div>

                <white-button
                  class="w-full font-greyCliff font-bold leading-[20.8px] text-sm tracking-[2%]"
                  v-bind="{
                    title: 'buttons.btn6',
                    customClass: 'whitespace-nowrap ml-auto',
                    icon: '',
                  }"
                  :loading="buttonLoading"
                  @click="sendData"
                />
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </teleport>

    <div class="main-block__background">
        <img
            class="w-full h-full object-cover pointer-events-none"
            :src="list[0]?.image"
            :alt="list[0]?.title"
        />
<!--      <Swiper-->
<!--        v-bind="imageSettings"-->
<!--        @swiper="setThumbsSwiper"-->
<!--        class="main-block__background"-->
<!--        ref="backgroundSwiperRef"-->
<!--        :modules="[Autoplay, EffectFade]"-->
<!--      >-->
<!--        <SwiperSlide v-for="(item, i) in list" :key="i">-->
<!--          <video-->
<!--            v-if="item?.video"-->
<!--            :key="activeIndex"-->
<!--            class="w-full h-full object-cover pointer-events-none"-->
<!--            autoplay-->
<!--            loop-->
<!--            muted-->
<!--            playsinline-->
<!--          >-->
<!--            <source :src="item?.video" type="video/mp4" />-->
<!--          </video>-->
<!--          <img-->
<!--            v-else-->
<!--            class="w-full h-full object-cover pointer-events-none"-->
<!--            :src="item?.image"-->
<!--            :alt="item?.title"-->
<!--          />-->
<!--        </SwiperSlide>-->
<!--      </Swiper>-->
    </div>
  </div>
</template>

<script setup lang="ts">
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, EffectFade, Navigation, Pagination, Thumbs } from "swiper"
import { Swiper, SwiperSlide } from "swiper/vue"

import { useGalleryStore } from '@/stores/gallery'

const $indexStore = useIndexStore()
const galleryStore = useGalleryStore()
const gallery = computed(() => galleryStore.mainGallery)

onMounted(async () => {
    await galleryStore.fetchMainTeamImages()
    $indexStore.loading = false
})
useOnLanguageChange(() => {
    galleryStore.fetchMainTeamImages()
    // portfolioStore.fetchPortfolioHomePage(1)
    // categoryStore.fetchPortfolioCategories()
})

const swiperRef = ref(null)
const backgroundSwiperRef = ref(null)
const swiperInstance = ref(null)
const backgroundSwiperInstance = ref(null)
const list = ref([])

const modules = [Navigation, Pagination, Autoplay, EffectFade]

const settings = {
    loop: true,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".entrance-next",
        prevEl: ".entrance-prev",
    },
};
const imageSettings = {
    loop: true,
    autoplay: false,
    effect: "fade",
};
const onSwiperInit = (swiper) => {
  swiperInstance.value = swiper;
  if (swiperInstance.value) {
    // Sync the background swiper with the text swiper's activeIndex
    const activeIndex = swiperInstance.value.activeIndex;
    if (backgroundSwiperInstance.value) {
      backgroundSwiperInstance.value.slideTo(activeIndex); // Sync the background swiper
    }
  }
};
const setThumbsSwiper = (swiper) => {
    backgroundSwiperInstance.value = swiper
};
const onSlideChange = () => {
    if (swiperInstance.value && backgroundSwiperInstance.value) {
        const activeIndex = swiperInstance.value.activeIndex
        backgroundSwiperInstance.value.slideTo(activeIndex) // Sync the background slider
    }
};

const goToPreviousSlide = () => {
    if (swiperInstance.value) {
        swiperInstance.value.slidePrev() // Go to previous slide
        const activeIndex = swiperInstance.value.activeIndex
        if (backgroundSwiperInstance.value) {
            backgroundSwiperInstance.value.slideTo(activeIndex) // Sync background slider
        }
    } else {
        console.log("Swiper instance is not ready yet")
    }
};

const goToNextSlide = () => {
    if (swiperInstance.value) {
        swiperInstance.value.slideNext() // Go to next slide
        const activeIndex = swiperInstance.value.activeIndex
        if (backgroundSwiperInstance.value) {
            backgroundSwiperInstance.value.slideTo(activeIndex) // Sync background slider
        }
    } else {
        console.log("Swiper instance is not ready yet")
    }
}








import { useRoute, useRouter } from 'vue-router'

const domain = import.meta.env.VITE_APP_DOMAIN
const isUz = computed(() => import.meta.env.VITE_APP_DOMAIN)

import SButton from '@/components/Button/SButton.vue'

import useVuelidate from '@vuelidate/core'
import { required, minLength, maxLength } from '@vuelidate/validators'
import BasicInput from '@/stories/ui/BasicInput/BasicInput.vue'
import WhiteButton from '@/stories/SButtons/Wbutton/WhiteButton.vue'

import UIcons from '@/stories/ui/UIcons/UIcons.vue'
import { useClientFeedback } from '@/stores/client_feedback'

const clientFeedback = useClientFeedback()
import { sweetToastError, sweetToastSuccess } from '@/plugins/swal'

import global from '@/plugins/global.ts'
import { useContactsStore } from '@/stores/contacts'
import { useMainSliderListStore } from '@/stores/main-slider-list'

const contactsStore = useContactsStore()
const contacts = computed(() => contactsStore.contacts ?? '')
contactsStore.getContacts()


const loading = ref(true)
const mainSliderListStore = useMainSliderListStore()
const mainSliderList = computed(() => mainSliderListStore.mainSliderList)
mainSliderListStore.fetchMainSliderList()






// modal
import { VueTelInput } from 'vue-tel-input'

const buttonLoading = ref(false)

const router = useRouter()
// const $indexStore = useIndexStore()
const route = useRoute()
const telInput = ref(null)
const form = reactive({
    name: '',
    phone: '',
})

const rules = {
    treatment: {
        name: { required, minLength: minLength(3) },
        phone: { required, minLength: minLength(10) },
    },
}

const vForm = useVuelidate(rules.treatment, form)

const telInputValidation = ref()

const formSubmit = ref(false)

function sendData() {
    vForm.value.$touch()
    if (vForm.value.$invalid) {
        return false
    }
    clientFeedback
        .postFeedback({
            name: form.name,
            phone_number: form.phone,
        })
        .then((response) => {
            form.name = ''
            form.phone = '+998'
            sweetToastSuccess('success_send')
            showModal.value = false
        })
        .catch((e) => {
            formSubmit.value = true
            // sweetToastError('error.contact_error')
            showModal.value = false
            sweetToastError(e.response.data.phone_number[0])
        })
}

const handleValidation = (e: any) => {
    telInputValidation.value = e
}

const showModal = ref(false)

const clickShowModal = () => {
    showModal.value = true
}
const clickShowClose = () => {
    showModal.value = false
    document.documentElement.style.overflow = 'auto'
    vForm.value.$reset()
    form.name = ''
    form.phone = ''
    formSubmit.value = true
}

const bindProps = {
    mode: 'international',
    dropdownOptions: {
        disabledDialCode: true,
        showDialCodeInList: true,
        showFlags: true,
        showSearchBox: true,
        width: '260px',
    },
    inputOptions: {
        showDialCode: true,
        maxlength: 25,
    },
}

watch(
    () => showModal.value,
    () => {
        const body = document.body
        if (showModal.value) {
            body.style.overflow = 'hidden'
        } else {
            body.style.overflow = 'auto'
        }
    },
)

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useDomainVariables } from '@/composables/useDomainVariables'
import { onMounted, ref, reactive, watch, computed } from 'vue'
import { useIndexStore } from '@/stores/MetaInfo'
import useOnLanguageChange from '@/composables/useOnLanguageChange'
import SAbout from '@/stories/About/SAbout.vue'
import SAboutCard from '@/stories/About/Card/SAboutCard.vue'



gsap.registerPlugin(ScrollTrigger)

const { phoneNumber } = useDomainVariables()

const pending = ref(true)

function scrollAnimation() {
    // let width = window.innerWidth > 0 ? window.innerWidth : screen.width;
    gsap.timeline({
        scrollTrigger: {
            trigger: '#main-block',
            start: 'top top',
            end: () => `+300px bottom`,
            markers: false,
            /*scrub: 1,*/
            pin: true,
        },
    })
}

// youtube video close function
function closeModal() {
    showModal.value = !showModal.value

    if (showModal.value) {
        setTimeout(() => (pending.value = false), 1000)
        pending.value = true
        document.body.style.overflow = 'hidden'
        window.addEventListener('keydown', (e) => {
            if (e.key == 'Escape') {
                showModal.value = false
                document.body.style.overflow = 'auto'
            }
        })
    } else {
        document.body.style.overflow = 'auto'
    }
}

onMounted(() => {
    setTimeout(() => {
        if (window.innerWidth > 700) {
            scrollAnimation()
        }
    }, 300)
    mainSliderListStore.fetchMainSliderList().finally(() => {
        list.value = mainSliderList.value
    })

})
</script>

<style scoped>
.hero-brief__btn {
    display: inline-flex;
    padding: 12px 16px 12px 25px !important;
    justify-content: flex-end;
    align-items: flex-start;
    gap: 22px !important;
    border: none !important;
    white-space: nowrap;
}

.hero_btn {
    display: flex;
    padding: 12px 27px 12px 16px !important;
    align-items: center;
    justify-content: center;
    gap: 13px !important;
    background: rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(2px);
    text-align: center !important;
    white-space: nowrap;
}

.hero_btn-text {
    text-align: center !important;
    font-family: 'Greycliff CF';
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    /* 20.8px */
    letter-spacing: 0.32px;
    margin-top: 3px;
    background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0.26) 0%,
        #fff 40.63%,
        rgba(255, 255, 255, 0.21) 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

/*modal start*/
.modal-container {
    position: fixed;
    width: 100%;
    height: 100vh;
    background: rgba(25, 52, 105, 0.68);
    /*backdrop-filter: blur(16px);*/
    z-index: 10000;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

.modal {
    z-index: 998;
    background: #ffffff;
    border-radius: 8px;
    position: relative;
    font-family: 'Roboto';
    font-style: normal;
}

@media screen and (min-width: 370px) and (max-width: 575.9px) {
    .modal {
        top: 5%;
    }
}

@media screen and (min-width: 576px) and (max-width: 767.9px) {
    .modal {
        top: 7%;
    }
}

@media screen and (min-width: 768px) and (max-width: 991.9px) {
    .modal {
        top: 8%;
    }
}

@media screen and (min-width: 992px) and (max-width: 1199.9px) {
    .modal {
        top: 6%;
    }
}

@media screen and (min-width: 1200px) {
    .modal {
        top: 3%;
    }
}

/*modal end*/
.main-block__container {
    z-index: 20;
}

.bg-main_shadow {
    background: linear-gradient(
        180deg,
        rgba(30, 30, 32, 0) 0%,
        rgba(30, 30, 32, 0.51) 29.38%,
        #1e1e20 100% F
    );
}

/*  bu modalka ni styli */

.overlay {
    width: 100vw;
    height: 100vh;
    z-index: 999 !important;
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    transition: all 0.5s linear;
    left: 0;
    left: 0;
    top: 0;
    bottom: 0;
}

.active_modal {
    opacity: 1;
    transform: scale(1);
    display: block;
}

/*  bu modalka ni styli */
</style>
<style setup>
.uic_new svg path {
    fill: #ffffff33 !important;
}

@keyframes rotate {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

.rotate-anim {
    animation: rotate 7s linear infinite;
}

.main-block {
    width: 100%;
    height: 100vh;
    position: relative;
    overflow: hidden;
}

.main-block::before {
    content: '';
    overflow: hidden;
    display: flex;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        180deg,
        rgba(30, 30, 32, 0) 0%,
        rgba(30, 30, 32, 0.51) 29.38%,
        #1e1e20 100%
    );
    top: 50%;
    z-index: 1;
}

.main-block::after {
    content: '';
    overflow: hidden;
    display: flex;
    position: absolute;
    width: 50%;
    height: 100%;
    background: linear-gradient(
        105deg,
        rgba(30, 30, 32, 0) 23.13%,
        rgba(30, 30, 32, 0.28) 49.63%,
        rgba(30, 30, 32, 0.36) 113.33%
    );
    right: 0;
    top: 0;
    z-index: 1;
}

.main-block__background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.main-block__background span {
    z-index: 0;
}

.main-block__background span.uic {
    position: absolute;
    top: 15%;
    right: 0;
    width: 100vw;
    height: auto;
}

.main-block__background span.uic .container {
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.main-block__background span.uic img {
    width: auto;
    height: auto;
}

@media (max-width: 1370px) {
    .main-block__background span.uic img {
        width: 580px;
    }
}

.main-block__background span.mountain {
    position: absolute;
    bottom: -100px;
    /*bottom: 0px;*/
    right: 0;
    width: 100%;
    height: auto;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    /*transform: translate(0px, 150px) scale(1) !important;*/
}

.main-block__background span.mountain picture {
    width: 100%;
}

.main-block__background span.mountain img {
    width: 100%;
    height: auto;
    object-fit: cover;
    object-position: top right;
}

.main-block__background span.mountain:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 80%;
    background: linear-gradient(
        180deg,
        rgba(30, 30, 32, 0) 0%,
        rgba(30, 30, 32, 0.53) 29.38%,
        #f7f9fa 100%
    );
}

.main-block__background span.bg {
    position: absolute;
    bottom: 0;
    left: 0;
    /*top: -100px;*/
    top: -40px;
    width: 100%;
    height: 110vh;
    z-index: -2;
}

.main-block__background span.bg img {
    width: 100%;
    height: 100%;
    object-position: center;
    object-fit: cover;
}

.bg-right_shadow {
    background: linear-gradient(
        105deg,
        rgba(30, 30, 32, 0) 23.13%,
        rgba(30, 30, 32, 0.28) 49.63%,
        rgba(30, 30, 32, 0.36) 113.33%
    );
}

@media (max-width: 992px) {
    .main-block__background .uic_new {
        display: none;
    }

    .main-block__background span.mountain {
        transform: translate(0px, -240px) scale(1.1) !important;
    }
}

@media (max-width: 768px) {
    .main-block__background span.mountain {
        transform: translate(0px, -240px) scale(1.1) !important;
    }

    .main-block__background span.uic img {
        width: 500px;
    }
}

@media (max-width: 576px) {
    .main-block__background span.mountain {
        transform: translate(-120px, -340px) scale(1.8) !important;
    }

    .main-block__background span.uic img {
        width: 350px;
        display: none;
    }
}
</style>
<style>
.vti__dropdown {
    padding: 13px !important;
    border-radius: 8px 0 0 8px;
    transition: 0.3s ease-in-out;
}

.vti__dropdown:hover {
    padding: 13px !important;
    background-color: #2e2e30;
}

.vti__input {
    background-color: #f1f4fa;
    border-radius: 0 8px 8px 0;
}

.vue-tel-input {
    border: none;
    transition: 0.3s ease-in-out;
    border-radius: 8px;
    background-color: #f1f4fa;
}

.vue-tel-input:hover .vue-tel-input:focus-within {
    box-shadow: none;
    border-color: transparent;
}

.vti__dropdown-list {
    max-width: 300px !important;
    top: 45px !important;
    z-index: 12;
    border-radius: 8px;
    border: none;
}

.vti__dropdown-item.highlighted {
    background-color: #5f5f5f;
}

.vue-tel-input:focus-within {
    box-shadow: inset 0 1px 1px #00000013, 0 0 3px #ffffff !important;
    border-color: #4aa5ff !important;
}

.vue-tel-input {
    border: 1px solid transparent;
}

.vue-tel-input._phone-error {
    border: 1px solid red;
}

.slide-fade-enter-active {
    animation: modalAnimation 0.3s;
}

.slide-fade-leave-active {
    animation: modalAnimation 0.3s reverse;
}

@keyframes modalAnimation {
    from {
        opacity: 0;
        scale: 0;
    }

    to {
        opacity: 1;
        scale: (0.5);
        transition: all 1s linear;
    }
}
</style>
