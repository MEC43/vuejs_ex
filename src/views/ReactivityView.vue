<script setup>
import { ref, nextTick, reactive } from 'vue';

const count = ref(0);
console.log(count);

const state = reactive({ count2: 0 });
console.log(state);

const increment = async () => {
  count.value++;

  // 아직 DOM 업데이트되지 않음.
  console.log(document.getElementById('counter').textContent); // 0

  await nextTick();
  // 이제 DOM 업데이트됨.
  console.log(document.getElementById('counter').textContent); // 1
};
</script>

<template>
  {{ console.log('템플릿 실행') }}
  <div class="reactivity">
    <h1>반응상태 페이지</h1>
    <!-- <button @click="count++">증가</button> -->
    <button @click="increment">증가</button>
    <div id="counter">{{ count }}</div>
    <hr />
    <button @click="state.count2++">카운트2증가</button>
    <div id="counter2">{{ state.count2 }}</div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
