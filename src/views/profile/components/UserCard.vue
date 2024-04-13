<template>
  <el-card>
    <t-row justify="center">
      <div class="avatar-container">
        <t-avatar :image="avatar_url" size="100%"></t-avatar>
      </div>
    </t-row>
    <t-divider>PPTCopilot</t-divider>
    <t-row>
      <t-descriptions title="个人信息" layout="vertical">
        <t-descriptions-item label="用户名">{{ name }}</t-descriptions-item>
        <t-descriptions-item label="描述">{{ description || "这个人很懒，什么也没留下"  }}</t-descriptions-item>
        <t-descriptions-item label="ID">{{ id }}</t-descriptions-item>
      </t-descriptions>
    </t-row>
  </el-card>
</template>

<script>
import PanThumb from '@/components/PanThumb'
import { mapGetters } from "vuex";
export default {
  components: { PanThumb },
  props: {
    user: {
      type: Object,
      default: () => {
        return {
          name: '',
          email: '',
          avatar: '',
        }
      }
    }
  },
  computed: {
    ...mapGetters(["id","name","description"]),
  },
  created() {
    this.avatar_url = "http://"+process.env.VUE_APP_BACKEND_IP+":8080/_static/user/" + this.id + "/avatar.png?time=" + new Date().getTime();
  },
}
</script>

<style lang="scss" scoped>
.box-center {
  margin: 0 auto;
  display: table;
}

.text-muted {
  color: #777;
}

.user-profile {
  .user-name {
    font-weight: bold;
  }

  .box-center {
    padding-top: 10px;
  }

  .user-role {
    padding-top: 10px;
    font-weight: 400;
    font-size: 14px;
  }

  .box-social {
    padding-top: 30px;

    .el-table {
      border-top: 1px solid #dfe6ec;
    }
  }

  .user-follow {
    padding-top: 20px;
  }
}

.user-bio {
  margin-top: 20px;
  color: #606266;

  span {
    padding-left: 4px;
  }

  .user-bio-section {
    font-size: 14px;
    padding: 15px 0;

    .user-bio-section-header {
      border-bottom: 1px solid #dfe6ec;
      padding-bottom: 10px;
      margin-bottom: 10px;
      font-weight: bold;
    }
  }
}
</style>
