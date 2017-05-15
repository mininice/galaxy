<template>
    <button @click="click" :disabled="disabled" :class="btnClass" :type="htmlType">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        props: {
            type: {
                type: String,
                default: ''
            },
            htmlType: {
                type: String,
                default: 'button'
            },
            disabled: {
                type: Boolean,
                default: false
            },
            size: {
                type: String,
                default: ''
            }
        },
        computed: {
            btnSize() {
                let sizes = ['small', 'large', 'mini']

                return this.size && ~sizes.indexOf(this.size) ? `ui-button--${this.size}` : ''
            },
            btnType() {
                let types = ['success', 'loading', 'info', 'warning', 'primary', 'danger']

                return this.type && ~types.indexOf(this.type) ? `ui-button--${this.type}` : ''
            },
            btnClass() {
                return ['ui-button', this.btnSize, this.btnType]
            }
        },
        methods: {
            click(event) {
                this.$emit('click', event)
            }
        }
    }
</script>

<style>
  @import './style.css';
</style>