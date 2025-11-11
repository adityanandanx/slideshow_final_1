<script setup lang="ts">
import { currImg } from "../../store";
</script>

<template>
  <div v-if="currImg" class="position-relative slide-container">
    <img
      class="img-fluid position-absolute"
      :src="currImg.src"
      :alt="currImg.caption"
    />
    <div class="caption">{{ currImg.caption }}</div>
  </div>
</template>

<style scoped>
.slide-container {
  height: 100vh;
  overflow: hidden;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.caption {
  text-transform: capitalize;
  background-color: white;
  position: absolute;
  bottom: 0;
  padding: 0.3rem 0.8rem;
  border-top-right-radius: 0.5rem;
}
</style>
