<template>
  <section class="flexSection">
    <div v-for="(list, index) in indexList" :key="index" class="flexDiv">
      <section class="flexCard">
        <component :is="list.path" />
      </section>
    </div>
  </section>
</template>

<script>
import TreeTry from "../components/TreeTry";
import Gzp from "../components/Gzp";
import Track from "../components/Track";
import Echarts from "../components/Echarts";
import ScrollTry from "../components/scrollTry";
import TableTry from "../components/tableTry";
export default {
  data() {
    return {
      indexList: [
        { path: "TreeTry" },
        { path: "Gzp" },
        { path: "TableTry" },
        { path: "ScrollTry" },
        { path: "ScrollTry" },
        { path: "ScrollTry" },
      ],
    };
  },
  components: {
    TreeTry,
    Gzp,
    Track,
    Echarts,
    ScrollTry,
    TableTry,
  },
};
</script>

<style scoped>
.flexSection {
  position: relative;
  display: flex;
  flex-direction: column;
  width: calc(100vw);
  height: calc(100vh - 163px);
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
}

.flexDiv {
  width: calc(43vw);
  /* flex: 1; */
  height: calc(25vh -50px);
  /* margin: 2px; */
  overflow: hidden;
}

.flexDiv:nth-child(1) {
  width: 220px;
  height: 100%;
}

.flexDiv:nth-child(2) {
  width: 800px;
  height: calc(60vh - 113px);
}

.flexDiv:nth-child(3) {
  width: 800px;
  height: calc(40vh - 88px);
}

.flexCard {
  width: 100%;
  height: 100%;
}
</style>