<template>
  <div class="container">
    <el-container>
      <el-aside>
        <SideBar />
      </el-aside>
      <el-main class="elmain">
        <el-card class="box-card">
        <span style="font-size: 32px;"><strong>PPT广场</strong></span>
        <PPTSquare />
        </el-card>
      </el-main>
    </el-container>
  </div>
</template>
<script>
// import { getAllProject } from "@/api/project";
import PPTSquare from "@/views/around/components/PPTSquare/index.vue";
import SideBar from "@/views/around/components/SideBar/index.vue";
export default {
  components: {
    PPTSquare,
    SideBar,
  },
}
</script>

<style scoped>
.container {
  /* display: flex; */
  background: linear-gradient(to top, #ffffff, #f0f0ff); /* 渐变从白色到淡紫色 */
  /* height: 100vh; */
}   

.box-card{
  height: 85vh;
  /* margin: 0px; */
  /* padding: 0px; */
}
</style>