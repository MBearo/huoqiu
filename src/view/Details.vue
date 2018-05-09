<template>
  <div>
     <div class="banner" :style="bannerStyle">
         <div class="cover"></div>
     </div>
  </div>
</template>

<script>
export default {
    components:{
        
    },
    computed:{
        bannerStyle(){
            return {
                height:(this.$store.state.windowW)*16/9+'px'
            }
        }
    }
}
</script>

<style scoped>
.banner{
    position: relative;
}
.cover{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .4);
}
</style>
