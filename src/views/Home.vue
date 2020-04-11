<template>
    <div>
        <div class="row hidden-xs-only">
            <div class="col-24">
                <img alt="logo" style="width: 800px" src="../assets/logo.svg" />
            </div>
        </div>
        <div class="row hidden-sm-and-up">
            <div class="col-24">
                <img style="width: 60%" src="../assets/magic-hat.svg" alt="logo" />
            </div>
            <div class="col-24">
                <img style="width: 80%" src="../assets/csser.svg" alt="csser" />
            </div>
        </div>
        <div class="row">
            <p class="title">一个去框架、组合灵活、体积小巧的纯css工具库</p>
            <p
                class="title"
            >A pure CSS tool library with de-framework, flexible combination and small size</p>
        </div>
        <div class="row"></div>
        <div class="row list">
            <div class="row flex-center">
                <div class="col-xl-4 col-lg-5 col-md-6 col-sm-8 col-xs-24 item">
                    <router-link to="layout">
                        <div>布局 - Layout</div>
                    </router-link>
                </div>
                <div class="col-xl-4 col-lg-5 col-md-6 col-sm-8 col-xs-24 item">主题 - Theme</div>
                <div class="col-xl-4 col-lg-5 col-md-6 col-sm-8 col-xs-24 item">加载 - Loading</div>
            </div>
            <div class="row flex-center">
                <div class="col-xl-4 col-lg-5 col-md-6 col-sm-8 col-xs-24 item">按钮 - Buttons</div>
                <div class="col-xl-4 col-lg-5 col-md-6 col-sm-8 col-xs-24 item">阴影 - Shadow</div>
                <div class="col-xl-4 col-lg-5 col-md-6 col-sm-8 col-xs-24 item">动画 - Animation</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
a {
    text-decoration: none;
}

.title {
    font-size: 18px;
    line-height: 30px;
}

.list {
    margin: 60px 0;
    font-size: 18px;
    color: #999;

    .item {
        height: 80px;
        line-height: 80px;
        color: #783a8a;

        a {
            color: #783a8a;
        }

        &:hover {
            background-color: #fafafa;
        }
    }
}
</style>