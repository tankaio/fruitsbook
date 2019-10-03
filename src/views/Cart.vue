<template>
  <div>
    <my-header></my-header>
    <main class="cart">
      <div class="cart-top">
        <span>
          <input type="checkbox" v-model="checkStatus" @click="sel"/>
          <a>全选</a>
        </span>
        <ul>
          <li>单价</li>
          <li>数量</li>
          <li>合计</li>
          <li>操作</li>
        </ul>
      </div>
      <div class="cart-content" v-for="(item,index) of 3" :key="index">
        <div class="left">
          <input type="checkbox" v-model="checkCStatus" @click="selC" :data-i="index"/>
          <img src="../assets/img/details/chengzi_sm.jpg" alt />
          <a href="javascript:;">北海带干200g</a>
        </div>
        <div class="right">
          <ul>
            <li class="price">￥16.4</li>
            <li class="count">
              <span @click="cart(-1)">-</span>
              <input type="text" v-model="num" />
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
      checkStatus:false,
      checkCStatus:false,
      cartItemIndex:0,
    };
  },
  methods: {
    selC(e){
      var index = e.target.dataset.i;
      this.cartItemIndex = index;
    },
    sel(){
      this.checkCStatus = !this.checkStatus;
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

<style scoped>
@import url(../assets/css/cart.css);
</style>