<template>
  <div>
    <button @click="jumpIndex">jumpIndex</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {
    jumpIndex() {
      this.$router.push("/");
    },
    goBack() {
      console.log("sdsds");
      this.$confirm("是否离开当前页面, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          window.history.back();
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消"
          });
        });
    }
  },

  // 监听路由跳转
  beforeRouteLeave(to, from, next) {
    var vm = this;
    this.$confirm("是否离开当前页面, 是否继续?", "提示", {
      confirmButtonText: "确定",
      cancelButtonText: "取消",
      type: "warning"
    })
      .then(() => {
        next();
      })
      .catch(() => {
        this.$message({
          type: "info",
          message: "已取消"
        });
      });
  },
  mounted() {
    if (window.history && window.history.pushState) {
      history.pushState(null, null, document.URL);
      window.addEventListener("popstate", this.goBack, false);   //监听浏览器history行为
    }
  },
  destroyed() {
    window.removeEventListener("popstate", this.goBack, false);
  }
};
</script>
<style scoped>
</style>