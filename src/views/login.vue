<template>
  <section class="login-body">
    <div class="flex flex-col justify-center">
      <pv-form
        v-model="loginForm"
        ref="loginForm"
        class="login-box"
        :option="pageLogin.loginJson"
        @change="onChange"
        @submit="onBeforeSubmit"></pv-form>
    </div>
    <footer class="footer-box">
      <el-link
        :underline="false"
        :to="item.path"
        v-for="(item, key) in pageLogin.FooterItems"
        :key="key">
        <span v-html="item.label"></span>
        <el-divider direction="vertical" v-if="item.divider"></el-divider>
      </el-link>
    </footer>
  </section>
</template>

<script setup lang="ts">
import login, { getUserInfo, footerList } from '@/scripts/login';
defineOptions({
  name: 'login'
});
const loginForm: any = ref();
const plat = inject('plat');
const pageLogin = reactive({
  loginJson: login,
  userInfo: null,
  FooterItems: footerList
});
const onBeforeSubmit = (data: any) => {
  data.mmmm = 555555;
  loginForm.value = data;
};
const onChange = async ({ data }: any) => {
  // UserInfoModule.setToken(data.access_token);
  // UserInfoModule.setUserInfo(await getUserInfo());
};
</script>
