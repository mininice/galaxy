<template>
    <div class="dynamic-index" >
        <div v-for="item in logIndex" class="index-item">
            <div v-if="item.type === 'text'">
                <input type="checkbox" v-model="item.isSelected"/>
                {{item.title_jan}}
                {{item.type}}
            </div>

            <div v-if="item.type === 'input'">
                <input type="checkbox" v-model="item.isSelected" :checked="item.isSelected"/>
                <span class="index-title">{{item.title_jan}}</span>
                <input type="text" v-model="item.value"/>
                <label  v-if="item.hasMatch">
                    <input type="checkbox" v-model="item.exactMatch"/>
                    完全一致
                </label>
            </div>

            <div v-if="item.type === 'checkbox'">
                <label v-for="config in item.pattern">
                    <input type="checkbox" :value="config.value" :id="config.value" v-model="item.selected"/>
                    {{config.title}}
                </label>
            </div>
        </div>
        <button @click="save">检索</button>
    </div>
</template>


<script>
    import DS from '@utils/ds.js';
    import config from '@utils/config.js';

    export default {
        components: {},
        props: {
            logType: String
        },
        name: 'dynamic-index',
        data: function() {
            console.log(config, this.logType);
            console.log(config[this.logType]);
            return {
                type: this.logType,
                logIndex: config[this.logType]
            }
        },
        methods: {
            save() {
                console.log(this.logIndex);
            }
        },
        watch: {
            logType(val) {
                this.type = val;
                this.logIndex = config[val];
            }
        }
    }
</script>

<style scope lang="less">
    .index-item {
        padding: 5px 0;
    }
    
    .index-item .index-title {
        width: 80px;
        display: inline-block;
        vertical-align: top
    }
    
    .index-item input {
        padding: 3px;
    }
</style>