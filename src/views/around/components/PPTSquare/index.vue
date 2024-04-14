<template>
  <div class="project-view-container">
    <t-card  bordered hover-shadow class="box-card">
      <h1>{{title}}</h1>
      <t-divider></t-divider>
      <el-row>
        <el-col v-for="item in pptList" :key="item.Id" :span="8">
          <ViewCard :image="getImageUrl(item.Project.Id, item.Name)" :title="item.Name" :id="item.Id"
            :star="item.Star" />
        </el-col>
      </el-row>
    </t-card>
  </div>
</template>
<script>
import { getAllPublic } from "@/api/project";
import ViewCard from "@/views/around/components/PPTSquare/ViewCard.vue";
export default {
  name: "PPTSquare",
  components: { ViewCard },
  data() {
    return {
      pptList: [],
      edit: false,
      title: "PPT广场"
    }
  },
  created() {
    getAllPublic().then(response => {
      console.log(response)
      this.pptList = response.data;
      // 随机排序
      // this.pptList.sort(() => Math.random() - 0.5);
    })
  },
  methods: {
    getImageUrl(id, fileName) {
      return "http://"+process.env.VUE_APP_BACKEND_IP+":8080/_static/project/" + id + '/' + fileName + "/cover.png?t=" + new Date().getTime()
    },
  }
}
</script>

<style scoped>
.project-view-container {
    padding: 20px;
}
</style>