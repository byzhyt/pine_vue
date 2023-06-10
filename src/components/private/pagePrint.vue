<template>
  <iframe :src="src" width="100%" height="100%"></iframe>
</template>

<script setup lang="ts">
defineOptions({
  name: 'page-print'
});

defineProps<{
  src: string;
}>();
</script>
