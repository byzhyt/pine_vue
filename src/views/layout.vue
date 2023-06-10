<template>
  <section class="flex-column container">
    <template v-if="0">
      <div class="flex height-full">
        <pv-menu
          v-if="pages.visible"
          class="overflowy-auto"
          :items="pages.menusList"></pv-menu>
        <router-view></router-view>
      </div>
    </template>
    <template v-else>
      <div class="flex flex-row overflowy-auto">
        <pv-menu
          class="overflowy-auto"
          :items="pages.menusList"
          :class="pages.isCollapse ? '' : 'menus-box'"
          :is-collapse="pages.isCollapse"></pv-menu>
        <div class="flex flex-column overflowy-auto">
          <router-view class="flex margin-20 bgc-whiter"></router-view>
        </div>
      </div>
    </template>
  </section>
</template>

<script setup lang="ts">
defineOptions({
  name: 'layout'
});

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
