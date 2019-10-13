<template>
    <div class="search-outer-box">
      <div>
        <el-radio v-model="radio" label="1">全部</el-radio>
        <el-radio v-model="radio" label="2">目的地</el-radio>
        <el-radio v-model="radio" label="3">游记</el-radio>
      </div>
      <div>
        <el-input
          placeholder="搜索目的地/攻略"
          v-model="input"
          clearable class="input-search">
        </el-input>
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
      </div>
    </div>
</template>

<script>
    export default {
      name: "search-box",
      data () {
        return {
          radio: '1',
          input: ''
        };
      }
    }

</script>

<style scoped>
  .input-search{
    width: 300px;
  }

  .search-outer-box{
    width: 400px;
    background-color: rgba(0,0,0,.3);
    padding: 20px;
    border-radius: 4px
  }

</style>
