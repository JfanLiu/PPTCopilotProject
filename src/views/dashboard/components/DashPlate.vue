<template>
  <div class="dash-plate-container">
    <div class="background"></div>
    <ul class="circles">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <div class="dash-plate-header">
      <img src="https://user-images.githubusercontent.com/75596353/236753989-c95dd9d6-029e-4456-aec4-dd65363a9c5d.png" alt="PPTCopilot Logo" class="logo">
      <h1>Welcome to PPTCopilot</h1>
      <h1>AI一键生成PPT</h1>

      <h2 class="subtitle">输入你的内容主题，让AI为你<span class="suffix">一站式服务到底</span></h2>
    </div>
    <div class="container">
      <!-- <t-button type="primary" style="margin-top: 20px;margin-bottom: 20px" @click="jumpProject">立即使用</t-button> -->
      <t-button class="button" type="primary" style="margin-top: 20px;margin-bottom: 20px" @click="jumpProject">立即使用</t-button>
    </div>
    <div class="dash-plate-content">
      <div
        v-for="(feature, index) in features"
        :key="index"
        class="dash-plate-feature"
        :class="{'fade-in': isVisible[index]}"
        ref="feature"
        :data-index="index"
      >
        <h2>{{ feature.title }}</h2>
        <p>{{ feature.description }}</p>
        <img :src="feature.image" alt="Feature image" class="feature-image">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashPlate',
  data() {
    return {
      observer: null,
      isVisible: [],
      features: [
        {
          title: '引导流程',
          image: 'https://user-images.githubusercontent.com/91320586/236810826-47598f00-1076-4450-a174-47888c5d787f.jpg',
          description: '清晰引导流程，帮助您轻松制作PPT。',
        },
        {
          title: '大纲生成',
          image: 'https://user-images.githubusercontent.com/91320586/236811011-f676f462-1827-43f6-b4a0-29ee8ab03166.jpg',
          description: '借助GPT AI轻松创建演示文稿大纲。',
        },
        {
          title: 'GPT集成',
          image: ' https://user-images.githubusercontent.com/91320586/236810233-b7bb7a4a-c150-4e5e-ae83-f455c0fb264f.png',
          description: '与GPT AI无缝交互，进行内容创建和优化。',
        },
        {
          title: '模板系统',
          image: 'https://user-images.githubusercontent.com/91320586/236810917-e54458e8-bd86-48c5-83b1-75976f450845.jpg',
          description: '从各种精美模板中选择，满足您的需求。',
        },
        {
          title: '单页生成',
          image: 'https://user-images.githubusercontent.com/91320586/236811073-8b263eab-79ac-4304-90f6-e47557a54599.jpg',
          description: '使用自定义提示修改任何幻灯片，实现精确的内容控制。',
        },
        {
          title: '项目管理',
          image: 'https://user-images.githubusercontent.com/91320586/236810666-9e375809-a579-4288-b08c-0b3e6af258f2.jpg',
          description: '轻松组织和管理您的演示文稿。',
        },
        {
          title: 'PPT共享与搜索',
          image: 'https://user-images.githubusercontent.com/91320586/236810750-0b8b3ec8-8ccd-410a-a3ad-d7c3dbdd45c3.jpg',
          description: '分享您的创作，从社区发现新的演示文稿。',
        },
        {
          title: 'PPT探索',
          image: 'https://user-images.githubusercontent.com/91320586/236810476-977f4291-d762-4304-bc8d-3628b61bc37f.jpg',
          description: '通过访问创新演示文稿的世界拓展视野。',
        },
      ],
    };
  },
  methods: {
    observeFeatureEntries(entries) {
      entries.forEach((entry) => {
        const index = Number(entry.target.getAttribute('data-index'));
        this.$set(this.isVisible, index, entry.isIntersecting);
      });
    },
    jumpProject(){
      this.$router.push('/around/index')
    }
  },
  mounted() {
    this.isVisible = this.features.map(() => false);
    this.observer = new IntersectionObserver(this.observeFeatureEntries, {
      rootMargin: '0px',
      threshold: 0.1,
    });

    this.$refs.feature.forEach((featureEl) => {
      this.observer.observe(featureEl);
    });
  },
  beforeDestroy() {
    this.$refs.feature.forEach((featureEl) => {
      this.observer.unobserve(featureEl);
    });
    this.observer.disconnect();
  },

};
</script>

