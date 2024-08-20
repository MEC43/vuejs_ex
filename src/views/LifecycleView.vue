<script>
export default {
  mounted() {
    console.log(`컴포넌트가 마운트 됐습니다.`);
  },
  beforeMount() {
    console.log('컴포넌트 마운트되기 이전');
  },
  beforeUpdate() {
    console.log('업데이트 시작');
  },
  updated() {
    console.log('업데이트 완료');
  },
  data() {
    return {
      count: 0,
    };
  },
};
</script>

<template>
  {{ console.log('템플릿 컴파일 시작') }}
  <div class="layout">
    <h1>생명주기 훅</h1>
    <button @click="count++">+</button>
    <div>{{ count }}</div>
  </div>
  {{ console.log('템플릿 컴파일 완료') }}
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
