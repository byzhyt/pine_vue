<template>
  <el-config-provider
    :message="config.message"
    :locale="config.locale"
    :size="config.size">
    <router-view class="container"></router-view>
  </el-config-provider>
</template>

<script setup lang="ts">
import zhCn from 'element-plus/es/locale/lang/zh-cn';
defineOptions({
  name: 'app'
});
const route: any = useRoute();
provide('plat', getAppVersion());

const config: any = {
  size: 'large',
  locale: zhCn,
  message: {
    max: 1
  }
};
</script>
