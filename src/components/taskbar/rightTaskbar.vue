<template>
  <div>
    <div class="dater">
      {{ formattedDate }}
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      date: new Date(),
    }
  },
  methods: {
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
      var hours = date.getHours().toString().padStart(2, '0');
      var minutes = date.getMinutes().toString().padStart(2, '0');
      var seconds = date.getSeconds().toString().padStart(2, '0');
      return hours + ':' + minutes
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dater {
  color: #fff;
}
</style>