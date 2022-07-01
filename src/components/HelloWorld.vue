<template>
  <div>
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
    <transition
      enter-active-class="animated bounceInRight"
      leave-active-class="animated fadeOutLeftBig"
      mode="out-in"
    >
      <component :is="path" />
      <!-- <LinkButtons v-if="isshow == 1" />
      <AboutView v-if="isshow == 2" /> -->
    </transition>
  </div>
</template>

<script>
import datas from "../data/index";
import LinkButtons from "../components/LinkButtons.vue";
import AboutView from "../views/AboutView.vue";
export default {
  name: "HelloWorld",
  data() {
    return {
      menuLists: [
        { path: "LinkButtons", pageName: "选项1" },
        { path: "AboutView", pageName: "选项2" },
        { path: "33333333", pageName: "选项3" },
        { path: "44444444", pageName: "选项4" },
        { path: "66666666", pageName: "选项5" },
        { path: "77777777", pageName: "选项6" },
        { path: "88888888", pageName: "选项7" },
        { path: "99999999", pageName: "选项8" },
        { path: "10101010", pageName: "选项9" },
        { path: "11111111", pageName: "选项10" },
        { path: "12121212", pageName: "选项11" },
        { path: "13131313", pageName: "选项12" },
        { path: "14141414", pageName: "选项13" },
        { path: "15151515", pageName: "选项14" },
      ],
      path: "",
      isshow: 0,
    };
  },
  components: {
    LinkButtons,
    AboutView,
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
    },
  },
};
</script>

<style scoped>
.bottom-nav {
  position: relative;
  z-index: 2;
  cursor: pointer;
  font-weight: 700;
  padding-top: 4px;
  margin-top: calc(100vh-60px);
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
