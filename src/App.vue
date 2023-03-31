<script setup lang="ts">
  import { ref } from 'vue';
import vShowLazy from './index'

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
