<template>
  <header class="top-title c--top-title">
    <div
      class="top-title-station"
    >
      <span
        class="back-btn"
        @click="back"
      >
        <span>
          <i class="el-icon-d-arrow-left" />返回上级
        </span>
      </span>
      <span>{{ station }}</span>
      <span
        :class="{'network-normal': !networkStatus}"
        class="network-warning"
        :title="!networkStatus ? '在线' : '离线'"
      >网络状态：</span>
    </div>

    <div class="top-title-center"
    style="-webkit-app-region: drag"
    >
      <img
        ondragstart="return false;"
        src="@/assets/images/common/logo.png"/>
      <h3>{{ pageTitle }}</h3>
    </div>

    <div
      id="user-info-wrap"
    >
      <div class="info-wrap-msg" v-if="iShow" >
        <el-dropdown
          v-if="!isLoginPage"
          id="m--user-menu"
          size="medium"
          @command="handleDropdownClick"
        >
          <span class="el-dropdown-link"> '你好，' <i class="el-icon-caret-bottom" /></span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="logout">
              退出登录
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="info-wrap-time">
        1234
      </div>
    </div>
  </header>
</template>

<script>
// import mixin from '@/mixins/mixin'
// import ReqUser from '../../request/request-user'
// import { ipcRenderer } from 'electron'
// import utils from "../../utils/utils";
// let connectConfig = utils.readConfig("connect.config.json");
export default {
  name: 'TopTitle',
//   mixins: [mixin],
  data () {
    return {
      userName: sessionStorage.getItem('loginId'),
      time: Date.now(),
      networkStatus: 0,
      iShow: true
    }
  },
  computed: {
    pageTitle () {
      // console.error(this.$route.path)
      // debugger
      if (this.$route.path === '/') {
        return '变电站消防集中监控系统'
      }
    },
    isLoginPage () {
      return this.$route.path === '/' || this.$route.path === '/Login'
    },
    station () {
      return sessionStorage.getItem('stationName')
    }
  },
  created () {
   
  },
  methods: {
    getTiemnow(){
     
    },
    // 下拉框点击事件处理
    handleDropdownClick (command) {
   
    },
    // 登出
    logout () {
   
    },
    // 返回上级页面
    back () {
      alert('返回上级')
    },

  }
}
</script>

<style lang="less" scoped>
header {
  position: relative;
  font-size: 28px;
  text-align: center;
  height: auto;
  // background-color: var(--table-default-background-color);
}
.top-title-center{
  position: relative;
  width: 50%;
  max-width: 700px;
  margin: 0 auto;
  height: auto;
  text-align: center;
  h3 {
    font-size: 24px;
    padding: 0;
    color: white;
    font-weight: normal;
    margin-top: 0px;
    margin-bottom: 10px;
  }
}
.top-title-station{
  position: absolute;
  height: auto;
  word-break: keep-all;
  white-space: nowrap;
  top: 4.2vh;
  left: 10px;
  font-size: 18px;
  color: var(--top-title-color);
  .back-btn{
    margin-right: calc(var(--extra-space) * 4);
    >span{
      position: relative;
      z-index: 1;
    }
    &:hover{
      cursor: pointer;
      color: var(--top-title-hover-color);
    }
    &:after{
      position: absolute;
      display: block;
      content: '';
      background: url("../assets/images/common/back.png") no-repeat top center;
      background-size: cover;
      width: 126px;
      height: 38px;
      z-index: 0;
      top: -8px;
      left: -10px;
    }
  }
}
#user-info-wrap{
  position: absolute;
  height: auto;
  word-break: keep-all;
  white-space: nowrap;
  top: 4.4vh;
  right: 10px;
  display: flex;
  font-size: 18px;
  color: var(--top-title-color);
  .info-wrap-msg{
    position: relative;
    height: auto;
    margin-right: calc(var(--large-space) * 2);
    margin-top: -1px;
  }
  /deep/ .el-dropdown{
    color: var(--top-title-color);
    font-size: 0.9em;
  }
}
.el-dropdown-link:hover{
  cursor: pointer;
}

.network-warning{
  position: relative;
  font-size: 14px;
  padding-left: 14px;
  z-index: 2;
}

.network-warning:after{
  position: absolute;
  content: '';
  display: block;
  right: -12px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  top: 50%;
  transform: translate(0, -50%);
  background-color: gray;
  cursor: pointer;
}

.network-normal:after{
  background-color: var(--success-color-default);
}

@media screen and (max-width: 1400px){
  .top-title-station{
    top: 3.6vh;
  }
  .top-title-station .back-btn{
    margin-right: calc(var(--extra-space) * 2.4);
  }
  .network-warning{
    padding-left: 12px;
  }
  #user-info-wrap{
    top: 3.8vh;
  }
}
</style>
