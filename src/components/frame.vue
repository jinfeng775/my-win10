<template>
  <!-- 桌面 -->
  <div @click="cancelPop" @contextmenu.prevent="onContextmenu" class="frame">
  <windowed></windowed>
    <div class="software_warp">
      <draggable element="div" v-model="app" animation="500">
        <div @dblclick="open(item.classIcon)" :key="i" v-for="(item, i) in app" class="software">
          <div>
            <svg-icon :icon-class="item.classIcon" size="30"></svg-icon>
          </div>
          <div>
            {{ item.name }}
          </div>
        </div>
      </draggable>
    </div>

  </div>
</template>

<script>
import draggable from 'vuedraggable'
import windowed from '../components/windowed/index.vue'
import { testLogin } from '../api/test'
export default {
  data() {
    return {
      numbers: [],
      app: [{
        classIcon: '电脑',
        name: '电脑',
        i: 30
      }, {
        classIcon: '浏览器',
        name: '浏览器',
        i: 30
      }, {
        classIcon: '垃圾桶',
        name: '垃圾桶',
        i: 30
      },
      {
        classIcon: '反馈意见',
        name: '反馈意见',
        i: 30
      },
      {
        classIcon: 'txt',
        name: '新建文本',
        i: 30
      },
      {
        classIcon: 'word',
        name: '我的word',
        i: 30
      },
      {
        classIcon: '新建文件夹',
        name: '新建文件夹',
        i: 30
      },
      {
        classIcon: 'excel',
        name: 'excel',
        i: 30
      },
      {
        classIcon: '日历',
        name: '日历',
        i: 30
      }, {
        classIcon: '新建文件夹',
        name: '我的文件',
        i: 30
      }
      ]
    };
  },
  created() {
    this.test()
  },
  methods: {
    test(){
      let data = {
        'u':'123123'
      }
      testLogin(data).then(res => {
        console.log("%c Line:84 🌶 res", "font-size:16px;color:#ffffff;background:#ffdd4d", res);
      })
    },
    open(item){
      console.log("%c Line:86 🍤 item", "font-size:16px;color:#ffffff;background:#33a5ff", item);
      if (item === '日历') {
       this.mixinOpen('calendarMax')
      }

    },
    showModal() {
      this.$store.dispatch('setWindowedShoww', true)
    },
    cancelPop(){
      this.$store.dispatch('setCalendarShow', false)
    },
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
  },
  components: {
    //调用组件
    draggable,
    windowed
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

  .software_warp {
    &>div {
      display: flex;
      flex-wrap: wrap;
      height: 710px;
      flex-direction: column;
      align-content: flex-start
    }

  }

  .software {
    padding: 5px;
    text-align: center;
    width: 68px;
    border: 1px #a9a9a900 dashed;
    margin: 10px 10px;

    &>div {
      width: 60px;
      text-align: center;
    }

    &:hover {
      border: 1px #81818193 dashed;
    }
  }
}
</style>