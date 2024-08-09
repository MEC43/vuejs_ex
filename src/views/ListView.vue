<script>
export default {
  data() {
    return {
      parentLangs: 'Web',
      items: [
        { id: 1, title: 'HTML', desc: 'Html is ...' },
        { id: 2, title: 'CSS', desc: 'Css is ...' },
        { id: 3, title: 'JS', desc: 'JS is ...' },
      ],
      myObject: {
        title: 'Vue에서 목록을 작성하는 방법',
        author: '홍길동',
        publishedAt: '2016-04-10',
      },
      numbers: [1, 2, 3, 4, 5],
      sets: [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
      ],
    };
  },
  computed: {
    evenNumbers() {
      return this.numbers.filter((n) => n % 2 === 0);
    },
  },
  methods: {
    even(numbers) {
      return numbers.filter((number) => number % 2 === 0);
    },
  },
};
</script>

<template>
  <div class="list">
    <h1>리스트 렌더링</h1>
    <ul>
      <li v-for="(item, index) in items" :key="item.id">
        {{ parentLangs }} : {{ index }} - {{ item.title }}
      </li>
    </ul>
    <ul>
      <li v-for="value in myObject" :key="value">
        {{ value }}
      </li>
    </ul>
    <hr />
    <span v-for="n in 10">{{ n }}</span>
    <hr />
    <ul>
      <template v-for="item in items">
        <li>{{ item.desc }}</li>
      </template>
    </ul>
    <h2>필터</h2>
    <ul>
      <li v-for="n in evenNumbers">{{ n }}</li>
    </ul>
    <button @click="numbers.push(2)">+</button>
    <hr />
    <ul v-for="numbers in sets">
      <li v-for="n in even(numbers)">{{ n }}</li>
    </ul>
    <button @click="sets[0].push(2)">+</button>
  </div>
</template>

<style>
@media (min-width: 1024px) {
}
</style>
