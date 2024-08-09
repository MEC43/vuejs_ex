<script setup>
import { ref } from 'vue';

const count = ref(0);

const name = ref('Vue.js');

function greet(event) {
  alert(`안녕 ${name.value}!`);
  // 'event'는 네이티브 DOM 이벤트 객체입니다.
  if (event) {
    alert(event.target.tagName);
  }
}

function say(message) {
  alert(message);
}

function warn(message, event) {
  // 이제 네이티브 이벤트 객체에 접근할 수 있습니다.
  if (event) {
    event.preventDefault();
  }
  alert(message);
}

function doThis() {
  //.stop
  alert('링크 전파를 차단함');
}
function onSubmit() {
  //.prevent
  alert('폼 제출을 차단함');
}
function doThat() {
  //.stop.prevent
  alert('수신어를 연결해서 기본속성 차단, 링크 전파도 차단');
}
function boxClick() {
  alert('박스클릭');
}
function spanClick() {
  alert('스팬클릭');
}

const submit = () => {
  alert('엔터키가 입력되었습니다.');
};
</script>

<template>
  <div class="layout">
    <h1>이벤트 핸들링</h1>
    <button @click="count++">1 추가</button>
    <p>숫자 값은: {{ count }}</p>
    <button @click="greet">환영하기</button>
    <hr />
    <button @click="say('hello')">Say hello</button>
    <button @click="say('bye')">Say bye</button>
    <hr />
    <h2>이벤트 핸들러에서 이벤트 객체 접근하기</h2>
    <!-- 특수한 키워드인 $event 사용 -->
    <button @click="warn('아직 양식을 제출할 수 없습니다.', $event)">
      제출하기
    </button>

    <!-- 인라인 화살표 함수 사용 -->
    <button @click="(event) => warn('아직 양식을 제출할 수 없습니다.', event)">
      제출하기
    </button>
    <hr />
    <h2>이벤트 수식어</h2>
    <!-- 클릭 이벤트가 부모요소에게 전파되는 것이 중지됩니다. -->
    <a @click.stop="doThis" href="http://www.naver.com" target="_blank"
      >doThis</a
    >

    <!-- submit 이벤트가 더 이상 페이지 리로드하지 않습니다. -->
    <form @submit.prevent="onSubmit" action="http://www.naver.com">
      <button>제출</button>
    </form>

    <!-- 수식어를 연결할 수 있습니다. -->
    <a @click.stop.prevent="doThat" href="http://www.naver.com" target="_blank"
      >doThat</a
    >

    <!-- 이벤트에 핸들러 없이 수식어만 사용할 수 있습니다. -->
    <form @submit.prevent action="http://www.naver.com">
      <button>이벤트 핸들러 없이 제출</button>
    </form>

    <!-- event.target이 엘리먼트 자신일 경우에만 핸들러가 실행됩니다. -->
    <!-- 예를 들어 자식 엘리먼트에서 클릭 액션이 있으면 핸들러가 실행되지 않습니다. -->
    <div @click="boxClick" class="box">
      <span @click="spanClick" class="box">no self 클릭</span>
    </div>

    <div @click.self="boxClick" class="box">
      <span @click.self="spanClick" class="box">.self 클릭</span>
    </div>

    <hr />
    <h2>입력키 수식어</h2>
    <!-- `key`가 `Enter`일 때만 `submit`을 호출합니다 -->
    <input @keyup.enter="submit" />
  </div>
</template>
