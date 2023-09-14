<template>
  <a-config-provider :locale="zh_CN">
    <div id="app">
      <router-view></router-view>
    </div>
  </a-config-provider>
</template>
 
<script>
import zh_CN from "ant-design-vue/lib/locale-provider/zh_CN";
export default {
  name: 'App',
  data() {
    return {
      zh_CN
    };
  }
}
</script>
<style lang="scss">
@import "./font-style/font.css";
body{
  #app{
    font-family: PingFang,serif !important;
  }
  .ant-modal-wrap  {
    text-align: center;
  }
   .windowedDialog {
    width: auto !important;
    display: inline-block;
   }
}

</style>
