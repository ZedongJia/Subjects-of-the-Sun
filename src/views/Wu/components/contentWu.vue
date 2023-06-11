<template>
  <div class="background-img"></div>
  <div class="box0">
    <div class="box1">
      <div class="animate__animated animate__fadeInLeftBig">
        <div class="accordian">
          <ul>
            <li>
              <div class="character">
                <a
                  href="https://zxn-1313885264.cos.ap-beijing.myqcloud.com/images_typora//20230510162013_hkXWef_1.png"
                  >青铜跪坐人像</a
                >
                <p>
                  正跪坐。半圆雕，背后空。头部戴魌形装饰，方颐，长刀眉，大眼，直鼻，大耳，耳垂上有穿孔，阔口，粗颈，身穿对襟长袖衣，腰间系带两周，两手置于腹前。
                </p>
              </div>
              <img
                style="height: 100%;"
                src="../images/contentWu/1.png"
              />
            </li>
            <li>
              <div class="character">
                <a
                  href="https://zxn-1313885264.cos.ap-beijing.myqcloud.com/images_typora//20230510162103_L9dynC_2.png"
                  >青铜纵目面具</a
                >
                <p>
                  在三星堆出土的众多青铜面具中，造型最宏伟壮观的要算这件有“千里眼”、“顺风耳”之誉的青铜纵目面具。其形象特征为：眉尖上挑，双眼斜长，眼球呈极度夸张，呈柱状向前纵凸伸出达16厘米；其额部正中有一方孔，可能原补铸有精美的额饰.
                </p>
              </div>
              <img 
              style="height: 100%;"
              src="../images/contentWu/2.png" />
            </li>
            <li>
              <div class="character">
                <a
                  href="https://zxn-1313885264.cos.ap-beijing.myqcloud.com/images_typora//20230510162132_x0XSjo_3.png"
                  >青铜人头像</a
                >
                <p>
                  头顶较圆，面部戴有面罩，头顶盖和颅腔分铸。头戴绳索状帽箍或是将发辫挽在头顶上，脸形瘦削，刀眉栗眼，蒜头鼻。其造型简洁明快，线条分明，面容朴实敦厚，体现出浓郁的地方土著风格。
                </p>
              </div>
              <img 
              style="height: 100%;"
              src="../images/contentWu/3.png" />
            </li>
            <li>
              <div class="character">
                <a
                  href="https://zxn-1313885264.cos.ap-beijing.myqcloud.com/images_typora//20230510162205_LQ90O1_4.png"
                  >顶尊跪坐人像</a
                >
                <p>
                  此器由山形座和跪坐顶尊人像两部分组成，山形座座腰上铸饰扉棱，座上有婉曲朴雅的镂空花纹。人像上身裸露，乳头突出，下身着裙，腰间系带。人像表现的应是古蜀国巫师在神山顶上跪坐顶尊以献祭神天的情景。
                </p>
              </div>
              <img 
              style="height: 100%;"
              src="../images/contentWu/4.png" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'animate.css'
export default {
  components: {},
  data() {
    return {
      introList: [
        {
          image: '../images/contentWu/1.png',
          content:
            '正跪坐。半圆雕，背后空。头部戴魌形装饰，方颐，长刀眉，大眼，直鼻，大耳，耳垂上有穿孔，阔口，粗颈，身穿对襟长袖衣，腰间系带两周，两手置于腹前。',
          title: '青铜跪坐人像'
        },
        {
          image: '../images/contentWu/2.png',
          content:
            '在三星堆出土的众多青铜面具中，造型最宏伟壮观的要算这件有“千里眼”、“顺风耳”之誉的青铜纵目面具。其形象特征为：眉尖上挑，双眼斜长，眼球呈极度夸张，呈柱状向前纵凸伸出达16厘米；其额部正中有一方孔，可能原补铸有精美的额饰.',
          title: '青铜纵目面具'
        },
        {
          image: '../images/contentWu/3.png',
          content:
            '头顶较圆，面部戴有面罩，头顶盖和颅腔分铸。头戴绳索状帽箍或是将发辫挽在头顶上，脸形瘦削，刀眉栗眼，蒜头鼻。其造型简洁明快，线条分明，面容朴实敦厚，体现出浓郁的地方土著风格。',
          title: '青铜人头像'
        },
        {
          image: '../images/contentWu/4.png',
          content:
            '此器由山形座和跪坐顶尊人像两部分组成，山形座座腰上铸饰扉棱，座上有婉曲朴雅的镂空花纹。人像上身裸露，乳头突出，下身着裙，腰间系带。人像表现的应是古蜀国巫师在神山顶上跪坐顶尊以献祭神天的情景。',
          title: '顶尊跪坐人像'
        }
      ],
      introIndex: 0
    }
  }
}
</script>

<style>
.test {
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
}
.background-img {
  opacity: 0.9;
  z-index: -1;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  background-image: url('../images/contentWu/background.png');
  background-size: cover;
  background-repeat: no-repeat;
}

.box0 {
  width: 100%;
  height: 100vh;
  position: relative;
}

.box1 {
  width: 100%;
  position: absolute; /* 让元素脱离文档流并相对于父元素定位 */
  bottom: 25px; /* 将元素放在页面底部 */
  left: 7%;
  transform: translateX(-1%); /* 将元素的中心点与页面中心对齐 */
}

.accordian {
  width: 88vw;
  height: 700px;
  /* 上右下左 */
  padding: 40px 25px 20px 30px;
  /* display: flex; */
  background-image: url('../images/contentWu/background3.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  overflow: hidden;
}

.accordian ul {
  width: 100%;
  /*This will give ample space to the last item to move
	instead of falling down/flickering during hovers.*/
  overflow: hidden;
}

.accordian li {
  position: relative;
  display: block;
  width: 21vw;
  float: left;

  border-left: 10px solid #cfae05;
  background-image: url('../images/contentWu/lunbo_background.png');
  background-size: 100% 100%;
  border: 10px;
  box-shadow: 0 0 25px 10px #f9da78;
  -webkit-box-shadow: 0 10px 25px 10px #544307;
  -moz-box-shadow: 0 0 25px 10px #f9da78;

  /*Transitions to give animation effect*/
  transition: all 0.5s;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  /*If you hover on the images now you should be able to 
	see the basic accordian*/
  overflow: hidden;
}

/*Reduce with of un-hovered elements*/
.accordian ul:hover li {
  width: 6vw;
}
/*Lets apply hover effects now*/
/*The LI hover style should override the UL hover style*/
.accordian ul li:hover {
  width: 66vw;
  overflow: hidden;
}

.character {
  /* display:none; */
  /* visibility:hidden; */
  opacity: 0;
  position: absolute;
  top: 0;
  right: 10%;
  background: rgba(0, 0, 0, 0);
  /* background-image: url("../images/contentWu/lunbo_background.png"); */
  height: 90%;
  width: 70%;
  text-indent: 2em;
}

.character a {
  position: absolute;
  top: 22%;
  left: 55%;
  transform: translate(-50%, -50%);
  color: #baa66d;
  font-size: 2.2em;
  text-decoration: none;
  text-align: center;
  font-family: jianhaoti;
}

.character p {
  /* display:none; */
  position: absolute;
  overflow: hidden;
  top: 65%;
  left: 55%;
  transform: translate(-50%, -50%);
  color: #f9da78;
  font-size: 1.6rem;
  text-decoration: none;
  text-align: left;
  font-family: kaishu;
  line-height: 2.5rem;
}

.accordian li:hover .character {
  /* display:block; */
  /* visibility:visible; */
  opacity: 1;
}
</style>
