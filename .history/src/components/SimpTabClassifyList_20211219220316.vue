<template>
  <div class="tab-classify-list">
    <!-- 这里是两个tab需要显示的不同bg ------ start ------ -->
    <div
      :style="`display: ${tabList[0].title === activeTitle ? 'block' : 'none'}`"
    >
      <img :src="pngbg1" class="pngbg" alt="" />
    </div>
    <div
      :style="`display: ${tabList[1].title === activeTitle ? 'block' : 'none'}`"
    >
      <img :src="pngbg2" class="pngbg" alt="" />
    </div>
    <!-- 这里是两个tab需要显示的不同bg  ------ end ------ -->
    <div class="img-wrap">
      <div class="tab-title_wrap">
        <div
          v-for="(tabItem, index) in tabList"
          :key="tabItem.title"
          :class="
            `tab-title tab-title_${index} ${
              activeTitle === tabItem.title ? 'active' : ''
            }`
          "
          v-on:click="() => toggleTab(tabItem)"
          v-html="tabItem.title"
        ></div>
      </div>
      <!-- 这里是两个tab需要显示的不同bg  ------ end ------ -->
      <div v-for="tabItem in tabList" :key="tabItem.title">
        <div
          :style="
            `display: ${
              tabItem.title === activeTitle ? 'block' : 'none'
            };overflow: hidden;`
          "
        >
          <router-link
            :to="item.path"
            v-for="item in tabItem.list"
            :key="item.title"
            v-on:click="() => toggleItem(item)"
          >
            <div
              :class="
                `tab-item flex-box ${activeItem === item.title ? 'active' : ''}`
              "
              v-html="item.title"
            ></div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabClassifylist',
  props: ['tabList'],
  data() {
    return {
      pngbg1: require('../assets/images/simp_bg/B1.jpg'),
      pngbg2: require('../assets/images/simp_bg/B2.png'),
      activeTitle: '',
      activeItem: '',
    };
  },
  mounted() {
    console.log('+++++++++++++++', this.tabList);
    this.activeTitle = this.tabList[0].title;
  },
  methods: {
    toggleTab(tabItem) {
      this.activeTitle = tabItem.title;
    },
    toggleItem(item) {
      console.log('item', item);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/libs/const.scss';
.tab-classify-list {
  padding-top: 200px;
  min-height: 100vh;

  @media screen and (max-width: 325px) {
    padding-top: 160px;
  }

  .pngbg {
    position: absolute;
    left: 0;
    top: 0;
    width: toRem(375px * 2);
    height: toRem(1334px);
    z-index: 1;
  }

  .tab-title_wrap {
    margin: toRem(-20px) toRem(-30px) 0;
    display: flex;
    justify-content: center;
    align-items: center;

    .tab-title {
      padding-top: toRem(7px * 2);
      width: 50%;
      height: toRem(45px * 2);
      color: toRem(14px * 2);
      color: #333;
      font-size: 12px;
      text-align: center;
      box-sizing: border-box;
      background-size: contain;
      background-repeat: no-repeat;

      &_0 {
        background-image: url('../assets/images/tabClassifyList/tab_left.png');
        &.active {
          background-image: url('../assets/images/tabClassifyList/tab_left_active.png');
        }
      }

      &_1 {
        background-image: url('../assets/images/tabClassifyList/tab_right.png');
        &.active {
          background-image: url('../assets/images/tabClassifyList/tab_right_active.png');
        }
      }
    }
  }

  .img-wrap {
    position: relative;
    margin: 0 toRem(15px * 2);
    padding: toRem(20px * 2) toRem(20px * 2) 0;
    border-radius: 7px;
    background: #fff;
    z-index: 5;

    .tab-item {
      height: toRem(40px * 2);
      background: #f8f6f6;
      font-size: toRem(13px * 2);
      border-radius: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: toRem(18px * 2);
      color: #333;
      font-weight: bold;
    }
  }
}
</style>
