<template>
  <div  class="desktop">
    <Frame/>
    <Taskbar/>
  </div>
</template>

<script>
import Taskbar from '../components/taskbar/taskbar.vue'
import Frame from '../components/frame.vue'
export default {
  name: 'desktop',
   components: {
    Taskbar,
    Frame
  },
    methods: {
 
  }
}
</script>
<style scoped>
.desktop {
width:100vw;
height:100vh;
overflow: hidden;
}
</style>

