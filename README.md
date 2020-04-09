# CSSER
Pure css productivity tool

## Layout

Create layouts quickly and easily with basic 24 columns

- Use a single column to create a basic grid layout.
- Through the basic 1/24 sub-columns, any combination can be expanded to form a more complex mixed layout.
- Support offset specified number of columns.
- Use flex layout to align the columns flexibly.
  
```html
<div class="row">
    <div class="col-8"></div>
    <div class="col-8 offset-8"></div>
</div>
<div class="row flex-between">
    <div class="col-8"></div>
    <div class="col-8"></div>
</div>
```