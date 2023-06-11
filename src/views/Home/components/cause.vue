<template>
  <div class="home-layout">
    <div
      ref="partOne"
      class="part-one"
      @click="showTitle()"
    >
      <transition name="right">
        <div
          v-if="!isShow"
          class="tip-bird"
        ></div>
      </transition>
      <div class="catch-title">
        <div
          class="x-gadget"
          style="margin-top: 5%"
        >
          ▲
        </div>
        <p class="psg-y" style="text-indent: 2em;">
          那么，是什么让这样神秘而浪漫的文明蓦然消失，就此湮灭?作为古“长江文明”的重要部分,它凭借独特的地域风格,先进的制造工艺、奇特的文化内涵及其罕见于史载的神秘性和古老性,完全有资格进入“世界文化遗产名录”。三星堆文明消失之谜，无论对古“长江文明”的研究还是对当今社会,均有不可估量的价值。但是目前仅从单一的历史考古学领域着眼,难以迅速全面深入并取得突破。三星堆的消失之谜尚未有定论，哪个猜想会是真相呢？
        </p>
        <div class="x-gadget">▼</div>
      </div>
      <div class="eight-screen"></div>
      <div class="aside-bottom">
        <img
          style="height: 60%; transition: 1s"
          src="../images/cover/图片1_0.png"
          alt="无法显示"
        />
      </div>
    </div>
    <transition
      name="fade"
      mode="out-in"
    >
      <div
        v-if="isShow"
        class="part-two"
      >
        <div class="long-block">
          <div class="x-gadget">X</div>
          <div class="time-line">
            <div class="line"></div>
            <!-- 1 -->
            <img
              style="transform: translate(-19%, 0); width: 8rem"
              src="../images/cause/cause0.png"
              alt=""
            />
            <div
              data-index="0"
              class="card"
              style="top: 20%; left: -250%"
              @mouseenter="showCard"
            >
              <span
                :style="
                  'background-image: url(' +
                  require('../images/cause/0.webp') +
                  ');'
                "
              >
              </span>
              <span>
                <span class="psg-y">
                  <p v-if="introState[0]">
                    中国疆域内，接近或达到文明阶段的都城级古遗址，最常见的衰落因素就是外敌入侵，王国倾覆。比如二里头文化就是在残酷的短兵相接中灭亡。三星堆的消亡会是因为兵灾和外族入侵吗？政权改变，一个执掌先进文明的部族或者政权沦为俘虏或者奴隶，因此他们将曾经的文明全部毁掉并掩埋。
                  </p>
                  <p v-else>
                    但是考古上却没有大规模外来军事征服的痕迹。三星堆遗址的考古工作已经进行了近百年，人们却没有发掘出一样那个时期的兵器，有的只是玉斧、玉戈，被人们称为“礼器”。此外，虽然在遗址中发现的器具大多被事先破坏或烧焦，但对器物进行精确测定后发现，它们的年代相差数百年。
                  </p>
                  <span
                    class="switch-button"
                    @click="switchPic"
                  >
                    >
                  </span>
                  <span
                    class="jian-title-y back-button"
                    @click="recoverCard"
                  >
                    返回
                  </span>
                </span>
              </span>
            </div>
            <div
              v-if="isCardTitleShow"
              data-index="0"
              class="card-title psg-y"
              style="top: 20%; left: 350%"
            >
              是外来军事征服让三星堆崩溃吗？
            </div>
            <!-- 2 -->
            <img
              style="transform: translate(20%, 0); width: 8rem"
              src="../images/cause/cause1.png"
              alt=""
            />
            <div
              data-index="1"
              class="card"
              style="top: 40%; left: 350%"
              @mouseenter="showCard"
            >
              <span
                :style="
                  'background-image: url(' +
                  require('../images/cause/1.webp') +
                  ');'
                "
              >
              </span>
              <span>
                <span class="psg-y">
                  <p v-if="introState[1]">
                    辉煌灿烂的良渚文明就是被大洪水所淹没。三星堆消失前后时期，在当时气象条件下，极端天气容易出现，突发性洪水出现的几率很大，会是因为这个阶段的气候变化引起了洪水泛滥，从而导致三星堆文明消失吗？
                  </p>
                  <p v-else>
                    一些考古学者并不认同是洪水灾害。三星堆遗址的上下游并未发现马牧河改道的迹象，只能证明河流左右摇摆较大，向北迁移冲毁了西城墙至月亮湾之间的台地。此外，文献记载鳖灵治水也是相当成功的，即使水灾对都城有一定影响，也不至于立即迁都。
                  </p>
                  <span
                    class="switch-button"
                    @click="switchPic"
                  >
                    >
                  </span>
                  <span
                    class="jian-title-y back-button"
                    @click="recoverCard"
                  >
                    返回
                  </span>
                </span>
              </span>
            </div>
            <div
              v-if="isCardTitleShow"
              data-index="0"
              class="card-title psg-y"
              style="top: 40%; left: -250%"
            >
              是自然灾害让三星堆文明消亡吗？
            </div>
            <!-- 3 -->
            <img
              style="transform: translate(-19%, 0); width: 8rem"
              src="../images/cause/cause2.png"
              alt=""
            />
            <div
              data-index="2"
              class="card"
              style="top: 60%; left: -250%"
              @mouseenter="showCard"
            >
              <span
                :style="
                  'background-image: url(' +
                  require('../images/cause/2.webp') +
                  ');'
                "
              >
              </span>
              <span>
                <span class="psg-y">
                  <p v-if="introState[2]">
                    古老的石峁文化就是因气候变干而举国迁移。全国范围内，在约4kaBP和2.8kaBP都出现了气候变冷事件。对于三星堆文明，会不会是因为出现气候干冷期，环境恶化，导致它消亡？
                  </p>
                  <p v-else>
                    三星堆地区所处的这种相对封闭的局部环境对其影响会有延缓作用，使得其气温变化程度没有如我国东部地区般剧烈，同时，来自龙门山的山脉的多条水系提供了相对较充足的水源，而盆地封闭的地形使得水汽不易散失，因此，在4kaBP的气候变化事件中，虽然中国的其他大部分地区都出现了气候变干冷的现象，但是三星堆地区还能保持比较暖湿的气候条件。
                  </p>
                  <span
                    class="switch-button"
                    @click="switchPic"
                  >
                    >
                  </span>
                  <span
                    class="jian-title-y back-button"
                    @click="recoverCard"
                  >
                    返回
                  </span>
                </span>
              </span>
            </div>
            <div
              v-if="isCardTitleShow"
              data-index="0"
              class="card-title psg-y"
              style="top: 60%; left: 350%"
            >
              是气候变化让三星堆文明走向尽头吗？
            </div>
            <!-- 4 -->
            <img
              style="transform: translate(20%, 0); width: 8rem"
              src="../images/cause/cause3.png"
              alt=""
            />
            <div
              data-index="3"
              class="card"
              style="top: 80%; left: 350%"
              @mouseenter="showCard"
            >
              <span
                :style="
                  'background-image: url(' +
                  require('../images/cause/3.webp') +
                  ');'
                "
              >
              </span>
              <span>
                <span class="psg-y">
                  <p v-if="introState[3]">
                    四川省文物考古研究院三星堆遗址工作站站长，雷雨，倾向于认为是其自身的原因。因为它是神权统治的国度，神巫集团非常强势同时也有世俗的一些王公贵族参政，不排除相互之间的关系没有理顺，引发了统治集团的内部斗争的可能。但是有证据吗？
                  </p>
                  <p v-else>
                    从现有遗迹中，似乎找到了三星堆可能是消失于内部斗争的线索。在三星堆遗址出土青铜人像一般有两种不同的发髻，然而在成都金沙却只剩下一种。有理由推测，三星堆经历了两个贵族集团的内部斗争，都城就从广汉迁到金沙，开始了十二桥文化占统治地位的“杜宇氏蜀王”时期
                  </p>
                  <span
                    class="switch-button"
                    @click="switchPic"
                  >
                    >
                  </span>
                  <span
                    class="jian-title-y back-button"
                    @click="recoverCard"
                  >
                    返回
                  </span>
                </span>
              </span>
            </div>
            <div
              v-if="isCardTitleShow"
              data-index="0"
              class="card-title psg-y"
              style="top: 80%; left: -250%"
            >
              有没有可能是三星堆内部斗争，内耗而亡？
            </div>
            <!-- end -->
          </div>
          <div class="x-gadget">X</div>
        </div>
        <div class="full-block">
          <transition name="fade">
            <div
              v-if="showFinal"
              class="final-title psg-y"
            >
              <span style="margin-top: 20%; font-size: 25px">
                沉睡三千年,一醒惊天下<br />
                走近神秘而浪漫的三星堆，让我们一同探秘古蜀文明……
              </span>
            </div>
          </transition>
          <SunWheel
            @update="showNav"
            :isShow="go"
          />
          <div
            v-if="showFinal"
            class="bird-left"
          ></div>
          <div
            v-if="showFinal"
            class="bird-right"
          ></div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import SunWheel from './sunwheel.vue'
