<template>
    <div class="brief w-[100%] pt-[80px] lg:pt-[125px] !overflow-hidden">
        <div v-if="showModal" class="modal-container">
            <div class="modal">
                <div class="absolute -top-[52px] right-0 text-white">
                    <u-icons
                        class="w-[32px] h-[32px] cursor-pointer"
                        name="close_menu"
                        @click="clickShowClose"
                    />
                </div>

                <div
                    class="flex items-center flex-col w-[350px] text-white md:w-[700px] justify-center lg:w-[788px] px-10 lg:px-[101px] py-6 md:py-11 h-full"
                >
                    <div class="flex items-center sm:space-x-4">
                        <div class="w-12 divider-y lg:w-4 md:w-8 sm:w-8"></div>
                        <p
                            class="text-[#4aa5ff] text-[16px] sm:leading-[19px] leading-[21px] tracking-[0.03em] font-bold uppercase text-center"
                        >
                            Brief
                        </p>

                        <div class="w-12 divider-y lg:w-4 md:w-8 sm:w-8"></div>
                    </div>

                    <div
                        class="align-baseline inline-block w-[235px] sm:w-full sm:items-center !items-start justify-center md:text-[36px] text-center sm:text-28px md:leading-[43px] leading-[34px] text-[28px] mt-2 sm:gap-2 gap-0"
                    >
                        <img
                            src="@/assets/image/shake.png"
                            alt="shake"
                            class="inline-block w-[34px] h-[32px] mr-[4px] mb-[8px]"
                        />
                        <span class="inline-block">
                            {{ $t('success_send') }}</span
                        >
                    </div>
                    <p
                        class="mt-4 md:mt-8 text-center text-sm md:text-base font-normal tracking-[0.2px] leading-140 modal--text"
                    >
                        {{ $t('popup.send_call') }}
                    </p>

                    <router-link
                        class="backTo font-family-inherit sm:text-white sm:font-bold font-semibold text-[#ffffff99] mt-6 md:mt-12 sm:leading-[21px] leading-[16px] md:text-base sm:text-base text-[13px] py-3 md:py-[14px] px-6 md:px-8 border border-[#4B4B4D] text-center tracking-[0.03em] hover:text-[#99999A] rounded-xl hover:border-[#4aa5ff] transition duration-150 ease-out"
                        to="/"
                    >
                        {{ $t('back_to_main') }}
                    </router-link>
                </div>
            </div>
        </div>
        <div class="container !pb-12 md!pb-36 pt-[64px]">
            <div>
                <div>
                    <p
                        class="mb-2 text-[#4aa5ff] text-base font-bold uppercase"
                    >
                        {{ $t('form.subtitle') }}
                    </p>
                    <h3
                        class="mt-2 font-greyCliff text-4xl font-bold text-dark-100"
                    >
                        {{ $t('form.title') }}
                    </h3>
                </div>
                <div class="grid grid-cols-12 mt-12 space-y-4 lg:space-y-0">
                    <div class="flex col-span-12 lg:col-span-3">
                        <p
                            class="text-base font-normal text-[#19346999] tracking-[0.2px] leading-[22.4px]"
                        >
                            {{ $t('general_form_description') }}
                        </p>
                        <div
                            class="h-full w-0 lg:w-px bg-[#19346966] mx-5"
                        ></div>
                    </div>
                    <div
                        class="col-span-12 lg:col-span-9 rounded-lg md:px-7 md:pt-6 md:pb-7 md:bg-[#F1F4FA]"
                    >
                        <div>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-7">
                                <basic-input
                                    v-model="form.fullname"
                                    :error="vForm.fullname.$error"
                                    v-bind="{
                                        minLength: 2,
                                        height: '48px',
                                        backgroundColor: '#19346914',
                                        type: 'text',
                                        placeholder: $t('form.nameplaceholder'),
                                        label: 'form.name',
                                    }"
                                    class="md:col-span-2"
                                />
                                <div class="text-white">
                                    <p
                                        class="font-['Roboto'] font-medium text-base leading-[140%] tracking-[0.2px] text-dark-100 mb-2"
                                    >
                                        {{ $t('form.type_of_project') }}
                                    </p>
                                    <basic-select
                                        class="projects-select"
                                        v-model="form.service"
                                        v-bind="{
                                            data: services,
                                            title: form.service,
                                            customClass: 'text-dark-100 !bg-[]',
                                        }"
                                        @click:title="selectItem"
                                    />
                                </div>
                                <div class="text-white">
                                    <p
                                        class="mb-2 font-['Roboto'] font-medium text-base leading-[140%] tracking-[0.2px] text-dark-100"
                                    >
                                        {{ $t('form.phone') }}
                                    </p>
                                    <vue-tel-input
                                        v-model="form.phone_number"
                                        :class="errorState ? 'phone-error' : ''"
                                        :defaultCountry="isUz"
                                        :error="vForm.phone_number.$error"
                                        :validCharactersOnly="true"
                                        class="h-[48px] !bg-[#E0E5EE] !text-dark-100"
                                        v-bind="bindProps"
                                        @input="validatePhoneNumber"
                                        ref="telInput"
                                    ></vue-tel-input>
                                </div>
                            </div>
                            <div class="grid grid-cols-1 text-dark-100 mt-7">
                                <p
                                    class="font-['Roboto'] font-medium text-base leading-[140%] tracking-[0.2px] text-dark-100 mb-2"
                                >
                                    {{ $t('form.project_desc') }}
                                </p>
                                <textarea
                                    v-model="form.description"
                                    :class="{
                                        'border-[1px] border-red-500':
                                            vForm.description.$error,
                                    }"
                                    :error="vForm.description.$error"
                                    :placeholder="
                                        $t('form.briefprojectplaceholder')
                                    "
                                    class="bg-[#19346914] resize-none rounded-lg h-[108px] px-[14px] py-[13px] font-medium focus:border-[1px] focus:border-[#4aa5ff] placeholder:text-base placeholder:font-medium placeholder:font-['Roboto'] placeholder:tracking-[0.2px] placeholder:text-[#1934694D]"
                                    :maxlength="textareaMaxLength"
                                    type="text"
                                />
                                <div class="flex items-end justify-end mt-1">
                                    {{ textareaWordCount }} /
                                    {{ textareaMaxLength }}
                                </div>
                            </div>
                            <div class="w-full h-px bg-[#E0E5EE] my-7"></div>
                            <div class="w-[200px] ml-auto">
                                <white-button
                                    v-bind="{
                                        title: 'buttons.btn6',
                                        customClass:
                                            'whitespace-nowrap ml-auto',
                                        icon: 'rocket',
                                    }"
                                    @click="addClickForm"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import BasicInput from '@/stories/ui/BasicInput/BasicInput.vue'
