<template>
  <div class="layout">
    <transition name="fade">
      <div
        v-if="show"
        class="title"
      >
        {{ title }}
      </div>
    </transition>
    <Circle v-if="showCircle" />
    <transition name="fade">
      <div
        v-if="show"
        class="membrane"
      ></div>
    </transition>
    <div
      ref="bg"
      class="background"
    >
      <div class="aside-top">
        <img
          style="height: 50%; margin-bottom: 10px; transition: 2s"
          :src="toImg(img)"
          alt="无法显示"
        />
      </div>
      <div
        class="bgimg"
        :style="'background-image: url(' + require('@/views' + bgImage) + ')'"
      ></div>
      <div class="aside-bottom">
        <img
          style="height: 30%"
          src="./images/gadget1.png"
          alt="无法显示"
        />
      </div>
    </div>
  </div>
</template>
<script>
import Circle from '@/components/circle/index.vue'
export default {
  props: {
    title: String,
    bgImage: String,
    nextPath: String
  },
  data() {
    return {
      show: false,
      showCircle: false,
      img: 'images/gadget0.png'
    }
  },
  components: {
    Circle
  },
  methods: {
    toImg(img) {
      return require('./' + img)
    },
    flash() {
      this.show = false
      this.showCircle = false
      this.img = 'images/gadget0.png'
      setTimeout(() => {
        this.show = true
        this.img = 'images/gadget2.png'
      }, 2000)
      setTimeout(() => {
        this.showCircle = true
      }, 3000)
      setTimeout(() => {
        this.$router.push({
          path: this.nextPath
        })
      }, 5000)
    }
  },
  mounted() {
    this.flash()
  }
}
</script>
<style scoped>
.membrane {
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('./images/bgimg1.png');
  background-size: cover;
  background-repeat: no-repeat;
}

.background {
  width: 100%;
  height: 100%;
}
.bgimg {
  width: 100%;
  height: 60%;
  background-size: cover;
  background-repeat: no-repeat;
}

.aside-top {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 20%;
}

.aside-bottom {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 20%;
}
</style>