export default {
  components: {
    SunWheel
  },
  data() {
    return {
      // 测试请将此设置为true
      isShow: false,
      posUpdate: '',
      pos: 0,
      go: false,
      showFinal: false,
      isCardTitleShow: true,
      introState: [true, true, true, true],
      firstShowCard: [false, false, false, false]
    }
  },
  methods: {
    showTitle() {
      let partOne = this.$refs.partOne
      let catchTitle = partOne.getElementsByClassName('catch-title')[0]
      catchTitle.style.left = 0
      catchTitle.style.opacity = 1
      partOne
        .getElementsByClassName('aside-bottom')[0]
        .getElementsByTagName('img')[0].src = this.toImg(
        'images/cover/图片1.png'
      )
      this.isShow = true
    },
    toImg(img) {
      return require('../' + img)
    },
    showNav() {
      this.$emit('update')
    },
    getScrollPos() {
      // 获取滚动条高度
      this.pos = document.getElementsByTagName('html')[0].scrollTop
      // 获取视高
      const win_height = document.querySelector('body').clientHeight

      // 卡片自动展示
      // 基准起点, 每次加50vh
      const base = (100 / 100) * win_height
      const cards = document.querySelectorAll('.card')
      // dom树未渲染，退出
      if (cards.length === 0 && !this.isShow) {
        return
      }
      for (let i = 0; i < 4; i++) {
        if (
          this.pos > base + i * ((90 / 100) * win_height) &&
          !this.firstShowCard[i]
        ) {
          this.showCard(cards[i])
          this.firstShowCard[i] = true
        }
      }

      // 判断是否到达最低端
      if (this.pos >= win_height * 4 && this.isShow && !this.go) {
        this.go = true
        setTimeout(() => {
          this.showFinal = true
        }, 7500)
      }
    },
    showCard(e) {
      // 隐藏card的title
      this.isCardTitleShow = false
      // 改变卡片
      const target = e.target === undefined ? e : e.target
      let index = target.dataset['index']
      target.style.left = '50%'
      target.style.width = '80rem'
      target.style.height = '32rem'
      target.style.padding = '2rem 1rem'
      // 显示卡片内容
      const spans = target.querySelectorAll('span')
      // 改变图片占比，并切换图片
      spans[0].style.width = '68%'
      // 字体出现
      spans[1].style.display = 'inline-block'
      setTimeout(() => {
        spans[1].style.width = '30%'
      }, 200)
      // 显示按钮
      setTimeout(() => {
        spans[1].getElementsByClassName('back-button')[0].style.opacity = 1
        spans[1].getElementsByClassName('switch-button')[0].style.opacity = 1
      }, 1000)
    },
    recoverCard(e) {
      // 隐藏card的title
      this.isCardTitleShow = true
      // 改变按钮
      e.target.style.opacity = 0
      // 显示card下第一个span
      e.target.parentNode.parentNode.style.display = 'none'
      // 改变卡片
      const target = e.target.parentNode.parentNode.parentNode
      let index = target.dataset['index']
      target.style.width = '30rem'
      target.style.height = '17rem'
      target.style.padding = '1rem 0.7rem'
      if (index % 2 != 0) {
        target.style.left = '350%'
      } else {
        target.style.left = '-250%'
      }
      // 显示卡片内容
      const spans = target.querySelectorAll('span')
      // 改变图片占比，并切换图片
      spans[0].style.width = '100%'
      spans[0].style.backgroundImage =
        'url(' + require('../images/cause/' + String(index) + '.webp') + ')'
      // 字体消失
      spans[1].style.width = '0'
      e.preventDefault()
      // 隐藏按钮
      spans[1].getElementsByClassName('back-button')[0].style.opacity = 0
    },
    switchPic(e) {
      // pass
      const target = e.target.parentNode.parentNode.parentNode
      const spans = target.querySelectorAll('span')
      let index = target.dataset['index']
      if (!this.introState[index]) {
        spans[0].style.backgroundImage =
          'url(' + require('../images/cause/' + String(index) + '.webp') + ')'
      } else {
        spans[0].style.backgroundImage =
          'url(' +
          require('../images/cause/' +
            String(index) +
            String(index) +
            '.webp') +
          ')'
      }
      this.introState[index] = !this.introState[index]
    }
  },
  mounted() {
    this.pos = 0
    this.go = false
    this.posUpdate = setInterval(this.getScrollPos, 20)
  },
  unmounted() {
    clearInterval(this.posUpdate)
  }
}
</script>
<style scoped>
.home-layout {
  width: 100vw;
  height: 100vh;
}

