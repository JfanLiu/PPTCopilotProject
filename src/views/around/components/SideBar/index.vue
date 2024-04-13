<template>
    <div class="box">
    <t-menu theme="light" defaultValue="dashboard" width="19vw" style="margin-right: 0px">
        <h1>最近修改的ppt</h1>
    </t-menu>
    </div>
</template>

<script>
import { Icon } from 'tdesign-icons-vue';

export default{
    components: {
        Icon,
    },
    name: "PPTSquare",
}

</script>

<style>
.box {
    height: 100vh; /* 设置高度为视窗的高度 */   
}
</style>