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
            <img :src="url+product.img_url" alt />
          </div>
          <div class="imgmd">
            <img src="../../public/img/details/hover-prev.png" class="arrow-pre" alt />
            <ul>
              <li v-for="(item,index) of pics" :key="index">
                <img :src="url+item" alt />
              </li>
            </ul>
            <img src="../../public/img/details/hover-next.png" class="arrow-next" alt />
          </div>
        </div>
        <div class="detail-intro">
          <h2 v-text="product.title"></h2>
          <div class="intro">
            <p>
              价 格
              <strong v-text="'￥'+product.price"></strong>
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
            <a href="javascript:;" v-text="product.spec"></a>
          </p>
          <div class="addcart">
            <span class="selcount">
              <input type="text" v-model="num" />
              <a class="more" @click="cart(1)">+</a>
              <a class="less" @click="cart(-1)">-</a>
            </span>
            <!-- <a href="javascript:;" @click="addCart">加入购物车</a> -->
            <a href="javascript:;">
              <el-button type="text" @click="addCart">加入购物车</el-button>
            </a>
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
      product: {},
      pics: {}
    };
  },
  props: ["lid"],
  created() {
    this.load();
  },
  methods: {
    open2() {
      this.$confirm("购物车添加成功", "提示", {
        confirmButtonText: "查看购物车",
        cancelButtonText: "停留在此页面",
        beforeClose: (action, instance, done) => {
          if (action === "confirm") {
            this.$router.push("/cart");
            done();
          } else {
            done();
          }
        },
        type: "info",
        center: true
      }).catch((err) => {
        console.log(err);
      });
    },
    open() {
      this.$confirm("未登录, 是否去登录?", "提示", {
        confirmButtonText: "去登陆",
        cancelButtonText: "取消",
        beforeClose: (action, instance, done) => {
          if (action === "confirm") {
            // this.$router.push("/cart");
            done();
          } else {
            done();
          }
        },
        type: "warning",
        center: true
      }).catch(() => {
        this.$message({
          type: "info",
          message: "必须登录后才能添加购物车哦"
        });
      });
    },
    addCart() {
      var params = qs.stringify({
        lid:this.$route.params.lid,
        title:this.product.title,
        price:this.product.price,
        count:this.num,
        img_sm_url:this.product.img_sm_url
      });
      this.axios
        .post("/product/addCart", params)
        .then(res => {
          console.log(res);
          if (res.data.code == -1) {
            this.open();
          } else {
            this.open2();
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    load() {
      var params = { lid: this.$route.params.lid };
      this.axios
        .get("product/details", { params: params })
        .then(result => {
          console.log(result);
          this.product = result.data.product;
          this.pics = result.data.pics;
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