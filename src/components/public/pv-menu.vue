<template>
  <el-menu
    router
    :default-active="defaultActive"
    :collapse="isCollapse"
    active-text-color="#ffffff"
    text-color="#ffffff"
    background-color="#409eff">
    <slot></slot>
    <template v-for="(item, key) in items" :key="key">
      <pv-submenu v-if="item.children" :item="item"></pv-submenu>
      <el-menu-item v-if="!item.children" :index="item.path">
        <el-icon :size="18">
          <component v-if="item.meta.icon" :is="item.meta.icon"></component>
        </el-icon>
        <span>{{ item.meta.title }}</span>
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script setup lang="ts">
defineOptions({
  name: 'pv-menu'
});
const route: any = useRoute();
const defaultActive: any = ref(route.path);

defineProps({
  isCollapse: {
    type: Boolean,
    default: false
  },
  items: {
    type: Array<any>
  }
});
</script>
