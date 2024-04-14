<template>
  <div class="project-container">
    <t-card hover-shadow>
      <div class="project-image" @click="openFile">
        <img :src="image" alt="">
      </div>
      <h2 class="project-ppt-title"> <span class="creator">{{ creator }}</span>/{{ filenameWithoutSuffix }}</h2>
      <p>{{ Updated  | formatDate}}</p>
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
              <HeartFilledIcon/>
             {{ star }}
            </t-tag>
          </t-col>
        </t-row>
      </div>
    </t-card>
    <pic-viewer :url="url" v-model="show"/>
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
import PicViewer from '@/views/around/components/PicPrew/PicPrew.vue'
import { clonePPT } from "@/api/project";
import { title } from '@/settings';
export default {
  name: "ViewCard",
  components: {
    HeartFilledIcon,
    PicViewer,
  },
  data(){
    return{
      show:false,
      url: "http://"+process.env.VUE_APP_BACKEND_IP+":8080/_static/project/" + this.proj_id + '/' + this.title + "/content.png?t=" + new Date().getTime()
    }
  },
  props: {
    creator: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: true
    },
    proj_id: {
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
  filters: {
    formatDate(time) {
      return new Date(time).toLocaleString([], { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' })
    }
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
      // this.$router.push({ path: '/project/' + this.id + '/file' })
      this.show=true
    },
    clone() {
      console.log('clone id:',this.id)
      clonePPT(this.id).then(response => {
        console.log(response)
        this.$message({
          message: '克隆成功',
          type: 'success'
        });
      }).catch(() =>{
        console.log('克隆失败')
      })
    }
  }
}
</script>

<style scoped>
.creator{

}

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

.project-image :hover{
  cursor: pointer;
}

.project-image img {
  max-width: 100%;
  max-height: 100%;
  border-radius: 10px; 
}

.project-ppt-title {
  /* overflow-x: auto; */
}
</style>

