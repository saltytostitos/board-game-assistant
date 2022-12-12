<template>
  <div class="flex justify-center cardsize" :class="{ wiggle: animate }">
    <div class="card">
      <div v-if="card.value !== 'SORRY!'" class="card-corner">
        <div class="card-corner-number" :class="{ wiggle: animate }">
          {{ card.value }}
        </div>
      </div>
      <div
        class="card-text card-top"
        :class="card.value === 'SORRY!' ? 'text-xs' : 'pl-16'"
      >
        {{ card.description }}
      </div>
      <div class="card-center">
        <span
          v-if="card.value !== 'SORRY!'"
          class="card-number"
          :class="{ wiggle: animate }"
          >{{ card.value }}</span
        >
        <img v-else src="/images/sorry.png" :class="{ wiggle: animate }" />
      </div>
      <div
        class="card-text card-bottom"
        :class="card.value === 'SORRY!' ? 'text-xs' : 'pl-16'"
      >
        {{ card.description }}
      </div>
      <div v-if="card.value !== 'SORRY!'" class="card-corner bottom-corner">
        <div class="card-corner-number" :class="{ wiggle: animate }">
          {{ card.value }}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps(["card"]);
const animate = ref(false);
const makeAnimate = () => {
  animate.value = true;
  setTimeout(() => {
    animate.value = false;
  }, 1000);
};

watch(props, () => {
  makeAnimate();
});
</script>
<style scoped>
.wiggle {
  animation: wiggle 2s linear;
}

@keyframes wiggle {
  0%,
  7% {
    transform: rotateZ(0);
  }
  ,
  15% {
    transform: rotateZ(-15deg);
  }
  20% {
    transform: rotateZ(10deg);
  }
  25% {
    transform: rotateZ(-10deg);
  }
  30% {
    transform: rotateZ(6deg);
  }
  35% {
    transform: rotateZ(-4deg);
  }
  40%,
  100% {
    transform: rotateZ(0);
  }
}
.card {
  width: 22rem;
  aspect-ratio: 2 / 3.5;
  display: flex;
  border: 1rem solid white;
  position: relative;
  background-color: white;
}
.card-text {
  position: absolute;
  text-align: center;
  inset: 0;
  font-weight: 800;
  font-size: 1.15rem;
  top: 0.5rem;
  color: black;
}
.card-bottom {
  rotate: 180deg;
  bottom: 0.5rem;
}
.card-corner {
  position: absolute;
  background-color: black;
  width: 4rem;
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
}
.card-corner-number {
  position: absolute;
  font-size: 2.5rem;
  font-weight: 900;
}
.card-corner:before {
  content: "";
  background-color: black;
  position: absolute;
  height: 4rem;
  aspect-ratio: 1;
  border-bottom-right-radius: 50%;
  border-top-right-radius: 50%;
}
.bottom-corner {
  rotate: 180deg;
}
.bottom-corner {
  bottom: 0;
  right: 0;
}
.card-center {
  background-image: radial-gradient(#444, #050505);
  border: 0.5rem solid black;
  border-radius: 100%;
  width: 15rem;
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  position: relative;
  margin-top: auto;
  margin-bottom: auto;
}
.card-center:before {
  content: "";
  width: 17rem;
  aspect-ratio: 1;
  position: absolute;
  border-left: 1rem solid blue;
  border-right: 1rem solid green;
  border-top: 1rem solid yellow;
  border-bottom: 1rem solid red;
  border-radius: 100%;
}
.card-center:after {
  content: "";
  width: 18rem;
  aspect-ratio: 1;
  position: absolute;
  border: 0.5rem solid black;
  border-radius: 100%;
  outline: 0.5rem solid white;
}
.card-number {
  font-weight: 900;
  font-size: 8rem;
}
</style>
