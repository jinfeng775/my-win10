<template>
  <div ref="treeWrap" class="animate__animated animate__fadeInUp" id="calendarwin10">
    <div style="width: 320px; height: 400px; color: #fff;">
      <div class="formattedDate">{{ formattedDate }}</div>
      <div class="specificDate">{{ specificDate }}</div>
      <a-calendar id="acalendar" :fullscreen="false" :header-render="headerRender" @panelChange="onPanelChange"
        :locale="zhCN" />
      <hr />
      <div style="padding: 20px;">明日气温相比今日不会有太大变化，适宜穿着短袖类衣物。</div>
    </div>
  </div>
</template>
<script>
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
export default {
  data() {
    return {
      zhCN,
      date: new Date(),
      specificDate: ''
    };
  },
  mounted() {
    let _this = this;
    _this.timer = setInterval(function () {
      _this.date = new Date();
    }, 1000)
    window.onresize = () => {
      return (() => {
        _this.calendarLoad()
      })()
    }
    this.calendarLoad()
    this.specificdate()
    this.cancelPop()
  },

  methods: {
    cancelPop(event) {
      // 日历点击弹框外面关闭
      let _this = this;
      document.addEventListener('mouseup', (e) => {
        let tree = _this.$refs.treeWrap
        if (tree) {
          if (!tree.contains(e.target)) {
            _this.$store.dispatch('setCalendarShow', false)

          }
        }
      })
    },
    specificdate() {
      // 日期展示
      let date = this.date;
      let year = date.getFullYear();
      let month = (date.getMonth() + 1).toString().padStart(2, '0');
      let day = date.getDate().toString().padStart(2, '0');
      this.specificDate = year + '年' + month + '月' + day + '日 '
    },
    calendarLoad() {
      // 日历特效
      let _this = this;
      let tbody = this.$el.querySelector('.ant-fullcalendar-tbody')
      let objLeft = _this.getOffsetLeft(tbody)
      let objTop = _this.getOffsetTop(tbody)
      tbody.addEventListener("mousemove", function (event) {
        let ev = event || window.event;
        ev.preventDefault();
        let mouseX = event.clientX + document.body.scrollLeft;//鼠标x位置
        let mouseY = event.clientY + document.body.scrollTop;//鼠标y位置
        let objX = mouseX - objLeft - 43;
        let objY = mouseY - objTop - 65;
        this.style["background-position"] = (objX) + "px " +
          (objY) + "px";
      }, true);
      tbody.addEventListener("mouseout", function (event) {
        let ev = event || window.event;
        ev.preventDefault();
        this.style["background-position"] = "-92px -92px";
      }, true)
    },
    getOffsetLeft(obj) {
      let tmp = obj.offsetLeft;
      let val = obj.offsetParent;
      while (val != null) {
        tmp += val.offsetLeft;
        val = val.offsetParent;
      }
      return tmp;
    },
    getOffsetTop(obj) {
      let tmp = obj.offsetTop;
      let val = obj.offsetParent;
      while (val != null) {
        tmp += val.offsetTop;
        val = val.offsetParent;
      }
      return tmp;
    },
    onPanelChange(value, mode) {
      // eslint-disable-next-line no-console
      console.log(value, mode);
    },
    headerRender({ value, type, onChange, onTypeChange }) {
      const start = 0;
      const end = 12;
      const monthOptions = [];
      const current = value.clone();
      const localeData = value.localeData();
      const months = [];
      for (let i = 0; i < 12; i++) {
        current.month(i);
        months.push(localeData.monthsShort(current));
      }

      for (let index = start; index < end; index++) {
        monthOptions.push(
          <a-select-option class="month-item" key={`${index}`}>
            {months[index]}
          </a-select-option>,
        );
      }
      const month = value.month();

      const year = value.year();
      const options = [];
      for (let i = year - 10; i < year + 10; i += 1) {
        options.push(
          <a-select-option key={i} value={i} class="year-item">
            {i}
          </a-select-option>,
        );
      }
      return (
        <div style={{ padding: '10px 24px' }}>
          <a-row type="flex" justify="space-between">
            <a-col>
              <a-radio-group size="small" onChange={e => onTypeChange(e.target.value)} value={type}>
                <a-radio-button value="month">月</a-radio-button>
                <a-radio-button value="year">年</a-radio-button>
              </a-radio-group>
            </a-col>
            <a-col>
              <a-select
                size="small"
                dropdownMatchSelectWidth={false}
                class="my-year-select"
                onChange={newYear => {
                  const now = value.clone().year(newYear);
                  onChange(now);
                }}
                value={String(year)}
              >
                {options}
              </a-select>
            </a-col>
            <a-col>
              <a-select
                size="small"
                dropdownMatchSelectWidth={false}
                value={String(month)}
                onChange={selectedMonth => {
                  const newValue = value.clone();
                  newValue.month(parseInt(selectedMonth, 10));
                  onChange(newValue);
                }}
              >
                {monthOptions}
              </a-select>
            </a-col>
          </a-row>
        </div>
      );
    },
  },
  computed: {
    formattedDate: function () {
      // 实时获取时分秒
      let date = this.date;
      let hours = date.getHours().toString().padStart(2, '0');
      let minutes = date.getMinutes().toString().padStart(2, '0');
      let seconds = date.getSeconds().toString().padStart(2, '0');
      return hours + ':' + minutes + ':' + seconds;
    }
  },
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
 ::v-deep .animate__animated,.animate__fadeInUp{
  --animate-duration: .5s !important;         //动画持续时间
  --animate-delay: .5s !important;              //动画延迟时间
}
#calendarwin10 {
  width: 320px;
  height: 600px;
  position: fixed;
  z-index: 999;
  bottom: 40px;
  right: 0;
  background: rgb(31, 31, 31);
  color: #fff;
  .formattedDate {
    font-size: 50px;
    text-align: left;
    padding-left: 20px;
    overflow: hidden;
  }

  .specificDate {
    text-align: left;
    color: #1890ff;
    padding-left: 30px;
    overflow: hidden;
  }

  #acalendar {
    ::v-deep .ant-fullcalendar {
      color: #fff;
      .ant-fullcalendar-tbody {
        background: rgb(31, 31, 31);
        color: white;
        background-image: radial-gradient(circle, rgb(187, 185, 185), rgba(31, 31, 31, 0.056));
        background-size: 92px 92px;
        background-repeat: no-repeat;
        background-position: -92px -92px;

        .ant-fullcalendar-selected-day {
          background-color: #1890ff;
          border: 2px solid #1890ff !important;

          .ant-fullcalendar-value {
            background: #1890ff !important;
          }
        }

        td {
          background-clip: content-box;
          padding: 2px;
          background-color: rgb(31, 31, 31);
          border: 0.5px solid rgb(31, 31, 31);
        }
      }

      .ant-fullcalendar-next-month-btn-day,
      .ant-fullcalendar-last-month-cell {
        .ant-fullcalendar-value {
          color: rgba(200, 200, 200, 0.25)
        }
      }

      .ant-fullcalendar-value {
        color: #fff;
      }
    }
  }
}
</style>