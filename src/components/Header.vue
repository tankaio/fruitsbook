<template>
  <div>
    <main class="container" @click="searchDivMiss">
      <div class="top-parent">
        <div class="top">
          <div class="top-left">
            <span>欢迎光临依谷网</span>
            <span>亲爱的用户：</span>
            <span v-text="sessionId==1  ? uname:'未登录'"></span>
            <!-- <span @click="logout" style="marginLeft:1rem;cursor:pointer;"></span> -->
            <img id="menu" @click="menu" src="../../public/img/header/menugray.png" alt />
            <span id="title">依谷网</span>
          </div>
          <div class="top-right">
            <ul>
              <li>
                <a href="javascript:;" @click="reg">免费注册</a>
              </li>
              <li>
                <a href="javascript:;" @click="login">登录</a>
              </li>
              <li>
                <a href="javascript:;" @click="logout">注销登录</a>
              </li>
              <li>
                <a href="javascript:;">关注依谷网</a>
              </li>
            </ul>
          </div>
          <div class="top-menu" :style="showStyle">
            <ul>
              <li>
                <a href="javascript:;" @click="reg">免费注册</a>
              </li>
              <li>
                <a href="javascript:;" @click="login">登录</a>
              </li>
              <li>
                <a href="javascript:;" @click="logout">注销登录</a>
              </li>
               <li>
                <router-link to="/cart">我的购物车</router-link>
              </li>
              <li>
                <a href="javascript:;">关注依谷网</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- <div class="carousel">
        <el-carousel height="120px" direction="vertical" :autoplay="true">
          <el-carousel-item>
            <img src="../../public/img/header/carousel1.jpg" alt />
          </el-carousel-item>
          <el-carousel-item>
            <img src="../../public/img/header/carousel2.jpg" alt />
          </el-carousel-item>
        </el-carousel>
      </div>-->
      <div class="center">
        <div class="logodiv">
          <a href="javascript:;" class="logo"></a>
        </div>
        <div class="search">
          <input type="text" placeholder="中秋套餐" v-model="searchValue"/>
          <a>搜索</a>
          <div class="showSearchValue" v-show="searchDiv">
            <ul>
              <li v-for="(item,index) of searchList" :key="index" @click="searchDivMiss">
                <router-link :to="'/details/'+item.did" v-text="item.title"></router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="cart">
          <span>
            <router-link to="/cart">我的购物车</router-link>
          </span>
        </div>
        <div class="saoma">
          <img title="扫码下单" src="../../public/img/header/saoma.jpg" alt />
        </div>
      </div>
      <div class="nav">
        <ul>
          <li>
            <!-- <a href="javascript:;">依谷主页</a> -->
            <router-link to="/">依谷主页</router-link>
          </li>
          <li>
            <!-- <a href="javascript:;">依谷咨询</a> -->
            <router-link to="/zixun">依谷咨询</router-link>
          </li>
          <li>
            <!-- <a href="javascript:;">依谷扶贫</a> -->
            <router-link to="/fupin">依谷扶贫</router-link>
          </li>
          <li>
            <!-- <a href="javascript:;">依谷公益</a> -->
            <router-link to="/gongyi">依谷公益</router-link>
          </li>
          <li>
            <!-- <a href="javascript:;">个人中心</a> -->
            <router-link to="/">个人中心</router-link>
          </li>
        </ul>
      </div>
    </main>
    <div class="register" v-show="isShowReg">
      <div class="register-dialog">
        <span @click="close"></span>
        <ul>
          <li>
            <img src="../../public/img/header/logo_login.png" alt />
          </li>
          <li class="phone-number">
            <span>&nbsp;</span>
            <input type="text" placeholder="请输入qq邮箱" v-model="phtxt" @blur="phVail" />
            <i v-show="phiShow">&nbsp;</i>
          </li>
          <p class="phonenumtxt" v-show="phpShow">
            <span>&nbsp;</span>
            请输入正确的邮箱号
          </p>
          <li class="password">
            <span>&nbsp;</span>
            <input type="password" placeholder="请输入密码" v-model="pwdtxt" @blur="pwdVail" />
            <i v-show="pwdiShow">&nbsp;</i>
          </li>
          <p class="pwdtxt" v-show="pwdpShow">
            <span>&nbsp;</span>
            以字母开头，长度6~16之间，只能包含字母、数字和下划线
          </p>
          <li class="confirm-password">
            <span>&nbsp;</span>
            <input type="password" placeholder="请确认密码" v-model="cfpwdtxt" @blur="cfpwdVail" />
            <i v-show="cfpwdiShow">&nbsp;</i>
          </li>
          <p class="confimpwdtxt" v-show="cfpwdpShow">
            <span>&nbsp;</span>
            两次输入密码不一致
          </p>
          <li class="check-code">
            <input type="text" placeholder="请输入短信验证码" v-model="vcode" />
            <span
              @click="getCode"
              :class="{disabled:time!=60}"
              v-text="time==60 ? '获取验证码':time+'s后重新获取'"
            ></span>
          </li>
          <p class="regtxt" v-show="emailCode==-2 ? emailShow=true:emailShow=false">
            <span>&nbsp;</span>
            此邮箱已被注册
          </p>
          <p class="codeErr" v-show="errCode==-1 ? errCodeShow=true:errCodeShow=false">
            <span>&nbsp;</span>
            验证码错误
          </p>
          <p class="codeTimeOut" v-show="errCode==-2 ? timeOutCodeShow=true:timeOutCodeShow=false">
            <span>&nbsp;</span>
            验证码过时
          </p>
          <li class="check-code">
            <a @click="login" style="cursor:pointer;">--已注册去登录--</a>
          </li>
          <li>
            <a href="javascript:;">
              <div class="register-btn" @click="regOline">注&nbsp;册</div>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="login" v-show="isShowLogin">
      <div class="login-dialog">
        <span @click="close"></span>
        <ul>
          <li>
            <img src="../../public/img/header/logo_login.png" alt />
          </li>
          <li class="phone-number">
            <span>&nbsp;</span>
            <input type="text" placeholder="请输入邮箱" v-model="loginPh" />
          </li>
          <li class="password">
            <span>&nbsp;</span>
            <input type="password" placeholder="请输入密码" v-model="loginPwd" />
          </li>
          <p class="codeTimeOut" v-show="loginCode==-1 ? loginErrShow=true:loginErrShow=false">
            <span>&nbsp;</span>
            用户名或密码错误
          </p>
          <li class="check-code">
            <s>--第三方登录--</s>
          </li>
          <li>
            <a href="javascript:;">
              <div class="login-btn" @click="loginOline">登&nbsp;录</div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import qs from "qs";
