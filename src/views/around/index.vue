<template>
    <div class="container">
        <div class="project-view-container">
        <PPTSquare />
        </div>
        <div class="sidebar">
        <SideBar />
        </div>
    </div>
</template>
<script>
import { getAllProject } from "@/api/project";
import SideBar from "@/views/around/components/PPTSquare/index.vue";
import PPTSquare from "@/views/around/components/SideBar/index.vue";
export default {
    components: { PPTSquare, SideBar },
    data() {
        return {
           
        }
    },
    created() {
        
    },
    methods: {
      
    }
}
</script>

<style scoped>
.container {
    display: flex;
    background: linear-gradient(to bottom, #ffffff, #f0f0ff); /* 渐变从白色到淡紫色 */
    height: 100vh; /* 设置高度为视窗的高度 */
}   

.sidebar {
    flex: 0 0 auto; /* 不扩展、不收缩 */
    /* width: 1000px; 侧边栏宽度 */
}

.project-view-container {
    flex: 1; /* 自动扩展 */
}
</style>