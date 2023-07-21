<template>
  <section class="padding-2 height-full flex-col">77777777
    <div class="margin-bottom-2 bgc-linen padding-1">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>{{ route.meta.title }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <slot></slot>
  </section>
</template>

<script setup lang="ts">
defineOptions({
  name: 'main'
});
const route = useRoute();
</script>
