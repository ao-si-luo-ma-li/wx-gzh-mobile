<template>
  <apply-list :list="qualifylist"></apply-list>
</template>

<script>
import ApplyList from '../../../components/ApplyList'
export default {
  name: 'qualify-list-4',
  data() {
    return {
      qualifylist: [
        {icon: require('@/assets/images/ICPEDI.png'), title: 'ICP申请须知', price: '', path: '/apply-tip/dianxin'},
        {icon: require('@/assets/images/fee.png'), title: 'ICP申请预估费用', price: '', path: '/apply-cost/dianxin'},
      ]
    }
  },
  components: {
    ApplyList
  }
}
</script>