<template>
  <div>
    <main class="container">
      <div class="top">
        <div class="top-left">
          <span>欢迎光临依谷网</span>
          <span>亲爱的用户：</span>
          <span>XXX</span>
          <img id="menu" src="../../public/img/header/menugray.png" alt="">
          <span id="title">依谷网</span>
        </div>
        <div class="top-right">
          <ul>
            <li>
              <a href="javascript:;">免费注册</a>
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
        <img src="../../public/img/header/carousel1.jpg" alt="">
      </div>
      <div>
       <!-- aaaaaaaaaaaaa -->
      </div>
    </main>
  </div>
</template>

<script>
export default {
  methods:{
    login(){
      alert("login success!");
    }
  }
};
</script>

<style scoped>
@import url("../assets/css/header.css");
</style>