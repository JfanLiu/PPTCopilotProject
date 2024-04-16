<template>
  <div class="navbar">
    <div class="left-nav">
      <div class="dashboard-container">
        <img src="https://github.com/rumengkai/awesome-vue/assets/91320586/83f64d27-20a7-42e7-b6a4-30d828ff4365" 
          class="user-avatar1" @click="handlegotoIndex" />
        <span class="homepage" @click="handlegotoDashboard">Dashboard</span>
      </div>
    </div>

    <div class="right-nav">
      <div class="avatar-wrapper">
        <t-space align="center" :separator="separator">
          <!-- <t-input 
            v-model="filter_words"
            placeholder="搜索PPT"
            :status="searchStatus"
            :tips="searchTips"
            :style="{ width: '400px' }"
            @focus="is_focused=1"
            @blur="is_focused=0"
            @enter="handleSearch">
            <template #suffixIcon>
              <SearchIcon :style="{ cursor: 'pointer' }" @click="handleSearch" />
            </template>
          </t-input> -->
          <!-- <t-input 
            placeholder="搜索PPT"
            :style="{ width: '400px' }">
            <template #suffixIcon>
              <SearchIcon :style="{ cursor: 'pointer' }" @click="handleSearch" />
            </template>
          </t-input> -->
          <t-button variant="outline" theme="primary" @click="handlegotoSearch" round>
            <SearchIcon slot="icon" />
            搜索
          </t-button>
          <t-button variant="outline" theme="primary" @click="handlegotoProjects" round>
            <HomeIcon slot="icon" />
            我的作品
          </t-button>
          <t-button variant="outline" theme="primary" @click.native="logout" round>
            <RemoveIcon slot="icon" />
            登出
          </t-button>

          <img :src=img_url class="user-avatar2" @click="handlegotoProfile" />
        </t-space>

        <span style="margin-left: 10px">
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { searchProjects } from '@/api/search';
import eventBus from '@/layout/components/eventBus';
import { mapGetters } from "vuex";
import {
  SearchIcon,
  HomeIcon,
  RemoveIcon,
} from 'tdesign-icons-vue';
export default {
  data() {
    return {
      is_focused: 0,
      filter_words: "",
      img_url: "",
      page_name: "Home Page",
    };
  },
  created() {
    this.img_url = "http://"+process.env.VUE_APP_BACKEND_IP+":8080/_static/user/" + this.id + "/avatar.png?time=" + new Date().getTime();
  },
  components: {
    SearchIcon,
    HomeIcon,
    RemoveIcon,
  },
  computed: {
    ...mapGetters(["sidebar", "avatar", "id"]),
    searchStatus() {
      return (this.is_focused && this.filter_words.trim() === '') ? 'error' : ''
    },
    searchTips() {
      return (this.is_focused && this.filter_words.trim() === '') ? '请输入PPT名称' : ''
    },
  },
  methods: {
    handlegotoDashboard() {
      this.$router.push("/around/index");
    },
    handlegotoSearch() {
      this.$router.push("/index");
    },
    // searchProjectsHandler() {
    //   if (!this.filterWords) {
    //     this.$message.error('请输入搜索关键字')
    //     return
    //   }
      
    // },
    handleSearch() {
      this.$router.push("/around/index");

      searchProjects(this.filter_words).then((res) => {
        console.log('response')
        // console.log(res)
        // this.totalResults = res.data.length
        // this.totalProjects = res.data
        // this.projects = res.data.slice(0, this.pageSize)
        // eventBus.$emit('get-search-ppt', res.data === null ? [] : res.data)
        console.log('搜索PPT完成，关键词为', this.filter_words)
      }).catch((err) => {
        console.log(err)
      })
      // try {
        
      // } catch (error) {
      //   this.$message.error('搜索失败，请稍后再试')
      // }
    },
    handlegotoProjects() {
      this.$router.push("/project/index");
    },
    handlegotoProfile() {
      this.$router.push("/profile");
    },
    toggleSideBar() {
      this.$store.dispatch("app/toggleSideBar");
    },
    async logout() {
      await this.$store.dispatch("user/logout");
      this.$router.push(`/login?redirect=${this.$route.fullPath}`);
    },
    getPic() {
      getAvatar(this.id).then(response => {
        this.picture = response.data
      })
    }
  },
};
</script>

<style lang="scss" scoped>

.navbar {
  height: 70px;
  overflow: hidden;
  position: relative;
  background: #fff;
  // background: linear-gradient(to left, #8f94fb, #4e54c8); 
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  border-bottom: 1px solid #8e8d8d97;
  .search-button-container {
    margin-top: -5px;
  }

  .avatar-wrapper {
    display: flex;
    align-items: center;
  }

  .left-nav {
    display: inline-block;
    width: 17%;

    .dashboard-container {
      display: flex;
      align-items: center;
      // justify-content: space-between;

      span {
        font-size: 24px;
        font-weight: bold;
        cursor: pointer;
        // text-shadow: 2px 2px 4px hsla(0, 0, 0, 0.2);
        background: linear-gradient(to right, #df73e998, #bd9bf3);
        // background: black;
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
      }
    }
  }

  .right-nav {
    float: right;
    margin-top: 15px;
  }

  .nav-button {
    margin-left: 10px;
    margin-right: 10px;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 14px;
  }

  .user-avatar1 {
    cursor: pointer;
    width: 60px;
    height: 60px;
    margin-top: 5px;
    margin-left: 12px;
    margin-right: 8px;
  }

  .user-avatar2 {
    cursor: pointer;
    width: 40px;
    height: 40px;
  }
}
</style>
