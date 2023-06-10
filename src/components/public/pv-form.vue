<template>
  <el-form
    ref="formHtml"
    :model="pvform.data"
    :inline="pvform.inline"
    :rules="pvform.rules"
    hide-required-asterisk
    :class="option.className"
    scroll-to-error
    :disabled="option.disabled"
    :label-position="option.labelPosition ?? 'right'"
    :status-icon="option.statusIcon"
    :label-width="option.labelWidth ?? 'auto'"
    :show-message="option.showMessage"
    :inline-message="option.inlineMessage">
    <slot
      v-if="option.prepend"
      :name="option.prepend"
      :row="pvform.data"></slot>
    <!-- 表单多列显示 -->
    <template v-if="pvform.span">
      <el-row :gutter="option.gutter ?? 20">
        <template v-for="(item, key) in pvform.items">
          <el-col
            :span="item.span ? item.span : pvform.span"
            :key="key"
            v-if="item.visible">
            <pv-form-item
              :option="pvform.data"
              :item="item"
              v-model="pvform.data"
              @submit="onSubmit">
              <template #[item.slotName]="{ row, option }">
                <slot :name="row.slotName" :option="option" :row="row"></slot>
              </template>
            </pv-form-item>
          </el-col>
        </template>
      </el-row>
    </template>
    <!-- 表单非多列显示 -->
    <template v-else>
      <template v-for="(item, key) in pvform.items">
        <pv-form-item
          :option="pvform.data"
          v-if="item.visible"
          :key="key"
          :item="item"
          v-model="pvform.data"
          @submit="onSubmit">
          <template #[item.slotName]="{ row, option }">
            <slot :name="row.slotName" :option="option" :row="row"></slot>
          </template>
        </pv-form-item>
      </template>
    </template>
    <slot v-if="option.append" :name="option.append" :row="pvform.data"></slot>
  </el-form>
</template>

<script setup lang="ts">
defineOptions({
  name: 'pv-form'
});
const emit = defineEmits(['change', 'submit', 'beforeSubmit']);
const formHtml: any = ref();
const router = useRouter();
const props: any = defineProps<{ option: any }>();
const pvform = reactive({
  items: props.option.items.length ? props.option.items : [],
  rules: props.option.rules || null,
  span: props.option.span || 0,
  inline: props.option.span ? false : props.option.inline,
  data: props.option.datas || {}
});

// 获取列表数据
const getSeletList = async (item: any) => {
  const { data } = await request(beforeAxiosEnter(item, pvform.data));
  return data.flat().map((sitem: any) => {
    const { label, value } = item.props;
    sitem.label = sitem[label];
    sitem.value = findObjectValue(sitem[value], getName(item));
    return sitem;
  });
};

// 关联请求数据处理

const formFindCascader = ({ cascader }: any, data: any) => {
  pvform.items.map((item: any) => {
    if (cascader) {
      cascader.map(({ label, value, request }: any) => {
        if (label == item.name) {
          if (item.list) {
          } else {
            pvform.data[label] = request ? data[request] : value || '';
          }
        }
      });
    }

    return item;
  });
};
// 控制字段显示
const formFindControl = async (item: any, array: any) => {
  if (Array.isArray(item.control) && item.control.length) {
    await item.control.map(async (citem: any) => {});
  }
};
const setInitFormItem = () => {
  pvform.items.map((item: any) => {
    if (item.name) {
      const svalue = findObjectValue(pvform.data, getName(item));
      pvform.data[item.name] = isNull(svalue, item);
    }
    if (!pvform.rules && ((!item.rules && item.pattern) ?? item.required)) {
      item.rules = [
        {
          required: item.required ?? false,
          trigger: 'change',
          message: item.placeholder,
          pattern: validation[item.pattern ?? 'content'] ?? item.pattern
        }
      ];
    }
  });
};
const getFormsJson = () => {
  pvform.items.map(async (item: any) => {
    if (item.name && item.load && item.list) {
      item.list = await getSeletList(item);
    }
  });
};
const onChange = () => emit('change', pvform.data);

const onSubmit = (item: any) => {
  if (item.load) {
    emit('beforeSubmit', pvform.data);
    request(pvform.data).then(({ data }: any) => {
      if (item.path) {
        router.push(item.path);
      } else {
        emit('change', data);
      }
    });
  } else {
    if (item.path) {
      router.push(item.path);
    } else {
      emit('change', pvform.data);
    }
  }
};
onBeforeMount(() => setInitFormItem());
onMounted(() => getFormsJson());
onBeforeUnmount(() => formHtml.value.resetFields());
defineExpose({
  data: pvform.data
});
</script>
<style lang="scss" scoped>
.el-form :deep(.el-row) {
  .el-col {
    margin-bottom: unit(22);
  }
  .el-input,
  .el-select,
  .el-input__wrapper {
    width: 100%;
  }
}
</style>
