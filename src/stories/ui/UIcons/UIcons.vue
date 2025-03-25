<template>
    <i v-if="name" class="icon hover:!text-blue" v-html="src" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import icons from '@/helpers/icons'

export interface Props {
    name: string
    color?: string
}

const props = withDefaults(defineProps<Props>(), {})

const src = computed(() => icons[props.name])
</script>

<style scoped>
.icon {
    display: inline-flex;
}
</style>
