<template>
    <div class="login-page">
    <el-card class="login-box">
        <img src="../../../static/TravellerLogo.png" alt="" class="logo-pic">
        <el-form label-width="80px" :model="loginForm">
            <el-form-item :label="$t('message.sUserName')">
                <el-input :placeholder="$t('message.sPleaseInputUN')" v-model="loginForm.username"></el-input>
            </el-form-item>
            <el-form-item :label="$t('message.sPassword')">
                <el-input :placeholder="$t('message.sPleaseInputPW')" v-model="loginForm.password" show-password></el-input>
            </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="login()">{{$t('message.sLogin')}}</el-button>
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
