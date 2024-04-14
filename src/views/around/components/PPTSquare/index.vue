<template>
  <div class="project-view-container">
      <div class="view-container">
        <el-row :gutter="20">
          <el-col v-for="item in pptList" :key="item.Id" :span="6">
            <ViewCard :image="getImageUrl(item.Project.Id, item.Name)" :title="item.Name" :id="item.Id"
              :star="item.Star" :proj_id="item.Project.Id" :creator="item.Project.Creator.Username" :Updated="item.Updated"/>
          </el-col>
        </el-row>
      </div>
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
.view-container {
  /* background: linear-gradient(to top, #ffffff, #f0f0ff);  */
  /* background-color: aliceblue; */
  overflow-y: auto;
  overflow-x:hidden;
  height:100%;
  padding-top: 10px;
  /* padding: 20px; */
}

.view-container {
  height: 71vh;
  margin-top: 5px;
}
</style>