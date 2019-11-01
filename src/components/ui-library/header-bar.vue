<template>
  <el-header class="header-bar">
    <el-row :gutter="20">
      <el-col :span="4">
        <img src="../../../static/TravellerLogo.png" alt="" class="logo-pic">
      </el-col>
      <el-col :span="16">
        <el-menu class="el-menu-demo" mode="horizontal">
          <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="2">目的地</el-menu-item>
          <el-menu-item index="3">游记</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="4">
        <span>
          <router-link to="/login">登陆</router-link>
        </span>
        <span>|</span>
        <span>
          注册
        </span>
      </el-col>
    </el-row>
  </el-header>
</template>

<script>
  export default {
    name: 'headerBar'
  }
</script>

<style scoped>


  el-header {
    /*background-color: #B3C0D1;*/
    /*color: #333;*/
    text-align: center;
    line-height: 60px;
  }

  .logo-pic{
    height: 60px;
  }



</style>