import UIcons from '@/stories/ui/UIcons/UIcons.vue'
import { VueTelInput } from 'vue-tel-input'
import 'vue-tel-input/dist/vue-tel-input.css'
import { computed, onMounted, reactive, ref, watch } from 'vue'
import BasicSelect from '@/stories/dropdown/basicSelect/BasicSelect.vue'
import WhiteButton from '@/stories/SButtons/Wbutton/WhiteButton.vue'
import { useRoute } from 'vue-router'
import { useBriefStore } from '@/stores/brief'
import { maxLength, minLength, required } from '@vuelidate/validators'
import useVuelidate from '@vuelidate/core'
import { useGlobalStore } from '@/stores/global'
import { useIndexStore } from '@/stores/MetaInfo'
import { useServiceStore } from '@/stores/service'
import { sweetToastError } from '@/plugins/swal'

const domain = import.meta.env.VITE_APP_DOMAIN
let isUz = onMounted(() => domain)

const serviceStore = useServiceStore()
const telInput = ref('null')
const globalStore = useGlobalStore()
const $indexStore = useIndexStore()

const isUs = computed(() => import.meta.env.VITE_APP_DOMAIN)
const services = computed(() => {
    // serviceStore.dropdownServices.map((data) => {
    //     data.services.forEach((data) => {
    //         service.id = String(data.id)
    //         service.title = data.title
    //         service.value = String(data.id)
    //
    //         currentServices.push(service)
    //         service = {
    //             id: '',
    //             title: '',
    //             value: '',
    //         }
    //     })
    // })
    return serviceStore.dropdownServices
})
const loading = ref(false)
onMounted(() => {
    globalStore.openLoad(loading)
    $indexStore.setMetaInfo({
        title: 'Brief ' + briefType.value,
        tagName: 'title',
        // title: t("auth_meta"),
    })
})

const briefStore = useBriefStore()
const route = useRoute()
const errorState = ref(false)

const briefType = ref(route.name)

function selectItem(item: any) {
    form.service = item.value
    briefType.value = item.value
}
const telValidation = ref()

const handleValidation = (e: any) => {
    telValidation.value = e
}
watch(
    () => services.value,
    (val) => {
        console.log(val)
    },
    {
        immediate: true,
        deep: true,
    }
)
const form = reactive<{
    fullname: string
    phone_number: number
    service: string | number
    description: string
}>({
    fullname: '',
    phone_number: '',
    service: services.value?.find((el) => Number(route.params.id) === el?.id)
        ?.title,
    description: '',
})

