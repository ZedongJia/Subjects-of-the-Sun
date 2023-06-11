<template>
  <div class="intro">
    <transition name="fade">
      <div
        v-if="isShow"
        class="membrane"
      ></div>
    </transition>
    <div class="aside-top">
      <img
        style="height: 50%"
        src="../images/gadget1.png"
        alt="无法显示"
      />
    </div>
    >
    <div
      class="bgimg"
      :style="
        'margin: 0 auto; width: 80%; height: 100vh;' +
        'background-image: url(' +
        require('../images/bgimg4.png') +
        ');'
      "
    >
      <div
        ref="introTrigger"
        class="trigger"
        @click="showIntroCard"
      >
        <img
          src="../images/-1c.png"
          alt=""
        />
      </div>
      <div ref="cardGroup">
        <div
          class="intro-card"
          style="top: 10%; left: 60%"
        >
          <img
            data-index="0"
            @click="showIntro"
            src="../images/0c.png"
            alt="..."
          />
        </div>
        <div
          class="intro-card"
          style="top: 30%; left: 15%"
        >
          <img
            data-index="1"
            @click="showIntro"
            src="../images/1c.png"
            alt="..."
          />
        </div>
        <div
          class="intro-card"
          style="top: 50%; left: 30%"
        >
          <img
            data-index="2"
            @click="showIntro"
            src="../images/2c.png"
            alt="..."
          />
        </div>
        <div
          class="intro-card"
          style="top: 60%; left: 70%"
        >
          <img
            data-index="3"
            @click="showIntro"
            src="../images/3c.png"
            alt="..."
          />
        </div>
      </div>
      <div
        ref="introBox"
        class="intro-box"
      >
        <span>
          <img
            class="pic-center"
            style="width: 55%"
            :src="require('../' + introList[introIndex].image)"
            alt=""
          />
        </span>
        <span>
          <span
            style="text-indent: 2em; margin-top: 10%; padding: 0 5%"
            class="psg-y"
          >
            {{ introList[introIndex].content }}
            <span
              class="jian-title-y back-button"
              @click="backToIntroCard"
            >
              返回
            </span>
          </span>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShow: false,
      introList: [
        {
          image: 'images/0.jpg',
          content:
            `在三星堆视觉造型中，最具代表性的当属青铜造型。就表现形式和艺术风格而言，三星堆青铜造型已经摆脱了原始时期直接来自于自然崇拜的一种模糊不清的抽象提炼，已具备对造型完整、成熟的主观把控，游刃有余地将抽象与具象的造型手段进行结合，形成了造型上的抽象与具象相融合的艺术特征。这种成熟的造型表现方式已含有丰富的艺术语言，独特审美观念以及深邃的艺术魅力，是在三星堆文明的逐渐成熟过程中对族群的现实审视和神权文化的完备过程中形成的与众不同的艺术风格。这种风格，将厚实的写实技巧与娴熟的抽象表现完美结合，摆脱了简单的平面模仿，将抽象与具象的造型方式在空间中运用得淋漓尽致。三星堆青铜人像造型有一定的基本规律，如：人像的嘴角向两侧拉长，几乎占去了整个下颌的宽度，眼睛都是从内眼角到外眼角向上倾斜，成杏仁状。`
       },
        {
          image: 'images/1.jpg',
          content:
            `这件带有黄金面罩的头像有方颐，粗眉，立眼，蒜头鼻，阔口，长耳的特点。在所有二号器物坑的头像造型中，最引人注目的是4件戴有黄金面罩的头像造型，在平顶头像和圆顶头像上分别有2件出现。黄金面罩这种造型形式无论在殷商文明，还是在古蜀更为早期的远古文明中均未有发现，可能是一种来自外域文明影响的造型方式。戴有黄金面罩的头像造型在美索不达米亚文化、古埃及文化中就有发现，这些黄金面罩是戴在法老、国王造像的脸上。这种形式在三星堆青铜头像上的出现更加表明，三星堆青铜头像造型始终在不断寻求新的突破，以求达到三星堆先民理想造型的需要。综合来看，三星堆青铜头像造型所展现的文化内涵、宗教思想，显示出其形态的发展变化是以自己的地方土族观念为主导，在发展与实验的过程中吸收了周边地域的和外来的一些造型元素，从而形成了具有强烈主观色彩的造型风格。`
        },
        {
          image: 'images/2.png',
          content:
          `铜人头像为平顶，头发向后梳理，发辫垂于脑后，发辫上端用宽带套束，具有浓郁的地方民族发式风格。金面罩用金皮捶拓而成，大小、造型和铜头像面部特征相同，眼眉部镂空，制作颇为精致，给人以权威与神圣之感。三星堆青铜人头像上包贴金面罩，与古蜀人的宗教习俗有密切关系，且说明当时的古蜀人已视黄金为尊。作为常设于宗庙的祭祀神像，在其面部饰以黄金，其目的并非仅仅为了美观，应是在宗教祭祀活动中具有特定的功用和文化意义。估计金面罩的宗教功能是用为娱神以使神更加灵验，同时，给铜人头像特别加饰金面罩当也表明了其象征特别高贵、权威的身份。在与自然的共处与抗争中，上古先民们逐渐掌握了对人类和自然的主观认识。他们的认识从盲目的自然崇拜已朝着主观的祖先崇拜、神灵崇拜发展，在对理想形象的表达上呈现出积极主动的一面，形象思维能力获得了突飞猛进的发展。`
        },
        {
          image: 'images/3.png',
          content:
            `这个青铜人头像是盘辫帽头像。它是拥有明显写实风格的造型，具有明显的地域特征。铜人头为圆顶，戴有盘辫帽的头像造型，其造型特点与今天四川地区的彝族人的特征非常相似。《蜀王本纪》云：“蜀人椎髻，左衽。” 这个对蜀人的服饰特征的具体描述在青铜人像对装束的写实处理中得到证实，尤其是大立人像的服饰特点是最具有说服力的，其细节之精细，线刻工艺之精美，这在今天的美学表现中也是一流的，足以显示出古蜀人对这些有具体身份特征的人像所下的功夫。司马迁在《史记·西南夷列传》中说到，西南上古先民“椎髻、耕田、有邑居”。具有椎髻的青铜头像是青铜造型中尤其具有身份代表性的，这或许与古蜀社会的社会分工有一定关联。另外，我们从小立人像、戴冠人像、青铜头像等的造型来看，足以表明古蜀的能工巧匠在形态、空间、特征、细节等方面的天生造诣。`
        }
      ],
      introIndex: 0
    }
  },
  methods: {
    showIntroCard() {
      const group = this.$refs.cardGroup.querySelectorAll('div')
      for (let i = 0; i < group.length; i++) {
        setTimeout(() => {
          group[i].style.opacity = 1
        }, 500 * i)
      }
      this.$refs.introTrigger.style.opacity = 0
      setTimeout(() => {
        this.$refs.introTrigger.style.zIndex = '-100'
      }, 1000)
      this.$refs.introTrigger.removeEventListener('click', this.showIntroCard)
    },
    showIntro(e) {
      this.isShow = true
      const box = this.$refs.introBox
      const spans = box.querySelectorAll('span')
      box.style.width = '90vw'
      // span show
      setTimeout(() => {
        for (let i = 0; i < spans.length; i++) {
          spans[i].style.display = 'inline-block'
          spans[i].style.opacity = '1'
        }
      }, 500)
      // change introContent
      const index = e.target.dataset.index
      this.introIndex = index
      e.preventDefault()
    },
    backToIntroCard() {
      this.isShow = false
      const box = this.$refs.introBox
      const spans = box.querySelectorAll('span')
      // span hide
      for (let i = 0; i < spans.length; i++) {
        spans[i].style.display = 'none'
        spans[i].style.opacity = '0'
      }
      // to 10
      setTimeout(() => {
        for (let i = 0; i < spans.length; i++) {
          box.style.width = '0'
        }
      }, 500)
    }
  }
}
</script>
<style scoped>
.intro {
  position: relative;
  width: 100vw;
}

