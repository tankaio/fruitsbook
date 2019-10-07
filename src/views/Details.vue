<template>
  <div class="detail">
    <my-header></my-header>
    <main>
      <div class="breadcrumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>热门</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="detail-content">
        <div class="detail-img">
          <div class="pro">
            <img src="../assets/img/details/banana.jpg" alt />
          </div>
          <div class="imgmd">
            <img src="../../public/img/details/hover-prev.png" class="arrow-pre" alt />
            <ul>
              <li>
                <img src="../assets/img/details/banana.jpg" alt />
              </li>
              <li>
                <img src="../assets/img/details/banana1.jpg" alt />
              </li>
              <li>
                <img src="../assets/img/details/banana2.jpg" alt />
              </li>
              <li>
                <img src="../assets/img/details/banana3.jpg" alt />
              </li>
              <li>
                <img src="../assets/img/details/banana4.jpg" alt />
              </li>
            </ul>
            <img src="../../public/img/details/hover-next.png" class="arrow-next" alt />
          </div>
        </div>
        <div class="detail-intro">
          <h2>菲律宾进口香蕉1.2kg超甜进口香蕉 果皮易剥 软糯可口 人气水果 每天两根 健康满分</h2>
          <div class="intro">
            <p>
              价 格
              <strong>￥19.8</strong>
            </p>
            <p>
              运 费
              <span class="icon">自营</span>
              <span class="msg">全场满199元包邮，单笔不足运费8元起，生鲜类仅限深圳同城！</span>
            </p>
            <p>
              配送
              <select name id>
                <option value="cd">成都市</option>
              </select>
            </p>
          </div>
          <p>
            <span>时效</span>当日16：00前下单，次日送货上门(仅限深圳同城)！
          </p>
          <p>
            <span>提示</span>产品图片及其描述仅作参考，请您以收到的实物为准！
          </p>
          <p>
            <span>理赔</span>收货后商品如有损坏，请您当场拍下图片，并保留相关商品，在24小时之内及时联系售后客服，以便我们给您更换完好的商品！如非质量问题，概不退换！
          </p>
          <p>
            <span>规格</span>
            <a href="javascript:;">1.2kg</a>
          </p>
          <div class="addcart">
            <span class="selcount">
              <input type="text" v-model="num" />
              <a class="more" @click="cart(1)">+</a>
              <a class="less" @click="cart(-1)">-</a>
            </span>
            <a href="javascript:;" @click="addCart">加入购物车</a>
          </div>
        </div>
      </div>
      <!-- <div class="recommend">
        <p><span>依谷推荐</span></p>
        <div class="carousel"></div>
      </div>-->
    </main>
    <my-footer></my-footer>
  </div>
</template>

<script>
import qs from "qs";
export default {
  data() {
    return {
      num: 1,
      // title:"",
      // price:"",
      // pro_count:1,
      // img_url:""
    };
  },
  props: ["lid"],
  created() {
    this.load();
  },
  methods: {
    addCart() {
      var params = qs.stringify({
        // title:
      });
      this.axios
        .post("/product/addCart", params)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    load() {
      var params = { lid: this.$route.params.lid };
      console.log(params);
      this.axios
        .get("product/details", { params: params })
        .then(result => {
          console.log(result);
          // this.title = result.data.title;
          // this.price = result.data.price;
          // this.pro_count = result.data.pro_count;
          // this.img_url = result.data.img_url;
        })
        .catch(err => {
          console.log(err);
        });
    },
    cart(n) {
      this.num += n;
      if (this.num <= 1) {
        this.num = 1;
      }
    }
  }
};
</script>

<style>
@import url(../assets/css/detail.css);
</style>