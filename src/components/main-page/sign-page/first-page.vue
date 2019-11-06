<template>
        <el-form :model="firstSignForm" status-icon :rules="rules" ref="firstSignForm" label-width="100px" class="demo-firstSignForm">
            <el-form-item label="用户名" required>
                <el-input v-model="firstSignForm.userName" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass" required>
                <el-input type="password" v-model="firstSignForm.pass" autocomplete="off" maxlength="10"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass" required>
                <el-input type="password" v-model="firstSignForm.checkPass" autocomplete="off"></el-input>
            </el-form-item>
            <!-- <el-form-item>
                <el-button type="primary" @click="submitForm('firstSignForm')">提交</el-button>
                <el-button @click="resetForm('firstSignForm')">重置</el-button>
            </el-form-item> -->
        </el-form>
</template>

<script>
    export default {
        name: 'first-sign-page',
        data() {
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                callback(new Error('请输入密码'));
                } else {
                if (this.firstSignForm.checkPass !== '') {
                    this.$refs.firstSignForm.validateField('checkPass');
                }
                callback();
                }
            };
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                callback(new Error('请再次输入密码'));
                } else if (value !== this.firstSignForm.pass) {
                callback(new Error('两次输入密码不一致!'));
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
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style scoped>

</style>
