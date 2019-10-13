<template>
  <div>
    <el-container>
      <header-bar>

      </header-bar>
      <div>
        <el-main>
          <el-carousel trigger="click" height="447px">
            <el-carousel-item v-for="item in 4" :key="item">
              <h3 class="small">{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </el-main>
        <search-box>

        </search-box>
      </div>


      <el-footer>Footer</el-footer>
    </el-container>
  </div>
    
</template>

<script>
  import headerBar from '../ui-library/header-bar';
  import searchBox from '../ui-library/search-box'
  export default {
    name: 'HomePage',
    components:{
      'header-bar' : headerBar,
      'search-box' : searchBox
    }
  }
</script>

<style scoped>

  .el-header, .el-footer {
    text-align: center;
    line-height: 60px;
  }

  .el-main{
    padding: 0 !important;
  }


  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }


  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }


</style>

