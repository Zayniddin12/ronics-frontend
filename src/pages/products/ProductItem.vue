<template>
<!--    <CLoader v-if="loading" />-->

    <section class="pt-[100px] md:pt-[120px] lg:pt-[189px]">
        <!--    nested router when match slug   -->
        <router-view v-if="route.name === 'single'"></router-view>

        <!--        product item-->
        <div v-else class="container pb-[64px]">
            <NavigationHeader
                :title="productStore.currentCategoryName"
                show-search
                @searchInput="searchInput"
            />
            <Transition mode="out-in">
                <div v-if="productStore.products?.length || counter">
                    <div
                        class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
                    >
                        <ProductItemCard
                            v-for="(product, index) in productStore.products"
                            :key="index"
                            :card="product"
                            :product-id="currentCategoryId"
                        >
                        </ProductItemCard>
                    </div>
                    <div v-if="loading && show" class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mb-[1160px]">
                        <div v-for="item in 6" :key="item" class="shadow rounded-[24px] p-6 max-w-sm w-full mx-auto mt-6">
                            <div class="animate-pulse flex space-x-4">
                                <div class="flex-1 space-y-6 py-1">
                                    <div class="h-[191px] bg-slate-200"></div>
                                    <div class="space-y-5">
                                        <div class="">
                                            <div class="h-4 w-1/2 bg-slate-200 rounded-lg mb-2"></div>
                                            <div class="h-4 bg-slate-200 rounded-lg"></div>
                                        </div>
                                        <div class="h-4 w-1/3 bg-slate-200 rounded-lg"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div v-else>
                    <Nodata />
                </div>
            </Transition>
        </div>
    </section>
</template>

<script setup lang="ts">
import NavigationHeader from '@/components/NavigationHeader.vue'
import ProductItemCard from '@/pages/products/ProductItemCard.vue'
import { useRoute } from 'vue-router'
import { useProductStore } from '@/stores/product'
import CLoader from '@/components/CLoader.vue'
import { computed, ref, watch, onMounted, onBeforeUnmount } from 'vue'
import Nodata from '@/components/Nodata.vue'
import SButton from '@/components/Button/SButton.vue'
import { debounce } from '@/helpers/debounce'

let isFetching = false;
let counter = 1
setTimeout(() => {
    counter =0
}, 500);

const route = useRoute()
const productStore = useProductStore()

const typing = ref(false)

const loading = ref(false)
const currentCategoryId = route.params?.id

const show = computed(() => productStore.isHaveNext)
const search = ref('')

// const aaa = computed(() => productStore.products)

const searchInput = (e?: string) => {
    search.value = e as string
}

const get = async (offset?: string, search?: string) => {
    try {
        loading.value = true
        await productStore.getProductByCategoryId(
            currentCategoryId as string,
            offset,
            search
        )
        loading.value = false
    } catch (e) {
        loading.value = false
    }
}

// Infinite scroll handler
const handleScroll = async () => {
    if (isFetching || !productStore.isHaveNext || typing.value) return;

    const scrollPosition = window.innerHeight + window.scrollY;
    const bottomPosition = document.documentElement.offsetHeight;

    // Check if the user is near the bottom of the page
    if (scrollPosition >= bottomPosition - 100) {
        isFetching = true;
        await get(productStore.offset);
        isFetching = false;
    }
};

onMounted(() => {
    get()
    window.addEventListener('scroll', handleScroll);
})
onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
});

const loadMore = () => {
    get(productStore.offset)
}

watch(
    () => search.value,
    (val) => {
        if (val) {
            typing.value = true
            debounce('searchInput', () => {
                productStore.offset = '0'
                typing.value = false
                productStore.getProductByCategoryId(
                    currentCategoryId as string,
                    productStore.offset,
                    search.value
                )
            })
        } else {
            typing.value = true
            debounce('searchInput', () => {
                typing.value = false
                productStore.getProductByCategoryId(
                    currentCategoryId as string,
                    '0',
                    '',
                    true
                )
            })
        }
    }
)

watch(
    () => route.query?.search,
    (value) => {
        if (value) {
            get(undefined, value as string)
        }
    }
)
</script>

<style>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>
