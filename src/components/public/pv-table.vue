<template>
  <div class="flex-column height-full">
    <el-table
      class="margin-bottom-1 flex"
      :max-height="option.maxHeight"
      :height="option.height || '100%'"
      :stripe="option.stripe || true"
      :border="option.border || true"
      :row-key="rowKey"
      :lazy="option.lazy"
      :fit="option.fit"
      :current-row-key="rowKey"
      :show-header="option.showHeader"
      :highlight-current-row="option.highlightCurrentRow || true"
      :data="tableList"
      @cell-click="onCellClick"
      @selection-change="onSelectChange"
      :tree-props="treeprops">
      <template v-for="(item, key) in items">
        <pv-tables-item
          v-if="item.visible"
          :key="key"
          :item="item"
          :option="item"
          @submit="onSubmit"></pv-tables-item>
      </template>
    </el-table>
    <pagination
      :class="paginjson.className"
      :align="paginjson.align"
      v-if="paginjson && tableList.length"
      v-model="paginjson"
      :option="paginjson"
      @change="initLoadsData"></pagination>
  </div>
</template>

<script setup lang="ts">


defineOptions({
  name: 'pv-table'
})
export default class PvTable extends Vue {
  @Prop({ default: {}, required: true }) option!: any;
  get items(): Array<any> {
    return this.option.items || [];
  }
  get tableJson() {
    return this.option.params || '';
  }
  get rowKey() {
    return this.option.rowKey || 'id';
  }
  get treeprops() {
    return this.option.treeprops || {};
  }

  @Model('change') datas!: any;
  tableList: any = this.option.data || [];
  public rowjson: any = {};
  paginjson: any = {
    total: 0,
    size: 10,
    current: 1,
    aling: 'left',
    className: 'margin-bottom',
    background: true
  };
  @Emit('change')
  onResultChange(e: object) {
    return e;
  }
}
</script>
