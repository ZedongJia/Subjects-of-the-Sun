<template lang="">
    <div class="ipt-bgimg"></div>
  
  <div class="box0">
  <div class="box1">
    <div class="accordian">
        <div class="box">
            <img src="../images/contentWu/1.jpg">
            <!-- <img src="../images/contentWu/1.jpg"> -->
            <span>Image</span>
        </div> 
        <div class="box">
            <img src="../images/contentWu/2.jpg" height='600'>
            <span>Image</span>
        </div> 
        <div class="box">
            <img src="../images/contentWu/3.png" height='600'>
            <span>Image</span>
        </div> 
        <div class="box">
            <img src="../images/contentWu/4.png">
            <span>Image</span>
        </div> 
    </div>
  </div> 
  </div>
  </template>
  <script>
  
  </script>
  <style scoped>
  .ipt-bgimg {
  opacity: 0.9;
  z-index: -1;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  background-image: url("../images/contentWu/background.png");
  background-size: cover;
  background-repeat: no-repeat;
  }
  
  /* * {
  padding: 0;
  margin: 0;
  } */
  
  /* body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  
  } */
  .box0{
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
  width: 90%;
  height: 700px;
  /* 上右下左 */
  padding: 40px 25px 20px 30px;
  display: flex;
  background-image: url("../images/contentWu/background3.png");
  background-size: cover;
  background-repeat: no-repeat;
  }
  .box {
  flex: 1;
  overflow: hidden;
  transition: 0.5s;
  margin: 0 5px;
  /* box-shadow: 10px 10px 20px rgba(0, 0, 0, .5); */
  /* border-radius: 20px; */
  border: 3px solid #706651;
  background-color: #fff;
  }
  .box > img {
  display: block;
  width: 100%;
  /* 防止图片被挤压 */
  object-fit: cover;
  transition: 0.5s;
  }
  .box>span{
            font: 200 45px '优设标题黑';
            text-align: center;
            height: 15%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
  .box:hover {
  /* flex-basis: 50%; */
  width:40%
  }
  .box:hover > img {
  width: 100%;
  
  }
  </style>
  
  