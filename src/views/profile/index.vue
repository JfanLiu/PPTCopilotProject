<template>
  <div class="app-container">
    <div v-if="user">
      <el-container>
        <el-aside width="25%">
          <user-card :user="user" />
        </el-aside>
        <el-main>
          <el-card>
            <el-tabs v-model="activeTab">
              <!-- <el-tab-pane label="用户收藏" name="用户收藏">
                <ProjectList :project-list="this.projectList" :edit = "false"></ProjectList>
              </el-tab-pane> -->
              <el-tab-pane label="账户设置" name="account">
                <account :user="user" />
              </el-tab-pane>
              <el-tab-pane label="评论" name="activity">
                <activity></activity>
              </el-tab-pane>
            </el-tabs>
          </el-card>
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UserCard from './components/UserCard'
import Activity from './components/Activity'
import Timeline from './components/Timeline'
import Account from './components/Account'
import ProjectList from "@/views/project/components/ProjectList/index.vue"

import { getLikedProjects } from "@/api/project";

export default {

  name: 'Profile',
  components: { UserCard, Activity, Timeline, Account, ProjectList },
  data() {
    return {
      user: {},
      activeTab: 'account',
      projectList: [],
    }
  },
  computed: {
    ...mapGetters([
      'id',
      'name',
      'avatar',
      'email'
    ])
  },
  mounted() {
    this.loadData();
  },
  created() {
    this.getUser()
  },
  methods: {
    getUser() {
      this.user = {
        name: this.name,
        email: this.email,
        avatar: this.avatar
      }
    },
    loadData() {
      getLikedProjects(this.id).then(response => {
        console.log(response);
        this.projectList = response.data;
      })
    }
  }
}
</script>

<style scoped>
.app-container{
  background: linear-gradient(to top, #ffffff, #f0f0ff); /* 渐变从白色到淡紫色 */
  height: 100%;
}
</style>