<style lang="scss" scoped>
.subtitle{
  color: #282339;
  font-size: 30px;
  margin: 32px 0 0;
}
.subtitle .suffix{
  -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
  background-image: linear-gradient(138deg, #3b2af9, #562cf7 22%, #dd34ee 89%, #f5e17d);
}
.background {
    /* background-image: linear-gradient(95deg, #5261f9, #fa69e2); */
    /* background-image: linear-gradient(to top, #5261f9, #ffffff); */
    /* background: linear-gradient(180deg, #ffffff, #ece8fb 52%, #df73e979 79%, #bd9bf3) */
    background: linear-gradient(180deg, #ffffff, #ffffff 43%, #df73e979 79%, #bd9bf3);
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    top: 0;
    z-index: -1
}

.dash-plate-container {
  max-width: 1200px;
  margin: 0 auto;
  background: linear-gradient(to bottom, var(--el-color-primary-light-9), #ddf4ff);
  z-index: -1; /* 确保背景位于最底层 */
  overflow-y: auto;
}

.dash-plate-header {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  .logo {
    width: 300px; // 将宽度从 80px 修改为 60px
    height: auto;
    //margin-bottom: 20px;
  }

  h1 {
    font-size: 48px;
    margin-bottom: 10px;
  }

  p {
    font-size: 24px;
    color: #777;
  }

  img {
    margin: 50px;
  }
}

.container{
   display: flex;
   justify-content: center;
    // background: #fff0f9;
    border-radius: 99px;
    // box-shadow: 0 3px 24px 1px #66418b66;
    cursor: pointer;
    height: 56px;
    margin-top: 10px;
    // overflow: hidden;
    // padding: 8px;
}

.button {
  // background: linear-gradient(138deg, #d5d3f1, #bde1e28d 22%, #34eeb6a5 89%, #cdf0aeb7);
  background: linear-gradient(138deg, #3b2af9, #562cf7 22%, #dd34ee 89%, #f5e17d);
  border-radius: 99px;
  box-shadow: 0 0 4px 1px #9056ca66;
  color: #fff;
  font-size: 26px;
  height: 100%;
  transition: all .3s cubic-bezier(.075,.82,.165,1);
  // width: 100%;
  width: 333px;
}

.dash-plate-content {
  display: grid;
  grid-template-columns: repeat(2, 1fr);;
  gap: 10px;
  margin-top: 30px;

  .dash-plate-feature {
    opacity: 0;
    transition: opacity 2s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &.fade-in {
      opacity: 1;
    }

    .feature-image {
      width: 100%;
      max-width: 300px;
      height: 200px;
      margin-bottom: 20px;
    }

    h2 {
      font-size: 28px;
      margin-bottom: 10px;
    }

    p {
      font-size: 18px;
      color: #666;
    }
  }


}
 
.circles{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.circles li{
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: rgba(12, 133, 119, 0.5);
    animation: animate 25s linear infinite;
    bottom: -150px;
    
}

.circles li:nth-child(1){
    left: 25%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
}


.circles li:nth-child(2){
    left: 10%;
    width: 20px;
    height: 20px;
    animation-delay: 2s;
    animation-duration: 12s;
}

.circles li:nth-child(3){
    left: 70%;
    width: 20px;
    height: 20px;
    animation-delay: 4s;
}

.circles li:nth-child(4){
    left: 40%;
    width: 60px;
    height: 60px;
    animation-delay: 0s;
    animation-duration: 18s;
}

.circles li:nth-child(5){
    left: 65%;
    width: 20px;
    height: 20px;
    animation-delay: 0s;
}

.circles li:nth-child(6){
    left: 75%;
    width: 110px;
    height: 110px;
    animation-delay: 3s;
}

.circles li:nth-child(7){
    left: 35%;
    width: 150px;
    height: 150px;
    animation-delay: 7s;
}

.circles li:nth-child(8){
    left: 50%;
    width: 25px;
    height: 25px;
    animation-delay: 15s;
    animation-duration: 45s;
}

.circles li:nth-child(9){
    left: 20%;
    width: 15px;
    height: 15px;
    animation-delay: 2s;
    animation-duration: 35s;
}

.circles li:nth-child(10){
    left: 85%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 11s;
}



@keyframes animate {

    0%{
        transform: translateY(0) rotate(0deg);
        opacity: 1;
        border-radius: 0;
    }

    100%{
        transform: translateY(-1000px) rotate(720deg);
        opacity: 0;
        border-radius: 50%;
    }

}
</style>
