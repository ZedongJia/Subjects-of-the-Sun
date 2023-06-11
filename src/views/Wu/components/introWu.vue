<template>
  <div class="home-layout">
    <div class="part1">
      <img src="../images/introWu/bg1_1.png" />
      <div class="pic-center" @click="showpart2()">
        <img
          class="animate__animated animate__zoomIn"
          src="../images/introWu/bg1_2.png"
        />
      </div>
      <div v-if="isShow" class="black animate__animated animate__fadeInLeft" >
        <!-- <img class="blackbg" src="../images/introWu/bg1_3.png" /> -->
        <div class="black-top">
          <ul>
            <li style="transition: color 0.5s;">
              <span class="jiantou_left"></span>
              解密三星堆-巫
              <span class="jiantou_right"></span>
            </li>
          </ul>
        </div>
        <div class="black-main">
          <p class="blackcharacter" style="transition: color 0.5s;">
            在三星堆出土的存留中，明显有参与某种活动的视觉造型主要有青铜大立人像和青铜跪坐人像。在上古时期这样的活动肯定与宗教有关，这些参与活动的人应该是巫师，故把这类造型归为“巫”。在一、二号器物坑的存留中，均出土有青铜跪坐人像，一种手握璋，一种手置于膝上末执物。立人像集中出土于二号器物坑，大、小两种立人像的手势和造型基本相同，都呈抱拳状；出土的站立在青铜神坛上的小立人像，手握弯曲的物件作出与大立人像相同的姿势。这类立人像应该就是三星堆神权文化的发言人，他们经常组织某种宗教活动，如祭山、祭祖、祭神之类，以实现他们的神权统治。
          </p>
        </div>
      </div>
      <transition name="fade" mode="out-in">
        <div
          v-if="isShow"
          class="right-bottom animate__animated animate__fadeInRight"
        >
          <router-link to="/wu/contentWu" class="throw-link">
            <img src="../images/introWu/throw.webp" alt="" />
          </router-link>
        </div>
      </transition>
      <div v-if="!isShow" class="character-bottom" @click="showpart2()">
        <ul>
          <li>
            <span class="jiantou_left"></span>
            解密三星堆-巫
            <span class="jiantou_right"></span>
          </li>
        </ul>
      </div>
    </div>
    <!-- <div v-if="isShow" class="part2">
      <div class="pic-full animate__animated animate__zoomIn">
        
      </div>
    </div> -->

   
  </div>
</template>

<script>
import "animate.css";
// import LeftBox from "@/components/leftbox/index.vue";
export default {
  // props:{
  //   blackCharacter:{
  //     type:String,
  //     default:
  //   }
  // },
  data() {
    return {
      isShow: false,
      text:'  在三星堆出土的存留中，明显有参与某种活动的视觉造型主要有青铜大立人像和青铜跪坐人像。在上古时期这样的活动肯定与宗教有关，这些参与活动的人应该是'
    };
  },
  components: {
    // LeftBox,
  },
  methods: {
    showpart2() {
      this.isShow = true;
    },
  //   printText() {
  //       const text = this.showText;
  //       let index = 0;
  //       const interval = setInterval(() => {
  //         if (index <= text.length) {
  //           this.showText = text.slice(0, index);
  //           index++;
  //         } else {
  //           clearInterval(interval);
  //         }
  //       }, 50);
  // },
  },
};
</script>

<style scoped>
.home-layout {
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
}
 .part1 {
  left: 0;
  width: 100%;
  height: 100%;
  position: relative;
}
.part2 {
  left: 0;
  width: 100%;
  height: 100%;
  position: relative;
}

.pic-full {
  opacity: 0.9;
  z-index: -1;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  background-image: url("../images/introWu/background3.png");
  background-size: cover;
  background-repeat: no-repeat;
}
.pic-center {
  position: absolute;
  width: 100%;
  height: 60%;
  top: 40%;
  overflow:hidden;
}

.pic-center img {
  max-width: 100%; /* 图片的最大宽度为容器的宽度 */

}

.character-bottom {
  position: absolute;
  left: 1%;
  width: 40%;
  height: 20%;
  bottom: 0;
}

ul {
  display: flex;
  flex-flow: row wrap;
  margin-top: 2rem;
  justify-content: space-evenly;
}
li {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  /* background-image: url("../images/introWu/jiantou_left.png"); */
  /* color: #f9da78; */
  color: #ffff;
  font-size: 3rem;
  font-family: kaishu;
}
li:hover {
  /* color: #ffff; */
  color: #f9da78;
}

.jiantou_left {
  display: inline-block;
  width: 5rem;
  height: 1rem;
  content: "";
  background-image: url("../images/introWu/jiantou_left.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  transition: 1s;
}
.jiantou_right {
  display: inline-block;
  width: 5rem;
  height: 1rem;
  content: "";
  background-image: url("../images/introWu/jiantou_right.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  transition: 1s;
}

li:hover .jiantou_left {
  background-image: url("../images/introWu/jiantou_left_hover.png");
}
li:hover .jiantou_right {
  background-image: url("../images/introWu/jiantou_right_hover.png");
}

.black {
  z-index: 5;
  background-image: url("../images/introWu/bg1_3.png");
  position: absolute;
  background-size: 100% 100%;
  left: -10%;
  bottom: -20%;
  width: 90%;
  height: 90%;
}
.black-top {
  position: absolute;
  left: 25%;
  top: 3%;
  height: 80%;
  width: 50%;
  font-size:1.625em;
}

.black-main {
  position: absolute;
  line-height: 3rem;
  text-indent: 2em;
  text-align: left;
  left: 17%;
  top: 18%;
  width: 64%;
  font-family: kaishu;
  font-size: 26px;
  color: aliceblue;
  /* color: rgb(225, 198, 129); */
}
.black-main:hover .blackcharacter {
  color: rgb(225, 198, 129);
  /* color: aliceblue; */
  /* font-size:2.1rem; */
}
.throw-link {
  /* z-index: 2; */
  position: absolute;
  left: 83%;
  top: 70%;
  animation: shine 4s linear infinite;
}
@keyframes shine {
  50% {
    opacity: 0.2;
  }
  100% {
    opacity: 1;
  }
}
.right-bottom {
  position: absolute;
  bottom: 10%;
  right: 13%;
  width: 30%;
  height: 10%;
}
/* .blackbg {
  position:absolute;
  left:0;
  bottom:0;
  width:70%;
  height: 70%;
} */
</style>