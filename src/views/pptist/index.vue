<template>
  <!--  显示外部界面-->

  <div id="app">
    <iframe ref="myIframe" id="pptist-frame" frameborder="0" @load="handleIframeLoad" width="100%"
            height="100%"></iframe>
  </div>
</template>

<script>

import {getStaticFile, saveStaticFile, saveCover} from "@/api/project";
import axios from 'axios';
import request from "@/utils/request";

import { Loading } from 'element-ui'


export default {
  props: ['project_id', 'file_name'], // 接收父组件传递的参数
  data() {
    return {
    }
  },
  created() {
    // 使用环境变量构建URL
    this.editorUrl = `http://${process.env.VUE_APP_EDITOR_IP || 'localhost'}:7777`;
  },
  mounted() {
    // 在 mounted 钩子中通过 ref 访问 <iframe> 元素，并修改其 src 属性
    this.$refs.myIframe.src = `http://${process.env.VUE_APP_EDITOR_IP || 'localhost'}:7777`;
  },
  methods: {
    handleIframeLoad() {

      const loadingInstance = Loading.service()
      // 保存 editorUrl 到局部变量
      const editorUrl = this.editorUrl;
      // 导入选定文件
      let matches = document.cookie.match(/token=([^;]+)/);
      let token = (matches ? matches[1] : null);
      const iframe = document.getElementById('pptist-frame');
      const iframeWindow = iframe.contentWindow;
      const projectId = this.project_id === undefined ? 1 : this.project_id;
      const fileName = this.file_name === undefined ? 'test.json' : this.file_name;
      getStaticFile(projectId, fileName).then(res => {
        console.log("this is pptits")
        console.log(res)
        // print length
        iframeWindow.postMessage(res, this.editorUrl);
        loadingInstance.close()
      }).catch(err => {
        loadingInstance.close()
        console.log(err)
      })

      window.addEventListener('message', function(event) {
        if (event.origin !== editorUrl) return
        const message = JSON.parse(event.data);
        console.log(message)
        if (message.type === "cloud") {
        // 处理类型为 "type1" 的消息
        const blobStr = message.data;
        console.log(JSON.stringify(event))
        const blob = new Blob([blobStr], {type: '*'});
        console.log("template length: " + blobStr.length)
        saveStaticFile(projectId, fileName, blob).then(res => {
          console.log('template 9529: save success')
        }).catch(err => {
          console.log(err);
        });
        }
        else if(message.type === "cover"){
          // saveStaticFile( ,message.data)
          saveCover()
        }
      });
    }
  }
}


</script>

<style scoped>
#app {
  height: 800px;
  width: 100%;
}
</style>
