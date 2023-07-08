<template>
  <div style="padding: 2rem">
    <!-- <pv-form ref="pvform" :option="homejson" v-model="pvform"></pv-form> -->
    <div class="banner-box">
      {{ banner.index }}
      <div
        class="banner-item"
        :class="banner.bindex == item.index && 'banner-active'"
        :style="item.styles"
        @click="onMouseClick(item)"
        @mouseout="onMouseout"
        v-for="(item, key) in banner.list"
        :key="key">
        {{ item.index }},{{ item.cy }},{{ item.cx }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import HomeJson from '@/scripts/home';
import { b } from 'consola/dist/consola-3fef035a';
const homejson = computed(() => HomeJson);
const pvform = ref();

const banner: any = reactive({
  list: [],
  r: 260,
  bindex: null,
  timer: null,
  index: 0,
  stopitem: {}
});
const setListData = () => {
  const list: any = [];
  const cs = 360 / banner.list.length;
  banner.list = list.map((item: any, i: number) => {
    const key = i + 1;
    const cx = Math.round(
      banner.r +
        banner.r * Math.cos(((cs * key + banner.index) / 180) * Math.PI)
    );
    const cy = Math.round(
      banner.r +
        banner.r * Math.sin(((cs * key + banner.index) / 180) * Math.PI)
    );
    const scale = Math.abs(
      Math.sin(((cs * key + banner.index) / 180) * Math.PI)
    );
    const styles = {
      left: `${cx}px`,
      top: `${cy}px`,
      transform: `translate3d(${cx * 0.5}px,${cx * 0.5}px,0) scale(${scale})`,
      opacity: scale,
      zIndex: i++
    };

    return {
      ...item,
      index: key,
      styleImg: {
        backgroundImage: `url(${item.img})`
      },
      cy,
      cx,
      styles
    };
  });
};
const onMouseClick = (item: any) => {
  banner.stopitem = item;
  clearInterval(banner.timer);

  banner.list.map((item: any) => {
    item.styles.zIndex = item.index;
    return item;
  });
};
const onMouseout = () => {
  banner.stopitem = {};
  clearInterval(banner.timer);
  banner.timer = setInterval(() => {
    setListData();
    banner.index++;
  }, 300);
};
onBeforeMount(() => {
  setListData();
  banner.timer = setInterval(() => {
    setListData();
    banner.index++;
  }, 300);
});
defineOptions({
  name: 'home'
});
</script>
<style lang="scss" scoped>
.banner-box {
  width: 100%;
  height: 100%;
  margin: auto;
  top: -5%;
  left: 5%;
  position: relative;
  // overflow: hidden;
}
.banner-item {
  height: 120px;
  width: 210px;
  position: absolute;
  transition: 1s all ease;
}
.item-image {
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: 100% 100%;
}

.item-text {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 10px 20px;
  min-width: 220px;
  background: linear-gradient(
    90deg,
    rgba(124, 164, 197, 0.42) 0%,
    rgba(0, 139, 252, 0) 100%
  );
  border: 1px solid;
  border-image: linear-gradient(
      90deg,
      rgba(142, 248, 255, 0.56),
      rgba(255, 255, 255, 0)
    )
    1 1;
}
</style>
