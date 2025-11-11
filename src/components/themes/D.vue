<script setup lang="ts">
import { ref, watch } from "vue";
import { currImg, index } from "../../store";

const stack = ref([]);

watch(
  index,
  () => {
    stack.value.push({ image: currImg.value, rot: Math.random() * 10 - 5 });
  },
  { immediate: true }
);
</script>

<template>
  <div
    class="slide-container position-relative d-flex align-items-center justify-content-center"
    v-if="currImg"
  >
    <transition name="d" appear v-for="s in stack">
      <div
        :key="s.image.src"
        class="position-absolute w-80 h-80 img-c"
        :style="{ rotate: `${s.rot}deg` }"
      >
        <img
          class="img-fluid position-absolute"
          :src="s.image.src"
          :alt="s.image.caption"
        />
        <div class="caption">{{ s.image.caption }}</div>
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
  border: 3px solid white;
  border-radius: 5px;
}
.img-c {
  width: 80%;
  height: 80%;
}
.caption {
  text-transform: capitalize;
  background-color: white;
  position: absolute;
  bottom: 0;
  padding: 0.3rem 0.8rem;
  width: 100%;
}

.d-enter-active,
.d-leave-active {
  transition: transform 500ms ease;
}

.d-enter-from {
  transform: translateX(-100%);
}
.d-enter-to {
  transform: translateX(0%);
}
</style>
