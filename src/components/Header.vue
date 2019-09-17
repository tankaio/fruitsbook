<template>
  <div>
    <main class="container">
      <div class="top">
        <div class="top-left">
          <span>欢迎光临依谷网</span>
          <span>亲爱的用户：</span>
          <span>XXX</span>
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
              <a href="javascript:;">购物车</a>
            </li>
            <li>
              <a href="javascript:;">关注依谷网</a>
            </li>
            <li>
              <a href="javascript:;">食品经营许可</a>
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
              <a href="javascript:;">购物车</a>
            </li>
            <li>
              <a href="javascript:;">关注依谷网</a>
            </li>
            <li>
              <a href="javascript:;">食品经营许可</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="carousel">
        <img src="../../public/img/header/carousel1.jpg" alt />
      </div>
      <div class="center">
        <div class="logodiv">
          <a href="javascript:;" class="logo"></a>
        </div>
        <div class="search">
          <input type="text" placeholder="中秋套餐" />
          <a>搜索</a>
        </div>
        <div class="cart">
          <span>
            <a href="javascript:;">我的购物车</a>
          </span>
        </div>
        <div class="saoma">
          <img title="扫码下单" src="../../public/img/header/saoma.jpg" alt />
        </div>
      </div>
      <div class="nav">
        <ul>
          <li>
            <a href="javascript:;">依谷主页</a>
          </li>
          <li>
            <a href="javascript:;">安心宅配</a>
          </li>
          <li>
            <a href="javascript:;">特色预定</a>
          </li>
          <li>
            <a href="javascript:;">活动专享</a>
          </li>
          <li>
            <a href="javascript:;">依谷咨询</a>
          </li>
          <li>
            <a href="javascript:;">依谷扶贫</a>
          </li>
          <li>
            <a href="javascript:;">个人中心</a>
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
            <input type="text" placeholder="请输入手机号" />
            <i>&nbsp;</i>
          </li>
          <p class="phonenumtxt">
            <span>&nbsp;</span>
            请输入正确的手机号码
          </p>
          <li class="password">
            <span>&nbsp;</span>
            <input type="password" placeholder="请输入密码" />
            <i>&nbsp;</i>
          </li>
          <p class="pwdtxt">
            <span>&nbsp;</span>
            密码由6~12位数字、字母和下划线组成
          </p>
          <li class="confirm-password">
            <span>&nbsp;</span>
            <input type="text" placeholder="请确认密码" />
            <i>&nbsp;</i>
          </li>
          <p class="confimpwdtxt">
            <span>&nbsp;</span>
            两次输入密码不一致
          </p>
          <li class="check-code">
            <input type="password" placeholder="请输入短信验证码" />
            <span>获取验证码</span>
          </li>
          <li class="check-code">
            <s>--第三方登录--</s>
          </li>
          <li>
            <a href="javascript:;">
              <div class="register-btn">注&nbsp;册</div>
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
            <input type="text" placeholder="请输入手机号" />
          </li>
          <li class="password">
            <span>&nbsp;</span>
            <input type="password" placeholder="请输入密码" />
          </li>
          <li class="check-code">
            <s>--第三方登录--</s>
          </li>
          <li>
            <a href="javascript:;">
              <div class="login-btn">登&nbsp;录</div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowLogin:false,
      isShowReg: false,
      isShow: false,
      showStyle: {
        width: "",
        height: ""
      }
    };
  },
  methods: {
    login() {
      this.isShowLogin = true;
    },
    reg(){
      this.isShowReg = true;
    },
    close(){
      this.isShowReg = false;
      this.isShowLogin = false;
    },
    menu() {
      if (!this.isShow) {
        this.showStyle.width = "100%";
        this.showStyle.height = "190px";
        this.isShow = true;
      } else {
        this.showStyle.width = "";
        this.showStyle.height = "";
        this.isShow = false;
      }
    },
  }
};
</script>

<style scoped>
@import url("../assets/css/header.css");
</style>