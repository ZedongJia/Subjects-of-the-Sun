<template lang="">
    <div>
        <router-view v-slot="{ Component, route }">
            <transition name="fade">
                <component :is="Component" :key="route.path"></component>
            </transition>
        </router-view>
    </div>
</template>
<script>
export default {};
</script>
<style lang=""></style>
