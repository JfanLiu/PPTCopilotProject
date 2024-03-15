<template>
  <div class="project-container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <el-row>
          <span>项目列表</span>
          <t-button class="button_type pan-btn blue-btn" @click="handleCreate">新建项目</t-button>
          <t-dialog header="新建项目" body="对话框内容" :visible.sync="createVisible" @confirm="onCreateConfirm"
            :confirmOnEnter="true" :onConfirm="onCreateConfirmAnother" :onCancel="onCreateCancel" :onClose="createClose">
            <t-label>项目名称</t-label>
            <t-input v-model="newProjectName" placeholder="请输入新的项目名称"></t-input>
            <br>
            <t-lable>项目可见性</t-lable>
            <t-select v-model="newProjectVisible" placeholder="请选择项目可见性">
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
  </div>
</template>
<script>

import ProjectList from "@/views/project/components/ProjectList/index.vue"
import { createProject, getProjectList } from "@/api/project"
import { mapGetters } from "vuex";

export default {
  components: { ProjectList },
  data() {
    return {
      projectList: [],
      edit: true,
      createVisible: false,
      newProjectVisible: '',
      newProjectName: '',
    }
  },
  mounted() {
    this.loadData();
  },
  computed: {
    ...mapGetters([
      'id',
    ])
  },
  methods: {
    getImageUrl(id) {
      return "http://"+process.env.VUE_APP_BACKEND_IP+":8080/_static/project/" + id + "/cover.png"
    },

    handleCommand(id) {
      //进入文件
      console.log('click')
    },
    handleCreate() {
      this.createVisible = true;
    },
    onCreateConfirm() {
      console.log('confirm')
    },
    onCreateConfirmAnother() {
      console.log('confirm another')
      createProject({
        'name': this.newProjectName,
        'description': '暂无简介',
        'visible': this.newProjectVisible === 'public'
      }).then(response => {
        console.log(response)
        this.loadData();
        this.$message({
          type: 'success',
          message: '项目' + this.newProjectName + '添加成功'
        })
      }).finally(() => {
        this.createVisible = false;
      })
    },
    onCreateCancel() {
      console.log('cancel')
    },
    onCreateClose() {
      console.log('close')
    },

    loadData() {
      getProjectList(this.id).then(response => {
        console.log(response);
        this.projectList = response.data;
      })
    }
  }
}
</script>
<style>
.button_type {
  background: rgb(31, 136, 241);
  color: white;
  margin-bottom: 10px;
  float: right;
}
</style>
