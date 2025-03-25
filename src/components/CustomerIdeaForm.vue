<template>
    <section>
        <div class="customer-form w-full">
            <div
                class="w-[95%] xl:w-[990px] grid grid-cols-1 lg:grid-cols-11 gap-5 bg-blue rounded-[24px] p-[24px] mx-auto border-green border-[1px] border-solid"
            >
                <basic-input
                    minlength="2"
                    class="col-span-4"
                    v-bind="{
                        minLength: 2,
                        backgroundColor: '#FFFFFF33',
                        borderColor: '#FFFFFF33',
                        label: $t('your_name'),
                        type: 'text',
                        placeholder: $t('introduce_yourself'),
                        placeholderColor: '!#ffffff',
                        labelClasses: '!mb-2 !text-white',
                        inputClasses: 'customer-form__name',
                    }"
                    :error="vForm.user_name.$error"
                    v-model="userInfo.user_name"
                />

                <div class="col-span-4">
                    <label
                        class="inline-block mb-2 font-['Roboto'] font-medium text-base leading-[140%] tracking-[0.2px] cursor-pointer text-white"
                        for="telInput"
                    >
                        {{ $t('form.phone') }}
                    </label>
                    <vue-tel-input
                        v-model="userInfo.phone_number"
                        :class="{
                            'border-[1px] !border-red-500':
                                vForm.phone_number.$error,
                        }"
                        :defaultCountry="998"
                        :error="vForm.phone_number.$error"
                        :validCharactersOnly="true"
                        class="h-[48px]"
                        v-bind="bindProps"
                        @validate="handleValidation"
                        ref="telInput"
                        id="telInput"
                        tabindex="1"
                        type="number"
                    ></vue-tel-input>
                </div>

                <div class="col-span-4 lg:col-span-3 w-full mx-auto">
                    <button
                        class="flex items-center justify-center lg:w-[221px] lg:h-[78px] pt-[17px] pb-[19px] px-6 bg-white rounded-[8px] group transition duration-500 ease-in-out"
                        @click="check"
                    >
                        <span
                            class="inline-block lg:max-w-[135px] mr-8 text-left text-base font-bold text-dark-100"
                            >{{ $t('buttons.btn5') }}</span
                        >
                        <u-icons
                            name="rocket_icon"
                            class="inline-block ml-auto transition duration-500 ease-in-out group-hover:rotate-45 origin-left"
                        />
                    </button>
                </div>
            </div>
            <!--            <div-->
            <!--                v-else-->
            <!--                class="flex flex-col items-center justify-center w-full gap-3 md:flex-row md:gap-6"-->
            <!--            >-->
            <!--                <u-icons name="circle_check_green" class="text-[#00A795]" />-->
            <!--                <div>-->
            <!--                    <h6-->
            <!--                        class="font-bold text-white text-[18px] md:text-[24px] mb-2 left-[120%] text-center md:text-left"-->
            <!--                    >-->
            <!--                        {{ $t('popup.send') }}-->
            <!--                    </h6>-->
            <!--                    <p-->
            <!--                        class="text-[#E0E0E099] text-[16px] left-[140%] text-center md:text-left"-->
            <!--                    >-->
            <!--                        {{ $t('popup.your_application_sent') }}-->
            <!--                    </p>-->
            <!--                </div>-->
            <!--            </div>-->
        </div>
    </section>
</template>

<script setup lang="ts">
import BasicInput from '@/stories/ui/BasicInput/BasicInput.vue'
import { VueTelInput } from 'vue-tel-input'
import 'vue-tel-input/dist/vue-tel-input.css'
import useVuelidate from '@vuelidate/core'
import { useClientFeedback } from '@/stores/client_feedback'
import { reactive, ref } from 'vue'
import { maxLength, minLength, required } from '@vuelidate/validators'
import UIcons from '@/stories/ui/UIcons/UIcons.vue'
import { sweetToastError, sweetToastSuccess } from '@/plugins/swal'

const props = defineProps<{ productId: number | null }>()

const userInfo = reactive({
    user_name: '',
    phone_number: '',
})

const rules = {
    treatment: {
        user_name: {
            required,
            minLength: minLength(2),
            maxLength: maxLength(50),
        },
        phone_number: {
            required,
            minLength: minLength(10),
            maxLength: maxLength(22),
        },
    },
}

//phone
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

//phone validation
const telValidation = ref()

const handleValidation = (e: any) => {
    telValidation.value = e
}

const vForm = useVuelidate(rules.treatment, userInfo)
const clientFeedback = useClientFeedback()

let formSubmit = ref(false)

function check() {
    vForm.value.$touch()

    //check validation
    if (vForm.value.$invalid) {
        return false
    }

    clientFeedback
        .postFeedback({
            name: userInfo.user_name,
            phone_number: userInfo.phone_number,
            product: props.productId,
        })
        .then(() => {
            sweetToastSuccess('popup.send')
            formSubmit.value = true
        })
        .catch((e) => {
            sweetToastError(e.response.data.phone_number[0])
        })
}
</script>

<style>
.customer-form .vti__dropdown {
    padding: 13px !important;
    border-radius: 8px 0 0 8px;
    transition: 0.3s ease-in-out;
    border-right: 1px solid #4aa5ff;
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

.vti__dropdown-item.highlighted {
    background-color: #5f5f5f;
}

.vti__dropdown-item {
    padding-top: 16px;
    padding-bottom: 16px;
}
.vue-tel-input._phone-error {
    border: 1px solid red !important;
}
</style>

<style>
.customer-form .vue-tel-input.vti__input {
    background-color: #6eb7ff !important;
    color: #fff !important;
    border-top-right-radius: 8px !important;
    border-bottom-right-radius: 8px !important;
}

.customer-form .vti__input {
    background: #6eb7ff !important;
    border-radius: 0 8px 8px 0;
    font-weight: 500;
    color: #fff !important;
}

.customer-form .vue-tel-input {
    border: 1px solid transparent;
    border-radius: 8px;
    background-color: #6eb7ff;
}

.customer-form .vue-tel-input:hover .vue-tel-input:focus-within {
    box-shadow: none !important;
    border-color: #4aa5ff;
}
.customer-form .vue-tel-input:focus-within {
    border: 1px solid #fff !important;
    box-shadow: none !important;
}
</style>
