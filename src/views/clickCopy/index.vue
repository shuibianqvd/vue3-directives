<template>
    <div>
        <input type="text">
        <button v-copy="copyText">copy</button>
    </div>
</template>

<script setup lang="ts">
import clickCopy from '@/directive/clickCopy';

const vCopy = { ...clickCopy }
const copyText = ref('要 Copy 的内容')
</script>