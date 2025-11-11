<script setup lang="ts">
import { activeImages, currImg } from "../../store";
</script>

<template>
  <div class="position-relative" v-if="currImg">
    <div class="row g-3">
      <div
        v-for="img in activeImages"
        :key="img.src"
        class="col-4 position-relative"
        :style="{
          filter: `blur(${img.id === currImg.id ? 0 : 20}px)`,
          transition: 'filter 100ms ease',
        }"
      >
        <img class="img-fluid" :src="img.src" :alt="img.caption" />
        <div class="caption">{{ img.caption }}</div>
      </div>
    </div>
    <div class="slide-container" style="height: 100vh">
      <transition name="g">
        <div :key="currImg.src" class="position-absolute w-100 h-100">
          <img
            class="img-fluid position-absolute"
            :src="currImg.src"
            :alt="currImg.caption"
          />
          <div class="caption">{{ currImg.caption }}</div>
        </div>
      </transition>
    </div>
  </div>
</template>

<style scoped>
.slide-container {
  overflow: hidden;
  position: absolute;
  width: 100%;
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

.g-enter-active,
.g-leave-active {
  transition: transform 500ms ease;
}

.g-enter-from {
  transform: scale(0.5);
  opacity: 0;
}
.g-leave-to {
  transform: scale(5);
  opacity: 0;
}
</style>
