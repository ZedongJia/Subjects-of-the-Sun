<template>
<!-- <introWu v-if = "showContent==='introWu'" @click = "showContent='contentWu'"/>
<contentWu v-if = "showContent==='contentWu'" /> -->
<!-- <introWu></introWu> -->
<router-view v-slot="{ Component, route }">
        <!-- <transition name="fade" mode="out-in"> -->
            <component :is="Component" :key="route.path"></component>
        <!-- </transition> -->
    </router-view>
<div>
    <p></p>
</div>

</template>


<script>
import introWu from './components/introWu.vue'
import contentWu from './components/contentWu.vue'
export default {
    data() {
        return {
        showContent: 'introWu',
        };
    },
  name: 'indexWu',
  components: {
    introWu,
    contentWu,
  }
};
</script>


<style scoped>


</style>
