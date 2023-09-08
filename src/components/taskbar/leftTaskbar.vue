<template>
  <div style="margin-top: 5px;" @mouseover="falg = true" @mouseleave="falg = false" class="winKey">
    <span class="svg-container">
        <svg v-if="falg" t="1694142196277" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4072" width="22" height="22"><path d="M430.59456 494.1504 430.59456 81.93536 7.04 141.18528 7.04 494.1504Z" fill="#32BCEA" p-id="4073"></path><path d="M465.88672 494.1504 1016.32 494.1504 1016.32 0 465.88672 77.00864Z" fill="#32BCEA" p-id="4074"></path><path d="M430.59456 529.44256 7.04 529.44256 7.04 882.41152 430.59456 941.664Z" fill="#32BCEA" p-id="4075"></path><path d="M465.88672 529.44256 465.88672 946.59072 1016.32 1023.59168 1016.32 529.44256Z" fill="#32BCEA" p-id="4076"></path></svg>
        <svg v-else t="1694142196277" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4072" width="22" height="22"><path d="M430.59456 494.1504 430.59456 81.93536 7.04 141.18528 7.04 494.1504Z" fill="#ffffff" p-id="4073"></path><path d="M465.88672 494.1504 1016.32 494.1504 1016.32 0 465.88672 77.00864Z" fill="#ffffff" p-id="4074"></path><path d="M430.59456 529.44256 7.04 529.44256 7.04 882.41152 430.59456 941.664Z" fill="#ffffff" p-id="4075"></path><path d="M465.88672 529.44256 465.88672 946.59072 1016.32 1023.59168 1016.32 529.44256Z" fill="#ffffff" p-id="4076"></path></svg>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      falg:false
    };
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.winKey {
  width: 30px;
  height: 30px;
  font-size:16px;
  // background: url('../../assets/images/win.png');
  background-size: cover;
  background-position: center;
  margin: 0 auto;
}
.winKey:hover {
  // background: url('../../assets/images/winB.png');
    background-size: cover;
  background-position: center;
  margin: 0 auto;
}
</style>

