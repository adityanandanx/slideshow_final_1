<script setup lang="ts">
import { currImg } from "../../store";
</script>

<template>
  <div class="slide-container position-relative" v-if="currImg">
    <transition name="c">
      <div :key="currImg.src" class="position-absolute w-100 h-100">
        <img
          class="img-fluid position-absolute"
          :src="currImg.src"
          :alt="currImg.caption"
        />
      </div>
    </transition>
    <div class="caption">
      <transition
        name="c"
        appear
        :key="word + currImg.src"
        v-for="(word, i) in currImg.caption.split(' ')"
        :style="{
          transitionDelay: `${i * 300}ms`,
        }"
      >
        <span class="caption-word"> {{ word }}&nbsp;</span>
      </transition>
    </div>
    <!-- <transition name="b">
      <div class="caption">{{ currImg.caption }}</div>
    </transition> -->
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
.caption-word {
  display: inline-block;
}

.c-enter-active,
.c-leave-active {
  transition: transform 500ms ease;
}

.c-enter-from {
  transform: translateY(100%);
}
.c-enter-to {
  transform: translateY(0%);
}

.c-leave-from {
  transform: translateY(0%);
}
.c-leave-to {
  transform: translateY(-100%);
}
</style>
