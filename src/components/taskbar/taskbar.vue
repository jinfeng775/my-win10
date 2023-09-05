<template>
  <div class="taskbar">
    <div class="LeftTaskbar" style="float: left;">
      <LeftTaskbar />
    </div>
    <div class="rightTaskbar">
      <RightTaskbar/>
    </div>
  </div>
</template>

<script>
import LeftTaskbar from './leftTaskbar.vue'
import RightTaskbar from './rightTaskbar.vue'

export default {
  components: {
    LeftTaskbar,
    RightTaskbar
  }
}
</script>

<style rel="stylesheet/scss" lang="scss"  scoped>
.taskbar {
  height: 6%;
  background: rgb(33, 53, 66);
  .LeftTaskbar {
    width: 40px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>

