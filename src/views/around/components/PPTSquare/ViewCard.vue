<template>
  <div class="project-container">
    <t-card hover-shadow>
      <div class="project-image">
        <img :src="image" alt="">
      </div>
      <h3 class="project-ppt-title">{{ filenameWithoutSuffix }}</h3>
      <p>{{ Updated }}</p>
      <div class="project-actions">
        <t-row :gutter="5">
          <t-col :span="3">
            <t-button type="primary" @click="openFile">预览</t-button>
          </t-col>
          <t-col :span="3">
            <t-button type="primary" @click="clone">克隆</t-button>
          </t-col>
          <t-col :span="2" :offset="4">
            <t-tag theme="warning">
              <HeartFilledIcon />
              {{ star }}
            </t-tag>
          </t-col>
        </t-row>
      </div>
    </t-card>
  </div>
</template>
  
<script>
import {
  AddIcon,
  HeartIcon,
  HeartFilledIcon,
  CloudUploadIcon,
  ArrowDownRectangleIcon,
  ShareIcon,
} from 'tdesign-icons-vue';
export default {
  name: "ViewCard",
  components: {
    HeartFilledIcon,
  },
  props: {
    id: {
      type: Number,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: ''
    },
    Updated: {
      type: String,
      default: ''
    },
    edit: {
      type: Boolean,
      default: false
    },
    star: {
      type: Number,
      default: 0
    },
  },
  computed: {
    filenameWithoutSuffix() {
      if (this.title.endsWith('.json')) {
        return this.title.slice(0, -5)
      }
      return this.title
    }
  },
  methods: {
    openFile() {
      this.$router.push({ path: '/project/' + this.id + '/file' })
    },
  }
}
</script>

<style scoped>
.project-container {
  margin-bottom: 20px;
}

.project-image {
  height: 50%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.project-image img {
  max-width: 100%;
  max-height: 100%;
  border-radius: 10px; 
}

.project-ppt-title {
  overflow-x: auto;
}
</style>

