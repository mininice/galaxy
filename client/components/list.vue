<template>
    <div class="content-list">
        <table class="table">
        <tr>
            <th>x</th>    
            <th>x</th>    
            <th>x</th>    
        </tr>
          <tr v-for="item in a">
            <td>{{item.x}}</td>
            <td>{{item.y}}</td>
            <td>{{item.test}}</td>
          </tr>

        </table>
        <Pager :total-page="10" :init-page="2" @go-page="goPage"></Pager>
    </div>
</template>


<script>
    import DS from '@utils/ds.js'
    import Pager from 'vue-simple-pager'

    const a = [];
    for (var i = 0; i < 20; i++) {
        a.push({
            x: 1,
            y: 2,
            test: 'kjdfksjdfkljlajdflkjsdf'
        });
    }
    export default {
        components: {
            Pager
        },
        name: 'app',
        data: function() {
            return {
                a
            }
        },
        methods: {
            goPage() {
                console.log('enter');
            }
        },
        watch: {}

    }
</script>

<style scope lang="less">
    @import '../assets/css/table.css';
    .content-list {
        padding: 10px 0;
        padding-left: 20px;
    }
    
    .content-list .pager-wrapper:hover {
        cursor: pointer;
    }
    
    .content-list .pager-wrapper {
        text-align: left;
    }
</style>