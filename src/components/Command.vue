<script setup>
// Commands defined here
import { computed, onMounted, ref } from "vue";
import { mode, theme } from "../store";
const show = ref(false);

const commands = [
  {
    title: "Change to manual control mode",
    action: () => (mode.value = "manual"),
  },
  { title: "Change to auto-playing mode", action: () => (mode.value = "auto") },
  {
    title: "Change to random playing mode",
    action: () => (mode.value = "random"),
  },
  { title: "Switch to theme A", action: () => (theme.value = "A") },
  { title: "Switch to theme B", action: () => (theme.value = "B") },
  { title: "Switch to theme C", action: () => (theme.value = "C") },
  { title: "Switch to theme D", action: () => (theme.value = "D") },
  { title: "Switch to theme E", action: () => (theme.value = "E") },
  { title: "Switch to theme F", action: () => (theme.value = "F") },
  { title: "Switch to theme G", action: () => (theme.value = "G") },
];

const query = ref("");
const sel = ref(0);

const fil = computed(() => {
  return commands.filter((c) =>
    c.title.toLowerCase().includes(query.value.toLowerCase())
  );
});
const handlekey = (e) => {
  if (e.key === "ArrowDown") {
    sel.value = (sel.value + 1) % fil.value.length;
  }
  if (e.key === "ArrowUp") {
    sel.value = (sel.value - 1 + fil.value.length) % fil.value.length;
  }
  if (e.key === "Enter") {
    fil.value[sel.value].action();
  }
};
onMounted(() => {
  window.addEventListener("keydown", (e) => {
    if (e.key === "/" || (e.key === "k" && e.ctrlKey)) {
      e.preventDefault();
      show.value = !show.value;
    }
    if (e.key === "Escape") {
      show.value = false;
    }
    handlekey(e);
  });
});
</script>

<template>
  <div class="overlay" v-if="show" @click.self="show = false">
    <div class="container">
      <input
        class="form-control"
        type="text"
        v-model="query"
        placeholder="Start typing..."
        autofocus
      />
      <ul class="">
        <li
          v-for="(c, i) in fil"
          :style="{
            border: i === sel ? '1px solid black' : '',
          }"
        >
          {{ c.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.overlay {
  background-color: rgba(0, 0, 0, 0.315);
  position: fixed;
  inset: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
}
.container {
  background-color: white;
  border-radius: 2rem;
  padding: 2rem;
  max-width: 500px;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  padding: 0.5rem 0.7rem;
  border-radius: 0.5rem;
}
</style>
