<template>
<div v-if="value" class="box">
   <div class="cont">
       <div class="img-ele-wrap" :style="imgStyle">
           <img :src=urlValue alt="" style="width: 100%; height: auto;"overflow-y:auto/> 
       </div>
   </div>
   <div class="actions">
       <span class="close" @click="closePrew">×</span> 
   </div> 
   <div class="mask"></div>
</div>
</template>
<script>
export default {
  name:"PicViewer",
  props:{
      url:{
          type:String,
          default:""
      },
      value:{
          type:Boolean,
          default:false
      }
  },
  data(){
    return{
      urlValue:this.url,
      transformStyle: {
        ImgHeight:0,
        ImgWidth:0,
      }
    }
  },
  computed:{
    imgStyle(){
      if(this.value){
        let width=document.documentElement.clientWidth-400||document.body.clientWidth-400;
        let height=document.documentElement.clientHeight
            
        this.transformStyle.ImgHeight=height;
        this.transformStyle.ImgWidth=width;
      }
      return{
         width:this.transformStyle.ImgWidth+'px',
         height:this.transformStyle.ImgHeight+'px',
      }
    }
  },
  mounted(){
  },
  methods:{
    closePrew(){
      this.$emit("input",false)
    }
  }
}
</script>

<style scoped>
.box{
    width: 100%;
    height: 100vh;
    position: fixed;
    top:0;
    left:0;
    z-index:100;
}
.mask{
    width: 100%;
    height: 100vh;
    position: fixed;
    top:0;
    left:0;
    z-index:1;
    background: rgba(0,0,0,0.5);
}
.cont{
    position: fixed;
    z-index: 101;
    width: 100%;
    height: 100vh;
    left:0;
    top:0;
    display: flex;
    justify-content: center;
}
 
.img-ele-wrap{
 transition:all 0.2s;
 overflow: auto;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
 
.actions{
    position:fixed;
    z-index: 101;
    color:#fff;
    right:20px;
    top:20px;
    font-size: 40px;
}
.close{
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-left:10px;
    cursor: pointer;
}

</style>
