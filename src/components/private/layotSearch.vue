<template>
  <header class="flex-row align-center">
    <div class="align-center flex">
      <span v-html="title" class="flex padding-left font-md font-weight"></span>
    </div>
    <div class="padding-right flex" align="right">
      <el-link class="padding-right" icon="el-icon-message-solid "></el-link>
      <el-link class="padding-right" icon="el-icon-user-solid">用户名</el-link>
      <el-link class="padding-right">退出</el-link>
    </div>
  </header>
</template>

<script setup lang="ts">
defineOptions({
  name: 'layot-search'
});

defineProps<{
  title: string;
  icon: string;
}>();
</script>
