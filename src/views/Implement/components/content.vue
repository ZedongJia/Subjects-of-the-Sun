<template>
  <div>
    <ul class="ipt-brief-nav">
      <li>
        <router-link
          class="jian-title-y ipt-a-normal"
          :to="{ name: 'content', query: { id: 0 } }"
        >
          神器
        </router-link>
      </li>
      <li>
        <router-link
          class="jian-title-y ipt-a-normal"
          :to="{ name: 'content', query: { id: 1 } }"
        >
          礼器
        </router-link>
      </li>
    </ul>

    <div
      ref="card"
      class="ipt-card"
    >
      <li
        class="ipt-li-normal"
        @mouseleave="resort()"
        @mouseenter="show($event)"
        @click="showDetails($event)"
        v-for="(t, index) in data[id].title"
        :key="index"
      >
        <span class="jian-title-y">{{ t }}</span>
        <img
          :src="toImg(data[id].img[index])"
          alt="无法显示图片"
        />
      </li>
    </div>
    <transition
      name="grow"
      mode="out-in"
    >
      <div
        :key="current"
        class="ipt-content psg-y"
      >
        <div class="ipt-content-border"></div>
        <img
          :src="toImg(data[id].img[current])"
          alt="无法显示图片"
        />
        <div class="ipt-ct-title">
          {{ data[id].title[current] }}
        </div>
        <div class="ipt-ct-passage">
          {{ data[id].passage[current] }}
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import Data from '../scripts/psg'
export default {
  props: {
    id: 0
  },
  data() {
    return {
      data: [],
      current: 0,
      top: 0
    }
  },
  methods: {
    // 高亮跳转导航栏
    highlight() {
      let leads = document
        .getElementsByClassName('ipt-brief-nav')[0]
        .getElementsByTagName('a')
      for (let lead of leads) {
        lead.classList.remove('ipt-a-normal')
        lead.classList.remove('ipt-a-active')
      }
      if (this.id == 0) {
        leads[0].classList.add('ipt-a-active')
        leads[1].classList.add('ipt-a-normal')
      } else {
        leads[1].classList.add('ipt-a-active')
        leads[0].classList.add('ipt-a-normal')
      }
    },
    // 显示卡片
    show(event) {
      let card = this.$refs.card
      if (card == null) {
        return
      }
      let li = card.getElementsByTagName('li')
      for (let i = 0; i < li.length; i++) {
        if (li[i] == event.target) {
          this.resortFrom(i)
          break
        }
      }
    },
    // 显示细节
    showDetails(event) {
      let card = this.$refs.card
      if (card == null) {
        return
      }
      let li = card.getElementsByTagName('li')
      for (let i = 0; i < li.length; i++) {
        if (li[i] == event.target) {
          this.current = i
          break
        }
      }
      document.getElementsByTagName('html')[0].scrollTop = document.getElementsByTagName('body')[0].clientHeight / 4
    },
    // 重排序
    resort() {
      let card = this.$refs.card
      if (card == null) {
        return
      }
      let li = card.getElementsByTagName('li')
      for (let i = 0; i < li.length; i++) {
        li[i].style.transform = 'translate(' + i * -50 + '%)'
      }
    },
    // 从index开始重排序
    resortFrom(index) {
      let card = this.$refs.card
      if (card == null) {
        return
      }
      let li = card.getElementsByTagName('li')
      for (let i = 0; i < li.length; i++) {
        if (i > index) {
          li[i].style.transform = 'translate(' + (i - 1) * -50 + '%)'
        }
      }
    },
    // 获取数据
    getData() {
      this.data = Data
    },
    // 转换为图片
    toImg(img) {
      return require('../' + img)
    }
  },
  mounted() {
    this.top = document.getElementsByTagName('html')[0].scrollTop = 0
    setInterval(() => {
        this.top = document.getElementsByTagName('html')[0].scrollTop
    }, 20)
    this.resort()
    // 高亮导航栏
    this.highlight()
  },
  created() {
    this.getData()
  },
  updated() {
    this.resort()
    // 高亮导航栏
    this.highlight()
  },
  watch: {
    top() {
        if (this.top > 10) {
            document.querySelector('.ipt-brief-nav').style.backgroundColor = 'black'
        } else {
            document.querySelector('.ipt-brief-nav').style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
        }
    }
  }
}
</script>
<style scoped>
.ipt-brief-nav {
  z-index: 1;
  position: sticky;
  top: 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.ipt-brief-nav li {
  margin: 1rem 5rem;
  width: 8rem;
  height: 3rem;
}

.ipt-brief-nav a {
  display: block;
  width: 8rem;
  height: 3rem;
  line-height: 3rem;
  text-align: center;
  transition: 0.5s;
}

.ipt-a-normal {
  color: black;
  background-image: url('../images/button0.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

.ipt-a-active {
  color: rgb(139, 86, 2);
  background-image: url('../images/button1.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

.ipt-brief-nav a:hover {
  text-shadow: none;
  background-image: url('../images/button1.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

.ipt-card {
  position: relative;
  margin-top: 5rem;
  margin-left: 5vw;    
  display: flex;
  flex-flow: row wrap;
  justify-content: right;
  align-items: center;
  width: 100%;
}

.ipt-li-normal {
  position: relative;
  cursor: pointer;
  transition: all 0.3s;
  width: 20%;
  height: 40vh;
  border-radius: 1rem;
  box-shadow: 0 0 10px 1px white;
  background-color: black;
}

.ipt-card li:hover {
  box-shadow: 0 0 50px 1px rgb(242, 207, 81);
}

.ipt-card span {
  pointer-events: none;
  width: 5vw;
  height: 40vh;
  line-height: 5vw;
  text-align: center;
  font-weight: 400;
  writing-mode: vertical-lr;
}

.ipt-card img {
  pointer-events: none;
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
}

.ipt-content {
  position: relative;
  margin: 10rem auto;
  padding: 8rem 4rem;
  width: 60%;
  height: 60rem;
  border-radius: 1rem;
  background-image: url('../images/bgimg2.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

.ipt-content-border {
  z-index: -1;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 105%;
  height: 67rem;
  background-image: url('../images/bgimg3.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

.ipt-ct-title {
  margin-top: 3rem;
  margin-bottom: 10px;
  width: 100%;
  height: 2rem;
  text-align: center;
  font-size: 30px;
}

.ipt-content img {
  float: left;
  margin: 0 2rem;
  width: 20rem;
  height: 20rem;
}

.ipt-ct-passage {
  padding-top: 1rem;
  text-indent: 2em;
}

.grow-enter-active,
.v-leave-active {
  transition: all 0.5s ease-in;
}

.grow-enter-from,
.grow-leave-to {
  transform: translate(0, -20%) scale(0.5);
  opacity: 0;
}
</style>
