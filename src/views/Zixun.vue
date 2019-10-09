<template>
  <div>
    <my-header></my-header>
    <main class="zixun">
      <div class="zixun_head">
        <img src="../../public/img/zixun/food-inf.jpg" alt />
      </div>
      <div class="zixun_article">
        <h1>健康咨询我先知</h1>
        <div class="zixun_article--content">
          <div class="zixun_article--content-cardleft">
            <div>
              <img src="../../public/img/zixun/food-inf-about01.jpg" alt />
            </div>
            <ul>
              <li>
                <a href="javascript:;">国庆期间物流配送公告</a>
              </li>
              <li>
                <a href="javascript:;">关于北京区域物流配送暂停服务的通知</a>
              </li>
              <li>
                <a href="javascript:;">关于客户热线4001100755恢复正常的通知</a>
              </li>
              <li>
                <a href="javascript:;">关于客户热线4001100755暂停服务的通知</a>
              </li>
              <li>
                <a href="javascript:;">大爱前行 | 依谷网暨五华公益助学活动，在公益道路上我们永不止步！</a>
              </li>
            </ul>
          </div>
          <div class="zixun_article--content-cardright">
            <div>
              <img src="../../public/img/zixun/food-inf-about02.jpg" alt />
            </div>
            <ul>
              <li>
                <a href="javascript:;">「 夏日手作 ：水果酸奶冰棍」</a>
              </li>
              <li>
                <a href="javascript:;">夏天从一只小龙虾开始</a>
              </li>
              <li>
                <a href="javascript:;">酥香炸茄盒，了解一下</a>
              </li>
              <li>
                <a href="javascript:;">追剧不吃零食的后果？！</a>
              </li>
              <li>
                <a href="javascript:;">想做冻龄少女，首先要学会怎么做它</a>
              </li>
            </ul>
          </div>
          <div class="zixun_article--content-cardleft">
            <div>
              <img src="../../public/img/zixun/food-inf-about01.jpg" alt />
            </div>
            <ul>
              <li>
                <a href="javascript:;">国庆期间物流配送公告</a>
              </li>
              <li>
                <a href="javascript:;">关于北京区域物流配送暂停服务的通知</a>
              </li>
              <li>
                <a href="javascript:;">关于客户热线4001100755恢复正常的通知</a>
              </li>
              <li>
                <a href="javascript:;">关于客户热线4001100755暂停服务的通知</a>
              </li>
              <li>
                <a href="javascript:;">大爱前行 | 依谷网暨五华公益助学活动，在公益道路上我们永不止步！</a>
              </li>
            </ul>
          </div>
          <div class="zixun_article--content-cardright">
            <div>
              <img src="../../public/img/zixun/food-inf-about02.jpg" alt />
            </div>
            <ul>
              <li>
                <a href="javascript:;">「 夏日手作 ：水果酸奶冰棍」</a>
              </li>
              <li>
                <a href="javascript:;">夏天从一只小龙虾开始</a>
              </li>
              <li>
                <a href="javascript:;">酥香炸茄盒，了解一下</a>
              </li>
              <li>
                <a href="javascript:;">追剧不吃零食的后果？！</a>
              </li>
              <li>
                <a href="javascript:;">想做冻龄少女，首先要学会怎么做它</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
    <my-footer></my-footer>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.zixun_head > img {
  width: 100%;
}
.zixun_article{
  width: 90%;
  margin: 0 auto;
}
.zixun_article > h1 {
  font-weight: normal;
}
.zixun_article--content {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 1.5rem;
}
.zixun_article--content-cardleft,
.zixun_article--content-cardright {
  width: 42%;
  min-width: 506px;
  background-color: #fae8c8;
  margin-top: 2rem;
}
.zixun_article--content-cardleft > ul,
.zixun_article--content-cardright > ul {
  width: 100%;
  padding-top: 1.8rem;
}
.zixun_article--content-cardleft > ul li,
.zixun_article--content-cardright > ul li {
  text-align: left;
  height: 3rem;
  font-size: 1.2rem;
}
.zixun_article--content-cardleft > ul li > a,
.zixun_article--content-cardright > ul li > a {
  color: #968d7d;
}
.zixun_article--content-cardleft > ul li:nth-child(1) > a,
.zixun_article--content-cardright > ul li:nth-child(1) > a {
  font-size: 1.3rem;
  font-weight: bold;
  color: #2c3e50;
  transition: all 0.3s linear;
}
.zixun_article--content-cardleft > ul li:nth-child(1) > a:hover,
.zixun_article--content-cardright > ul li:nth-child(1) > a:hover {
  color: green;
}
.zixun_article--content-cardleft > div,
.zixun_article--content-cardright > div {
  float: left;
  width: 40%;
  text-align: left;
}
.zixun_article--content-cardleft > ul,
.zixun_article--content-cardright > ul {
  float: left;
  width: 60%;
}
@media screen and (max-width: 1030px) {
  .zixun_article--content-cardleft,
  .zixun_article--content-cardright {
    width: 80%;
  }
}
</style>