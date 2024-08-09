<script setup>
const rawHtml = '<a href="">Link</a>';
const pid = 10;
const isButtonDisabled = true;
const objectOfAttrs = {
  id: 'container',
  class: 'wrapper',
  style: 'background-color:green',
};
const number = 20;
const ok = false;
const message = '안녕하세요';
const id = 30;
const sayHello = (msg) => {
  alert(msg);
};
const url = 'http://www.google.com';
const attributeName = 'href';
const items = [
  { id: 0, title: 'html' },
  { id: 1, title: 'css' },
  { id: 2, title: 'javascript' },
];
const onSubmit = () => {
  alert('제출됨');
};
</script>

<template>
  <div class="layout">
    <h1>템플릿 문법 페이지</h1>
    <hr />
    <p>{{ rawHtml }}</p>
    <p><span v-html="rawHtml"></span></p>
    <hr />
    <h2>속성 바인딩</h2>
    <p :id="pid">v-bind:id로 요소에 아이디 지정</p>
    <h2>불리언 바인딩</h2>
    <button :disabled="isButtonDisabled">버튼</button>
    <button :disabled="!isButtonDisabled">버튼</button>
    <h2>여러 속성 바인딩</h2>
    <div v-bind="objectOfAttrs">???</div>
    <h2>자바스크립트 표현식</h2>
    {{ number + 1 }}
    {{ ok ? '예' : '아니오' }}
    {{ message.split('').reverse().join('') }}
    <div :id="`list-${id}`">있다!</div>
    <h2>함수호출</h2>
    <!-- <span :title="sayHello('안녕')"> </span> -->
    <!-- <span>{{ sayHello('안녕') }}</span> -->
    <a :[attributeName]="url"> ... </a>
    <div v-for="item in items" :key="item.id">
      {{ item.title }}
    </div>
    <h2>v-on</h2>
    <div>
      <button type="button" @click="sayHello('안녕~~')">안냥</button>
      <!-- <button type="button" @mouseover="sayHello('안녕~~')">안냥</button> -->
    </div>
    <form action="" @submit.prevent="onSubmit">
      <button>제출</button>
    </form>
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
