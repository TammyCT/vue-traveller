<template>
    <div class="login-page">
    <el-card class="login-box">
        <img src="../../../../static/TravellerLogo.png" alt="" class="logo-pic">
        <el-steps :active="active" finish-status="success">
            <el-step title="Step 1"></el-step>
            <el-step title="Step 2"></el-step>
            <el-step title="Step 3"></el-step>
        </el-steps>
        <first-sign-page v-if="active == 0"></first-sign-page>
        <second-sign-page v-if="active == 1"></second-sign-page>
        <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
    </el-card>
    </div>
</template>

<script>
    import firstPage from './first-page'
    import secondPage from './second-page'
    export default {
        name: 'main-sign-page',
        components:{
            'first-sign-page' : firstPage,
            'second-sign-page' : secondPage
        },
    data() {
        return {
            active: 0,
            };
        },
        methods: {
            next() {
                
                if (this.active++ > 2) this.active = 0;
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
