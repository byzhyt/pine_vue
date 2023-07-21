<template>
  <section class="flex-col container">
    <div class="flex flex-row overflowy-auto">
      <pv-menu
        class="overflowy-auto"
        :items="pages.menusList"
        :class="pages.isCollapse ? '' : 'menus-box'"
        :is-collapse="pages.isCollapse">
        <div class="padding-10 flex-row align-center">
          <img src="" class="width-45 height-45 radius-full" alt="" />
          <span class="text-whiter padding-left-10 line-clamp-1">管理系统</span>
        </div>
      </pv-menu>

      <div class="flex flex-col overflowy-auto">
        <router-view class="flex margin-20 bgc-whiter"></router-view>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineOptions({
  name: 'layout'
});
const route = useRoute();
const pages = reactive({
  title: '',
  icon: '',
  visible: false,
  headers: null,
  isCollapse: false,
  menusList: []
});

const appVersion = computed(() => getAppVersion());
const { options } = useRouter();

onBeforeMount(() => {
  const routes = options.routes;

  routes.map((item: any) => {
    if (item.meta.root) {
      pages.menusList = item.children;
      document.title = item.meta.title;
    }
  });
});
</script>
