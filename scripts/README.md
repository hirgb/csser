# CSSER
Pure css productivity tool

## Usage

`npm i csser --save`

## Layout

Create layouts quickly and easily with basic 24 columns

### Usage

`import 'csser/layout.css'`

### Detail

- Use a single column to create a basic grid layout.
- Through the basic 1/24 sub-columns, any combination can be expanded to form a more complex mixed layout.
- Support offset specified number of columns.
- Use flex layout to align the columns flexibly.
- Five response sizes are preset: xs, sm, md, lg, and xl.
- Hidden classes based on breakpoints
  - **hidden-xs-only**: hidden when the viewport is in xs size
  - **hidden-sm-only**: hidden when the viewport is in sm size
  - **hidden-sm-and-down**: hidden when the viewport is in sm and below
  - **hidden-sm-and-up**: hidden when the viewport is in sm and above
  - **hidden-md-only**: hidden when the viewport is in md size
  - **hidden-md-and-down**: hidden when the viewport is in md and below
  - **hidden-md-and-up**: hidden when the viewport is in md and above
  - **hidden-lg-only**: hidden when the viewport is in lg size
  - **hidden-lg-and-down**: hidden when the viewport is in lg and below
  - **hidden-lg-and-up**: hidden when the viewport is in lg and above
  - **hidden-xl-only**: hidden when the viewport is in xl size

### Example

```html
<div class="row">
    <div class="col-8"></div>
    <div class="col-8 offset-8"></div>
</div>
<div class="row flex-between">
    <div class="col-8"></div>
    <div class="col-8"></div>
</div>
<div class="row">
    <div class="col-lg-12 col-md-8 col-sm-4 col-xs-0">col-lg-12 col-md-8 col-sm-4 col-xs-0</div>
</div>
<div class="row">
    <div class="col-12 hidden-md-only">col-12 hidden-md-only</div>
</div>
<div class="row">
    <div class="col-12 hidden-md-and-up">col-12 hidden-md-and-up</div>
</div>
<div class="row">
    <div class="col-12 hidden-sm-and-down">col-12 hidden-sm-and-down</div>
</div>
```