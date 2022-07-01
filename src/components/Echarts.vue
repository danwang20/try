<template>
  <div id="main" style="width: 100%; height: 800px" />
</template>
<script>
// import echarts from 'echarts'
import * as echarts from 'echarts'
import JSON_CHINA from "@/map/china.json";
import JSON_HANGZHOU from "@/map/hz.json";
import JSON_XXX from "@/map/zhejiang.json";
import JSON_ALL from "@/map/all.json"

export default {
  mounted() {
    this.leftCenterMap();
  },
  methods: {
    leftCenterMap() {
      var myChart = echarts.init(document.getElementById("main")); // 拿到一个实例
      echarts.registerMap("中国", JSON_CHINA, {}); // 引入地图文件
      console.log(JSON_CHINA);
      var option = {
        series: [
          {
            type: "map",
            mapType: "中国", // 地图名称
          },
        ],
      };
      myChart.setOption(option);
    },
  },
};
</script>
