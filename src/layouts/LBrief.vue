<template>
    <div class="h-full" style="min-height: 100vh">
        <TheHeader />
        <slot />
    </div>
</template>

<script lang="ts" setup>
import TheHeader from '/src/stories/layout/theHeader/TheHeader.vue'
</script>
