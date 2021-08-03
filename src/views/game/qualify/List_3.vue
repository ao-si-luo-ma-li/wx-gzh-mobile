<template>
  <apply-list :list="qualifylist"></apply-list>
</template>

<script>
import ApplyList from '../../../components/ApplyList'
export default {
  name: 'qualify-list-3',
  data() {
    return {
      qualifylist: [
        {icon: require('@/assets/images/wangwen.png'), title: '网文申请须知', price: '', path: '/apply-tip/wangwen'},
        {icon: require('@/assets/images/fee.png'), title: '网文申请预估费用', price: '', path: '/apply-cost/wangwen'},
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