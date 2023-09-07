<template>
  <div  class="desktop">
    <Frame/>
    <calendar v-show="calendarShow"/>
    <Taskbar/>
  </div>
</template>

<script>
import Taskbar from '../components/taskbar/taskbar.vue'
import calendar from '../components/calendarwin10/calendar.vue'
import Frame from '../components/frame.vue'
import { mapState } from 'vuex'
export default {
  name: 'desktop',
   components: {
    Taskbar,
    Frame,
    calendar
  },
    computed: {
    ...mapState(['calendarShow']),
}
}
</script>
<style scoped>
.desktop {
width:100vw;
height:100vh;
overflow: hidden;
position: relative;
}
</style>