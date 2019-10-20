<template>
    <div class="main-box">
      <el-row :gutter="8" class="group-outer-box">
      <el-col :span="2" v-for="item of searchGroup">
        <el-card shadow="hover" class="group-box">
          {{item}}
        </el-card>
      </el-col>
    </el-row>
    </div>
</template>

<script>
    export default {
        name: "main-page-content",
      data(){
          return{
            searchGroup : ['自由行','跟团游','机票','酒店','签证','邮轮']
          }
      }
    }
</script>

<style scoped>
  .group-box{
    cursor: pointer;
  }
  .group-outer-box{
    display: flex;
    width: 100%;
    flex-direction: row;  /* 子元素横向排列 */
    justify-content: center; /* 相对父元素水平居中 */
  }

  .main-box{
    padding: 10px;
  }

</style>
