<script>
export default {
  data() {
    return {
      message: '',
      multiple: '',
      checked: true,
      checkedNames: [],
      picked: '하나',
      selected: '',
      options: [
        { text: '하나', value: '1' },
        { text: '둘', value: '2' },
        { text: '셋', value: '3' },
      ],
      toggle: false,
      dynamicTrueValue: '네',
      dynamicFalseValue: '아니오',
      pick: false,
      first: '네',
      second: '아니오',
      msg: '',
    };
  },
};
</script>

<template>
  <div class="layout">
    <h1>폼 입력 바인딩</h1>
    <h2>텍스트</h2>
    <input
      type="text"
      :value="message"
      @input="(event) => (message = event.target.value)"
    />
    <!-- <input v-model="message" /> -->
    <p>메시지: {{ message }}</p>
    <hr />
    <h2>여러 줄 텍스트</h2>
    <span>여러 줄 메세지:</span>
    <p style="white-space: pre-line">{{ multiple }}</p>
    <textarea
      v-model="multiple"
      placeholder="여러 줄을 추가해보세요"
    ></textarea>
    <hr />
    <h2>체크박스</h2>
    <input type="checkbox" id="checkbox" v-model="checked" />
    <label for="checkbox">{{ checked }}</label>
    <h2>체크박스 여러개</h2>
    <div>체크된 이름: {{ checkedNames }}</div>

    <input type="checkbox" id="jack" value="젝" v-model="checkedNames" />
    <label for="jack">젝</label>

    <input type="checkbox" id="john" value="존" v-model="checkedNames" />
    <label for="john">존</label>

    <input type="checkbox" id="mike" value="마이크" v-model="checkedNames" />
    <label for="mike">마이크</label>
    <hr />

    <h2>라디오 버튼</h2>
    <div>선택한 것: {{ picked }}</div>

    <input type="radio" id="one" value="하나" v-model="picked" />
    <label for="one">하나</label>

    <input type="radio" id="two" value="둘" v-model="picked" />
    <label for="two">둘</label>

    <hr />
    <h2>셀렉트</h2>
    <div>선택됨: {{ selected }}</div>

    <select v-model="selected">
      <option disabled value="">다음 중 하나를 선택하세요</option>
      <option>가</option>
      <option>나</option>
      <option>다</option>
    </select>

    <h2>v-for로 동적 렌더링</h2>
    <select v-model="selected">
      <option v-for="option in options" :value="option.value" :key="option">
        {{ option.text }}
      </option>
    </select>

    <div>선택됨: {{ selected }}</div>

    <h2>값 바인딩</h2>
    <h3>체크박스</h3>
    <input
      type="checkbox"
      v-model="toggle"
      :true-value="dynamicTrueValue"
      :false-value="dynamicFalseValue"
    />>
    <h3>라디오</h3>
    <input type="radio" id="one" :value="first" v-model="pick" />
    <label for="one">하나</label>

    <input type="radio" id="two" :value="second" v-model="pick" />
    <label for="two">둘</label>
    <!-- 
    <input type="radio" v-model="pick" :value="first" />
    <input type="radio" v-model="pick" :value="second" /> -->
    <p>선택됨: {{ pick }}</p>

    <hr />
    <h2>수식어</h2>
    <h3>lazy</h3>
    <!-- "input" 대신 "change" 이벤트 후에 동기화됨 -->
    <input v-model.lazy="msg" />
    <p>{{ msg }}</p>
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
