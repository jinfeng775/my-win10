<template>
  <div class="taskbar">
    <div class="LeftTaskbar" style="float: left;">
      <LeftTaskbar />
    </div>
    <div @click="calendarf" class="rightTaskbar" style="float: right;">
      <RightTaskbar />
    </div>
  </div>
</template>

<script>
import LeftTaskbar from './leftTaskbar.vue'
import RightTaskbar from './rightTaskbar.vue'
import { mapState } from 'vuex'
export default {
  components: {
    LeftTaskbar,
    RightTaskbar
  },
  methods: {
    calendarf() {
      this.$store.dispatch('setCalendarShow', true)
    }
  }, computed: {
    ...mapState(['calendarShow'])
  }
}
</script>

<style rel="stylesheet/scss" lang="scss"  scoped>
.taskbar {
  position: absolute;
  bottom: 0;
  height: 40px;
  width: 100%;
  background: linear-gradient(to right, rgb(44, 32, 32) 0%, rgb(45, 35, 35) 90%);

  .LeftTaskbar,
  .rightTaskbar {
    width: 40px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .rightTaskbar {
    width: 80px;
  }

  .rightTaskbar:hover {
    background: rgb(41, 67, 83);
  }
}
</style>

