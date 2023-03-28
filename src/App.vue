<script setup>
  import { VueMobCal } from "../lib/index";
  import { ref } from "vue";

  const currentDate = ref(new Date());
  const mode = ref("week");

  const onPrev = () => {
    console.log("onPrev");
  };
  const onNext = () => {
    console.log("onNext");
  };
</script>
<template>
  <div>
    <vue-mob-cal v-model:value="currentDate" v-model:mode="mode" color="#007873" @onPrev="onPrev" @onNext="onNext" />
  </div>
</template>