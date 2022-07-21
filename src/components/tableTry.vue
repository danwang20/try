<template>
  <el-table :data="tableData" max-height="300" class="tableTry">
    <el-table-column prop="date" label="日期" width="120"> </el-table-column>
    <el-table-column prop="name" label="姓名" width="120"> </el-table-column>
    <el-table-column prop="address" label="地址"> </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "12345",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "12345",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "12345",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "12345",
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "12345",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "12345",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "12345",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "12345",
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "12345",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "12345",
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "12345",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "12345",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "12345",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "12345",
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "12345",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "12345",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "12345",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "12345",
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "12345",
        },
        {
          date: "2016-05-0444",
          name: "王小虎",
          address: "12345",
        },
      ],
    };
  },
};
</script>

<style scoped>
.tableTry {
  width: 400px;
  height: 500px;
  border: 1px solid var(--table-default-border);
  /* background-color: var(--table-default-background-color); */
}
</style>