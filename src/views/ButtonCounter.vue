<script setup>
import { ref } from 'vue';

const count = ref(0);
</script>

<template>
  <button @click="count++">당신은 {{ count }} 번 클릭했습니다.</button>
</template>
