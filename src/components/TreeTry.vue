<template>
  <div>
    <el-tree
      class="filter-tree"
      :data="data"
      :props="defaultProps"
      default-expand-all
      :filter-node-method="filterNode"
      ref="tree"
      highlight-current
      node-key="id"
    >
    </el-tree>
    <div class="side-nav-control" @click="mouseEvent" id="jiantou">
      <i
        :class="!isHidden ? 'el-icon-caret-left' : 'el-icon-caret-right'"
        @click="showTree"
      />
    </div>
  </div>
</template>

<script>
export default {
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val);
    },
  },
  computed: {
    getHidd() {
      return this.$store.state.isHide;
    },
  },
  methods: {
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    },

    transEnd() {
      console.log(1);
    },

    mouseEvent() {
      this.isHidden = !this.isHidden;
      if (this.isHidden === true) {
        this.showTree();
      } else {
        this.showTree();
      }
    },

    showTree() {
      if (this.isHidden == true) {
        this.$refs.tree.$el.style.marginLeft = "-200px";
        document.getElementById("jiantou").style.left = "4px";
        this.$store.commit("changeHide", true);
        console.log(this.getHidd,1);
      } else {
        this.$refs.tree.$el.style.marginLeft = "0px";
        document.getElementById("jiantou").style.left = "184px";
        this.$store.commit("changeHide", false);
        console.log(this.getHidd,2);
      }
    },
  },

  data() {
    return {
      filterText: "",
      data: [
        {
          id: 1,
          label: "一级 1",
          children: [
            {
              id: 4,
              label: "二级 1-1",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1",
                },
                {
                  id: 10,
                  label: "三级 1-1-2",
                },
              ],
            },
          ],
        },
        {
          id: 2,
          label: "一级 2",
          children: [
            {
              id: 5,
              label: "二级 2-1",
            },
            {
              id: 6,
              label: "二级 2-2",
            },
          ],
        },
        {
          id: 3,
          label: "一级 3",
          children: [
            {
              id: 7,
              label: "二级 3-1",
            },
            {
              id: 8,
              label: "二级 3-2",
            },
          ],
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
      },
      isHidden: false,
    };
  },
};
</script>

<style scoped>
.filter-tree {
  width: 200px;
  height: calc(100vh - 163px);
  border: 1px solid var(--side-nav-border);
  margin-left: 0px;
}

.side-nav-control {
  position: relative;
  top: -550px;
  left: 184px;
  width: 10px;
  height: 100px;
  line-height: 100px;
  background-color: var(--side-nav-border);
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  cursor: pointer;
  color: #fff;
  text-align: center;
  font-size: 12px;
}
</style>