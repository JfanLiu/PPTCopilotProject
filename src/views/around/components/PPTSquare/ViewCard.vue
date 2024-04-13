<template>
    <div class="project-card">
        <div class="project-image">
            <img :src="image" alt="">
        </div>
        <h3>{{ title }}</h3>
        <p>{{ Updated }}</p>
        <div class="project-actions">
            <t-button type="primary" @click="openFile">打开</t-button>
            <span style="margin-left: 10px">
            </span>
            <t-tag theme="warning">
                <HeartFilledIcon />
                {{ star }}
            </t-tag>
        </div>
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
export default {
    name: "ViewCard",
    components: {
        HeartFilledIcon,
    },
    props: {
        id: {
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
    methods: {
        openFile() {
            this.$router.push({ path: '/project/' + this.id + '/file' })
        },
    }
}

</script>

<style scoped>
.project-card {
    border: 1px solid #ebebeb;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;  
    /* padding: 5px; */
    margin: 10px;
}

.project-card:hover {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.project-image {
    height: 200px;
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin-bottom: 10px; */
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;  
}

.project-image img {
    max-width: 100%;
    max-height: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;  
}

.project-actions {
    margin-top: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>

