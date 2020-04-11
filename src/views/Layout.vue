<template>
    <div class="container">
        <div class="row">
            <h1>Layout</h1>
            <pre>
                <script type="text/html" style="display:block; overflow: auto">
import 'csser/layout.min.css'
<link rel='stylesheet' href='https://unpkg.com/csser/layout.min.css'>
                </script>
            </pre>
        </div>
        <div class="row">
            <h2>Row and Column</h2>
        </div>
        <div class="row">
            <p>Through the basic 1/24 sub-columns, any combination can be expanded to form a more complex mixed layout.</p>
            <pre>
                    <script type="text/html" style="display:block">
<div class="row">
    <div class="col-12">.col-12</div>
    <div class="col-12">.col-12</div>
</div>
                    </script>
            </pre>
        </div>
        <div class="row">
            <div class="col-24 color1">.col-24</div>
        </div>
        <div class="row">
            <div class="col-12 color1">.col-12</div>
            <div class="col-12 color2">.col-12</div>
        </div>
        <div class="row">
            <div class="col-8 color2">.col-8</div>
            <div class="col-8 color1">.col-8</div>
            <div class="col-8 color2">.col-8</div>
        </div>
        <div class="row">
            <div class="col-6 color1">.col-6</div>
            <div class="col-6 color2">.col-6</div>
            <div class="col-6 color1">.col-6</div>
            <div class="col-6 color2">.col-6</div>
        </div>
        <div class="row">
            <h2>Offset</h2>
        </div>
        <div class="row">
            <p>Support offset specified number of columns.</p>
            <pre>
                <script type="text/html" style="display: block; overflow: auto">
<div class="row">
    <div class="col-6 offset-6">.col-6 .offset-6</div>
    <div class="col-6 offset-6">.col-6 .offset-6</div>
</div>
                </script>
            </pre>
        </div>
        <div class="row">
            <div class="col-12 offset-12 color1">.col-12 .offset-12</div>
        </div>
        <div class="row">
            <div class="col-8 offset-8 color1">.col-8 .offset-8</div>
        </div>
        <div class="row">
            <div class="col-6 offset-6 color1">.col-6 .offset-6</div>
            <div class="col-6 offset-6 color1">.col-6 .offset-6</div>
        </div>

        <div class="row">
            <h2>Flex</h2>
        </div>
        <div class="row">
            <p>Use flex layout to align the columns flexibly.</p>
            <pre>
                <script type="text/html" style="display: block; overflow: auto">
<div class="row flex-start">
    <div class="col-8">.col-8 .flex-start</div>
    <div class="col-8">.col-8 .flex-start</div>
</div>
                </script>
            </pre>
        </div>
        <div class="row flex-start">
            <div class="col-8 color2">.col-8 .flex-start</div>
            <div class="col-8 color1">.col-8 .flex-start</div>
        </div>
        <div class="row flex-center">
            <div class="col-8 color2">.col-8 .flex-center</div>
            <div class="col-8 color1">.col-8 .flex-center</div>
        </div>
        <div class="row flex-end">
            <div class="col-8 color2">.col-8 .flex-end</div>
            <div class="col-8 color1">.col-8 .flex-end</div>
        </div>
        <div class="row flex-between">
            <div class="col-6 color2">.col-6 .flex-between</div>
            <div class="col-6 color1">.col-6 .flex-between</div>
            <div class="col-6 color2">.col-6 .flex-between</div>
        </div>
        <div class="row flex-around">
            <div class="col-6 color2">.col-6 .flex-around</div>
            <div class="col-6 color1">.col-6 .flex-around</div>
            <div class="col-6 color2">.col-6 .flex-around</div>
        </div>
        <div class="row flex-evenly">
            <div class="col-6 color2">.col-6 .flex-evenly</div>
            <div class="col-6 color1">.col-6 .flex-evenly</div>
            <div class="col-6 color2">.col-6 .flex-evenly</div>
        </div>
        <div class="row">
            <h2>Responsive</h2>
        </div>
        <div class="row">
            <p>Five response sizes are preset: xs, sm, md, lg and xl.</p>
            <pre>
                <script type="text/html" style="display: block; overflow: auto">
<div class="row">
    <div class="col-lg-6 col-md-8 col-sm-12 col-xs-24">col-lg-6 col-md-8 col-sm-12 col-xs-24</div>
</div>
                </script>
            </pre>
        </div>
        <div class="row">
            <div
                class="col-lg-6 col-md-8 col-sm-12 col-xs-24 color1"
            >col-lg-6 col-md-8 col-sm-12 col-xs-24</div>
        </div>
        <div class="row">
            <div
                class="col-lg-12 col-md-8 col-sm-4 col-xs-0 color1"
            >col-lg-12 col-md-8 col-sm-4 col-xs-0</div>
        </div>
        <div class="row">
            <p>Hidden classes based on breakpoints.</p>
            <ul>
                <li>
                    <strong>hidden-xs-only</strong>: hidden when the viewport is in xs size
                </li>
                <li>
                    <strong>hidden-sm-only</strong>: hidden when the viewport is in sm size
                </li>
                <li>
                    <strong>hidden-sm-and-down</strong>: hidden when the viewport is in sm and below
                </li>
                <li>
                    <strong>hidden-sm-and-up</strong>: hidden when the viewport is in sm and above
                </li>
                <li>
                    <strong>hidden-md-only</strong>: hidden when the viewport is in md size
                </li>
                <li>
                    <strong>hidden-md-and-down</strong>: hidden when the viewport is in md and below
                </li>
                <li>
                    <strong>hidden-md-and-up</strong>: hidden when the viewport is in md and above
                </li>
                <li>
                    <strong>hidden-lg-only</strong>: hidden when the viewport is in lg size
                </li>
                <li>
                    <strong>hidden-lg-and-down</strong>: hidden when the viewport is in lg and below
                </li>
                <li>
                    <strong>hidden-lg-and-up</strong>: hidden when the viewport is in lg and above
                </li>
                <li>
                    <strong>hidden-xl-only</strong>: hidden when the viewport is in xl size
                </li>
            </ul>
            <pre>
                <script type="text/html" style="display: block; overflow: auto">
<div class="row">
    <div class="col-12 hidden-md-and-up">col-12 hidden-md-and-up</div>
</div>
                </script>
            </pre>
        </div>
        <div class="row">
            <div class="col-12 hidden-md-only color1">col-12 hidden-md-only</div>
        </div>
        <div class="row">
            <div class="col-12 hidden-md-and-up color1">col-12 hidden-md-and-up</div>
        </div>
        <div class="row">
            <div class="col-12 hidden-sm-and-down color1">col-12 hidden-sm-and-down</div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
.row {
    margin: 10px 0;
}

.row>div {
    color: white;
    text-align: center;
    height: 40px;
    line-height: 40px;
    border-radius: 5px;
}

.color1 {
    background-color: #4FC3F7;
}

.color2 {
    background-color: #B3E5FC;
}

.color3 {
    background-color: #E1F5FE;
}</style>