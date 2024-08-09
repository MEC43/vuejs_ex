<script setup>
import { ref, reactive, computed } from 'vue';

const author = reactive({
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery',
  ],
});
const firstName = ref('John');
const lastName = ref('Doe');

// 계산된 ref
const publishedBooksMessage = computed(() => {
  return author.books.length > 0 ? 'Yes' : 'No';
});

const fullName = computed({
  // getter
  get() {
    return firstName.value + ' ' + lastName.value;
  },
  // setter
  set(newValue) {
    // 참고: 분해 할당 문법을 사용함.
    [firstName.value, lastName.value] = newValue.split(' ');
  },
});
</script>

<template>
  {{ console.log('템플릿 실행') }}
  <div class="computed">
    <h1>계산된 속성 페이지</h1>
    <p>책을 가지고 있다:</p>
    <span>{{ publishedBooksMessage }}</span>
    <hr />
    <div>이름 : {{ fullName }}</div>
    <div>이름2 : {{ (fullName = '홍 길동') }}</div>
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
