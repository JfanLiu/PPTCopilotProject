<template>
    <div>
        <el-row class="file-row" >
            <el-col :span="8">
                <div class="file-name" @click="goto_pptist">{{ name }}</div>
            </el-col>
            <el-col :span="8">
                <div class="file-update-time">{{ updateTime | formatDate }}</div>
            </el-col>
            <el-col :span="8">
            </el-col>
        </el-row>
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
  filters: {
    formatDate(time) {
      const date = new Date(time)
      const year = date.getFullYear()
      const month = date.getMonth() + 1
      const day = date.getDate()
      const hour = date.getHours()
      const minute = date.getMinutes()
      const second = date.getSeconds()
      return `${year}-${month}-${day} ${hour}:${minute}`
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
}

.file-update-time {
  text-align: center;
}

</style>
