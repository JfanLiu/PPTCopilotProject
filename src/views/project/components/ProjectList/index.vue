<template>
  <div class="project-list">
    <div class="card-view">
      <el-row v-for="item in projectList" :key="item.Id">
        <ProjectCard :image="getImageUrl(item.Project.Id, item.Name)" :filename="item.Name" :visible="item.Visible" :proj_id="item.Project.Id" :handle-delete="handleDelete"
          :handle-rename="handleRename" :edit="edit" />
      </el-row>
    </div>
    <t-dialog header="重命名" body="对话框内容" :visible.sync="renameVisible" @confirm="onRenameConfirm" :confirmOnEnter="true"
      :onConfirm="onRenameConfirmAnother" :onCancel="onRenameCancel" :onClose="renameClose">
      <t-input v-model="newProjectName" placeholder="请输入新的项目名称"></t-input>
    </t-dialog>
    <t-dialog header="删除项目" body="对话框内容" :visible.sync="deleteVisible" @confirm="onDeleteConfirm" :confirmOnEnter="true"
      :onConfirm="onDeleteConfirmAnother" :onCancel="onDeleteCancel" :onClose="deleteClose">
      <t-text>确定要删除项目吗？</t-text>
    </t-dialog>
  </div>
</template>

<script>
import ProjectCard from "@/views/project/components/ProjectCard/index.vue";
import { deleteProject, getProjectList, updateProject } from "@/api/project";
import { mapGetters } from "vuex";
import {
  getFile,
  uploadFile,
  deleteFile,
  getProject,
  likeProject,
  cloneProject,
  unlikeProject,
  checkLikePorject,
  RenamePPT
} from "@/api/project"
export default {
  name: "ProjectList",
  components: { ProjectCard },
  data() {
    return {
      newProjectName: '',
      renameVisible: false,
      deleteVisible: false,
      now_id: 0,
      now_filename:'',
      proj_id:0
    }
  },
  props: {
    projectList: {
      type: Array,
      required: true,
    },
    edit: {
      type: Boolean,
      required: true,
    },
  },

  methods: {
    getImageUrl(id, fileName) {
      return "http://"+process.env.VUE_APP_BACKEND_IP+":8080/_static/project/" + id + '/' + fileName + "/cover.png?t=" + new Date().getTime()
    },

    handleCommand(id) {
      //进入文件
      console.log('click')
    },
    handleDelete(id, filename) {
      this.now_filename = filename
      this.deleteVisible = true
      this.proj_id = id
    },
    handleRename(id, filename) {
      this.now_filename = filename
      this.renameVisible = true;
      this.proj_id = id;
    },
    onRenameConfirm() {
      console.log('confirm')
    },
    onRenameConfirmAnother() {
      console.log('Rename confirm another')
      RenamePPT(this.proj_id, this.now_filename, this.newProjectName).then(response => {
        console.log(response)
        this.loadData();
        this.$message({
          type: 'success',
          message: '项目' + this.newProjectName + '修改成功'
        })
      }).finally(() => {
        this.renameVisible = false;
        // 刷新页面
        window.location.reload();
      })
    },
    onRenameCancel() {
      console.log('cancel')
    },
    renameClose() {
      this.renameVisible = false;
    },
    onDeleteConfirm() {
      console.log('confirm')
    },
    onDeleteConfirmAnother() {
      console.log('confirm another')
      deleteFile(this.proj_id, this.now_filename).then(response => {
        console.log(response)
        this.loadData();
        this.$message({
          type: 'success',
          message: '文件删除成功'
        })
      }).finally(() => {
        this.deleteVisible = false;
        // 刷新页面
        window.location.reload();
      })
    },
    onDeleteCancel() {
      console.log('cancel')
    },
    deleteClose() {
      this.deleteVisible = false;
    },
  }
}

</script>

<style scoped>
.project-list {
  overflow: auto;
  height: 550px;
}
</style>
