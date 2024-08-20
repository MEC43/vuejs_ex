<script>
export default {
  data() {
    return {
      list: [1, 2, 3],
    };
  },
  mounted() {
    // document.querySelector('#username').focus();
    this.$refs.input.focus();
    console.log(this.$refs.items);
  },
};
</script>

<template>
  <div class="layout">
    <h1>템플릿 참조 페이지</h1>
    <!-- <input type="text" id="username" /> -->
    <input ref="input" />
    <hr />
    <ul>
      <li v-for="item in list" ref="items" :key="item.id">
        {{ item }}
      </li>
    </ul>
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
