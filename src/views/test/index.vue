<template>
  <div class="hello">
    <template>
  <el-radio v-model="radio" label="1">备选项1111</el-radio>
  <el-radio v-model="radio" label="2">备选项123123123</el-radio>
</template>


  </div>
</template>

<script>
  export default {
    data () {
      return {
        radio: '1'
      };
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
