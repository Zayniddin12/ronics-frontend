<template>
    <div>
        <div class="flex items-center justify-between w-full">
            <img
                src="../assets/icons/arrow-left.svg"
                alt="Back Icon"
                class="cursor-pointer hover:bg-[#1934691A] hover:rounded-full"
                @click="router.back()"
            />
            <div class="search-div">
                <basic-input
                    v-if="$route.params.id"
                    searchIcon
                    minlength="2"
                    @update:modelValue="handleModelValueUpdate"
                    class="col-span-4"
                    label=""
                    v-bind="{
                        minLength: 2,
                        backgroundColor: '#f2f5fa',
                        borderColor: '#3b82f680',
                        type: 'text',
                        placeholder: $t('search'),
                        placeholderColor: '!#000000',
                        labelClasses: '!mb-2 !text-white',
                        // inputClasses: 'customer-form__name',
                    }"
                    v-model="search"
                />
            </div>
        </div>
        <h1
            class="mt-8 mb-6 lg:mb-11 text-dark-100 text-3xl lg:text-[36px] leading-[43.2px] font-bold"
        >
            {{ title }}
        </h1>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import BasicInput from '@/stories/ui/BasicInput/BasicInput.vue'
import { ref, watch } from 'vue'

const router = useRouter()

defineProps<{ title?: string }>()

const search = ref('')

const emit = defineEmits(['searchInput'])

const handleModelValueUpdate = (value: string | number) => {
    search.value = value as string
    emit('searchInput', search.value)
}

// watch(search, (value) => {
//     if (value) {
//         router.push({ name: 'Products', query: { search: value } })
//     }
// })
</script>
