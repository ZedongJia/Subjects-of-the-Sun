<template>
  <div
    v-if="isShow"
    class="box"
    :class="{ left: left, right: right }"
    ref="box"
    :style="designStyle"
  >
    <span class="show">{{ text }}</span>
  </div>
</template>

<script>
import { nextTick } from 'vue'

export default {
  props: {
    left: Boolean,
    right: Boolean,
    isShow: Boolean,
    showText: {
      type: String,
      default: ''
    },
    finalPosition: {
      top: Number,
      left: Number
    },
    designStyle: String
  },
  data() {
    return {
      text: ''
    }
  },
  watch: {
    isShow() {
      if (this.isShow) {
        nextTick(this.showInScreen)
      }
    }
  },
  methods: {
    showInScreen() {
      this.$refs.box.style.top = this.finalPosition.top + '%'
      setTimeout(() => {
        this.$refs.box.style.left = this.finalPosition.left + '%'
        setTimeout(() => {
          this.printText()
        }, 500)
      }, 100)
    },
    printText() {
      let index = 0
      const interval = setInterval(() => {
        if (index <= this.showText.length) {
          this.text = this.showText.slice(0, index)
          index++
        } else {
          clearInterval(interval)
        }
      }, 25)
    }
  }
}
</script>

<style>
.box {
  position: absolute;
  padding: 5% 0;
  width: 60%;
  height: 60%;
  border-radius: 10px;
  transition: 0.5s;
  /* background-color: #f0f0f0; */
  /* border: 1px solid #ccc; */
}

.left {
  left: -100%;
  padding-right: 10%;
  background-image: url('./img/bg_left.png');
  background-size: 100% 100%;
}

.right {
  left: 200%;
  padding-left: 8%;
  background-image: url('./img/bg_right.png');
  background-size: 100% 100%;
}

.show {
  cursor: default;
  display: block;
  margin: 0 auto;
  width: 80%;
  font-size: 24px;
  font-family: kaishu;
  text-indent: 2em;
  color: aliceblue;
  transition: color 0.5s;
}
.show:hover {
  color: rgb(251, 222, 113);
  animation: flame 2s infinite;
}

.text {
  font-family: Arial, sans-serif;
  text-shadow: 0 0 20px #fefcc9, 10px -10px 30px #feec85,
    -20px -20px 40px #ffae34, 20px -40px 50px #ec760c, 0 -80px 70px #f38e1c; /*设置文字阴影*/
  animation: flame 2s infinite; /*设置动画*/
}
/* 
@keyframes flame {
  创建动画
  0% {
    text-shadow: 0 0 20px #fefcc9, 10px -10px 30px #feec85,
      -20px -20px 40px #ffae34, 20px -40px 50px #ec760c, 0 -80px 70px #f38e1c;
  }
  30% {
    text-shadow: 0 0 20px #fefcc9, 10px -10px 30px #feec85,
      -20px -20px 40px #ffae34, 20px -40px 50px #ec760c, 10px -90px 80px #f38e1c;
  }
  60% {
    text-shadow: 0 0 20px #fefcc9, 10px -10px 30px #feec85,
      -20px -20px 40px #ffae34, 20px -40px 50px #ec760c, 0px -80px 100px #f38e1c;
  }
  100% {
    text-shadow: 0 0 20px #fefcc9, 10px -10px 30px #feec85,
      -20px -20px 40px #ffae34, 20px -40px 50px #ec760c, 0 -80px 70px #f38e1c;
  }
} */
</style>
