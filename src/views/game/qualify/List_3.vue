<template>
  <apply-list :list="qualifylist"></apply-list>
</template>

<script>
import ApplyList from '../../../components/ApplyList.vue'
export default {
  name: 'qualify-list-3',
  data() {
    return {
      qualifylist: [
        {icon: require('@/assets/images/wangwen/ww_yanchu.png'), title: '演出类', price: '', path: '/classify-list/yanchu'},
        {icon: require('@/assets/images/wangwen/ww_dongman.png'), title: '动漫类', price: '', path: '/classify-list/dongman'},
        {icon: require('@/assets/images/wangwen/ww_yinyue.png'), title: '音乐类', price: '', path: '/classify-list/yinyue'},
      ]
    }
  },
  components: {
    ApplyList
  },
  mounted() {
    // console.log(this);
  }
}
</script>