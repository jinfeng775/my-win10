<template>
  <div class="windowed">
    <a-modal :dialogClass="'windowedDialog'" :bodyStyle="{padding: 0}" :footer="null" :closable="false" v-model="windowedShow"  @cancel="handleOk">
      <div class="windowBar">
        <div @click="handleOk">
          <!-- x -->
          <svg t="1694415428076" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7149" width="20" height="20"><path d="M542.173333 512l347.58-347.58a21.333333 21.333333 0 1 0-30.173333-30.173333L512 481.826667 164.42 134.246667a21.333333 21.333333 0 0 0-30.173333 30.173333L481.826667 512l-347.58 347.58a21.333333 21.333333 0 0 0 30.173333 30.173333L512 542.173333l347.58 347.58a21.333333 21.333333 0 0 0 30.173333-30.173333z" fill="#2c2c2c" p-id="7150"></path></svg>
        </div>
        <div>
          <!-- □ -->
          <svg t="1694415642667" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7837" width="20" height="20"><path d="M885.333333 85.333333H309.333333a53.393333 53.393333 0 0 0-53.333333 53.333334v117.333333H138.666667a53.393333 53.393333 0 0 0-53.333334 53.333333v576a53.393333 53.393333 0 0 0 53.333334 53.333334h576a53.393333 53.393333 0 0 0 53.333333-53.333334v-117.333333h117.333333a53.393333 53.393333 0 0 0 53.333334-53.333333V138.666667a53.393333 53.393333 0 0 0-53.333334-53.333334z m-160 800a10.666667 10.666667 0 0 1-10.666666 10.666667H138.666667a10.666667 10.666667 0 0 1-10.666667-10.666667V309.333333a10.666667 10.666667 0 0 1 10.666667-10.666666h576a10.666667 10.666667 0 0 1 10.666666 10.666666z m170.666667-170.666666a10.666667 10.666667 0 0 1-10.666667 10.666666h-117.333333V309.333333a53.393333 53.393333 0 0 0-53.333333-53.333333H298.666667V138.666667a10.666667 10.666667 0 0 1 10.666666-10.666667h576a10.666667 10.666667 0 0 1 10.666667 10.666667z" fill="#2c2c2c" p-id="7838"></path></svg>
        </div>
        <div>
          <!-- - -->
          <svg t="1694415584052" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7481" width="20" height="20"><path d="M960 554.666667H106.666667a21.333333 21.333333 0 0 1 0-42.666667h853.333333a21.333333 21.333333 0 0 1 0 42.666667z" fill="#2c2c2c" p-id="7482"></path></svg>
        </div>
      </div>
      <router-view class="home1"></router-view>
    </a-modal>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['windowedShow'])
  },
  data() {
    return {
    };
  },
  methods: {
    handleOk(e) {
      this.mixinConle()
    },
  },
};
</script>

<style rel="stylesheet/scss" lang="scss"  scoped>
  .windowBar {
    height: 40px;
    & > div{
      float: right;
      padding: 5px;
      overflow: hidden;
    }
    & > div:hover {
      background: #eaeaea ;
    }
    & > div:first-child:hover {
      background: #f59292;
    }
  }
</style>