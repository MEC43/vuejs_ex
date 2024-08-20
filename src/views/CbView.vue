<script>
import ButtonCounter from './ButtonCounter.vue';
import BlogPost from './BlogPost.vue';
import Home from './Tabs/home.vue';
import Post from './Tabs/post.vue';
import Archive from './Tabs/archive.vue';

export default {
  components: {
    ButtonCounter,
    BlogPost,
    Home,
    Post,
    Archive,
  },
  data() {
    return {
      posts: [
        { id: 1, title: 'Vue와 함께한 나의 여행' },
        { id: 2, title: 'Vue로 블로깅하기' },
        { id: 3, title: 'Vue가 재미있는 이유' },
      ],
      postFontSize: 1,
      currentTab: 'Home',
      tabs: ['Home', 'Post', 'Archive'],
    };
  },
};
</script>

<template>
  <div class="layout">
    <h1>컴포넌트 기초 페이지</h1>
    <ButtonCounter />
    <ButtonCounter />
    <hr />
    <h2>블로그</h2>
    <div :style="{ fontSize: postFontSize + 'em' }">
      <BlogPost
        v-for="post in posts"
        :key="post.id"
        :title="post.title"
        @enlarge-text="postFontSize += 0.1"
        @smaller-text="postFontSize -= 0.1"
      />
    </div>
    <hr />
    <h2>Tabs</h2>
    <div class="tabs">
      <div class="buttons">
        <button
          v-for="tab in tabs"
          :key="tab"
          :class="(['tab-button'], { active: currentTab === tab })"
          @click="currentTab = tab"
        >
          {{ tab }}
        </button>
        <component :is="currentTab"></component>
      </div>
    </div>
  </div>
</template>

<style>
.buttons button {
  opacity: 0.5;
  padding: 10px;
}
.buttons button.active {
  opacity: 1;
}
</style>
