<template>
  <section class="flexSection">
    <section class="flexDiv">
      <Gzp />
    </section>
    <section class="flexDiv">
      <section class="flexDiv_inner">
        <TableTry />
      </section>
      <section class="flexDiv_inner">
        <TableTry />
      </section>
    </section>
    <section class="flexDiv">
      <section class="flexSco">
        <ScrollTry />
      </section>
      <section class="flexSco">
        <ScrollTry />
      </section>
      <section class="flexSco">
        <ScrollTry />
      </section>
    </section>
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
    return {};
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
  /* width: calc(100vw); */
  height: calc(100vh - 163px);
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
}

.flexDiv {
  width: calc(100vw - 400px);
  /* flex: 1; */
  height: calc(100vh -163px);
  /* margin: 2px; */
  overflow: hidden;
}

.flexSco {
    flex: 1;
}

.flexDiv:nth-child(1) {
  width: 800px;
  height: calc(60vh - 113px);
}

.flexDiv:nth-child(2) {
  width: 800px;
  height: calc(40vh - 88px);
  display: flex;
}

.flexDiv_inner {
  width: 400px;
  height: calc(40vh - 88px);
}

.flexCard {
  width: 100%;
  height: 100%;
}
</style>