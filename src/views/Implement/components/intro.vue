<template>
  <div ref="intro" class="intro">
    <div class="left-screen"></div>
    <div class="right-screen"></div>
    <div class="aside-top">
      <img
        style="height: 50%; margin-bottom: 10px; transition: 2s"
        src="../images/gadget2.png"
        alt="无法显示"
      />
    </div>
    <div class="content">
      <span v-for="item in intro" :key="item.head" style="display: inline-block; margin-bottom;: 50px">
        <span
          class="jian-title-y"
          style="padding: 0.5rem 0; display: block; text-align: center; font-size: 3rem;"
          >{{ item.head }}</span
        >
        <p class="psg-w" style="font-size: 24px; transition: color 0.5s;">
          {{ item.passage }}
        </p>
      </span>
      <ul>
        <li>
          <router-link
            class="jian-title-y"
            :to="{ name: 'content', query: { id: 0 } }"
            >神器</router-link
          >
          <span></span>
        </li>
        <li>
          <router-link
            class="jian-title-y"
            :to="{ name: 'content', query: { id: 1 } }"
            >礼器</router-link
          >
          <span></span>
        </li>
      </ul>
    </div>
    <div class="aside-bottom">
      <img style="height: 30%" src="../images/gadget1.png" alt="无法显示" />
    </div>
  </div>
</template>
<script>
import { intro } from "../scripts/psg";
export default {
  data() {
    return {
      pos: 0,
      posUpdate: "",
      intro: "",
    };
  },
  methods: {
    getScrollPos() {
      this.pos = document.getElementsByTagName("html")[0].scrollTop;
    },
    move() {
      let target = this.$refs.intro.getElementsByTagName("div");
      target[0].style.left = -this.pos / 10 + "%";
      target[1].style.left = 76 + this.pos / 10 + "%";
    },
  },
  mounted() {
    this.intro = intro;
    this.posUpdate = setInterval(this.getScrollPos, 20);
  },
  unmounted() {
    clearInterval(this.posUpdate);
  },
  watch: {
    pos() {
      this.move();
    },
  },
};
</script>
<style scoped>
.left-screen {
  z-index: -1;
  opacity: 0.5;
  position: fixed;
  top: 0;
  left: 0;
  width: 30vw;
  height: 100vh;
  background-image: url("../images/bgimg3r.jpg");
  background-size: contain;
  background-repeat: no-repeat;
  transition: 1s;
}

.right-screen {
  z-index: -1;
  opacity: 0.5;
  position: fixed;
  top: 0;
  left: 76%;
  width: 30vw;
  height: 100vh;
  background-image: url("../images/bgimg3l.jpg");
  background-size: contain;
  background-repeat: no-repeat;
  transition: 1s;
}

.intro {
  position: relative;
}

.content {
  margin: 0 auto;
  padding: 4rem;
  width: 55%;
}

.content h1 {
  width: 100%;
  height: 10%;
  text-align: center;
}

.content ul {
  display: flex;
  flex-flow: row wrap;
  margin-top: 2rem;
  justify-content: space-evenly;
}

.content ul li {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
}

.content ul a {
  display: block;
  width: 100%;
  height: 2rem;
  line-height: 2rem;
  text-align: center;
  color: white;
}

.content ul span {
  display: inline-block;
  width: 5rem;
  height: 1rem;
  content: "";
  background-image: url("../images/gadget3.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  transition: 1s;
}

.content ul a:hover ~ span {
  background-image: url("../images/gadget4.png");
  animation: roll 1s linear infinite;
}

.content p:hover {
  color: rgb(251, 222, 113);
}

.aside-top {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 8rem;
}

.aside-bottom {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 8rem;
}
</style>
