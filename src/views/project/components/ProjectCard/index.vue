<template>
  <div class="project-card">
    <el-container>
      <el-aside>
        <div class="project-image"  @click="openFile">
          <img :src="image" alt="" >
        </div>
      </el-aside>
      <el-main>
        <span class="pptName" @click="openFile">{{ filenameWithoutSuffix }}</span>
        <p> <t-tag :class="{ 'public-tag': visible, 'private-tag': !visible }">{{ visible ? 'public' : 'private' }}</t-tag> {{ Updated }}</p>
        <div class="project-actions">
          <div v-if="edit">
            <t-dropdown :options="options">
              <t-button variant="outline">
                更多
              </t-button>
            </t-dropdown>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  data() {
    return {
      options: [
        {
          content: '重命名',
          value: 'rename',
          onClick: () => {
            this.handleRename(this.proj_id, this.filename)
          }
        },
        {
          content: '删除',
          value: 'delete',
          onClick: () => {
            this.handleDelete(this.proj_id, this.filename)
          }
        },
        {
          content: '可见性',
          value: 'visible',
          onClick: () => {
            this.handleVisible(this.file_id, this.filename, this.visible)
          }
        }
      ]
    }
  },
  props: {
    image: {
      type: String,
      required: true
    },
    filename: {
      type: String,
      default: ''
    },
    visible: {
      type: Boolean,
      required: true
    },
    Updated: {
      type: String,
      // 获取当前日期，不需要小时
      default: new Date().toLocaleDateString()
    },
    proj_id: {
      type: Number,
      default: 1
    },
    file_id:{
      type: Number,
      default: 1
    },
    handleDelete: {
      type: Function,
      required: true
    },
    handleRename: {
      type: Function,
      required: true
    },
    handleVisible: {
      type: Function,
      required: true
    },
    edit: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    filenameWithoutSuffix() {
      if (this.filename.endsWith('.json')) {
        return this.filename.slice(0, -5)
      }
      return this.filename
    }
  },
  methods: {
    handleClick() {
      // 处理点击事件
      this.$message.error('ok')
      console.log(this.image)
    },
    openFile() {
      console.log('openFile:',this.proj_id, this.filename)
      this.$router.push({
        path: '/pptist/index',
        query: {
          project_id: this.proj_id,
          file_name: this.filename,
        }
      })
    },
    
  }
}
</script>
<style scoped>
.pptName:hover{
  text-decoration: underline;
  cursor: pointer;
}
.pptName{
  font-weight: bold;
  font-size: 26px;
}


.project-card {
  border: 1px solid #ebebeb;
  border-radius: 4px;
  padding: 20px;
  margin: 10px;
}

.public-tag {
  background-color: #ccebff;
  color: #333;
}

.private-tag {
  background-color: #f0f0f0;
  color: #333;
}

.project-card:hover {
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.project-image {
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
}
.project-image :hover {
  cursor: pointer;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.project-image img {
  max-width: 100%;
  max-height: 100%;
}

.project-actions {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>

