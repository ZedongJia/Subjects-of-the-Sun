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
        <div class="x-gadget">X</div>
        <div class="main-title">
          <img
            src="../images/cover/t.png"
            alt=""
          />
        </div>
        <div class="sub-title">
          <img
            src="../images/cover/图片6.png"
            alt=""
          />
          <img
            src="../images/cover/图片7.png"
            alt=""
          />
        </div>
        <div class="x-gadget">X</div>
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
        <!-- 1 -->
        <div
          class="concat-block"
          :style="
            'background-image: url(' + require('../images/intro/p1.webp') + ')'
          "
        ></div>

        <div
          style="z-index: 30; position: absolute; width: 100vw; height: 55vh"
        >
          <Box
            :isShow="isshow_box[0]"
            :finalPosition="{ top: 50, left: 0 }"
            :showText="data[0]"
            left
          ></Box>
        </div>

        <!-- 2 -->
        <div
          class="concat-block"
          :style="
            'background-image: url(' + require('../images/intro/3.webp') + ')'
          "
        ></div>

        <div
          style="z-index: 30; position: absolute; width: 100vw; height: 60vh"
        >
          <Box
            :isShow="isshow_box[1]"
            :finalPosition="{ top: 50, left: 40 }"
            :showText="data[1]"
            right
          ></Box>
        </div>

        <!-- 3 -->
        <div
          class="concat-block"
          :style="
            'background-image: url(' + require('../images/intro/4.webp') + ')'
          "
        ></div>

        <div
          style="z-index: 30; position: absolute; width: 100vw; height: 60vh"
        >
          <Box
            :isShow="isshow_box[2]"
            :finalPosition="{ top: 50, left: 0 }"
            :showText="data[2]"
            left
          ></Box>
        </div>

        <!-- 4 -->
        <div
          class="concat-block"
          :style="
            'background-image: url(' + require('../images/intro/5.webp') + ')'
          "
        ></div>

        <div
          style="z-index: 30; position: absolute; width: 100vw; height: 70vh"
        >
          <Box
            :isShow="isshow_box[3]"
            :finalPosition="{ top: 50, left: 40 }"
            :showText="data[3]"
            right
          ></Box>
        </div>

        <!-- 5 -->
        <div
          class="concat-block"
          :style="
            'background-image: url(' + require('../images/intro/6.webp') + ')'
          "
        ></div>

        <div
          style="z-index: 30; position: absolute; width: 100vw; height: 75vh"
        >
          <Box
            :isShow="isshow_box[4]"
            :finalPosition="{ top: 50, left: 0 }"
            :showText="data[4]"
            left
          ></Box>
        </div>

        <!-- 6 -->
        <div
          class="concat-block"
          :style="
            'background-image: url(' + require('../images/intro/7.webp') + ')'
          "
        ></div>

        <div
          style="z-index: 30; position: absolute; width: 100vw; height: 80vh"
        >
          <Box
            :isShow="isshow_box[5]"
            :finalPosition="{ top: 50, left: 40 }"
            :showText="data[5]"
            right
          ></Box>
        </div>

        <!-- 7 -->
        <div
          class="concat-block"
          :style="
            'background-image: url(' + require('../images/intro/8.webp') + ')'
          "
        ></div>

        <div
          style="z-index: 30; position: absolute; width: 100vw; height: 70vh"
        >
          <Box
            :isShow="isshow_box[6]"
            :finalPosition="{ top: 50, left: 0 }"
            :showText="data[6]"
            left
          ></Box>
        </div>

        <!-- 8 -->
        <div
          class="concat-block"
          :style="
            'background-image: url(' + require('../images/intro/9.webp') + ')'
          "
        ></div>

        <div
          style="z-index: 30; position: absolute; width: 100vw; height: 60vh"
        >
          <Box
            :isShow="isshow_box[7]"
            :finalPosition="{ top: 50, left: 40 }"
            :showText="data[7]"
            right
          ></Box>
        </div>

        <!--end-->

        <div
          class="concat-block"
          :style="
            'background-image: url(' + require('../images/intro/10.webp') + ')'
          "
        ></div>

        <div class="full-block">
          <img
            class="pic-center"
            style="width: 100%"
            src="../images/cause/to.webp"
            alt=""
          />
          <router-link
            to="/home/cause"
            class="throw-link"
          >
            <img
              src="../images/cause/throw.webp"
              alt=""
            />
          </router-link>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 测试请将此设置为true
      isShow: false,

      pos: 0,
      posUpdate: '',
      isshow_box: [false, false, false, false, false, false, false, false],

      data: [
        '四川盆地，水旱从入，不知饥馑，乃世人谓之“天府”的富饶之地。距今4800年到3100年间，这里曾有一个神秘而辉煌的史前文明。',
        '四川广汉市，月亮湾。相隔一河的对岸，因有三座人一般高、宽10米左右的大土堆而叫三星堆，两个特殊地形在当地人们口中有了一个浪漫的称呼，叫“三星伴月”，俗称“三星堆”。然而一个农民一如往常的翻耕，竟惊醒了一个沉睡千年的文明。',
        '沉睡三千年，一醒惊天下。发现之初，三星堆便被学者猜想是不逊于安阳殷墟，堪比特洛伊、尼尼微古城的发现。而后续1986年至2021年的一系列自成体系的发现，完美地证实了这个猜测。',
        '这个璀璨神秘的文明充满奇妙、浪漫和创新，并且高度发达，尤其以成熟高超的青铜冶炼造型技术为人所知。仅从艺术的想象力和创造性、大型青铜器的铸造、黄金的锻打利用等方面来讲，三星堆文明在相当程度上超越了当时的中原。古蜀先民所具有的如此完美、高深的造型能力是怎样具备的呢？这样的问题可能在今后的研究中解密，也可能永远无法回答。',
        '三星堆的青铜人像造型的造型方式与视觉特征在中国上古文明中未曾发现，在世界上古文明中也未曾出现过。超乎寻常的立体、空间表现手段，抽象与具象的有机结合，线与面的塑造方式在3000多年前三星堆青铜人像造型中已经反映出来。三星堆青铜人像造型以其独特的艺术造型风格构成了中国雕塑史甚至世界雕塑史上一个完整的造型美学系统，这为全球史前文明研究者提供了关于上古文明造型美学的新思考。',
        '商朝晚期是三星堆遗址以及三星堆文明的繁荣时期，也就是 “沉睡3000年”这个时间标尺的起始点。不过，三星堆文化尤其是三星堆遗址又不只包含商朝的短短几百年时间，它延续的时间非常漫长。李白在《蜀道难》中写下“蚕丛及鱼凫，开国何茫然”，饱含着对“你从哪里来”的追问。学者认为，距今4600年前后新石器时代晚期的宝墩文化是以三星堆文化为代表的早期古蜀文明的来源。',
        '三星堆古城是一个城墙范围约4平方公里的大型都会，同时代的郑州商城也不过这么大。遗址里埋藏了距今4800-2800年间的文化堆积，而且这2000年的文化演进是连续不断的。可以说，古蜀文明就是在此孕育、诞生、成长、达到顶峰，最后消失长眠。',
        '中国疆域内，接近或达到文明阶段的都城级古遗址，如良渚、石家河、陶寺、二里头、偃师、郑州商城、安阳殷墟，大多是短短几百年，而且只存在于文明的某个时段，没有一处像三星堆遗址这样，埋藏了一种文明从孕育到消失的完整过程。'
      ]
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
    getScrollPos() {
      this.pos = document.getElementsByTagName('html')[0].scrollTop
    },
    move() {
      const cHeight = document.querySelector('body').clientHeight
      const base = 1.5 * cHeight

      for (let i = 0; i < 8; i++) {
        if (!this.isshow_box[i] && this.pos > base + i * cHeight) {
          this.isshow_box[i] = true
        }
      }
    }
  },
  mounted() {
    this.posUpdate = setInterval(this.getScrollPos, 20)
  },
  unmounted() {
    clearInterval(this.posUpdate)
  },
  watch: {
    pos() {
      this.move()
    }
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
  background-image: url('../images/cover/古蜀王城.webp');
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

.catch-title .x-gadget {
  transform: scaleX(1.5);
  margin: 3rem 0;
  height: 2rem;
  line-height: 2rem;
  text-align: center;
  font-size: 24px;
  background-image: linear-gradient(
    to bottom,
    rgb(226, 202, 147),
    rgb(216, 160, 30),
    black
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.catch-title .main-title {
  margin: 0 auto;
  margin-bottom: 2rem;
  width: 65%;
}

.catch-title .main-title img {
  width: 100%;
}

.catch-title .sub-title {
  margin: 0 auto;
  width: 80%;
  display: flex;
  justify-content: center;
}

.catch-title .sub-title img {
  width: 18rem;
  height: 4rem;
}

.aside-bottom {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20%;
}

/* part-two */
.part-two {
  width: 100%;
  height: 100%;
  position: relative;
}

.full-block {
  margin: 5rem 0;
  width: 100%;
  height: 100%;
  position: relative;
}

.concat-block {
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-attachment: fixed;
}

.long-block {
  margin: 5rem 0;
  width: 100%;
  height: 300%;
  position: relative;
}

.throw-link {
  z-index: 2;
  position: absolute;
  left: 80%;
  top: 80%;
  animation: shine 4s linear infinite;
}
</style>
