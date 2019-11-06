<template>
  <el-header class="header-bar">
    <el-row :gutter="20">
      <el-col :span="4">
        <img src="../../../static/TravellerLogo.png" alt="" class="logo-pic">
      </el-col>
      <el-col :span="16">
        <el-menu class="el-menu-demo" mode="horizontal">
          <el-menu-item index="1">{{ $t('message.sHome') }}</el-menu-item>
          <el-menu-item index="2">{{ $t('message.sDestination') }}</el-menu-item>
          <el-menu-item index="3">{{ $t('message.sTravelRecord') }}</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="2">
          <user-info-bar :userName="userName" :headImg="headImg"></user-info-bar>
      </el-col>
      <el-col :span="2">
        <el-select  v-model="locale" @change="$i18n.locale = locale" placeholder="语言">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-col>
    </el-row>
    
  </el-header>
  
</template>

<script>
  import userInfo from '../ui-library/user-info-bar'
  export default {
    name: 'headerBar',
    components: {
      'user-info-bar' : userInfo
    },
    props: ['userName','headImg'],
    data() {
      return {
        locale: 'en-US',
        options: [{
          value: 'en-US',
          label: 'English'
        }, {
          value: 'zh-CN',
          label: '中文'
        }],
        value: ''
      }
    }
  }
</script>

<style scoped>


  el-header{
    /*background-color: #B3C0D1;*/
    /*color: #333;*/
    text-align: center;
    line-height: 60px;
  }

  .el-col{
    height: 60px;
  }

  .logo-pic{
    height: 60px;
  }


</style>
