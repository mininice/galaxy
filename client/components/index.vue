<template>
<div>
  <div class="app-topbar">
    <Topbar title="Galaxy"></Topbar>
  </div>
  <div class="app-body">
    <div class="app-sidebar">
      <Sidebar></Sidebar>
    </div>
    <div class="app-content">
        <List></List>
    </div>
  </div>
  
  <div class="app-footer">
      @copyright ©2017
  </div>
</div>

</template>


<script>
    import DS from '@utils/ds.js'
    import Topbar from '@components/header.vue'
    import Sidebar from '@components/sidebar.vue'
    import List from '@components/list.vue'



    export default {
        components: {
            Topbar,
            Sidebar,
            List
        },
        name: 'app',
        data: function() {
            return {}
        },
        methods: {},
        watch: {}
    }
</script>

<style scope lang="less">
    .app-topbar {
        border-bottom: 1px solid #0b6fa2;
        height: 60px;
        padding-left: 20px;
        background: #0e90d2;
    }
    
    .app-body {
        display: flex;
        min-height: 600px;
        border: 1px solid #ddd;
        font-size: 14px;
    }
    
    .app-sidebar {
        width: 30%;
        align-items: stretch;
    }
    
    .app-content {
        border-left: 1px solid #ddd;
        width: 70%;
        align-items: stretch;
    }
    
    .app-footer {
        padding-top: 20px;
        padding-left: 20px;
    }
</style>