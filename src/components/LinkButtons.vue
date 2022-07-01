<template>
  <section class="link-buttons c--link-buttons">
    <!-- <div class="link-buttons-container">
      <el-button
        v-for="(item, index) in items"
        :key="index"
        :type="item.type"
        size="mini"
        @click="clickHandler(item)"
      >
        {{ item.label }}
      </el-button>
    </div> -->
    <h1>
      This is an about link This is an about link This is an about link This is
      an about link This is an about link
    </h1>
    <h1>
      This is an about link This is an about link This is an about link This is
      an about link This is an about link
    </h1>
    <h1>
      This is an about link This is an about link This is an about link This is
      an about link This is an about link
    </h1>
    <h1>
      This is an about link This is an about link This is an about link This is
      an about link This is an about link
    </h1>
    <h1>
      This is an about link This is an about link This is an about link This is
      an about link This is an about link
    </h1>
    <h1>
      This is an about link This is an about link This is an about link This is
      an about link This is an about link
    </h1>
    <h1>
      This is an about link This is an about link This is an about link This is
      an about link This is an about link
    </h1>
    <h1>
      This is an about link This is an about link This is an about link This is
      an about link This is an about link
    </h1>
    <h1>
      This is an about link This is an about link This is an about link This is
      an about link This is an about link
    </h1>
    <h1>
      This is an about link This is an about link This is an about link This is
      an about link This is an about link
    </h1>

    <h1>
      This is an about link This is an about link This is an about link This is
      an about link This is an about link
    </h1>
    <h1>
      This is an about link This is an about link This is an about link This is
      an about link This is an about link
    </h1>
    <h1>
      This is an about link This is an about link This is an about link This is
      an about link This is an about link
    </h1>
    <h1>
      This is an about link This is an about link This is an about link This is
      an about link This is an about link
    </h1>
  </section>
</template>

<script>
export default {
  name: "LinkButtons",
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
  },
  data() {
    return {
      defaultOption: {
        size: "small",
        align: "left",
      },
      items: [
        { label: 1, type: "primary" },
        { label: 2, type: "success" },
        { label: 3, type: "info" },
        { label: 4, type: "warning" },
        { label: 5, type: "danger" },
      ],
    };
  },
  computed: {
    // items() {
    //   return this.option.items || [];
    // },
    // curOption() {
    //   return Object.assign({}, this.defaultOption, this.option);
    // },
  },
  methods: {
    clickHandler(item) {
      const methods = this.methods;
      methods.clickHandler && methods.clickHandler.call(this, item);
    },
  },
};
</script>

<style scoped>
.link-buttons {
  position: relative;
  height: auto;
  background-color: rgb(116, 161, 10);
}
.link-buttons-container {
  position: relative;
  height: auto;
  padding-bottom: var(--extra-space);
}
.link-buttons-left {
  text-align: left;
}
.link-buttons-center {
  text-align: center;
}
.link-buttons-right {
  text-align: right;
}
</style>
