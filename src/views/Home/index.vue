<template>
    <router-view v-slot="{ Component, route }">
        <transition name="fade">
            <component :is="Component" :key="route.path"></component>
        </transition>
    </router-view>
</template>
<script>
export default {};
</script>
<style scoped></style>
