<template>
    <div>
      <div class="intro">
        <div
          class="bgimg"
          :style="
            'background-image: url(' + require('../images/img/shen_girl_2.png') + ');'
          "
        >
          <img
            @click="showpart2()"
            class="throw-link"
            src="../images/img/throw.webp"
            alt=""
          />
          <div
            v-if="isShow"
            class="black animate__animated animate__fadeInLeft"
          >
            <div class="black-main">
              <p class="black-character mpt1">
                神权是古蜀国的文化核心，也是三星堆文化符号的重要来源。
              </p>
              <p class="black-character">
                {{ msg1 }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="aside-top">
        <img
            style="height: 50%"
            src="../images/img/gadget1.png"
        />
      </div>
      <div class="over_hi">
        <div class="mock_scroll mks1" ></div>

        <Transition name="fade3">
          <div v-if="show_s">
            <Content></Content>
          </div>
        </Transition>

        <div class="mock_scroll mks2"></div>
      </div>

      <img
            v-if="barraw"
            @click="switch_s"
            class="throw-link2"
            src="../images/img/blond_arrow.png"
            alt=""
          />
        
      <div class="aside-top2" style="margin-bottom: 15%;">
        <img
            style="height: 80%;"
            src="../images/img/gadget1.png"
        />
      </div>
      

    </div>
  </template>
  <script>
  import Content from './shencontent.vue'
  export default {
    components:{
      Content
    },
    data() {
      return {
        isShow: false,
        show_s:false,
        barraw:true,
        msg1:`虽然古蜀先民没有留下文字，但是通过对文献中神话传说的考究和三星堆遗址中出土\
文物的比对，不难探索出三星堆神权信仰体系的真实面貌。太阳被具象化为鸟\
的形象，在飞行往返间完成昼夜交替，神鸟崇拜应运而生。神鸟栖息于神树之\
上，于是神树拥有了太阳居所的象征意义和沟通天地的特殊功能，神树也因此\
被纳入古蜀先民的信仰体系中。祖先崇拜与射日神话的影响造就了古蜀先民\
的英雄崇拜。用眼睛代表日月的原始思维体现在三星堆的纵目传说中，使其成\
为太阳的意象与表征。以“山陵之祭”为媒介，古蜀人通过对日月出入之山的\
祭礼，表达了对太阳的崇拜。除此之外，三星堆太阳崇拜的影响还在金沙遗\
址中得到延续。可见在三星堆文化中，太阳崇拜作为其核心信仰，构建了一个\
复杂的信仰体系，不仅横向扩展之广，纵向影响亦是深远。`
      }
    },
    methods: {
      showpart2() {
        this.isShow = true
      },
      switch_s:function() {
            document.querySelector('html').scrollTop -= 50;
            this.show_s=!this.show_s;
            this.barraw=!this.barraw;
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
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
  }
  
  .black {
    position: absolute;
    top: 30%;
    left: 0;
    width: 70rem;
    height: auto;
    background-image: url('../images/img/squre2.png');
    background-size: cover;
    background-repeat: no-repeat;
  }
  
  .black-main {
    margin-top: 3%;
    margin-bottom: 3%;
    margin-left: 8%;
    width: 70%;
    line-height: 1.2em;
    text-align: left;
    font-family: kaishu;
    font-size: 26px;
    color: aliceblue;
    /* color: rgb(225, 198, 129); */
  }
  .mpt1{
    text-indent: 2em;
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

  .throw-link2 {
    z-index: 101;
    cursor: pointer;
    position:relative;
    width: 6rem;
    left: 45%;
    transform: translate(0, -50%);
    animation: shine 2.5s linear infinite;
  }
  @keyframes shine {
    50% {
      opacity: 0.2;
    }
    100% {
      opacity: 1;
    }
  }

  .over_hi {
    overflow: hidden;
  }

  .mock_scroll{
    z-index: 100;
    width:100%;
    height:15rem;
    position:relative;
  }

  .mks1{
    background-image: url('../images/img/paint_scroll_a.png');
    background-size: cover;
    background-repeat: no-repeat;
  }

  .mks2{
    background-image: url('../images/img/paint_scroll_b.png');
    background-size: cover;
    background-repeat: no-repeat;
  }
  .mks2:hover{
    animation: shine 1.5s linear infinite;
  }

  .aside-top {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 20vh;
  margin-bottom: 5%;
}

.aside-top2 {
  display: flex;
  justify-content: center;
  align-items:flex-end;
  width: 100%;
  height: 10vh;
}


.fade3-enter-from{
    transform: translateY(-100%);
    opacity: 0;
}
.fade3-enter-to {
    transform: translateY(0%)
}
.fade3-leave-to {
    transform: translateY(-100%);
    opacity: 0;
}

.fade3-enter-active,
.fade3-leave-active {
    transition: 4s;
}

  </style>
  