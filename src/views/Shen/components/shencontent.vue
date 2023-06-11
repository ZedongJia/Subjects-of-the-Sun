<template>
    <div class="intro">
      <div class="bgimg">

        <img class="long_pic " src="../images/img/long_pic.png"/>

        <div class="rmbn1 rmbn" @click="switch_c1"></div>
        <div class="rmbn2 rmbn" @click="switch_c2"></div>
        <div class="rmbn3 rmbn" @click="switch_c3"></div>

        <transition name="fade">
            <div class="card1 card" v-if="show_card_1">
                <div class="subcard">
                    <img
                        class="pic-center"
                        style="width: 65%"
                        src="../images/img/sun.png"
                    />             
                </div>
                <div class="subcard">
                    <p  style="text-indent: 2em; margin-top: 10%; padding: 0 5%" class="psg-y">
                        <span>三星堆遗址出土的巨型青铜太阳轮可以看作古蜀先民对太阳崇拜的直接表现，这一青铜器在刚出土时被称为“车形器”或“轮形器”，之后才在考古发掘报告中被正式改名为“太阳形器”。孙华先生认为：“将其称作太阳形器是恰当的。太阳器中间的圆泡表现的是太阳本身，外部的幅条表示太阳的光芒，周边的圆环则可能象征着太阳的光晕。”</span>
                        <br/>
                        <span>三星堆文化作为古蜀文明的文化遗存，神权信仰是其重要的文化根基，太阳崇拜、神鸟崇拜、神树崇拜、英雄崇拜、眼睛崇拜、山岳崇拜共同构成了古蜀文明的信仰体系。通过探究古蜀文明信仰体系的源流，发现三星堆文化看似信仰繁多，实则是以太阳崇拜为核心，衍生出一系列与之相关的信仰。神鸟崇拜来源于被神化为鸟的太阳；对神鸟所居之处的崇拜衍生出神树崇拜；射日神话构建了古蜀先民英雄崇拜的根基；以日月代眼的</span>
                        <span>神话传说成为古蜀先民纵目崇拜的源头；山岳崇拜源于“日月出入之山”的地理现状与神话传说。由此可知，太阳崇拜是三星堆神权信仰体系的核心与直接来源。</span>
                        <span class="jian-title-y back-button" @click="switch_c1">返回</span>
                    </p>
                </div>
            </div>
        </transition>

        <transition name="fade2">
            <div class="card2 card" v-if="show_card_2">
                <div class="subcard">
                    <img
                        class="pic-center"
                        style="width: 95%"
                        src="../images/img/mask2.jpg"
                    />             
                </div>
                <div class="subcard">
                    <p  style="text-indent: 2em; margin-top: 10%; padding: 0 5%" class="psg-y">
                        <span>在三星堆出土的存留中，其视觉造型最具感染力、最具</span>
                        <span>神秘色彩的当属3件长耳、凸目的大型青铜纵目面具</span>
                        <span>和9件青铜薄型面具。在许多研究中称其为兽面具,认</span>
                        <span>为可能是多种动物特征集合于一体的神灵形象，这应该不是</span>
                        <span>一种准确的分析和定位，造成这种认识的原因可能是因为在</span>
                        <span>它的造型元素里面有一个比较明显的中心动物元素。但仔细</span>
                        <span>研究与观察可以发现，其造型元素主要是应用“鸟”的形态</span>
                        <span>进行意向组合、结合了一定的人像造型规律，形成了具有主</span>
                        <span>观意向色彩的“神”面具造型，以求达到古蜀人的神灵崇拜，</span>
                        <span>对其神权统治找到了最根本的话语权，这与商代青铜器兽面</span>
                        <span>纹的基本母题有一定相似之处，但是其造型更加让人震撼，</span>
                        <span>具有强烈的形体感与空间感，它可能是蜀人始祖神“蚕丛”</span>
                        <span>的形象呈现。这三件视觉造型可以被视为三星堆文化神秘、</span>
                        <span>神权的象征，是神的代表。</span>

                        <span class="jian-title-y back-button" @click="switch_c2">返回</span>
                    </p>
                </div>
            </div>
        </transition>

        <transition name="fade">
            <div class="card3 card" v-if="show_card_3">
                <div class="subcard">
                    <img
                        class="pic-center"
                        style="width: 95%"
                        src="../images/img/mask1.jpg"
                    />             
                </div>
                <div class="subcard">
                    <p  style="text-indent: 2em; margin-top: 10%; padding: 0 5%" class="psg-y">
                        <span>在每一个具有神权特色的古代文明中，标志神权的无限</span>
                        <span>强大、无尚崇高的象征物都有所呈现，三星堆王国也不例外，</span>
                        <span>出现了陶器、青铜器、黄金器物和巨大的城墙等。其中也不</span>
                        <span>乏有在观念形态上的超自然崇拜物，如：刻有寓意纹饰的金</span>
                        <span>杖、三星堆文化连续使用的巨大的城墙、具有明显族群标志</span>
                        <span>与神话特色且制作工艺上精益求精的鸟头把勺，以及一、二</span>
                        <span>号祭祀坑所埋藏的具有宏大视觉象征的青铜器物，就是观念</span>
                        <span>形态上的超自然崇拜物。历经几百年的巨大城墙，既是神权</span>
                        <span>无限强大的象征，又是神权构造物的巨型标志；特征鲜明且</span>
                        <span>场面宏大的青铜器物群，尤其是其中神鸟造型的器物既是神</span>
                        <span>权交通天地的象征，又是古蜀先王自身神化的标志；来源于</span>
                        <span>上古时代鱼凫王族群徽记的鸟头把勺既是祭祀礼仪场合的</span>
                        <span>神器，又是王族的神圣象征；刻有寓意纹饰的金杖如同中原</span>
                        <span>夏、商、周三代国家政权象征物“九鼎”上的图案一样，都</span>
                        <span>属于神权象征与超自然崇拜的物化标志。</span>

                        <span class="jian-title-y back-button" @click="switch_c3">返回</span>
                    </p>
                </div>
            </div>
        </transition>
    </div>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        show_card_1:false,
        show_card_2:false,
        show_card_3:false,
      }
    },
    methods: {
        switch_c1:function(){
            this.show_card_1=!this.show_card_1;
        },
        switch_c2:function(){
            this.show_card_2=!this.show_card_2;
        },
        switch_c3:function(){
            this.show_card_3=!this.show_card_3;
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
    top:0;
    left:0;
    background-image: url('../images/img/bgimg.png');
    background-repeat:repeat-y;
  }

  .long_pic{
    z-index: 0;
    position: relative;
    width:100%;
    height: auto;
    margin-top: 0%;
  }

  .rmbn{
    z-index: 5;
    width:15rem;
    height:15rem;
    position:absolute;
    background-size: cover;
    background-repeat: no-repeat;
    animation: shine 2.5s linear infinite;
  }
 .rmbn1{
    cursor: pointer;
    top:5%;
    left:40%;
    background-image: url('../images/img/bn1_1.png');
    transition: 1s;
 }

.rmbn1:hover{
    transform: scale(1.5, 1.5);
}

.rmbn2{
    cursor: pointer;
    top:40%;
    left:76%;
    background-image: url('../images/img/bn2_1.png');
    transition: 1s;
 }

.rmbn2:hover{
    transform: scale(1.5, 1.5);
}

.rmbn3{
    cursor: pointer;
    top:83%;
    left:41%;
    background-image: url('../images/img/bn3_1.png');
    transition: 1s;
 }

.rmbn3:hover{
    transform: scale(1.5, 1.5);
}

.fade-enter-from{
    transform: translateX(-100%);
}
.fade-enter-to {
    transform: translateX(0)
}
.fade-leave-to {
    transform: translateX(-100%);
}

.fade-enter-active,
.fade-leave-active {
    transition: 1.5s;
}

.fade2-enter-from{
    transform: translateX(130%);
    opacity: 0;
}
.fade2-enter-to {
    transform: translateX(0)
}
.fade2-leave-to {
    transform: translateX(130%);
    opacity: 0;
}

.fade2-enter-active,
.fade2-leave-active {
    transition: 1.5s;
}

.card{
  z-index: 10;
  position: absolute;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  left: 5%;
  width: 90vw; 
  height: 90vh;
  background-image: url('../images/img/big_squere.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.card1{
    top: 10%;
}
.card2{
    top:35%;
}
.card3{
    top:74%;
}

.subcard{
    position: relative;
    flex: 0 0 45%;
    margin: auto 10px;
    height: 85%;
    background-image: url('../images/img/mid_squere.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
}
.back-button {
  position: absolute;
  cursor: pointer;
  right: 1%;
  bottom: 1%;
  width: 8rem;
  height: 3rem;
  line-height: 3rem;
  background-image: url('../images/img/button0.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  color: rgb(43, 30, 1);
  transition: 0.5s;
}

.back-button:hover {
  background-image: url('../images/img/button1.png');
  color: rgb(139, 86, 2);
}
  </style>
  