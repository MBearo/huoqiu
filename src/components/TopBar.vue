<template>
  <div>
      <div class="space"></div>
      <div class="top_bar">
          {{name}}
      </div>
  </div>
</template>

<script>
export default {
    props:{
        name:{
            default:''
        }
    }
}
</script>

<style scoped>
.space{
    height: 85px;
    background-color: white;
}
.top_bar{
    height: 85px;
    background-color: white;
    width: 100%;
    font-size: 30px;
    position: fixed;
    top: 0px;
    line-height: 85px;
    padding: 0 20px;
    box-sizing: border-box;
    font-weight: bold;
}
.top_bar::after{
    content: '';
    height: 1px;
    background-color: #f2f2f2;
    left: 5%;
    right: 5%;
    bottom: 0;
    display: block;
}
</style>
