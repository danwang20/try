<template>
  <div class="allCss">
    <section class="flexTop">
      <TopTitle />
    </section>
    <section class="flexSec">
      <TreeTry />
      <transition
        enter-active-class="animated bounceInRight"
        leave-active-class="animated fadeOutLeftBig"
        mode="out-in"
      >
        <component :is="path" :option="option" :ssr="ssr" @link="linkMethods" />
      </transition>
    </section>
    <footer class="bottom-nav c--bottom-nav">
      <nav class="botton-nav-container">
        <li
          v-for="(list, index) in menuLists"
          :key="index"
          @click="linkHandler(list)"
        >
          {{ list.pageName }}
        </li>
      </nav>
    </footer>
  </div>
</template>

<script>
import datas from "../data/index";
import LinkButtons from "../components/LinkButtons.vue";
import AboutView from "../views/AboutView.vue";
import Track from "../components/Track";
import Echarts from "../components/Echarts";
// import EchartsAll from "../components/EchartsAll"; //
import ScrollTry from "../components/scrollTry";
import TreeTry from "../components/TreeTry";
import Gzp from "../components/Gzp";
import flexTry from "../components/flexTry";
import TopTitle from "../components/TopTitle";
import TableTry from "../components/tableTry";
import flexTry1 from "../components/flexTry1";
export default {
  //2022-0722 修改
  name: "HelloWorld",
  data() {
    return {
      menuLists: [
        { path: "LinkButtons", pageName: "选项1", option: { a: 1 } },
        { path: "AboutView", pageName: "选项2", option: { a: 2 } },
        { path: "Track", pageName: "选项3", option: { a: 3 } },
        { path: "Echarts", pageName: "选项4", option: { a: 4 } },
        // { path: "EchartsAll", pageName: "选项5", option: { a: 5 } },
        { path: "ScrollTry", pageName: "选项6" },
        { path: "TreeTry", pageName: "选项7" },
        { path: "Gzp", pageName: "选项8" },
        { path: "flexTry", pageName: "选项9" },
        { path: "TableTry", pageName: "选项10" },
        { path: "flexTry1", pageName: "选项11" },
        { path: "13131313", pageName: "选项12" },
        { path: "14141414", pageName: "选项13" },
        { path: "15151515", pageName: "选项14" },
      ],
      path: "",
      isshow: 0,
      option: {},
      ssr: {},
    };
  },
  watch: {
    "$route.fullPath": {
      deep: true,
      handler(val) {
        // let path = val.split("?")[0];
        // if (!path) return false;
        // this.loadData();
        // this.checkZhubian()
        console.log("path:", val);
      },
    },
  },
  components: {
    LinkButtons,
    AboutView,
    Track,
    Echarts,
    // EchartsAll,
    ScrollTry,
    TreeTry,
    Gzp,
    flexTry,
    TopTitle,
    TableTry,
    flexTry1,
  },
  computed: {},
  methods: {
    // async linkHandler(list) {
    linkHandler(list) {
      console.log(list.path);
      // alert(list.path);
      // this.$emit("link", list.path);
      // this.$router.push(list.path);
      this.path = list.path;
      this.option = list.option;
      // this.$router.push('/about');
      // console.log(datas['/HydrantsSystem']);
      // let aaa = await datas["/HydrantsSystem"];
      // console.log(aaa.default[1].children[0]);
      // let bbb = aaa.default[1].children[0].linkHandler(12121);
      // console.log(bbb);
      // sessionStorage.setItem("aaaa", 1213);
      // if (list.path == 33333333) {
      //   this.isshow = 1;
      // } else if ((list.path = 44444444)) {
      //   this.isshow = 2;
      // }

      //------------
    },
    linkMethods(val) {
      console.log(val);
    },
  },
};
</script>

<style scoped>
.allCss {
  background: url("../assets/images/common/bg2.jpg") no-repeat center top;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

.flexTop {
  height: 110px;
}

.flexSec {
  position: relative;
  display: flex;
  overflow: hidden;
  height: calc(100vh - 150px);
}

.bottom-nav {
  position: relative;
  z-index: 2;
  cursor: pointer;
  font-weight: 700;
  padding-top: 4px;
  /* margin-top: calc(100vh-60px); */
}

.botton-nav-container {
  position: relative;
  height: 35px;
  line-height: 35px;
  display: flex;
  padding: 0 calc(var(2px));
  text-align: center;
}

li {
  flex-grow: 1;
  background: url("../assets/images/Nav/BottomNav/no_choose.png") no-repeat
    center center;
  background-size: 100% 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  height: 100%;
  list-style: none;
  color: chartreuse;
}

li:hover,
li.active {
  background-image: url("../assets/images/Nav/BottomNav/yes_choose.png");
}
li.alarm {
  background-image: url("../assets/images/Nav/BottomNav/alarm_choose.png");
}
</style>
