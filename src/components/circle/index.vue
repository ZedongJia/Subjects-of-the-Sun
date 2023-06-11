<template>
  <div>
    <div
      key="0"
      class="circle small center"
    ></div>
    <div
      key="1"
      class="circle medium center"
    ></div>
    <div
      key="2"
      class="circle large center offset"
    ></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      deg: 0,
      rotateAnimation: ''
    }
  },
  methods: {
    rotate() {
      //改变度数
      this.deg += 0.1
      if (this.deg == 3600000) this.deg = 0
      //改变transfrom
      let target = document.getElementsByClassName('circle')
      for (let i = 0; i < target.length; i++) {
        target[i].style.transform =
          'translate(-50%, -50%) ' + 'rotateZ' + '(' + this.deg + 'deg' + ')'
      }
    }
  },
  mounted() {
    this.rotateAnimation = setInterval(this.rotate, 40)
  },
  unmounted() {
    this.deg = 0
    clearInterval(this.rotateAnimation)
  }
}
</script>
<style scoped>
.circle {
  pointer-events: none;
  z-index: 50;
  opacity: 0;
  position: absolute;
  background-image: url('./img/0.png');
  background-size: cover;
  background-repeat: no-repeat;
  transform-origin: 50% 50%;
  transition: 0.5s;
}

.circle:nth-child(1) {
  animation: fade-in 0.5s 0s linear forwards;
}

.circle:nth-child(2) {
  animation: fade-in 0.5s 0.5s linear forwards;
}

.circle:nth-child(3) {
  animation: fade-in 0.5s 1s linear forwards;
}


.small {
  width: 26rem;
  height: 26rem;
}
.medium {
  width: 56rem;
  height: 56rem;
}
.large {
  width: 140rem;
  height: 140rem;
}

.center {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.offset {
  top: 155%;
}

@media screen and (min-height: 880px) {
  .offset {
    top: 130%;
  }
}
</style>
