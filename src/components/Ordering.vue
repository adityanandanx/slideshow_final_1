<script setup>
import { ref } from "vue";
import { activeImages, allImages, fav } from "../store";

const from = ref(null);
const to = ref(null);

const handleDragStart = (i) => {
  from.value = i;
};

const handleDragOver = (i) => {
  console.log(i);
  to.value = i;
};

const handleDragEnd = (i) => {
  const t = activeImages.value[from.value];
  activeImages.value[from.value] = activeImages.value[to.value];
  activeImages.value[to.value] = t;
};
</script>

<template>
  <div class="row-12 g-4">
    <div v-for="(img, i) in activeImages" class="">
      <img
        @dragstart="() => handleDragStart(i)"
        @dragover="() => handleDragOver(i)"
        @dragend="() => handleDragEnd()"
        class="img-fluid"
        :src="img.src"
      />
      <input
        type="checkbox"
        v-model="img.fav"
        :id="img.id + 'fav'"
        class="form-check-input"
      />
      <label :for="img.id + 'fav'">Favourite</label>
    </div>
  </div>
</template>
