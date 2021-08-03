<template>
  <apply-list :list="qualifylist"></apply-list>
</template>

<script>
import ApplyList from '../../../components/ApplyList'
export default {
  name: 'qualify-list-6',
  data() {
    return {
      qualifylist: [
        {icon: require('@/assets/images/apply.png'), title: '申请须知', price: '', path: '/apply-tip/guangbo'},
        {icon: require('@/assets/images/fee.png'), title: '预估费用',price: '', path: '/apply-cost/guangbo'},
      ]
    }
  },
  components: {
    ApplyList
  }
}
</script>