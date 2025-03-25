<template>
    <div>
        <form
            @submit.prevent
            class="contact bg-[#F1F4FA] p-4 lg:px-7 lg:pb-7 lg:pt-6 rounded-2xl lg:rounded-[24px]"
        >
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <basic-input
                    v-model="form.fullname"
                    :error="vForm.fullname.$error"
                    v-bind="{
                        minLength: 2,
                        height: '48px',
                        backgroundColor: '#19346914',
                        type: 'text',
                        placeholder: $t('contact.form.name'),
                        label: $t('your_name'),
                    }"
                />
                <div class="text-white">
                    <p
                        class="mb-3 font-['Roboto'] font-medium text-base leading-[140%] tracking-[0.2px] text-dark-100"
                    >
                        {{ $t('form.phone') }}
                    </p>
                    <vue-tel-input
                        v-model="form.phone_number"
                        :class="
                            vForm.phone_number.$error
                                ? 'border-[1px] !border-red-500'
                                : ''
                        "
                        :defaultCountry="998"
                        :error="vForm.phone_number.$error"
                        :validCharactersOnly="true"
                        class="h-[48px] !bg-[#E0E5EE] text-dark-100"
                        v-bind="bindProps"
                        @validate="handleValidation"
                        ref="telInput"
                    ></vue-tel-input>
                </div>
            </div>
            <div class="grid grid-cols-1 text-dark-100 mt-7">
                <p
                    class="font-['Roboto'] font-medium text-base leading-[140%] tracking-[0.2px] text-dark-100 mb-2"
                >
                    {{ $t('contact.form.label3') }}
                </p>

                <textarea
                    v-model="form.description"
                    :class="{
                        'border-[1px] !border-red-500':
                            vForm.description.$error,
                    }"
                    :error="vForm.description.$error"
                    :placeholder="$t('contact.form.description')"
                    class="bg-[#19346914] resize-none rounded-lg h-[108px] px-[14px] py-[13px] font-medium border-[1px] border-transparent transition ease-in-out duration-300 focus:border-[#4aa5ff] placeholder:text-base placeholder:font-medium placeholder:font-['Roboto'] placeholder:tracking-[0.2px] placeholder:text-[#1934694D]"
                    :maxlength="textareaMaxLength"
                    type="text"
                />
                <div class="flex items-end justify-end mt-1">
                    {{ textareaWordCount }} / {{ textareaMaxLength }}
                </div>
            </div>
            <div class="w-[200px] mt-6 ml-auto">
                <white-button
                    v-bind="{
                        title: 'contact.btn',
                        customClass:
                            'whitespace-nowrap ml-auto text-white text-center',
                        icon: '',
                    }"
                    @click="addClickForm"
                />
            </div>
        </form>

        <div
            class="grid lg:gap-[22px] gap-3 mt-4 lg:mt-6 grid-cols-1 md:grid-cols-2"
        >
            <div
                class="flex items-center p-3 lg:p-5 bg-[#F1F4FA] rounded-2xl lg:rounded-[24px]"
            >
                <img src="../../assets/icons/email.svg" alt="Email Icon" />

                <a
                    :href="`mailto:${contacts.email}`"
                    class="inline-block ml-3 font-greyCliff text-xl text-dark-100 transition duration-300 ease-in-out font-semibold"
                    target="_blank"
                    aria-label="link"
                    >{{ contacts.email }}</a
                >
            </div>
            <div
                class="flex items-center p-3 lg:p-5 bg-[#F1F4FA] rounded-2xl lg:rounded-[24px]"
            >
                <img src="../../assets/icons/phone.svg" alt="Phone Icon" />

                <a
                    href="tel:998712009399"
                    class="inline-block ml-3 font-greyCliff text-xl text-dark-100 transition duration-300 ease-in-out font-semibold"
                    target="_blank"
                    aria-label="link"
                    >{{ global.formatPhone(contacts.phone_number) }}
                </a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import BasicInput from '@/stories/ui/BasicInput/BasicInput.vue'
import WhiteButton from '@/stories/SButtons/Wbutton/WhiteButton.vue'
import { VueTelInput } from 'vue-tel-input'
import 'vue-tel-input/dist/vue-tel-input.css'
import { ref, reactive, computed, onMounted, watch } from 'vue'
import { maxLength, minLength, required } from '@vuelidate/validators'
import useVuelidate from '@vuelidate/core'
import { useGlobalStore } from '@/stores/global'
import { useIndexStore } from '@/stores/MetaInfo'
// import { useDomainVariables } from '@/composables/useDomainVariables'
import { useContactStore } from '@/stores/contact'
import { sweetToastError, sweetToastSuccess } from '@/plugins/swal'

import global from '@/plugins/global.ts'
import { useContactsStore } from '@/stores/contacts'

const contactsStore = useContactsStore()
const contacts = computed(() => contactsStore.contacts ?? '')
contactsStore.getContacts()

const loading = ref(false)
const { contact } = useContactStore()

onMounted(() => {
    globalStore.openLoad(loading)
})

onMounted(() => {
    $indexStore.setMetaInfo({
        title: 'Contact',
        tagName: 'title',
    })
})

const globalStore = useGlobalStore()
const $indexStore = useIndexStore()

const isUs = computed(() => import.meta.env.VITE_APP_DOMAIN)
// const { phoneNumber, email } = useDomainVariables()
const telValidation = ref()
const textareaMaxLength = ref(512)
const textareaWordCount = computed(() => {
    return form.description.length
})

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

const handleValidation = (e: any) => {
    telValidation.value = e
}

const form = reactive({
    fullname: '',
    phone_number: '',
    description: '',
})

const rules = {
    treatment: {
        fullname: { required, minLength: minLength(2) },
        phone_number: {
            required,
            minLength: minLength(10),
            maxlength: maxLength(30),
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

const addClickForm = () => {
    vForm.value.$touch()
    if (!vForm.value.$invalid) {
        formSubmit.value = true
        loading.value = true

        contact(form)
            .then(() => {
                sweetToastSuccess('success_send')
                form.fullname = ''
                form.phone_number = '+998'
                form.description = ''
                vForm.value.$reset()
                formSubmit.value = false
            })
            .catch((e) => {
                formSubmit.value = true
                sweetToastError(e.response.data.phone_number[0])
            })
    }
}
</script>

<style>
.contact .vti__dropdown {
    padding: 13px !important;
    border-radius: 8px 0 0 8px;
    transition: 0.3s ease-in-out;
    border-right: 1px solid #19346914;
}

.contact .vti__dropdown:hover {
    padding: 13px !important;
    background-color: #fff;
}
</style>

<style>
.contact .vti__input {
    background: #e0e5ee;
    border-radius: 0 8px 8px 0;
    font-weight: 500;
}

.contact .vue-tel-input {
    border: 1px solid transparent;
    border-radius: 8px;
    background-color: #19346914;
    box-shadow: none !important;
}

.contact .vue-tel-input:hover .vue-tel-input:focus-within {
    box-shadow: none !important;
    border-color: #4aa5ff;
}
</style>
