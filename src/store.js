import { computed, ref, watch } from "vue";

export const activeImages = ref([]);
export const allImages = ref([]);

export const mode = ref("auto");
export const theme = ref("E");
export const speed = ref("normal"); // slow, normal, fast
export const index = ref(0);
export const fav = ref(false);
export const uitheme = ref("light");

export const currImg = computed(() => {
  return activeImages.value[index.value];
});
export const delay = computed(() => {
  switch (speed.value) {
    case "slow":
      return 2000;
    case "normal":
      return 1500;
    case "fast":
      return 1000;

    default:
      break;
  }
});

export const nextSlide = () => {
  if (activeImages.value.length > 0)
    index.value = (index.value + 1) % activeImages.value.length;
};
export const prevSlide = () => {
  if (activeImages.value.length > 0)
    index.value =
      (index.value - 1 + activeImages.value.length) % activeImages.value.length;
};

const setTheme = (theme) => {
  if (theme === "auto") {
    document.documentElement.setAttribute(
      "data-bs-theme",
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    );
  } else {
    document.documentElement.setAttribute("data-bs-theme", theme);
  }
};

export const filterByCaption = (query) => {
  fav.value = false;
  activeImages.value = allImages.value.filter((img) =>
    img.caption.toLowerCase().includes(query.toLowerCase())
  );
};
