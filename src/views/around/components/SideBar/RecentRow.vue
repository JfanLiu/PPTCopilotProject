<template>
  <div>
    <t-row class="file-row">
      <t-col :span="4">
        <div class="file-name" @click="goto_pptist">{{ name }}</div>
      </t-col>
      <t-col :span="8">
        <div class="file-update-time">{{ updateTime | formatDate }}</div>
      </t-col>
      <!-- <el-col :span="8">
      </el-col> -->
    </t-row>
  </div>
  </template>

<script>
export default {
  props: {
    proj_id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    updateTime: {
      type: String,
      required: true
    },
  },
  data() {
    return {

    }
  },
  computed() {
    
  },
  filters: {
    formatDate(time) {
      return new Date(time).toLocaleString([], { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' })
    }
  },

  methods: {
    goto_pptist() {
        console.log('goto_pptist')
        this.$router.push({path: '/pptist/index', query: {project_id: this.proj_id, file_name: this.name}})
    },
    handleCommand(command) {
      switch (command) {
        case 'rename': {
          this.renameFile(this.id)
        }
          break;
        case 'delete': {
          console.log('delete')
          this.deleteFile(this.id, this.name)
        }
          break;
      }
    }
  }
}
</script>

<style scoped>
.file-row {
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    margin: 12px;
    height: 50px;
    font-size: 16px
}
.file-row:hover {
    background-color: #f0f0f0; /* 设置鼠标悬停时的背景颜色 */
}


.file-name {
  font-weight: bold;
  cursor: pointer;
  color: #333;
  overflow-x: auto;
}

.file-update-time {
  text-align: center;
}

</style>
