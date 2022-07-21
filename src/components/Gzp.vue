<template>
  <section id="gzp-box" class="gzp-box">
    <div class="gzp-content">
      <div
        v-for="(list, index) in lists"
        :key="index"
        @click="asd(list)"
        class="gzp-list"
      >
        {{ list.labelKey }}
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "GzpBox",
  props: {
    option: {
      type: Object,
      default: () => {
        return {};
      },
    },
    methods: {
      type: Object,
      default: () => {
        return {};
      },
    },
    api: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  data() {
    return {
      lists: [
        { labelKey: "1" },
        { labelKey: "2" },
        { labelKey: "3" },
        { labelKey: "4" },
        { labelKey: "5" },
        { labelKey: "6" },
        { labelKey: "7" },
        { labelKey: "8" },
        { labelKey: "9" },
        { labelKey: "10" },
        { labelKey: "11" },
        { labelKey: "12" },
        { labelKey: "13" },
        { labelKey: "14" },
        { labelKey: "15" },
        { labelKey: "16" },
        { labelKey: "17" },
        { labelKey: "18" },
        { labelKey: "19" },
        { labelKey: "20" },
        { labelKey: "21" },
        { labelKey: "22" },
        { labelKey: "23" },
        { labelKey: "24" },
        { labelKey: "25" },
        { labelKey: "26" },
        { labelKey: "27" },
        { labelKey: "28" },
        { labelKey: "29" },
        { labelKey: "30" },
        { labelKey: "31" },
        { labelKey: "32" },
        { labelKey: "33" },
        { labelKey: "34" },
        { labelKey: "35" },
        { labelKey: "36" },
        { labelKey: "37" },
        { labelKey: "38" },
        { labelKey: "39" },
        { labelKey: "40" },
        { labelKey: "41" },
        { labelKey: "42" },
        { labelKey: "43" },
        { labelKey: "44" },
        { labelKey: "45" },
        { labelKey: "46" },
        { labelKey: "47" },
        { labelKey: "48" },
        { labelKey: "49" },
        { labelKey: "50" },
        { labelKey: "51" },
        { labelKey: "52" },
        { labelKey: "53" },
        { labelKey: "54" },
        { labelKey: "55" },
        { labelKey: "56" },
        { labelKey: "57" },
        { labelKey: "58" },
        { labelKey: "59" },
        { labelKey: "60" },
      ],
      defaultOption: {
        labelKey: "gzpname",
      },
      isRoad: false,
      isHide: false,
    };
  },
  computed: {
    getHide() {
      return this.$store.state.isHide;
    },
  },
  mounted() {},
  methods: {
    asd(object) {
      console.log(object.labelKey);
      // console.log(aaa);
      this.$store.commit("changeHide", this.isHide);
      // let aaa = this.$store.state.isHide
      console.log(this.getHide);
    },
  },
};
</script>

<style scoped>
.gzp-box {
  position: relative;
  width: 800px;
  height: 100%;
  /* top: 50px; */
  /* left: 100px; */
  display: flex;
  flex-direction: column;
  /* background-color: var(--table-default-background-color); */
  border: 1px solid var(--gzp-default-border);
}
.gzp-box h4 {
  position: relative;
  height: auto;
  text-align: center;
  font-size: 1.3em;
  margin: 0;
  padding: var(--extra-space) 0;
}
.gzp-content {
  position: relative;
  flex: 1;
  width: 100%;
  height: calc(100vh - 40px);
  overflow: auto;
  padding-top: var(--extra-space);
  text-align: center;
  /* display: flex; */
}
.gzp-list {
  position: relative;
  display: inline-block;
  width: 180px;
  text-align: center;
  padding: var(--middle-space) var(--extra-space);
  background-color: var(--gzp-default-background-color);
  border: 1px solid var(--gzp-default-border);
  border-radius: 2px;
  margin-left: var(--middle-space);
  margin-bottom: var(--extra-space);
  font-size: 12px;
  color: white;
  /* min-height: 50px; */
}
.gzp-list-abnormal {
  animation: blink 1s infinite linear;
  border-color: var(--error-color-default);
}
</style>