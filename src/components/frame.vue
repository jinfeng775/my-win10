<template>
<!-- 桌面 -->
 <div @contextmenu.prevent="onContextmenu" class="frame">
  <div >
    <div class="software">
      <div>
        <span class="svg-container">
          <svg t="1694152666943" class="icon" viewBox="0 0 1275 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10554" width="32" height="32"><path d="M1166.536134 0H109.362763a109.362763 109.362763 0 0 0-109.362763 109.362763v607.327874a109.362763 109.362763 0 0 0 109.362763 109.362763h437.45105v125.038092h-121.028124a36.454254 36.454254 0 1 0 0 72.908508h423.962976a36.454254 36.454254 0 0 0 0-72.908508h-118.840869v-125.038092H1166.536134a109.362763 109.362763 0 0 0 109.362762-109.362763V109.362763a109.362763 109.362763 0 0 0-109.362762-109.362763zM667.841937 951.091492h-60.14952v-125.038092h60.14952zM1202.990388 716.690637a36.454254 36.454254 0 0 1-36.454254 36.454254H109.362763a36.454254 36.454254 0 0 1-36.454255-36.454254V109.362763a36.454254 36.454254 0 0 1 36.454255-36.454255h1057.173371a36.454254 36.454254 0 0 1 36.454254 36.454255z" fill="#ffffff" p-id="10555"></path></svg>
        </span>
      </div>
      <div>
        我的电脑
      </div>
    </div>
  </div>
 </div>
</template>

<script>
export default {
  methods: {
    onContextmenu(event) {
      this.$contextmenu({
        items: [
          {
            label: "查看(V)",
            onClick: () => {
              this.message = "返回(B)";
              console.log("返回(B)");
            }
          },
          { label: "排序方式(O)", disabled: true },
          { label: "刷新(E)", disabled: true },
          { label: "粘贴(P)", disabled: false },
          { label: "新建(R)", divided: true },
          { label: "投射(C)...", divided: true },
          {
            label: "使用网页翻译(T)",
            divided: true,
            minWidth: 0,
            children: [{ label: "翻译成简体中文" }, { label: '<a-icon type="right" />' }]
          },
          {
            label: "截取网页(R)",
            minWidth: 0,
            children: [
              {
                label: "截取可视化区域",
                onClick: () => {
                  this.message = "截取可视化区域";
                  console.log("截取可视化区域");
                }
              },
              { label: "截取全屏" }
            ]
          },
          { label: "查看网页源代码(V)", icon: "el-icon-view" },
          { label: "检查(N)" }
        ],
        event, // 鼠标事件信息
        customClass: "custom-class", // 自定义菜单 class
        zIndex: 3, // 菜单样式 z-index
        minWidth: 230 // 主菜单最小宽度
      });
      return false;
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss"  scoped>
  .frame {
    position: absolute;
    height: 100%;
    width: 100%;
    bottom: 40px;
    background-image: url('../assets/images/win10bg.jpg');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    color: #fff;
    top: 0;
    .software{
      width: 62px;
      border: 1px #959595 dashed ;
      &>div {
        width: 60px;
        text-align: center;
      }
    }
  }
</style>