<template>
<div class="component-header">
  <img src="/assets/img/logo.png" width="50px" height="40px"/>	
  <span class="title">{{title}}</span>
</div>
</template>


<script>
    export default {
        name: 'app-header',
        props: {
            title: String
        },
        data: function() {
            return {

            }
        },
        methods: {

        },
        watch: {}
    }
</script>

<style>
    .component-header .title {
        font-size: 18px;
        color: #fff;
    }
    
    .component-header img {
        padding-top: 10px;
    }
</style>