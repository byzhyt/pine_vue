<template>
  <div class="flex-col">
    <pv-layout :option="option" v-model="props.option.data"></pv-layout>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'addPlane'
});
const props = defineProps<{ option: any }>();
</script>
