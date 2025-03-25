<template>
    <Teleport to="body">
        <transition name="fade" mode="out-in">
            <div
                v-if="show"
                :key="show"
                class="ModalBg fixed top-0 left-0 w-full h-screen flex-center z-[1000]"
            />
        </transition>

        <transition name="bounceIn" mode="out-in">
            <div
                v-if="show"
                id="ModalBg"
                :key="show"
                ref="modalBg"
                class="flex items-center justify-center"
                :class="[
                    bodyClass,
                    animationIn ? 'animated' : '',
                    'fixed top-[0] right-[0] w-full h-screen flex-center z-[1001]  p-[15vh_auto_50px]',
                ]"
            >
                <div
                    id="Modal"
                    ref="modal"
                    class="Modal bg-white w-full rounded-2xl"
                    :class="[
                        maxWidth ? maxWidth : 'max-w-[442px]',
                        bodyWrapperClass,
                        shaking ? 'apply-shake' : '',
                    ]"
                >
                    <slot name="header">
                        <ModalHeader
                            :title="title"
                            :header-class="headerClass"
                            @close="close"
                        />
                    </slot>
                    <div :class="contentClass">
                        <slot />
                    </div>
                </div>
            </div>
        </transition>
    </Teleport>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'

interface Props {
    show?: boolean
    title?: string
    contentClass?: string
    bodyClass?: string
    maxWidth?: string
    bodyWrapperClass?: string
    closeOnBackdrop?: boolean
    headerClass?: string
    backIcon?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    title: '',
    contentClass: '',
    bodyClass: 'px-4',
    closeOnBackdrop: false,
    backIcon: false,
})

const emit = defineEmits(['close'])
const shaking = ref(false)
const modalBg = ref(null)
const modal = ref(null)

function close() {
    emit('close')
}

let animationIn = ref(false)

const onMousedown = (event: Event) => {
    const target = event.target as HTMLTextAreaElement

    if (
        target.id !== 'Modal' &&
        target.id === 'ModalBg' &&
        props.closeOnBackdrop
    ) {
        animationIn.value = true
        emit('close')
        setTimeout(() => {
            animationIn.value = false
        }, 500)
    }
}

onMounted(() => {
    document?.addEventListener('mousedown', onMousedown)
})

onBeforeUnmount(() => document?.removeEventListener('mousedown', onMousedown))

watch(
    () => props.show,
    (newValue) => {
        if (newValue) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
    }
)
</script>

<style>
.rotated {
    transform: rotateZ(90deg);
    margin-right: 16px;
}
@keyframes shake {
    10%,
    90% {
        transform: translate3d(-1px, 0, 0);
    }

    20%,
    80% {
        transform: translate3d(2px, 0, 0);
    }

    30%,
    50%,
    70% {
        transform: translate3d(-4px, 0, 0);
    }

    40%,
    60% {
        transform: translate3d(4px, 0, 0);
    }
}

.apply-shake {
    animation: shake 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
}

#Modal {
    box-shadow: 0 5px 30px 0 rgba(0, 0, 0, 10%);
}

.ModalBg {
    background-color: rgba(9, 11, 14, 0.78);
}

.animated {
    animation: animatedIn 0.4s ease-in-out;
}

@keyframes animatedIn {
    0%,
    100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.03);
    }
    70% {
        transform: scale(0.95);
    }
}
</style>
