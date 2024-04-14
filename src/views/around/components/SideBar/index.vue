<template>
  <div class="box">
    <t-layout>
      <t-header>
        <div>
          <h1 class="recent-mod-header">Recent Activities</h1>
          <t-divider></t-divider>
          <p>ss</p>
        </div>
      </t-header>
      <t-content>
        <div class="menu-container">
          <t-menu theme="light" defaultValue="dashboard" width="100%" style="margin-right: 0px">
            <div v-for="file in RecentFiles" :key="file.Id" class="file-item">
              <RecentRow :proj_id="file.Project.Id" :name="file.Name" :updateTime="file.Updated" />
            </div>
          </t-menu>
        </div>
      </t-content>
    </t-layout>    
  </div>
</template>

<script>
import { Icon} from 'tdesign-icons-vue';
import RecentRow from '@/views/around/components/SideBar/RecentRow.vue';
import { GetPPTHistory } from '@/api/project';

export default{
  components: {
    Icon,
    RecentRow,
  },
  name: "SideBar",
  data() {
    return {
      RecentFiles: [],
    }
  },

  mounted() {
    GetPPTHistory().then(response => {
      this.RecentFiles = response.data
      console.log(this.RecentFiles)
    })
  },
}

</script>

<style>
.recent-mod-header {
  text-align: center;
}

.menu-container {
  height: 75vh;
  overflow-y: auto;
}
</style>