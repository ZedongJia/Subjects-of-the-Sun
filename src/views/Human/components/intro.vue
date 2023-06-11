<template>
  <div>
    <div class="intro">
      <div class="aside-top">
        <div
          class="x-gadget"
          style="margin-right: 2rem; margin-bottom: 1.5rem"
        >
          X
        </div>
        <img
          style="height: 50%; margin-bottom: 10px; transition: 2s"
          src="../images/gadget0.png"
          alt="无法显示"
        />
        <div
          class="x-gadget"
          style="margin-left: 2rem; margin-bottom: 1.5rem"
        >
          X
        </div>
      </div>
      <div
        class="bgimg"
        :style="
          'background-image: url(' + require('../images/bgimg5.webp') + ');'
        "
      >
        <img
          @click="showpart2()"
          class="throw-link"
          src="../images/throw.webp"
          alt=""
        />
        <div
          v-if="isShow"
          class="black animate__animated animate__fadeInLeft"
        >
          <div class="black-main">
            <p class="black-character">
              在三星堆出土的存留中，出土最多的是青铜头像与青铜面具，其中，主要在一号器物坑发掘的，除少数有写实特征的头像具有较大变化外，其余的在造型上基本达到了高度统一。为什么古代蜀人需要这么多具有相似特征的青铜头像和面具呢？根据许多民族志的材料研究，在宗教活动时，人们戴面具舞蹈以娱神，让神灵附在面具上，达到人与神之间的交往，巫师代表鬼神说话。但从两个坑出土面具的尺寸大小来看，都不能用在宗教活动中作为真人舞蹈表演使用，估计是镶嵌、装置在相应的某一具体物件上或宗庙里其他物件上的。其功能是在宗教场景的氛围下，让这些头像、面具代表人群向祖神祭拜。这些头像、面具与立人像的造型也基本一样，这也是上古时期古蜀文化的一大特点，人神合一、人巫合一。
            </p>
          </div>
        </div>
      </div>
    </div>
    <Content></Content>
  </div>
</template>
<script>
import Content from './content.vue'
export default {
  components: {
    Content
  },
  data() {
    return {
      isShow: false
    }
  },
  methods: {
    showpart2() {
      this.isShow = true
    }
  }
}
</script>
<style scoped>
.intro {
  position: relative;
  width: 100vw;
}

.bgimg {
  position: relative;
  margin-bottom: 20vh;
  width: 100%;
  height: 60vh;
  background-size: cover;
  background-repeat: no-repeat;
}
.aside-top {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 20vh;
}

.black {
  position: absolute;
  top: 20%;
  left: 0;
  width: 80rem;
  height: 35rem;
  background-image: url('../images/bg-left.png');
  background-size: cover;
  background-repeat: no-repeat;
}

.black-main {
  margin-top: 8%;
  margin-left: 10%;
  width: 60%;
  line-height: 1.2em;
  text-indent: 2em;
  text-align: left;
  font-family: kaishu;
  font-size: 26px;
  color: aliceblue;
  /* color: rgb(225, 198, 129); */
}
.black-main:hover .black-character {
  color: rgb(225, 198, 129);
  /* color: aliceblue; */
  /* font-size:2.1rem; */
}
.throw-link {
  /* z-index: 2; */
  cursor: pointer;
  position: absolute;
  width: 20rem;
  left: 10%;
  top: 50%;
  transform: translate(0, -50%);
  animation: shine 4s linear infinite;
}
</style>
