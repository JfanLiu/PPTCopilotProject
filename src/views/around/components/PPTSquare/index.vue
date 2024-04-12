<template>
    <div class="project-view-container">
        <t-card  bordered hover-shadow class="box-card">
            <h1>{{title}}</h1>
            <t-divider></t-divider>
            <el-row>
                <el-col v-for="item in projectList" :key="item.Id" :span="6">
                    <ViewCard :image="getImageUrl(item.Id)" :title="item.Name" :id="item.Id" :edit="edit"
                        :star="item.Star" />
                </el-col>
            </el-row>
        </t-card>
    </div>
</template>
<script>
import { getAllProject } from "@/api/project";
import ViewCard from "@/views/around/components/PPTSquare/ViewCard.vue";
export default {
    name: "PPTSquare",
    components: { ViewCard },
    data() {
        return {
            projectList: [],
            edit: false,
            title: "PPT广场"
        }
    },
    created() {
        getAllProject().then(response => {
            this.projectList = response.data;
            // 随机排序
            this.projectList.sort(() => Math.random() - 0.5);
        })
    },
    methods: {
        getImageUrl(id) {
            return "http://"+process.env.VUE_APP_BACKEND_IP+":8080/_static/project/" + id + "/cover.png?time=" + new Date().getTime();
        },
    }
}
</script>

<style scoped>
.project-view-container {
    padding: 20px;
}
</style>