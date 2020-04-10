<template>
    <div class="row">
        <img alt="logo" src="../assets/logo.png" />
        <div style="width: 800px; margin: 0 auto">
            <div class="row flex-evenly">
                <div class="col-8">
                    <router-link to="layout">Layout</router-link>
                </div>
                <div class="col-8">Theme</div>
                <div class="col-8">Loading</div>
            </div>
            <!-- <div class="row flex-evenly">
                <div class="col-8">Buttons</div>
                <div class="col-8">Animation</div>
            </div>-->
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
.row {
    margin: 60px 0;
    font-size: 24px;
}
</style>