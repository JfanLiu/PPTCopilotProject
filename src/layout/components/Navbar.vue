<template>
  <div class="navbar">
    <div class="left-nav">
      <div class="dashboard-container">
        <img src="https://github.com/rumengkai/awesome-vue/assets/91320586/83f64d27-20a7-42e7-b6a4-30d828ff4365" 
          class="user-avatar1" @click="handlegotoDashboard" />
        <span>{{ this.$route.path }}</span>
      </div>
    </div>

    <div class="right-nav">
      <div class="avatar-wrapper">
        <t-space align="center" :separator="separator">
          <t-input 
            id="searchInput"
            v-model="search_msg" 
            placeholder="搜索PPT"
            :status="searchStatus()"
            :tips="searchTips()"
            :style="{ width: '400px' }"
            @focus="is_focused=1"
            @blur="is_focused=0"
            @enter="handleSearch">
            <template #suffixIcon>
              <SearchIcon :style="{ cursor: 'pointer' }" @click="handleSearch" />
            </template>
          </t-input>
          <t-button variant="outline" theme="primary" @click="handlegotoProjects" round>
            <HomeIcon slot="icon" />
            我的
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
      search_msg: "",
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
  },
  methods: {
    handlegotoDashboard() {
      this.$router.push("/around/index");
    },
    handlegotoSearch() {
      this.$router.push("/index");
    },
    handleSearch() {
      // console.log('搜索PPT')
      // this.$router.push("/index");
    },
    searchStatus() {
      const status = (this.is_focused && this.search_msg.trim() === '') ? 'error' : ''
      return status
    },
    searchTips() {
      const tips = (this.is_focused && this.search_msg.trim() === '') ? '请输入PPT名称' : ''
      return tips
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
  height: 80px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

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
      justify-content: space-between;

      span {
        font-size: 28px;
      }
    }
  }

  .right-nav {
    float: right;
    margin-top: 20px;
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
  }

  .user-avatar2 {
    cursor: pointer;
    width: 40px;
    height: 40px;
  }
}
</style>
