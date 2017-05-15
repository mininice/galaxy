
<template>
  <nav class="app-component-msg" v-if="showMsg" v-on:click="deleteMsg">{{showMsg}}</nav>
</template>


<script>
export default {
  name: 'MsgTip',
  props: {
  	'msg': Object
  },
  data () {
  	return {
  		showMsg: this.msg.msg
  	}
  },
  methods: {
    deleteMsg () {
      this.showMsg = false;
    }
  },
  watch: {
  	msg (msg) {
	  	this.showMsg = msg.msg;
      setTimeout(() => {
        this.showMsg = false;
      }, 2000);
  	}
  }
}
</script>

<style>
.app-component-msg {
    transition: all .3s ease;
    height: 30px;
    line-height: 30px;
    background-color: #ffc107;
    overflow: hidden;
    border-radius: 4px;
    position: fixed;
    margin: auto 0;
    padding: 0 10px;
    top: 3px;
    left: 40%;

}
.app-component-msg.v-enter, .app-component-msg.v-leave {
    height: 0;
    padding: 0 10px;
    opacity: 0;
}

</style>