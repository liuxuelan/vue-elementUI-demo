<template>
  <div class="login">
    <el-form
      :model="loginForm"
      status-icon
      :rules="rules"
      ref="loginForm"
      label-width="100px"
      class="demo-loginForm"
    >
    <h1>登录</h1>
      

      <el-form-item label="用户名" prop="username">
        <el-input type="text" v-model="loginForm.username" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('loginForm')">提交</el-button>
        <el-button @click="resetForm('loginForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapState, mapActions} from 'vuex'
export default {
  name: "login",
  data() {
    
    return {
      loginForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    ...mapActions (['COMMIT_USERINFO']),
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let _this = this;
          // 验证通过
          this.axios.post('/api/login',{
              username: _this.loginForm.username,
              password: _this.loginForm.password
          })
          .then(response => {
            if (response.data.length) {
              //先将用户信息存储到本地
              localStorage.setItem('userinfo',JSON.stringify(response.data[0]))
              //把用户信息取到
              const userinfo = localStorage.getItem('userinfo')
              console.log(userinfo)
              //把用户信息存储到store
              _this.COMMIT_USERINFO(userinfo);
              //_this.$store.commit('SAVE_USERINFO', JSON.parse(userinfo))// 提交mutations里面的方法，第一个参数为方法名，第二个参数是传入的数据
              _this.$message({
                message: '恭喜你，登录成功！',
                type: 'success'
              });
              _this.$router.push('/home');
            } else {
              _this.$message.error('请检查用户名和密码');
            }
          })
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
html,body,#app,.login{
  height:100%;
}
h1{
  font-size:18px;
  text-align: center;
  margin-bottom:30px;
}
.login{
  display:flex;
  justify-content: center;
  align-items: center;
}
</style>
