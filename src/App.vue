<template>
    <div>
        <mainNav v-if="isShow" :key="isShow" @update="changeNav"></mainNav>
        <router-view v-slot="{ Component, route }">
            <transition name="fade">
                <component @update="changeNav" :is="Component" :key="route.path"></component>
            </transition>
        </router-view>
        <div class="default-bgimg"></div>
        <div class="music" @click="handleMusic">
            <transition name="fade">
                <div v-if="!isPlay" id="disable"></div>
            </transition>
            <audio id="m" :src="require('../public/神秘湖.mp3')" autoplay loop>不支持</audio>
        </div>
    </div>
</template>
<script>
import mainNav from "./components/mainnav/index.vue";
export default {
    data() {
        return {
            isShow: false,
            isPlay: true,
            music: ''
        };
    },
    components: {
        mainNav,
    },
    methods: {
        changeNav () {
            this.isShow = !this.isShow;
        },
        handleMusic() {
            this.isPlay = !this.isPlay;
        },
        startOrStopPlay () {
            if (this.isPlay) {
                // play music
                this.music.play()
            } else {
                // end playing music
                this.music.pause()
            }
        }
    },
    mounted () {
        let loc = window.location.hash
        if (!loc.includes('home') && loc !== '#/' && loc !== '' && loc !== undefined) {
            this.isShow = true;
        }

        this.music = document.querySelector('#m')
    },
    watch: {
        isPlay() {
            this.startOrStopPlay()
        }
    }
};
</script>
<style scoped>
.default-bgimg {
    z-index: -100;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-image: url(".././public/bgimg.png");
    background-size: cover;
    background-repeat: no-repeat;
}
.music {
    cursor: pointer;
    opacity: 0.5;
    z-index: 200;
    position: fixed;
    top: 5%;
    left: 95%;
    width: 3rem;
    height: 3rem;
    background-image: url('../public/1.png');
    background-size: 100% 100%;
    transition: 0.2s;
}
.music:hover {
    opacity: 1;
}

#disable {
    z-index: 5;
    margin: 0 auto;
    width: 5px;
    height: 100%;
    transform: rotateZ(-30deg);
    background-color: rgb(251, 222, 113);
}
</style>
