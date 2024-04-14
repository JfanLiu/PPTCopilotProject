<template>
  <div class="container">
    <t-layout>
      <t-aside width="25%">
        <SideBar />
      </t-aside>
      <t-content>
        <PPTSquare />
      </t-content>
    </t-layout>
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
  background: linear-gradient(to bottom, #ffffff, #f0f0ff); /* 渐变从白色到淡紫色 */
  /* height: 100vh; */
}   

/* .sidebar {
  flex: 0 0 auto; 
}

.project-view-container {
  flex: 1; 
} */
</style>