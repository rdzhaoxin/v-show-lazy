#### vue + setup + ts
```js
<script setup lang="ts">
  import { ref } from 'vue';
  import vShowLazy from 'v-show-lazy'

  const show = ref(false)
</script>

<template>
    <button @click="show = !show">Toggle</button>
    <div v-show-lazy="show">
        <img src="./assets/vue.svg" alt="Vue logo" />
    </div>
</template>

<style scoped>
</style>
```
#### 使用全局构建版本
```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <title>v-show-lazy</title>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  <script src="./v-show-lazy.umd.cjs"></script>
</head>
<body>
  <div id="app">
    <div v-show-lazy="flag">
      {{ message }}
    </div>
    <button @click="flag=!flag">update flag</button>
  </div>
</body>
<script>
  const {createApp} = Vue
  const app = createApp({
    data() {
      return {
        message: 'Hello Vue!',
        flag: false
      }
    }
  })
  app.directive('show-lazy', VShowLazy)
  app.mount('#app')
</script>

</html>
```