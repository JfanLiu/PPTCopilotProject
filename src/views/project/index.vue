<template>
  <div class="project-container">
    <div class="background"></div>
    <el-container>
      <el-aside width="25%">
        <el-card>
          <t-row justify="center">
            <div class="avatar-container">
              <t-avatar :image="avatar_url" size="100%"></t-avatar>
            </div>
          </t-row>
          <t-divider>PPTCopilot</t-divider>
          <t-row>
            <t-descriptions title="个人信息" layout="vertical">
              <t-descriptions-item label="用户名">{{ name }}</t-descriptions-item>
              <t-descriptions-item label="描述">{{ description || "这个人很懒，什么也没留下"  }}</t-descriptions-item>
              <t-descriptions-item label="ID">{{ id }}</t-descriptions-item>
            </t-descriptions>
          </t-row>
        </el-card>
      </el-aside>
      <el-main>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <el-row>
              <div class="header-container">
                <span><strong>我的作品</strong></span>
                <t-button class="button_type pan-btn blue-btn" @click="handleCreate">
                  <add-icon slot="icon" />
                  新建PPT
                </t-button>
              </div>
              
              <t-dialog 
                header="新建PPT" 
                body="对话框内容" 
                :visible.sync="createVisible" 
                @confirm="onCreateConfirm"
                :confirmOnEnter="true" 
                :confirmBtn="{ content:'下一步', }">
                <t-label>PPT名称</t-label>
                <t-input v-model="newPPTName" placeholder="请输入PPT名称"></t-input>
                <span v-if="showNameErr" style="color: red;">项目名不能为空！</span>
                <br>
                <t-lable>PPT可见性</t-lable>
                <t-select v-model="newPPTVisible" placeholder="请选择项目可见性">
                  <t-option value="public">public</t-option>
                  <t-option value="private">private</t-option>
                </t-select>
              </t-dialog>
            </el-row>
            <el-row>
              <ProjectList :project-list="this.projectList" :edit="this.edit" />
            </el-row>
          </div>
        </el-card>
      </el-main>
    </el-container>
  </div>
</template>
<script>

import ProjectList from "@/views/project/components/ProjectList/index.vue"
import { createProject, getPPTList } from "@/api/project"
import { mapGetters } from "vuex";
import { AddIcon } from 'tdesign-icons-vue';

export default {
  components: {
    ProjectList,
    AddIcon
  },
  data() {
    return {
      projectList: [],
      edit: true,
      createVisible: false,
      newPPTVisible: 'public',
      newPPTName: '',
      showNameErr: false,
    }
  },
  mounted() {
    this.loadData();
  },
  created() {
    this.avatar_url = "http://"+process.env.VUE_APP_BACKEND_IP+":8080/_static/user/" + this.id + "/avatar.png?time=" + new Date().getTime();
  },
  computed: {
    ...mapGetters(["id","name","description"])
  },
  methods: {

    handleCommand(id) {
      //进入文件
      console.log('click')
    },
    handleCreate() {
      this.createVisible = true;
      this.showNameErr = false
      this.newPPTName = ''
      this.newPPTVisible = 'public'
    },
    onCreateConfirm() {
      console.log('confirm another')
      console.log(this.newPPTVisible)
      console.log(this.newPPTVisible === 'public')
      if(this.newPPTName.length < 1){
        console.log('项目名不能为空！')
        this.showNameErr = true
        return
      }
      else{
        this.showNameErr = false
      }
      this.createVisible = false;
      this.$router.push({
        path: '/direction/index',
        query: {
          project_id: this.id,
          file_name: this.newPPTName + '.json',
          visible: `${this.newPPTVisible === 'public'}`,
        }
      });
    },
    loadData() {
      getPPTList(this.id).then(response => {
        console.log(response);
        this.projectList = response.data;
        console.log(this.projectList);
      })
    }
  }
}
</script>
<style>
.background {
    background: linear-gradient(0deg, #ffffff, #f0f0ff);
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    top: 0;
    z-index: -1
}

/* .project-container {
  height: 100vh;
} */

.avatar-container {
  width: 80%;
  aspect-ratio: 1;
}

.button_type {
  background: rgb(31, 136, 241);
  color: white;
  margin-bottom: 10px;
  float: right;
}

.header-container {
  display: flex;
  justify-content: space-between;
}

.header-container > span {
  font-size: 32px;
}
</style>
