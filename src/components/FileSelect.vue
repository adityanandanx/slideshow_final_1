<script setup>
import { activeImages, allImages } from "../store";

const samples = [
  "basilique-notre-dame-de-fourviere-lyon.jpg",
  "beautiful-view-in-lyon.jpg",
  "place-bellecour-lyon.jpg",
  "tour-metalique-lyon.jpg",
];

const loadSample = () => {
  allImages.value = [];
  for (const sample of samples) {
    allImages.value.push({
      id: sample,
      src: "/photos/" + sample,
      caption: sample.replaceAll("-", " ").split(".")[0].trim(),
      isFav: false,
    });
  }
  activeImages.value = [...allImages.value];
};

const handleFiles = (files) => {
  allImages.value = [];

  for (const file of files) {
    allImages.value.push({
      id: file.name,
      src: URL.createObjectURL(file),
      caption: file.name.replaceAll("-", " ").split(".")[0],
      isFav: false,
    });
  }
  activeImages.value = [...allImages.value];
};
loadSample();
</script>

<template>
  <h2 class="mt-3">File Select</h2>
  <input
    type="file"
    class="form-control"
    multiple
    @change="(e) => handleFiles(e.target.files)"
  />
  <div
    class="border dropzone vstack gap-2 align-items-center justify-content-center rounded"
    @drop.prevent="(e) => handleFiles(e.dataTransfer.files)"
    @dragend.prevent=""
    @dragover.prevent=""
  >
    <div class="text-center">Drop files here</div>
    <button @click="loadSample" class="btn btn-primary">Load sample</button>
  </div>
</template>

<style scoped>
.dropzone {
  padding: 2rem;
  margin-top: 2rem;
  min-height: 10rem;
}
</style>
