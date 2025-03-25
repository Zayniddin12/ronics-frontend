<template>
    <section
        class="relative container h-[calc(100vh+133px)]"
        ref="target"
        :style="targetStyle"
    >
        <div class="w-full h-full flex items-center justify-center">
            <div class="text-center mx-auto relative z-20">
                <img
                    src="@/assets/icons/error-page.svg"
                    alt="Error Image"
                    class="select-none mx-auto"
                />

                <h5
                    class="mb-2 text-dark-100 text-2xl lg:text-[48px] font-bold leading-[57px]"
                >
                    {{ $t('error.not_found') }}
                </h5>
                <p
                    class="text-[22px] leading-[26px] text-[#19346999] text-center font-greyCliff font-medium"
                >
                    Ushbu sahifa topilmadi yoki o‘chirib yuborilgan iltimos
                    qayta urunib ko‘ring
                </p>
                <button
                    @click="
                        () => {
                            router.push({ path: '/' })
                        }
                    "
                    class="w-[248px] h-12 mt-8 rounded-[12px] bg-[#4AA5FF] text-white"
                    aria-label="button"
                >
                    {{ $t('back_to_main') }}
                </button>
            </div>
        </div>
    </section>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue'
import { useIndexStore } from '@/stores/MetaInfo'
import { useRouter } from 'vue-router'

const router = useRouter()
const $indexStore = useIndexStore()

onMounted(() => {
    $indexStore.setMetaInfo({
        title: 'Page not found',
        tagName: 'title',
    })
})
</script>
