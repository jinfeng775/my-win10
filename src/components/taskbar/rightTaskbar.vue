<template>
  <div>
    <div>
      {{formattedDate}}
    </div>
  </div>
</template>

<script>
export default {
  data: {
    date: new Date()
  },
  mounted() {
    var _this = this;
    this.timer = setInterval(function () {
      _this.date = new Date();
    }, 1000)
  },
  computed: {
  formattedDate: function () {
    var date = this.date;
    var year = date.getFullYear();
    var month = (date.getMonth() + 1).toString().padStart(2, '0');
    var day = date.getDate().toString().padStart(2, '0');
    var hours = date.getHours().toString().padStart(2, '0');
    var minutes = date.getMinutes().toString().padStart(2, '0');
    var seconds = date.getSeconds().toString().padStart(2, '0');
    return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;
  }
}
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
</style>