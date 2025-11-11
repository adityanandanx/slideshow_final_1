<script setup lang="ts">
import { currImg } from "../../store";
</script>

<template>
  <div class="slide-container position-relative" v-if="currImg">
    <transition name="b">
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

.b-enter-active,
.b-leave-active,
.b-enter-active .caption,
.b-leave-active .caption {
  transition: transform 500ms ease, opacity 500ms ease;
}

.b-enter-active .caption,
.b-leave-active .caption {
  transition-delay: 500ms;
}

.b-enter-from {
  transform: scale(0.5) translateY(-100%) rotateZ(45deg);
  opacity: 0;
}
.b-enter-from .caption {
  transform: translateX(-100%) rotateZ(90deg);
}
.b-enter-to {
  transform: translateX(0%);
}

.b-leave-from {
  transform: translateX(0%);
}
.b-leave-to {
  transform: scale(5);
  opacity: 0;
}
</style>
