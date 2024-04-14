<template>
  <div class="container">
    <el-container>
      <el-aside>
        <SideBar />
      </el-aside>
      <el-main>
        <PPTSquare />
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
</style>