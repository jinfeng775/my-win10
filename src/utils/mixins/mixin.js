const mixin = {
  data() {
    return {
      msg: "我是张三"
    }
  },
  methods: {
    mixinOpen(url) {
      console.log("%c Line:9 🍞 conle", "font-size:16px;color:#ffffff;background:#3f7cff", '打开应用');
      this.$store.dispatch('setWindowedShoww', true)
      this.$router.push(`/` + url).catch(() => { })
    },
    mixinConle() {
      console.log("%c Line:9 🍞 conle", "font-size:16px;color:#ffffff;background:#3f7cff", '关闭应用');
      this.$store.dispatch('setWindowedShoww', false)
      let thiz = this
      setTimeout(() => {
        thiz.$router.push(`/`).catch(() => { })
      }, 300);
    }
  }
}
export default mixin;