.membrane {
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: url('../images/bgimg1.png');
  background-size: cover;
  background-repeat: no-repeat;
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

.trigger {
  cursor: pointer;
  position: absolute;
  opacity: 1;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -100%);
  width: 20rem;
  height: 24rem;
  transition: 1s;
}

.trigger img {
  width: 100%;
  height: 100%;
}

.intro-card {
  cursor: pointer;
  position: absolute;
  opacity: 0;
  top: 0;
  left: 0;
  width: 8rem;
  height: 8rem;
  border-radius: 4rem;
  transition: 1s;
}

.intro-card img {
  width: 100%;
  height: 100%;
}

.intro-card img:hover {
  width: 100%;
  height: 100%;
  transform-origin: 50% 0;
  animation: swagger 1s linear infinite;
}

@keyframes swagger {
  25% {
    transform: rotateZ(-10deg);
  }

  50% {
    transform: rotateZ(0deg);
  }

  75% {
    transform: rotateZ(10deg);
  }

  100% {
    transform: rotateZ(0deg);
  }
}

.intro-box {
  z-index: 100;
  position: absolute;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 0;
  /* width: 90vw; */
  height: 90vh;
  background-image: url('../images/bgimg3.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  transition: 1s;
}

.intro-box > * {
  display: none;
  position: relative;
  opacity: 0;
  flex: 0 0 45%;
  margin: auto 10px;
  height: 85%;
  background-image: url('../images/bgimg2.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  transition: 1s;
}

.back-button {
  cursor: pointer;
  position: absolute;
  right: 1%;
  bottom: 1%;
  width: 8rem;
  height: 3rem;
  line-height: 3rem;
  background-image: url('../images/button0.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  transition: 0.5s;
  color: black;
}

.back-button:hover {
  background-image: url('../images/button1.png');
  color: rgb(139, 86, 2);
}
</style>
