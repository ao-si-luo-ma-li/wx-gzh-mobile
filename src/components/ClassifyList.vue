<template>
  <div class="classify-list">
    <div class="img-wrap">
      <img :src="classifyDetial.title" alt="" srcset="" class="png-title" />
      <img :src="png6" alt="" srcset="" />
      <img :src="png1" alt="" srcset="" class="png-1" />
      <img :src="png2" alt="" srcset="" class="png-2" />
      <img :src="png3" alt="" srcset="" class="png-3" />
      <img :src="png4" alt="" srcset="" class="png-4" />
      <img :src="png5" alt="" srcset="" class="png-5" />
      <img :src="png7" alt="" srcset="" class="png-7" />
      <img :src="png10" alt="" srcset="" class="png-10" />
      <router-link :to="`/business-list/${tip}`">
        <img :src="png15" alt="" srcset="" class="png-15" />
      </router-link>
      <router-link :to="`/doc-list/${tip}`">
        <img :src="png9" alt="" srcset="" class="png-9" />
      </router-link>
      <router-link :to="`/cost-list/ww_${tip}`">
        <img :src="png16" alt="" srcset="" class="png-16" />
      </router-link>
      <img :src="png13" alt="" srcset="" class="png-13" />
      <img :src="png12" alt="" srcset="" class="png-12" />
      <div class="book-wrap">
        <img
          :src="classifyDetial.book"
          preview="0"
          alt=""
          srcset=""
          class="png-book"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'classlist',
  props: ['classifyDetial', 'tip'],
  data() {
    return {
      png1: require('@/assets/images/classifylist/1.png'),
      png2: require('@/assets/images/classifylist/2.png'),
      png3: require('@/assets/images/classifylist/3.png'),
      png4: require('@/assets/images/classifylist/4.png'),
      png5: require('@/assets/images/classifylist/5.png'),
      png6: require('@/assets/images/classifylist/6.jpg'),
      png7: require('@/assets/images/classifylist/7.png'),
      png9: require('@/assets/images/classifylist/9.png'),
      png10: require('@/assets/images/classifylist/10.png'),
      png11: require('@/assets/images/classifylist/11.jpg'),
      png12: require('@/assets/images/classifylist/12.png'),
      png13: require('@/assets/images/classifylist/13.png'),
      png14: require('@/assets/images/classifylist/14.png'),
      png15: require('@/assets/images/classifylist/15.png'),
      png16: require('@/assets/images/classifylist/16.png'),
    };
  },
  mounted() {
    console.log('+++++++++++++++', this.classifyDetial);
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/libs/const.scss';
.classify-list {
  min-height: 100vh;
  background: #8fb5fd;

  .img-wrap {
    position: relative;
  }

  .png-1,
  .png-2,
  .png-3,
  .png-4,
  .png-5,
  .png-7,
  .png-12,
  .png-9,
  .png-10,
  .png-15,
  .png-16,
  .png-13,
  .png-book,
  .book-wrap,
  .png-title {
    position: absolute;
    z-index: 6;
  }

  .png-1 {
    width: toRem(130px);
    top: toRem(70px);
    left: toRem(40px);
  }

  .png-2 {
    width: toRem(50px);
    bottom: toRem(30px);
    left: toRem(30px);
  }

  .png-3 {
    width: toRem(64px);
    top: toRem(210px);
    left: toRem(10px);
  }

  .png-4 {
    width: toRem(90px);
    top: toRem(16px);
    left: toRem(12px);
  }

  .png-5 {
    width: toRem(90px);
    top: toRem(580px);
    right: 0;
  }

  .png-7 {
    width: toRem(70px);
    top: toRem(70px);
    right: toRem(70px);
  }

  .png-13 {
    width: toRem(690px);
    height: toRem(550px);
    top: toRem(220px);
    left: toRem(30px);
    z-index: 1;
  }

  .png-9,
  .png-10,
  .png-15,
  .png-16 {
    width: toRem(260px);
    left: 0;
  }

  .png-9 {
    top: toRem(450px);
  }

  .png-10 {
    top: toRem(950px);
  }

  .png-15 {
    top: toRem(320px);
  }

  .png-16 {
    top: toRem(580px);
  }

  .png-12 {
    width: toRem(690px);
    height: toRem(400px);
    top: toRem(880px);
    left: toRem(30px);
    z-index: 1;
  }

  .book-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    top: toRem(150px * 2);
    right: toRem(36px * 2);
    width: toRem(188px * 2);
    height: toRem(420px);
    z-index: 9;

    .png-book.width {
      width: 100%;
    }

    .png-book.height {
      height: 100%;
    }
  }

  .png-title {
    width: toRem(370px);
    top: toRem(110px);
    left: toRem(178px);
  }
}
</style>
