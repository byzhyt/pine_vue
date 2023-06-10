<template>
  <el-select
    v-model="data"
    :class="item.className"
    clearable
    :filterable="item.filterable"
    :disabled="item.disabled"
    :multiple="item.multiple"
    :placeholder="item.placeholder">
    <el-option
      v-for="(sitem, skey) in item.list"
      :key="skey"
      :label="sitem.label"
      :value="sitem.value"></el-option>
  </el-select>
</template>
<script setup lang="ts">
defineOptions({
  name: 'pv-select'
});
const data = ref();
defineProps<{ item: any }>();

defineExpose({ data });
</script>
