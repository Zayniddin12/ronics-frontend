<template>
    <div :class="inputClass" class="flex flex-col">
        <label
            v-if="label"
            class="main-label text-dark-100 cursor-pointer"
            :class="labelClasses"
            for="input"
        >
            {{ $t(label || '') }}
        </label>
        <div
            :class="[{ error: error }, inputClasses]"
            :style="style"
            class="input-wrapper transition duration-300"
        >
            <div v-if="searchIcon" class="text-[#515151]">
                <u-icons class="py-3 pl-3" name="search" />
            </div>
            <input
                id="input"
                :maxlength="maxLength ? maxLength : 50"
                :minlength="minLength"
                :placeholder="$t(placeholder)"
                :required="required"
                :type="type"
                :value="modelValue"
                autocomplete="off"
                class="placeholder main-input"
                @input="handleInput"
            />
            <Transition name="close-btn">
                <button
                    class="btn-close"
                    :class="(modelValue && searchIcon) ? 'visible' : 'invisible opacity-0'"
                    type="button"
                    @click="handleClick"
                    aria-label="button"
                >
                    <span class="icon-cross"></span>
                </button>
            </Transition>
            <div v-if="warning" class="text-[#FF6B6B]">
                <span class="relative">
                    <u-icons class="py-3 pr-3" name="warning" />
                    <span class="warning-icon__tooltip">{{
                        $t('input_warning')
                    }}</span>
                </span>
            </div>
            <div v-if="minus" class="py-2.5 pr-2.5 text-white cursor-pointer">
                <u-icons
                    class="w-7 h-7 bg-[#49494C] rounded-[50%] flex items-center justify-center"
                    name="minus"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import UIcons from '@/stories/ui/UIcons/UIcons.vue'

export interface Props {
    for?: string
    label: string
    id?: string
    type?: string
    placeholder: string
    maxLength?: number
    minLength?: number
    required?: boolean
    backgroundColor?: string
    inputInnerClass?: string
    warning?: boolean
    minus?: boolean
    height?: string
    searchIcon?: boolean
    inputClass?: string
    modelValue?: number | string
    error?: boolean
    labelClasses?: string
    inputClasses?: string
}

interface Emits {
    (e: 'update:modelValue', value: any): void
}

const props = withDefaults(defineProps<Props>(), {
    required: true,
    warning: false,
})

interface customObject {
    [key: string]: any
}

const emit = defineEmits<Emits>()

const handleInput = (e: customObject) => {
    emit('update:modelValue', e.target.value)
}

const handleClick = () => {
    emit('update:modelValue', '')
}

const style = computed(() => ({
    backgroundColor: props.backgroundColor,
    height: props.height,
}))
</script>

<style scoped>
.input-wrapper {
    transition: width 0.3s, opacity 0.3s;
}

.customer-form__name input::placeholder {
    color: white !important;
    font-weight: 400;
}
.customer-form__name input {
    height: 48px;
    border-radius: 8px !important;
    color: white !important;
    width: 300px;
    font-weight: 400;
}
.customer-form .input-wrapper:focus-within {
    border-color: white;
}
.customer-form .main-input {
    width: 100%;
}

.search-div .btn-close .icon-cross:before,
.search-div .btn-close .icon-cross:after {
    background-color: gray !important;
}

.placeholder {
    @apply placeholder:text-base placeholder:font-medium placeholder:font-['Roboto'] placeholder:tracking-[0.2px] placeholder:text-[#1934694D];
}

.main-input {
    @apply outline-none px-3.5 py-[13px] text-dark-100 bg-transparent w-[100%] font-['Roboto'] text-[16px];
}

.input-wrapper {
    @apply rounded-lg flex items-center focus-within:transition focus-within:ease-in-out focus-within:duration-300 focus-within:border border focus-within:border-solid border-solid focus-within:border-[#4aa5ff] border-transparent;
}

.main-label {
    @apply font-['Roboto'] font-medium text-base leading-[140%] tracking-[0.2px] text-dark-100 mb-3;
}

.warning-icon__tooltip {
    @apply absolute bottom-[40px] left-[33%] whitespace-nowrap translate-x-[-50%] p-2 h-8 bg-[#4aa5ff] text-xs !leading-[150%] rounded-md flex justify-center items-center text-white before:content-[''] before:border-l-8 before:border-t-[10px] before:border-l-transparent before:border-r-transparent before:border-t-[#4aa5ff] before:border-r-8 before:absolute before:-bottom-2 before:left-[50%] before:translate-x-[-50%] font-['Roboto'] font-semibold text-xs !leading-[150%] tracking-[-0.01em] text-[#F6F7F7];
}

.btn-close {
    margin: 0 10px 0 0;
    border: 0;
    padding: 0;
    background: transparent;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 0.5s ease-in-out;
}

.btn-close .icon-cross {
    margin: 0;
    padding: 0;
    border: 0;
    background: none;
    position: relative;
    width: 15px;
    height: 15px;
}

.btn-close .icon-cross:before,
.btn-close .icon-cross:after {
    content: '';
    position: absolute;
    top: 45%;
    left: 0;
    right: 0;
    height: 3px;
    background: #fff;
    border-radius: 6px;
    transition: 0.5s ease-in-out;
}

.btn-close:hover {
    opacity: 0.5;
}

.btn-close .icon-cross:before {
    transform: rotate(45deg);
    transition: 0.5s ease-in-out;
}

.btn-close .icon-cross:after {
    transform: rotate(-45deg);
    transition: 0.5s ease-in-out;
}

.btn-close .icon-cross span {
    display: block;
}

.error {
    border: 1px solid rgb(239, 68, 68) !important;
}

.close-btn-enter-active {
    animation: cross-btn 0.5s ease-out;
}

.close-btn-leave-active {
    transition: 0.3s ease-in-out;
}

@keyframes cross-btn {
    0% {
        opacity: 0;
        transition: 0.3s ease-in-out;
    }

    100% {
        opacity: 1;
        transition: 0.3s ease-in-out;
    }
}
</style>
