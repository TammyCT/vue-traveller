<template>
    <div class="header-item">
        <!-- <template  v-if="userName" class="user-info-bar">
          <el-avatar :src="this.headImg" class="header-img"></el-avatar>
          <el-dropdown>
            <span class="el-dropdown-link">
                {{userName}}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>我的主页</el-dropdown-item>
                <el-dropdown-item>写文章</el-dropdown-item>
                <el-dropdown-item>登出</el-dropdown-item>
            </el-dropdown-menu>
            </el-dropdown>
        </template>
        <template v-else>
          <span>
            <router-link to="/login" class="router-link-active">{{ $t('message.sLogin') }}</router-link>
          </span>
          <span>|</span>
          <span>
             <router-link to="/sign" class="router-link-active">{{ $t('message.sSignUp') }}</router-link>
          </span>
        </template> -->

            <router-link to="/login" class="router-link-active">{{ $t('message.sLogin') }}</router-link>
          <span class="barrier">|</span>
           <router-link to="/sign" class="router-link-active">{{ $t('message.sSignUp') }}</router-link>
    </div>
</template>

<script>
    export default {
        name: "user-info-bar",
        props: ['userName','headImg'],
    }

</script>

<style scoped>
    .el-dropdown-link {
        cursor: pointer;
        /* color: #409EFF; */
    }
    .el-icon-arrow-down {
        font-size: 12px;
    }
    .header-item{
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

    }
    .header-img{
        margin-right: 15px;
    }
    .barrier{
        padding-left : 5px;
        padding-right: 5px; 
        color: #909399;
    }
    .router-link-active{
        color: #909399;
    }
</style>
