<template>
  <div>
    <my-header></my-header>
    <main class="cart">
      <div class="cart-top">
        <span>
          <input type="checkbox" v-model="selAllCheck" @click="selAll" />
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
          <input type="checkbox" @click="sel" />
          <img :src="url+item.img_url" alt />
          <a href="javascript:;" v-text="item.title"></a>
        </div>
        <div class="right">
          <ul>
            <li class="price" v-text="'￥'+item.price"></li>
            <li class="count">
              <span @click="cart(-1,index)">-</span>
              <input type="text" v-model="item.pro_count" />
              <span @click="cart(1,index)">+</span>
            </li>
            <li class="total" v-text="'￥'+(item.price*item.pro_count).toFixed(2)"></li>
            <li>
              <a href="javascript:;" @click="delCart(index)">删除</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="computed">
        <div class="computed-c">
          <div class="total-count">
            <span>购买总数</span>
            <p>0</p>
          </div>
          <div class="total-price">
            <span>购买总价</span>
            <p>￥0</p>
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
      selAllCheck: false,
      cartProList: []
    };
  },
  created() {
    this.load();
  },
  methods: {
    sel() {},
    selAll() {},
    load() {
      this.axios
        .get("/product/queryCart")
        .then(result => {
          console.log(result);
          this.cartProList = result.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    delCart(index) {
      this.axios
        .get("/product/delCart", {
          params: { cart_pid: this.cartProList[index].cart_pid }
        })
        .then(result => {
          console.log(result);
        })
        .catch(err => {
          console.log(err);
        });
      this.cartProList.splice(index, 1);
    },
    cart(n, index) {
      this.cartProList[index].pro_count += n;
      if (this.cartProList[index].pro_count <= 1) {
        this.cartProList[index].pro_count = 1;
      }
    }
  }
};
</script>

<style scoped>
@import url(../assets/css/cart.css);
</style>