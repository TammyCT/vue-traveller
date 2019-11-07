<template>
    <el-form :model="secondSignForm" ref="secondSignForm" label-width="100px" class="demo-dynamic">
        <el-form-item
            prop="email"
            :label="$t('message.sEmail')"
            :rules="[
            { required: true, message: $t('message.sPleaseInputEmail'), trigger: 'blur' },
            { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
            ]"
        >
            <el-input v-model="secondSignForm.email"></el-input>
        </el-form-item>
        <el-form-item prop="sex" label="性别" required>
            <el-radio v-model="secondSignForm.sex" label="0">男</el-radio>
            <el-radio v-model="secondSignForm.sex" label="1">女</el-radio>
        </el-form-item>
        <el-form-item prop="brithday" label="出生日期" >
            <el-date-picker
                v-model="secondSignForm.birthday"
                type="date"
                placeholder="选择日期">
            </el-date-picker>
        </el-form-item>
        <!-- <el-form-item>
            <el-button type="primary" @click="submitForm('secondSignForm')">提交</el-button>
        </el-form-item> -->
    </el-form>
</template>

<script>
    export default {
        name: 'second-sign-page',
        props: ['activePage'],
      data() {
        return {
            secondSignForm: {
            email: '',
            sex: '0',
            birthday: ''
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
        }
    }
</script>

<style scoped>

</style>
