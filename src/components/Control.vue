<script setup>
import { ref } from "vue";
import { fav, filterByCaption, mode, speed, theme, uitheme } from "../store";
import Command from "./Command.vue";
import FileSelect from "./FileSelect.vue";
import Ordering from "./Ordering.vue";

const query = ref("");
</script>

<template>
  <div class="col-12 col-xl-3 col">
    <h2 class="mt-3">Filter by caption</h2>
    <input
      type="text"
      class="form-control"
      v-model="query"
      @input="(e) => filterByCaption(e.target.value)"
      placeholder="Filter by caption"
    />

    <h2 class="mt-3">Mode</h2>
    <select class="form-select" name="mode" v-model="mode" id="mode">
      <option value="manual">Manual</option>
      <option value="random">Random</option>
      <option value="auto">Auto</option>
    </select>
    <h2 class="mt-3">Theme</h2>
    <div class="row">
      <button
        class="btn col"
        :class="t === theme ? 'btn-primary' : 'btn-outline-primary'"
        @click="theme = t"
        v-for="t in ['A', 'B', 'C', 'D', 'E', 'F', 'G']"
      >
        {{ t }}
      </button>
    </div>
    <h2 class="mt-3">Speed</h2>
    <select class="form-select" name="speed" v-model="speed" id="speed">
      <option value="slow">slow</option>
      <option value="normal">normal</option>
      <option value="fast">fast</option>
    </select>

    <h2 class="mt-3">UI Theme</h2>
    <select class="form-select" name="uitheme" v-model="uitheme" id="uitheme">
      <option value="auto">auto</option>
      <option value="dark">dark</option>
      <option value="light">light</option>
    </select>

    <h2 class="mt-3">Favourites</h2>
    <input type="checkbox" v-model="fav" class="form-check-input" id="fav" />
    <label class="form-check-label" for="fav">Show Favourites</label>

    <FileSelect />
    <Ordering />
    <Command />
  </div>
</template>
