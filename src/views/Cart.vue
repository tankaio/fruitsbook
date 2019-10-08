<template>
  <div>
    <my-header></my-header>
    <main class="cart">
      <div class="cart-top">
        <span>
          <input type="checkbox"/>
          <a>全选</a>
        </span>
        <ul>
          <li>单价</li>
          <li>数量</li>
          <li>合计</li>
          <li>操作</li>
        </ul>
      </div>
      <div class="cart-content" v-for="(item,index) of cartProList" :key="index">
        <div class="left">
          <input type="checkbox" :data-i="index"/>
          <img :src="url+item.img_url" alt />
          <a href="javascript:;" v-text="item.title"></a>
        </div>
        <div class="right">
          <ul>
            <li class="price" v-text="'￥'+item.price"></li>
            <li class="count">
              <span @click="cart(-1)">-</span>
              <input type="text" :value="item.pro_count"/>
              <span @click="cart(1)">+</span>
            </li>
            <li class="total">￥16.4</li>
            <li>
              <a href="javascript:;">删除</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="computed">
        <div class="computed-c">
          <div class="total-count">
            <span>购买总数</span>
            <p>30</p>
          </div>
          <div class="total-price">
            <span>购买总价</span>
            <p>￥30</p>
          </div>
        </div>
        <div class="cost">去结算</div>
      </div>
    </main>
    <my-footer></my-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 1,
      cartProList:[]
    };
  },
  created(){
    this.axios
    .get("/product/queryCart")
    .then((result) => {
      console.log(result);
      this.cartProList = result.data;
      this.num = result.data.pro_count;
    }).catch((err) => {
      console.log(err);
    });
  },
  methods: {
    selC(e){
      var index = e.target.dataset.i;
      this.cartItemIndex = index;
    },
    sel(){
      this.checkCStatus = !this.checkStatus;
    },
    cart(e,n) {
      this.num += n;
      if (this.num <= 1) {
        this.num = 1;
      }
    }
  }
};
</script>

<style scoped>
@import url(../assets/css/cart.css);
</style>