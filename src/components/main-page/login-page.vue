<template>
    <div class="login-page">
    <el-card class="login-box">
        <img src="../../../static/TravellerLogo.png" alt="" class="logo-pic">
        <el-form :label-position="right" label-width="80px" :model="formLabelAlign">
            <el-form-item label="UserName">
                <el-input placeholder="请输入用户名" v-model="loginForm.username"></el-input>
            </el-form-item>
            <el-form-item label="Password">
                <el-input placeholder="请输入密码" v-model="loginForm.password" show-password></el-input>
            </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="login()">Login</el-button>
            </el-form-item>
        </el-form>
    </el-card>
    </div>
</template>

<script>
    export default {
        name: 'loginPage',
        data() {
            return {
                loginForm: {
                username: '',
                password: ''
                }
            };
        },
        methods:{
            login(){
                console.log(this.loginForm)
            }
        }
    }
</script>

<style scoped>
    .login-page{
        width: 100%;
        height: calc(100vh);
        display:flex;
        justify-content:center;
        align-items: center;
    }
    .login-box{
        padding: 20px;
    }

</style>
