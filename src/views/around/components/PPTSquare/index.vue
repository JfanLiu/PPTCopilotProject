<template>
  <div class="project-view-container">
      <div class="view-container">
        <el-row :gutter="20">
          <el-col v-for="item in pptList" :key="item.Id" :span="6">
            <!-- <ViewCard :image="getImageUrl(item.Project.Id, item.Name)" :title="item.Name" :id="item.Id"
              :star="item.Star" :proj_id="item.Project.Id" :creator="item.Project.Creator.Username" :Updated="item.Updated"/> -->
            <ViewCard 
              :image="getImageUrl(item.Project.Id, item.Name)" 
              :title="item.Name"
              :id="item.Id"
              :proj_id="item.Project.Id" 
              :creator="item.Project.Creator.Username" 
              :Updated="item.Updated"/>
          </el-col>
        </el-row>
      </div>
  </div>
</template>
<script>
import { getAllPublic } from "@/api/project";
import eventBus from "@/layout/components/eventBus";
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
    this.fetchPPTList()

    eventBus.$on('get-search-ppt', data => {
      this.updatePPTList(data)
    })
  },
  methods: {
    fetchPPTList() {
      getAllPublic().then(response => {
        console.log(response)
        // this.$set(this, 'pptList', response.data)
        this.pptList = response.data;
        // 随机排序
        // this.pptList.sort(() => Math.random() - 0.5);
      })
    },
    updatePPTList(data) {
      // console.log('搜索得到PPT，更新PPT广场')
      console.log('data')
      console.log(data)
      // this.pptList = data
      // this.$set(this, 'pptList', data)
      console.log('pptList')
      console.log(this.pptList)
    },
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