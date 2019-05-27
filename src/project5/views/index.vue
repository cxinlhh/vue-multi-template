<template>
  <div class="index">
    <button @click="jumpPage1">page1</button>
    <button @click="getTwoSteapData">getTwoSteapData</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Index",
  data() {
    return {
      msg: ""
    };
  },
  methods: {
    jumpPage1() {
      this.$router.push("/page1");
    },
    getOneSteapData() {
      return axios({
        url: "/userInfo/oneStep",
        methods: "get"
      }).then(res => {
        console.log(res);
        return res.data;
      });
    },
    async getTwoSteapData(){
      let vm = this;
       let _oneData = await vm.getOneSteapData();
       console.log(_oneData.data * 10)
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
