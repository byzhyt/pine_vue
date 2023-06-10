<template>
  <pv-alert class="padding" :option="notfound"></pv-alert>
</template>

<script setup lang="ts">
defineOptions({
  name: 'NotFound'
});
const notfound = {
  title: '未找到页面',
  path: '/home',
  slot: true,
  autoskip: true,
  type: 'error',
  description: '非常抱歉，未找到页面'
};
</script>
