<script setup>
import { computed, onMounted, ref } from "vue";
import { currImg, activeImages, theme } from "../store";
import { useSlideInit } from "../useSlideInit";
import A from "./themes/A.vue";
import B from "./themes/B.vue";
import C from "./themes/C.vue";
import D from "./themes/D.vue";
import E from "./themes/E.vue";
import F from "./themes/F.vue";
import G from "./themes/G.vue";
useSlideInit();

const comp = computed(() => {
  switch (theme.value) {
    case "A":
      return A;
    case "B":
      return B;
    case "C":
      return C;
    case "D":
      return D;
    case "E":
      return E;
    case "F":
      return F;
    case "G":
      return G;

    default:
      break;
  }
});

const r = ref(null);

const toggleFs = () => {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    r.value.requestFullscreen();
  }
};
</script>

<template>
  <div class="col position-relative" v-if="true" ref="r">
    <component :is="comp" />
    <button
      class="btn btn-primary position-absolute top-0 end-0"
      @click="toggleFs()"
    >
      Fullscreen
    </button>
  </div>
</template>
