<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    name: "App"
});
</script>

<style lang="stylus">
@import url('./lib/layout.css');

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #783a8a;
}
</style>
