<script setup lang="ts">
import { currImg } from "../../store";
</script>

<template>
  <div class="slide-container position-relative" v-if="currImg">
    <transition name="e">
      <div :key="currImg.src" class="position-absolute w-100 h-100">
        <img
          class="img-fluid position-absolute right w-100 h-100"
          :src="currImg.src"
          :alt="currImg.caption"
        />
        <img
          class="img-fluid position-absolute left w-100 h-100"
          :src="currImg.src"
          :alt="currImg.caption"
        />
      </div>
    </transition>
  </div>
</template>

<style scoped>
.slide-container {
  height: 100vh;
  overflow: hidden;
  transform-style: preserve-3d;
  perspective: 800px;
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

.left {
  clip-path: xywh(0 0 50% 100%);
  transform-origin: left;
  transform: rotateY(0deg);
}
.right {
  clip-path: xywh(50% 0 50% 100%);
  transform-origin: right;
  transform: rotateY(0deg);
}

.e-enter-active,
.e-leave-active,
.e-enter-active .left,
.e-leave-active .right {
  transition: transform 500ms ease;
  z-index: 10;
}

.e-enter-from .left {
  transform: rotateY(-90deg);
}
.e-enter-from .right {
  transform: rotateY(-90deg);
}
/* .b-enter-to .right {
  transform: rotateY(0deg);
} */

/* .b-leave-from {
  transform: translateX(0%);
} */
/* .b-leave-to .left {
  transform: rotateY(90deg);
} */
</style>
