<template>
  <div
    ref="model"
    id="nav-bgimg"
  >
    <div
      class="nav"
      ref="ct"
    >
      <div
        v-if="nav.first"
        class="homeNav"
      >
        <!-- home -->
        <router-link
          :to="{ path: '/home' }"
          @mouseleave="letYellow($event)"
          @mouseenter="letRed($event)"
          @click="showNav"
          ><img
            src="@/components/mainnav/img/0.png"
            alt="..."
        /></router-link>
      </div>
      <div
        v-if="nav.second"
        class="pageOneNav"
      >
        <!-- god -->
        <router-link
          :to="{ path: '/shen' }"
          @click="showNav"
          @mouseleave="letYellow($event)"
          @mouseenter="letRed($event)"
          ><img
            src="@/components/mainnav/img/1.png"
            alt="..."
        /></router-link>
      </div>
      <div
        v-if="nav.third"
        class="pageTwoNav"
      >
        <!-- wizard -->
        <router-link
          :to="{ path: '/wu' }"
          @click="showNav"
          @mouseleave="letYellow($event)"
          @mouseenter="letRed($event)"
          ><img
            src="@/components/mainnav/img/2.png"
            alt="..."
        /></router-link>
      </div>
      <div
        v-if="nav.forth"
        class="pageThreeNav"
      >
        <!-- human -->
        <router-link
          :to="{ path: '/ren' }"
          @click="showNav"
          @mouseleave="letYellow($event)"
          @mouseenter="letRed($event)"
          ><img
            src="@/components/mainnav/img/3.png"
            alt="..."
        /></router-link>
      </div>
      <div
        v-if="nav.fifth"
        class="pageFourNav"
      >
        <!-- implements -->
        <router-link
          :to="{ path: '/implement' }"
          @click="showNav"
          @mouseleave="letYellow($event)"
          @mouseenter="letRed($event)"
          ><img
            src="@/components/mainnav/img/4.png"
            alt="..."
        /></router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['isShow'],
  data() {
    return {
      nav: {
        first: false,
        second: false,
        third: false,
        forth: false,
        fifth: false
      }
    }
  },
  methods: {
    rollSun() {
      this.$refs.model.style.transform = 'translate(-50%, -50%) rotate(360deg)'
      this.$refs.model.style.left = '50vw'
      setTimeout(() => {
        this.showNavText()
      }, 5000)
    },
    showNavText() {
      setTimeout(() => {
        this.nav.first = true
      }, 500)
      setTimeout(() => {
        this.nav.second = true
      }, 1000)
      setTimeout(() => {
        this.nav.third = true
      }, 1500)
      setTimeout(() => {
        this.nav.forth = true
      }, 2000)
      setTimeout(() => {
        this.nav.fifth = true
      }, 2500)
    },
    showNav() {
      this.$emit('update')
    },
    letYellow(event) {
      let target = event.target
      let img = target.getElementsByTagName('img')[0]
      if (img == null) {
        return
      }
      img.style.width = '4rem'
      img.style.height = '4rem'
      let nav = this.$refs.ct
      if (nav == null) {
        return
      }
      let cta = nav.getElementsByTagName('a')
      for (let i = 0; i < cta.length; i++) {
        if (cta[i] == target) {
          target
            .getElementsByTagName('img')[0]
            .setAttribute('src', this.toImg('img/' + i + '.png'))
          break
        }
      }
      this.rotateAnimation = setInterval(this.rotate, 20)
    },
    letRed(event) {
      let target = event.target
      this.changeImgStyle(target)
    },
    changeImgStyle(target) {
      target.getElementsByTagName('img')[0].style.width = '5rem'
      target.getElementsByTagName('img')[0].style.height = '5rem'
      let nav = this.$refs.ct
      if (nav == null) {
        return
      }
      let cta = nav.getElementsByTagName('a')
      for (let i = 0; i < cta.length; i++) {
        if (cta[i] == target) {
          target
            .getElementsByTagName('img')[0]
            .setAttribute('src', this.toImg('img/' + i + 'Picked.png'))
          break
        }
      }
    },
    toImg(img) {
      return require('@/components/mainnav/' + img)
    }
  },
  watch: {
    isShow() {
      if (this.isShow) {
        this.rollSun()
      }
    }
  }
}
</script>
<style scoped>
#nav-bgimg {
  z-index: 200;
  position: absolute;
  top: 50%;
  left: -10vw;
  transform: translate(-50%, -50%);
  width: 16rem;
  height: 16rem;
  background-image: url('@/components/mainnav/img/bgimg.png');
  background-repeat: no-repeat;
  background-size: cover;
  transition: 5s ease-in-out;
}

.nav {
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-44%, -52%) rotateZ(36deg);
  /* define r 5rem */
  /* width = 2 * r * sin72deg */
  width: 9.5rem;
  /* height = r + r * cos36deg */
  height: 9rem;
}

.nav > div {
  position: absolute;
  transform: translate(-50%, -50%);
  width: 4rem;
  height: 4rem;
  border-radius: 2rem;
  transition: all 0.5s;
}

.nav > div a {
  display: inline-block;
  width: 4rem;
  height: 4rem;
  transform: rotateZ(-36deg);
  border-radius: 2rem;
  transition: all 0.3s;
}

.nav > div a img {
  width: 100%;
  height: 100%;
  transition: all 0.5s;
}

.homeNav {
  /* left = r * sin72deg */
  left: 4.8rem;
}

.pageOneNav {
  /* top = r - r * cos72deg */
  top: 3.5rem;
}

.pageTwoNav {
  /* top = r + r * cos36deg */
  top: 9rem;
  /* left = r * sin72deg - r * sin36deg */
  left: 1.8rem;
}

.pageThreeNav {
  /* top = r + r * cos36deg */
  top: 9rem;
  /* left = r * sin72deg + r * sin36deg */
  left: 7.7rem;
}

.pageFourNav {
  /* top = r - r * cos72deg */
  top: 3.5rem;
  /* left = 2 * r * sin72deg */
  left: 9.5rem;
}
</style>
