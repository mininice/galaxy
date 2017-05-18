<template>
<div class="component-sidebar">
    <div class="user-info">
	    填写用户信息后即可开始检索
        <div>
            <input type="text" v-model="user.name" placeholder="用户名"/>
            <input type="password" v-model="user.password" placeholder="密码"/>
        </div>
    </div>
    <div class="side-index">
        检索日志类型:
        <select v-model="logType">
            <option  v-for="(item, type) in config.logType" :value="type">{{item}}</option>
        </select>
        <Index :logType="logType"></Index>
    </div>
</div>
</template>
<script>
    import config from '@utils/config';
    import Index from '@components/dynamicIndex.vue';

    export default {
        components: {
            Index
        },
        name: 'app-sidebar',
        props: {},
        data() {
            return {
                user: {
                    name: localStorage.getItem('name') || "",
                    password: localStorage.getItem('pass') || ""
                },
                logType: "index1",
                config: config
            }
        },
        methods: {
            saveUserInfo(name, pass) {}
        },
        watch: {
            "user.name" (val) {
                localStorage.setItem('name', val);
            },
            "user.password" (val) {
                localStorage.setItem('pass', val);
            }
        }
    }
</script>

<style>
    .component-sidebar>div {
        padding-left: 10px;
    }
    
    .user-info {
        border-bottom: 1px solid #ddd;
        padding: 5px 0;
        margin-bottom: 10px;
    }
    
    .user-info input {
        padding: 3px;
        margin: 5px 0;
    }
    
    .side-index select {
        margin-bottom: 10px;
        height: 28px;
        width: 80%;
    }
</style>