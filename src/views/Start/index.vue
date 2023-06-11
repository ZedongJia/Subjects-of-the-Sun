<template>
  <div>
    <img
      id="northwest"
      src="./images/左上.png"
      alt=""
    />
    <img
      id="northeast"
      src="./images/右上.png"
      alt=""
    />
    <img
      id="southwest"
      src="./images/左下.png"
      alt=""
    />
    <img
      id="southeast"
      src="./images/右下.png"
      alt=""
    />
    <canvas ref="mycanvas"> </canvas>
    <div
      id="myCursor"
      @click="toHome"
    ></div>
  </div>
</template>
<script>
import './scripts/bg'
export default {
  methods: {
    toHome() {
      // play music
      document.querySelector('#m').play()
      this.$router.push({
        path: '/home'
      })
    },
    cursorMove(event) {
      let offsetY = 50
      let offsetX = 50
      let cursorX = event.pageX - offsetX
      let cursorY = event.pageY - offsetY
      document.getElementById('myCursor').style.left = cursorX + 'px'
      document.getElementById('myCursor').style.top = cursorY + 'px'
      this.followByView(cursorX, cursorY)
    },
    followByView(cursorX, cursorY) {
      let canvas = this.$refs.mycanvas
      canvas.style.transform =
        'translate(' +
        (cursorX - 700) / 100 +
        '%, ' +
        (cursorY - 700) / 100 +
        '%' +
        ')'
    }
  },
  mounted() {
    window.addEventListener('mousemove', this.cursorMove)
  },
  unmounted() {
    window.removeEventListener('mousemove', this.cursorMove)
  }
}
</script>
<style scoped>
#myCursor {
  cursor: pointer;
  z-index: 100;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 5rem;
  height: 5rem;
  background-image: url('./images/cursor.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  animation: roll-Z 4s linear infinite;
}

#northwest {
  position: absolute;
  left: 0;
  top: 0;
  height: 50vh;
}
#northeast {
  position: absolute;
  right: 0;
  top: 0;
  height: 50vh;
}
#southwest {
  position: absolute;
  left: 0;
  bottom: 0;
  height: 50vh;
}
#southeast {
  position: absolute;
  right: 0;
  bottom: 0;
  height: 50vh;
}

</style>
