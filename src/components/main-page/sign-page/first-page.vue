<template>
        <el-form :model="firstSignForm" status-icon :rules="rules" ref="firstSignForm" label-width="150px" class="demo-firstSignForm">
            <el-form-item :label="$t('message.sUserName')" prop="userName" required maxlength="20">
                <el-input v-model="firstSignForm.userName" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item :label="$t('message.sPassword')" prop="pass" required>
                <el-input type="password" v-model="firstSignForm.pass" autocomplete="off" maxlength="10"></el-input>
            </el-form-item>
            <el-form-item :label="$t('message.sConfirmPassword')" prop="checkPass" required>
                <el-input type="password" v-model="firstSignForm.checkPass" autocomplete="off"></el-input>
            </el-form-item>
        </el-form>
</template>

<script>
    import { EventBus } from '../../../services/event-bus.js';

    export default {
        name: 'first-sign-page',
        props: ['activePage'],
        mounted (){
                EventBus.$on('sign-next', clickCount => {
                    this.submitForm('firstSignForm');
                });
        },
        data() {
            var validateUN = (rule, value, callback) => {
                if (value === '') {
                callback(new Error(this.$t('message.sPleaseInputUN')));
                }else {
                    callback();
                }
            };
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                callback(new Error(this.$t('message.sPleaseInputPW')));
                } else {
                if (this.firstSignForm.checkPass !== '') {
                    this.$refs.firstSignForm.validateField('checkPass');
                }
                callback();
                }
            };
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                callback(new Error(this.$t('message.sPleaseInputPWAgain')));
                } else if (value !== this.firstSignForm.pass) {
                callback(new Error(this.$t('message.sInconsistentpassword')));
                } else {
                callback();
                }
            };
            return {
                firstSignForm: {
                    userName: '',
                    pass: '',
                    checkPass: '',
                },
                rules: {
                    userName: [
                         { validator: validateUN, trigger: 'blur' }
                    ],
                    pass: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    checkPass: [
                        { validator: validatePass2, trigger: 'blur' }
                    ],
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        // alert('submit!');
                        this.$emit('form-data',this.firstSignForm)
                        EventBus.$off('form-data', this.stopListen());
                    } else {
                     
                        // console.log('error submit!!');
                        // EventBus.$emit('not ')
                        return false;
                    }
                });
            },
            stopListen(){
                console.log('first page stop listening')
            }
        }

    }
</script>

<style scoped>

</style>
