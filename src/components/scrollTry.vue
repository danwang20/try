<template>
  <div>
    <div class="staDatas" :style="{ width: outWidth + 'px' }">
      <!-- 表头 -->
      <ul class="head">
        <li class="ranking">序号</li>
        <li class="name">样品名称</li>
        <li class="Spec">规格型号</li>
        <li class="surveied">取样日期</li>
        <li class="room">推送功能室</li>
        <li class="man">推送人</li>
        <li class="spen">推送时间</li>
        <li class="supply">接应时间</li>
      </ul>
      <!-- 滚动部分 -->
      <vue-seamless-scroll
        :data="trapDailyListDatas"
        :class-option="optionSetting"
        class="seamless-warps"
      >
        <ul class="item">
          <li
            v-for="(item, i) in trapDailyListDatas"
            :key="i"
            :class="{ on: (i + 1) % 2 == 0, off: (i + 1) % 2 != 0 }"
          >
            <span class="ranking" v-text="i + 1"></span>
            <span class="name">
              <!-- v-text="item.F_FullName" -->
              <a href="javascript:void(0);" :title="item.F_FullName">{{
                item.F_FullName
              }}</a>
            </span>
            <span class="Spec" v-text="item.trapDaily"></span>
            <span class="surveied" v-text="item.isSale"></span>
            <span class="room" v-text="item.noSale"></span>
            <span class="man" v-text="item.man"></span>

            <span class="spen" v-text="item.salePen"></span>
            <span class="supply" v-text="item.supply"></span>
          </li>
        </ul>
      </vue-seamless-scroll>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      trapDailyListDatas: [
        {
          F_FullName: "钢胶线1",
          trapDaily: "规格型号1",
          isSale: "2021-03-22",
          noSale: "中心实验室1",
          man: "xxxx1",
          salePen: "2021-02-25",
          supply: "2021-06-05",
        },
        {
          F_FullName: "钢胶线2",
          trapDaily: "规格型号2",
          isSale: "2021-03-22",
          noSale: "中心实验室2",
          man: "xxxx2",
          salePen: "2021-02-25",
          supply: "2021-06-05",
        },
        {
          F_FullName: "钢胶线3",
          trapDaily: "规格型号3",
          isSale: "2021-03-22",
          noSale: "中心实验室3",
          man: "xxxx3",
          salePen: "2021-02-25",
          supply: "2021-06-05",
        },
        {
          F_FullName: "钢胶线4",
          trapDaily: "规格型号4",
          isSale: "2021-03-22",
          noSale: "中心实验室4",
          man: "xxxx4",
          salePen: "2021-02-25",
          supply: "2021-06-05",
        },
        {
          F_FullName: "钢胶线5",
          trapDaily: "规格型号5",
          isSale: "2021-03-22",
          noSale: "中心实验室5",
          man: "xxxx5",
          salePen: "2021-02-25",
          supply: "2021-06-05",
        },
        {
          F_FullName: "钢胶线6",
          trapDaily: "规格型号6",
          isSale: "2021-03-22",
          noSale: "中心实验室6",
          man: "xxxx6",
          salePen: "2021-02-25",
          supply: "2021-06-05",
        },
        {
          F_FullName: "钢胶线7",
          trapDaily: "规格型号7",
          isSale: "2021-03-22",
          noSale: "中心实验室7",
          man: "xxxx7",
          salePen: "2021-02-25",
          supply: "2021-06-05",
        },
        {
          F_FullName: "钢胶线8",
          trapDaily: "规格型号8",
          isSale: "2021-03-22",
          noSale: "中心实验室8",
          man: "xxxx8",
          salePen: "2021-02-25",
          supply: "2021-06-05",
        },
        {
          F_FullName: "钢胶线9",
          trapDaily: "规格型号9",
          isSale: "2021-03-22",
          noSale: "中心实验室9",
          man: "xxxx9",
          salePen: "2021-02-25",
          supply: "2021-06-05",
        },
      ],
      outWidth: 915,
    };
  },
  watch: {
    getHidd: {
      deep: true,
      handler(val) {
        if (val == true) {
          this.outWidth = 1110;
        } else {
          this.outWidth = 915;
        }
      },
    },
  },
  computed: {
    optionSetting() {
      return {
        step: 0.5, // 数值越大速度滚动越快
        limitMoveNum: 2, // 开始无缝滚动的数据量 this.dataList.length
        hoverStop: true, // 是否开启鼠标悬停stop
        direction: 1, // 0向下 1向上 2向左 3向右
        openWatch: true, // 开启数据实时监控刷新dom
        singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
        waitTime: 1000, // 单步运动停止的时间(默认值1000ms)
      };
    },
    getHidd() {
      return this.$store.state.isHide;
    },
  },
  mounted() {
    this.changeWidth();
  },
  methods: {
    changeWidth() {
      let ishide = this.getHidd;
      if (ishide == true) {
        this.outWidth = 1110;
      } else {
        this.outWidth = 915;
      }
    },
  },
};
</script>
<style lang="scss" scope>
.staDatas {
  height: 268.5px;
  padding: 0px 5px 5px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border: 1px solid var(--side-nav-border);
  // background-color: #79abef;
  .head {
    display: flex;
    background: #0a1f5c;
    height: 50px;
    padding: px;
    margin: 0;
    color: #79abef;
    border-bottom: 2px solid #21316e;
    line-height: 50px;
    li {
      list-style: none;
    }
    .ranking {
      width: 9%;
      text-align: center;
    }
    .name {
      width: 13%;
    }
    .Spec {
      width: 13%;
      text-align: center;
    }
    .surveied {
      width: 13%;
      text-align: center;
    }
    .supply {
      width: 13%;
      text-align: center;
    }
    .man {
      width: 13%;
      text-align: center;
    }
    .room {
      width: 13%;
      text-align: center;
    }
    .spen {
      width: 13%;
      text-align: center;
    }
  }
  .seamless-warps {
    overflow: hidden;
    flex: 1;
    color: #c9c9c9;
    height: 0px;
    // margin:10px 0;
    ul {
      padding: bottom 5px;
      li {
        list-style: none;
        height: 35px;
        padding: 1px;
        display: flex;
        line-height: 35px;
        // border-bottom: 1px solid #21316e;
        .ranking {
          display: inline-block;
          width: 9%;
          text-align: center;
        }
        .name {
          width: 13%;
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;

          a {
            color: #c9c9c9;
            text-decoration: none;
          }
        }
        .Spec {
          display: inline-block;

          width: 13%;
          text-align: center;
        }
        .surveied {
          display: inline-block;

          width: 13%;
          text-align: center;
        }
        .supply {
          width: 13%;
          text-align: center;
        }
        .man {
          width: 13%;
          text-align: center;
        }
        .room {
          display: inline-block;

          width: 13%;
          text-align: center;
        }
        .spen {
          display: inline-block;

          width: 13%;

          text-align: center;
        }
      }
    }
  }
}
.on {
  background: #041047;
}
.off {
  background: #06093a;
  opacity: 0.7;
  //   background: transparent;
}
.item {
  margin: 0;
  padding: 0;
}
</style>