/* part-one */
.part-one {
  width: 100%;
  height: 100%;
  position: relative;
}

.tip-bird {
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  background-image: url('../images/2.png');
  background-size: 100% 100%;
  width: 14rem;
  height: 14rem;
}

.eight-screen {
  width: 100%;
  height: 80%;
  background-image: url('../images/cause/toThis.webp');
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

.catch-title {
  z-index: 50;
  position: absolute;
  top: 0;
  left: -100%;
  width: 70%;
  height: 80%;
  background-image: url('../images/intro/半透明黑色遮罩.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  opacity: 0;
  transition: 1.5s ease-in-out;
}

.catch-title p {
  margin: 0 auto;
  width: 85%;
  font-size: 30px;
}

.aside-bottom {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20%;
}

.part-two {
  width: 100%;
  height: 100%;
  position: relative;
}

.time-line {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 0 auto;
  width: 8rem;
  height: 100%;
}

.line {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 0.5rem;
  height: 100%;
  border-radius: 5px;
  background: rgb(237, 237, 131);
}

.long-block {
  width: 100%;
  height: 400%;
  position: relative;
}

.full-block {
  margin: 5rem 0;
  width: 100%;
  height: 100%;
  position: relative;
}
/* card */

.card {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  padding: 1rem 0.7rem;
  width: 30rem;
  height: 17rem;
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);
  background-image: url('../images/cause/box0.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  transition: 1s;
  overflow: hidden;
}

.card-title {
  width: 30rem;
  height: 10rem;
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
  font-size: 40px;
  font-weight: normal;
  transform: translate(-50%, -50%);
}
.card > span:first-child {
  position: relative;
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  transition: 1s;
}
.card > span:last-child {
  position: relative;
  display: none;
  width: 0;
  height: 100%;
  padding: 3rem 1rem;
  transition: 1s;
  background-image: url('../images/cause/box1.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

.switch-button {
  z-index: 100;
  cursor: pointer;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: -10%;
  transform: translate(-50%, -50%);
  width: 8rem;
  height: 3rem;
  line-height: 3rem;
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  transition: 0.5s;
  color: rgb(188, 72, 10);
  animation: l-r-jump 2s linear infinite;
}

@keyframes l-r-jump {
  25% {
    transform: translate(-45%, -50%);
  }
  50% {
    transform: translate(-50%, -50%);
  }
  75% {
    transform: translate(-55%, -50%);
  }
  100% {
    transform: translate(-50%, -50%);
  }
}

.back-button {
  z-index: 100;
  cursor: pointer;
  opacity: 0;
  position: absolute;
  right: 1%;
  bottom: 1%;
  width: 8rem;
  height: 3rem;
  line-height: 3rem;
  text-align: center;
  background-image: url('../images/cause/button0.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  transition: 0.5s;
  color: black;
}

.back-button:hover {
  background-image: url('../images/cause/button1.png');
  color: rgb(139, 86, 2);
}

.final-title {
  width: 60%;
  margin: 0 auto;
  line-height: 2em;
  text-align: center;
  font-size: 40px;
  font-weight: normal;
}

.bird-left {
  position: absolute;
  opacity: 0;
  top: 30%;
  left: -30vw;
  transform: translate(-50%, -50%);
  width: 70rem;
  height: 40rem;
  background-image: url('../images/bird/birdLeft.png');
  background-size: 100% 100%;
  animation: left 2s ease-in-out forwards;
}

@keyframes left {
  80% {
    opacity: 0.2;
  }
  100% {
    opacity: 1;
    left: 0;
  }
}

.bird-right {
  position: absolute;
  opacity: 0;
  top: 30%;
  left: 130vw;
  transform: translate(-50%, -50%);
  width: 70rem;
  height: 40rem;
  background-image: url('../images/bird/birdRight.png');
  background-size: 100% 100%;
  animation: right 2s ease-in-out forwards;
}

@keyframes right {
  80% {
    opacity: 0.2;
  }
  100% {
    opacity: 1;
    left: 100%;
  }
}
</style>
