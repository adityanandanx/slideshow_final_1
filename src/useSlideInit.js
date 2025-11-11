import { onMounted, onUnmounted, watch } from "vue";
import {
  delay,
  activeImages,
  index,
  mode,
  nextSlide,
  prevSlide,
  fav,
  allImages,
  uitheme,
} from "./store";

export const useSlideInit = () => {
  const startManual = () => {
    window.addEventListener("keydown", handleKeydown);
  };

  let timeout = null;
  const startRandom = () => {
    if (timeout) {
      clearInterval(timeout);
      timeout = null;
    }

    timeout = setInterval(() => {
      index.value = Math.floor(Math.random() * activeImages.value.length);
    }, delay.value);
    console.log(timeout);
  };
  const startAuto = () => {
    if (timeout) {
      clearInterval(timeout);
      timeout = null;
    }
    timeout = setInterval(nextSlide, delay.value);
  };

  const handleKeydown = (e) => {
    console.log(e);

    if (e.key === "ArrowRight") {
      nextSlide();
    } else if (e.key === "ArrowLeft") {
      prevSlide();
    }
  };

  const clear = () => {
    if (timeout) {
      clearInterval(timeout);
      timeout = null;
      console.log("CLEARED");
    }
    window.removeEventListener("keydown", handleKeydown);
  };
  const start = () => {
    switch (mode.value) {
      case "manual":
        startManual();
        break;
      case "random":
        startRandom();
        break;
      case "auto":
        startAuto();
        break;
      default:
        break;
    }
  };
  watch([mode, delay, activeImages], () => {
    clear();
    start();
  });

  onMounted(() => {
    clear();
    start();
  });
  onUnmounted(() => {
    clear();
  });

  watch(fav, () => {
    if (fav.value) {
      activeImages.value = allImages.value.filter((img) => img.fav);
    } else {
      activeImages.value = [...allImages.value];
    }
  });

  watch(uitheme, () => {
    if (uitheme.value === "auto") {
      document.documentElement.setAttribute(
        "data-bs-theme",
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
      );
    } else {
      document.documentElement.setAttribute("data-bs-theme", uitheme.value);
    }
  });
};