export default {
  data() {
    return {
      //提示框显示隐藏
      searchDiv:false,
      //搜索提示商品内容
      searchList:[],
      //搜索框中输入内容
      searchValue:"",
      //sessionId
      sessionId: "",
      //登录成功后显示uname
      uname: "",
      //登录错误提示
      loginErrShow: false,
      //登录返回码
      loginCode: "",
      //登录邮箱
      loginPh: "",
      //登录密码
      loginPwd: "",
      //验证码过时
      timeOutCodeShow: false,
      //验证码相关返回码
      errCode: "",
      errCodeShow: false,
      emailCode: "",
      emailShow: false,
      //验证码倒计时
      time: 60,
      cfpwdiShow: false,
      cfpwdpShow: false,
      phiShow: false,
      phpShow: false,
      pwdiShow: false,
      pwdpShow: false,
      //email
      phtxt: "",
      //pwd
      pwdtxt: "",
      //confimfpwd
      //验证码
      vcode: "",
      cfpwdtxt: "",
      isShowLogin: false,
      isShowReg: false,
      isShow: false,
      showStyle: {
        width: "",
        height: ""
      }
    };
  },
  created() {
    this.getLoginStatus();
  },
  watch:{
    searchValue(){
      this.axios
      .get("/product/searchPro",{params:{title:this.searchValue.trim()}})
      .then((result)=>{
        console.log(result);
        this.searchList = result.data;
        this.searchDiv = true;
      })
      .catch((err)=>{
        console.log(err);
      })
    }
  },
  methods: {
    searchDivMiss(){
      this.searchDiv = false;
    },
    //注销登录
    logout() {
      this.axios
      .get("/user/logout")
      .then((result) => {
        console.log(result);
        localStorage.removeItem("uname");
        this.getLoginStatus();
      });
    },
    //获取登录状态
    getLoginStatus() {
      this.axios
        .get("/user/sessionId")
        .then(result => {
          console.log("loginStatus", result.data.code);
          this.sessionId = result.data.code;
          this.uname = localStorage.getItem("uname");
        })
        .catch(err => {
          console.log(err);
        });
    },
    //登录
    loginOline() {
      var email = this.loginPh;
      var loginPwd = this.loginPwd;
      this.axios
        .get("/user/login", {
          params: {
            email: email,
            pwd: loginPwd
          }
        })
        .then(result => {
          console.log(result);
          if (result.data.code == 1) {
            localStorage.setItem("uname", email);
            this.getLoginStatus();
            this.close();
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    //注册
    regOline() {
      // var params = `email=${this.phtxt}&pwd=${this.pwdtxt}`;
      var params = qs.stringify({
        email: this.phtxt,
        pwd: this.pwdtxt,
        vcode: this.vcode
      });
      this.axios
        .post("/user/reg", params)
        .then(result => {
          console.log(result);
          this.errCode = result.data.code;
          if (result.data.code == 1) {
            this.login();
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    //获取验证码
    getCode() {
      if (this.time == 60) {
        this.time = 59;
        var n = setInterval(() => {
          this.time--;
          if (this.time == 0) {
            this.time = 60;
            clearInterval(n);
          }
        }, 1000);
      }
      this.axios
        .get("/user/getCode", {
          params: {
            mail: this.phtxt
          }
        })
        .then(result => {
          console.log(result);
          this.emailCode = result.data.code;
        })
        .catch(err => {
          console.log(err);
        });
    },
    //确认密码验证
    cfpwdVail() {
      if (this.cfpwdtxt == this.pwdtxt && this.cfpwdtxt != "") {
        this.cfpwdiShow = true;
        this.cfpwdpShow = false;
      } else {
        this.cfpwdiShow = false;
        this.cfpwdpShow = true;
      }
    },
    //密码验证
    pwdVail() {
      // 密码(以字母开头，长度在6~16之间，只能包含字母、数字和下划线)
      var rexg = /^[a-zA-Z]\w{5,15}$/;
      if (rexg.test(this.pwdtxt)) {
        this.pwdpShow = false;
        this.pwdiShow = true;
      } else {
        this.pwdpShow = true;
        this.pwdiShow = false;
      }
    },
    //邮箱验证
    phVail() {
      var rexg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
      if (rexg.test(this.phtxt)) {
        this.phpShow = false;
        this.phiShow = true;
      } else {
        this.phpShow = true;
        this.phiShow = false;
      }
    },
    login() {
      this.isShowLogin = true;
      this.menu();
    },
    reg() {
      this.isShowReg = true;
      this.menu();
    },
    close() {
      this.isShowReg = false;
      this.isShowLogin = false;
    },
    menu() {
      if (!this.isShow) {
        this.showStyle.width = "100%";
        this.showStyle.height = "180px";
        this.isShow = true;
      } else {
        this.showStyle.width = "";
        this.showStyle.height = "";
        this.isShow = false;
      }
    }
  }
};
</script>

<style scoped>
@import url("../assets/css/header.css");
</style>