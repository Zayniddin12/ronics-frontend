<template>
    <teleport to="head">
        <title>{{ data?.title }}</title>
        <meta name="description" :content="data?.description" />
    </teleport>
</template>

<script lang="ts" setup></script>
