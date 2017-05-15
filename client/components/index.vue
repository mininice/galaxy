
<template>
<div>
  <div class="app-container">
   hello
  </div>
</div>

</template>


<script>
import DS from '@utils/ds.js'

export default {
  components: {
    Buttons
  },
  mounted () {
    $('.app-left').css('height', $(document).height());
  },
  name: 'app',
  data () {
  	return {
     
  	}
  },
  methods: {
      
  },
  watch: {
  }
 
}
</script>

<style>

</style>