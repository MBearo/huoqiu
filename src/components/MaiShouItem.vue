<template>
  <div class="container flex" @click="$router.push(`/userdetail/${data.id}`)">
      <div class="imgc flex flex-0">
        <div class="img bg-cover" :style="{backgroundImage: `url(${data.img})`}"></div>
      </div>
      <div class="cont flex flex-1">
       <div>{{data.name}}</div> 
      </div>
  </div>
</template>

<script>
export default {
  props:{
    data:{
      img:{
        default:''
      },
      name:{
        default:''
      }
    }
  }
}
</script>

<style scoped>
  .img{
    height: 50px;
    width: 50px;
    border-radius: 100%;
    background-color: #f2f2f2;
  }
  .imgc{
    justify-content: center;
    align-items: center;
    height: 80px;
    width: 80px;
  }
  .cont{
     align-items: center;
     position: relative;
  }
  .cont::after{
    position: absolute;
    content: '';
    height: 1px;
    background-color: #f2f2f2;
    left: 0;
    right: 0;
    bottom: 0;
  }
</style>
