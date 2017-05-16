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
        检索条件:
        
    </div>

</div>
</template>
<script>
    export default {
        name: 'app-sidebar',
        props: {
            //title: String
        },
        data() {
            return {
                user: {
                    name: localStorage.getItem('name') || "",
                    password: localStorage.getItem('pass') || ""
                }
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
</style>