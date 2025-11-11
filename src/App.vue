<script setup>
import Control from "./components/Control.vue";
import SlideShow from "./components/SlideShow.vue";
import { index } from "./store";
</script>

<template>
  <div class="p-5">
    <h1 class="display-4">Slideshow Gallery</h1>
    <div class="row">
      <Control />
      <SlideShow />
    </div>
  </div>
</template>

<style scoped></style>