const rules = {
    treatment: {
        fullname: {
            required,
            minLength: minLength(2),
            maxLength: maxLength(20),
        },
        phone_number: {
            required,
            minLength: minLength(10),
            maxlength: maxLength(20),
        },
        description: {
            required,
            minLength: minLength(3),
            maxLength: maxLength(500),
        },
    },
}

const vForm = useVuelidate(rules.treatment, form)
const formSubmit = ref(true)
const showModal = ref(false)
const textareaMaxLength = ref(512)
const textareaWordCount = computed(() => {
    return form.description.length
})

// REMOVE SCROLL FROM BODY
watch(showModal, (currentValue: any) => {
    if (currentValue) {
        document.documentElement.style.overflow = 'hidden'
    } else {
        document.documentElement.style.overflow = 'auto'
    }
})

const addClickForm = () => {
    vForm.value.$touch()
    if (!vForm.value.$invalid) {
        formSubmit.value = true

        //change service title

        services.value.filter((el) => {
            if (el.title === form.service) {
                form.service = Number(el.id)
            }
        })
    }

    //submit brief
    briefStore
        .addBrief(form)
        .then(() => {
            formSubmit.value = true
            showModal.value = true
        })
        .catch((e) => {
            formSubmit.value = true
            errorState.value = true
            for (let error2 of e.response.data.errors) {
                if (error2.error === 'phone_number_invalid_phone_number') {
                    errorState.value = true
                    sweetToastError('popup.error.message')
                }
            }
            if (
                form.fullname.length === 0 &&
                form.description.length === 0 &&
                form.phone_number.length === 4
            ) {
                sweetToastError('popup.error.message2')
            } else if (
                form.phone_number.length === 4 &&
                form.description.length > 0
            ) {
                sweetToastError('contact.error.phone-enter')
            } else if (form.phone_number.length == 17) {
                errorState.value = false
                console.log('salom')
            } else {
                sweetToastError('popup.error.message')
            }
        })
        .finally(() => {
            services.value.filter((el) => {
                if (el.id === form.service) {
                    form.service = el.title
                }
            })
        })
}

const clickShowClose = () => {
    (form.fullname = ''),
        (form.phone_number = ''),
        (form.description = ''),
        vForm.value.$reset()
    window.location.reload()
    showModal.value = false
    document.documentElement.style.overflow = 'auto'
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

function validatePhoneNumber(event) {
    const inputElement = event.target
    inputElement.value = inputElement.value.replace(/[^0-9+]/g, '') // Remove letters, keep numbers and '+'

    if (form.phone_number.length >= 13) {
        errorState.value = false
    }
}
</script>
<style>
.phone-error {
    border: 1px solid red !important;
}

@media (max-width: 450px) {
    .backTo {
        text-transform: uppercase;
    }
}

.modal-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100% !important;
    height: 100% !important;
    background: rgba(30, 30, 32, 0.88);
    backdrop-filter: blur(16px);
    z-index: 10000;
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal {
    z-index: 998;
    background: #2e2e30;
    border-radius: 8px;
    position: relative;
    top: 0;
    font-family: 'Roboto';
    font-style: normal;
}

.divider-y {
    background-color: #585859;
    height: 2px;
}

.modal--text {
    color: rgba(224, 224, 224, 0.6) !important;
}
</style>

<style>
.brief .vti__dropdown {
    padding: 13px !important;
    border-radius: 8px 0 0 8px;
    transition: 0.3s ease-in-out;
    border-right: 1px solid #fff;
}

.vti__dropdown:hover {
    padding: 13px !important;
    background-color: #19346914 !important;
}

.vti__dropdown-list {
    max-width: 300px !important;
    top: 45px !important;
    z-index: 12;
    border-radius: 8px;
    background-color: #fff;
    border: none;
}

.vti__dropdown-item {
    padding-top: 16px;
    padding-bottom: 16px;
}

.vti__dropdown-item:hover {
    background: #92929233 !important;
}

.vue-tel-._phone-error {
    border: 1px solid red;
}
</style>

<style>
.brief .vti__input {
    color: #193469 !important;
}

.brief .vue-tel-input:focus-within {
    border: 1px solid #4aa5ff !important;
}

.brief .vti__input {
    background: #e0e5ee !important;
    border-radius: 0 8px 8px 0;
    font-weight: 500;
}

.brief .vue-tel-input {
    border: 1px solid transparent;
    border-radius: 8px;
    background-color: #19346914;
    box-shadow: none !important;
}

.brief .vue-tel-input:hover .vue-tel-input:focus-within {
    box-shadow: none !important;
    border-color: #4aa5ff;
}
</style>
