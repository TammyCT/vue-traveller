<template>
    <div class="login-page">
    <el-card class="login-box">
        <img src="../../../../static/TravellerLogo.png" alt="" class="logo-pic">
        <el-steps :active="active" finish-status="success">
            <el-step title="Step 1"></el-step>
            <el-step title="Step 2"></el-step>
            <el-step title="Step 3"></el-step>
        </el-steps>
        <first-sign-page v-if="active == 0" :activePage="active" v-on:form-data="getFormData"></first-sign-page>
        <second-sign-page v-if="active == 1" :activePage="active"></second-sign-page>
        <third-sign-page v-if="active == 2" :activePage="active"></third-sign-page>
        <el-button style="margin-top: 12px;" @click="next">{{$t('message.sNextStep')}}</el-button>
    </el-card>
    </div>
</template>

<script>
    import firstPage from './first-page'
    import secondPage from './second-page'
    import thirdPage from './third-page'
    import { EventBus } from '../../../services/event-bus.js';
    export const SignUserForm = {
        userName: null,
        pass: null
    }
    export default {
        name: 'main-sign-page',
        components:{
            'first-sign-page' : firstPage,
            'second-sign-page' : secondPage,
            'third-sign-page' : thirdPage
        },
        data() {
            return {
                active: 0,
                currentStep: null,
                form: SignUserForm
            };
        },
        mounted() {

        },
        methods: {
            next() {
                // Send the event on a channel (i-got-clicked) with a payload (the click count.)
                EventBus.$emit('sign-next', this.active);
                if (this.currentStep === this.active && this.active < 2) {
                    this.active++;
                }
            },
            getFormData(formData) {
                for(var i in this.form) {
                      for(var key in formData) {
                          if(key === i){
                              this.form[i] = formData[key]
                          }
                      }
                }
                this.currentStep = this.active;
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
