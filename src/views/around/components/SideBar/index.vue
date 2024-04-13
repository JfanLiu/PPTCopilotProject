<template>
    <div class="box">
        <h2>最近修改的ppt</h2>
        <t-menu theme="light" defaultValue="dashboard" width="19vw" style="margin-right: 0px">
            <div v-for="file in RecentFiles" :key="file.Id" class="file-item">
                <RecentRow :proj_id="file.Project.Id" :name="file.Name" :updateTime="file.Updated" />
            </div>  

        </t-menu>
    </div>
</template>

<script>
import { Icon } from 'tdesign-icons-vue';
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
.box {
    height: 100vh; /* 设置高度为视窗的高度 */   
}
</style>