<template>
    <div id="nav-bgimg">
        <div class="nav" ref="ct">
            <div class="homeNav">
                <!-- home -->
                <router-link
                    :to="{ path: '/home' }"
                    @mouseleave="letRotate($event)"
                    @mouseenter="letStop($event)"
                    @click="toHome"
                    ><img src="./img/0.png" alt="..."
                /></router-link>
            </div>
            <div class="pageOneNav">
                <!-- god -->
                <router-link
                    :to="{ path: '/shen' }"
                    @mouseleave="letRotate($event)"
                    @mouseenter="letStop($event)"
                    ><img src="./img/1.png" alt="..."
                /></router-link>
            </div>
            <div class="pageTwoNav">
                <!-- wizard -->
                <router-link
                    :to="{ path: '/wu' }"
                    @mouseleave="letRotate($event)"
                    @mouseenter="letStop($event)"
                    ><img src="./img/2.png" alt="..."
                /></router-link>
            </div>
            <div class="pageThreeNav">
                <!-- human -->
                <router-link
                    :to="{ path: '/ren' }"
                    @mouseleave="letRotate($event)"
                    @mouseenter="letStop($event)"
                    ><img src="./img/3.png" alt="..."
                /></router-link>
            </div>
            <div class="pageFourNav">
                <!-- implements -->
                <router-link
                    :to="{ path: '/implement' }"
                    @mouseleave="letRotate($event)"
                    @mouseenter="letStop($event)"
                    ><img src="./img/4.png" alt="..."
                /></router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            orignDeg: 0,
            textDeg: -36,
            rotateAnimation: "",
        };
    },
    methods: {
        rotate() {
            //改变度数
            this.orignDeg += 0.25;
            this.textDeg -= 0.25;
            if (this.orignDeg == 3600000) this.orignDeg = 0;
            if (this.textDeg == -3600000) this.textDeg = 0;
            //改变transfrom
            document.getElementById("nav-bgimg").style.transform =
                "rotateZ" + "(" + this.orignDeg + "deg" + ")";
            let target = document
                .getElementById("nav-bgimg")
                .getElementsByTagName("a");
            for (let i = 0; i < target.length; i++) {
                target[i].style.transform =
                    "rotateZ" + "(" + this.textDeg + "deg" + ")";
            }
        },
        letRotate(event) {
            let target = event.target;
            let img = target.getElementsByTagName("img")[0];
            if (img == null) {
                return;
            }
            img.style.width = "4rem";
            img.style.height = "4rem";
            let nav = this.$refs.ct;
            if (nav == null) {
                return;
            }
            let cta = nav.getElementsByTagName("a");
            for (let i = 0; i < cta.length; i++) {
                if (cta[i] == target) {
                    target
                        .getElementsByTagName("img")[0]
                        .setAttribute("src", this.toImg("img/" + i + ".png"));
                    break;
                }
            }
            this.rotateAnimation = setInterval(this.rotate, 20);
        },
        letStop(event) {
            let target = event.target;
            if (this == null)
            {
                return;
            }
            clearInterval(this.rotateAnimation);
            this.changeImgStyle(target);
        },
        changeImgStyle(target) {
            target.getElementsByTagName("img")[0].style.width = "5rem";
            target.getElementsByTagName("img")[0].style.height = "5rem";
            if (this == null)
            {
                return;
            }
            let cta = this.$refs.ct.getElementsByTagName("a");
            for (let i = 0; i < cta.length; i++) {
                if (cta[i] == target) {
                    target
                        .getElementsByTagName("img")[0]
                        .setAttribute(
                            "src",
                            this.toImg("img/" + i + "Picked.png")
                        );
                    break;
                }
            }
        },
        toImg(img) {
            return require("./" + img);
        },
        toHome() {
            this.$emit("update");
        },
    },
    created() {
        this.rotateAnimation = setInterval(this.rotate, 20);
    },
};
</script>
<style scoped>
#nav-bgimg {
    z-index: 200;
    position: fixed;
    opacity: 0;
    top: 0;
    left: 1%;
    width: 16rem;
    height: 16rem;
    background-image: url("./img/bgimg.png");
    background-repeat: no-repeat;
    background-size: cover;
    animation: fade-in 2s 1s linear forwards;
}

.nav {
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-44%, -52%) rotateZ(36deg);
    /* define r 5rem */
    /* width = 2 * r * sin72deg */
    width: 9.5rem;
    /* height = r + r * cos36deg */
    height: 9rem;
}

.nav > div {
    position: absolute;
    transform: translate(-50%, -50%);
    width: 4rem;
    height: 4rem;
    border-radius: 2rem;
    transition: all 0.5s;
}

.nav > div a {
    display: inline-block;
    width: 4rem;
    height: 4rem;
    transform: rotateZ(-36deg);
    border-radius: 2rem;
    transition: all 0.3s;
}

.nav > div a img {
    width: 100%;
    height: 100%;
    transition: all 0.5s;
}

.homeNav {
    /* left = r * sin72deg */
    left: 4.8rem;
}

.pageOneNav {
    /* top = r - r * cos72deg */
    top: 3.5rem;
}

.pageTwoNav {
    /* top = r + r * cos36deg */
    top: 9rem;
    /* left = r * sin72deg - r * sin36deg */
    left: 1.8rem;
}

.pageThreeNav {
    /* top = r + r * cos36deg */
    top: 9rem;
    /* left = r * sin72deg + r * sin36deg */
    left: 7.7rem;
}

.pageFourNav {
    /* top = r - r * cos72deg */
    top: 3.5rem;
    /* left = 2 * r * sin72deg */
    left: 9.5rem;
}
</style>
