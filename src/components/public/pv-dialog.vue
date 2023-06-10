<template>
  <el-dialog
    v-if="pvdialog.direction == 'center'"
    :title="option.title"
    destroy-on-close
    v-model="pvdialog.visible"
    :width="option.width"
    append-to-body
    :before-close="handleClose">
    <component
      :is="pvdialog.componentOption.component"
      v-if="pvdialog.visible"
      :datas="option.data"
      :option="pvdialog.componentOption"
      @change="onChange"></component>
  </el-dialog>
  <el-drawer
    v-else
    :title="option.title"
    destroy-on-close
    v-model="pvdialog.visible"
    :direction="pvdialog.direction"
    :size="option.width"
    append-to-body
    :before-close="handleClose">
    <component
      :is="pvdialog.componentOption.component"
      v-if="pvdialog.visible"
      :datas="option.data"
      :option="pvdialog.componentOption"
      @change="onChange"></component>
  </el-drawer>
</template>

<script setup lang="ts">
defineOptions({
  name: 'pv-dialog'
});
const dialogHtml = ref(null);
const emit = defineEmits(['change']);
const props = defineProps<{ option: any }>();
const pvdialog = reactive({
  componentOption: props.option.option,
  direction: props.option.direction || 'center',
  visible: false
});
const handleClose = () => {
  pvdialog.visible = !pvdialog.visible;
};
const onChange = ({ data, item }: any) => {
  handleClose();
  if (data.submit) {
    emit('change', { data, item, eltype: 'dialog' });
  }
};
defineExpose({
  dialogHtml,
  handleClose
});
</script>
