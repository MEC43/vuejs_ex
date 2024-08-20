<script setup>
import { ref, watch } from 'vue';

const question = ref('');
const answer = ref('질문에는 보통 물음표가 포함됩니다. ;-)');
const loading = ref(false);

// watch는 ref에 직접 작동합니다
watch(question, async (newQuestion) => {
  if (newQuestion.includes('?')) {
    loading.value = true;
    answer.value = '생각 중...';
    try {
      const res = await fetch('https://yesno.wtf/api');
      answer.value = (await res.json()).answer === 'yes' ? '네' : '아니오';
    } catch (error) {
      answer.value = '오류! API에 도달할 수 없습니다. ' + error;
    } finally {
      loading.value = false;
    }
  }
});
</script>

<template>
  <div class="layout">
    <h1>감시자</h1>
    <p>
      예/아니오 질문을 하세요:
      <input v-model="question" :disabled="loading" />
    </p>
    <p>{{ answer }}</p>
  </div>
</template>
