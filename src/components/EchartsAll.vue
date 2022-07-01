<template>
  <div id="app" style="width: 100%; height: 800px"></div>
</template>

<script>
// import echarts from "echarts";
// import "./assets/mapdata/china.js";
// import "./assets/mapdata/province/province.js";
import * as echarts from 'echarts'
import "../assets/mapdata/china"
import "../assets/mapdata/province/province"
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
  mounted() {
    var myChart = echarts.init(document.getElementById("app"));

    function randomValue() {
      return Math.round(Math.random() * 1000);
    }

    var provinces = [
      "北京",
      "天津",
      "上海",
      "重庆",
      "河北",
      "河南",
      "云南",
      "辽宁",
      "黑龙江",
      "湖南",
      "安徽",
      "山东",
      "新疆",
      "江苏",
      "浙江",
      "江西",
      "湖北",
      "广西",
      "甘肃",
      "山西",
      "内蒙古",
      "陕西",
      "吉林",
      "福建",
      "贵州",
      "广东",
      "青海",
      "西藏",
      "四川",
      "宁夏",
      "海南",
      "台湾",
      "香港",
      "澳门",
    ];

    var optionChina = {
      geo: {
        map: "china",
        label: {
          normal: {
            show: true,
            textStyle: {
              color: "rgba(0,0,0,0.4)",
            },
          },
        },
        itemStyle: {
          normal: {
            borderColor: "rgba(0, 0, 0, 0.2)",
          },
          emphasis: {
            areaColor: null,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowBlur: 20,
            borderWidth: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
      series: [
        {
          name: "categoryA",
          type: "map",
          geoIndex: 0,
          tooltip: { show: false },
          data: [
            { name: "北京", value: randomValue() },
            { name: "天津", value: randomValue() },
            { name: "上海", value: randomValue() },
            { name: "重庆", value: randomValue() },
            { name: "河北", value: randomValue() },
            { name: "河南", value: randomValue() },
            { name: "云南", value: randomValue() },
            { name: "辽宁", value: randomValue() },
            { name: "黑龙江", value: randomValue() },
            { name: "湖南", value: randomValue() },
            { name: "安徽", value: randomValue() },
            { name: "山东", value: randomValue() },
            { name: "新疆", value: randomValue() },
            { name: "江苏", value: randomValue() },
            { name: "浙江", value: randomValue() },
            { name: "江西", value: randomValue() },
            { name: "湖北", value: randomValue() },
            { name: "广西", value: randomValue() },
            { name: "甘肃", value: randomValue() },
            { name: "山西", value: randomValue() },
            { name: "内蒙古", value: randomValue() },
            { name: "陕西", value: randomValue() },
            { name: "吉林", value: randomValue() },
            { name: "福建", value: randomValue() },
            { name: "贵州", value: randomValue() },
            { name: "广东", value: randomValue() },
            { name: "青海", value: randomValue() },
            { name: "西藏", value: randomValue() },
            { name: "四川", value: randomValue() },
            { name: "宁夏", value: randomValue() },
            { name: "海南", value: randomValue() },
            { name: "台湾", value: randomValue() },
            { name: "香港", value: randomValue() },
            { name: "澳门", value: randomValue() },
          ],
        },
      ],
    };

    myChart.setOption(optionChina);

    myChart.on("click", (params) => {
      var curName = params.name;
      console.log(curName);

      // indexOf 如果要检索的字符串值没有出现，则该方法返回 -1。
      if (provinces.indexOf(curName) > -1) {
        // 切换地图
        var optionProvince = JSON.parse(JSON.stringify(optionChina));
        optionProvince.geo.map = curName;
        myChart.setOption(optionProvince);
      } else {
        myChart.setOption(optionChina);
      }
    });
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html,
body {
  height: 100%;
}
body {
}
#app {
  height: 100%;
}
</style>
