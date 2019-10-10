<template>
  <div>
    <my-header></my-header>
    <main class="cart">
      <div class="cart-top">
        <label @click="checkedInput">
          <input type="checkbox" v-model="selAll"/>
          <a>全选</a>
        </label>
        <ul>
          <li>单价</li>
          <li>数量</li>
          <li>合计</li>
          <li>操作</li>
        </ul>
      </div>
      <div class="cart-content" v-for="(item,index) of cartProList" :key="index">
        <div class="left">
          <input type="checkbox" v-model="item.isChecked" @click="checkInputC"/>
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
            <p v-text="totalCount"></p>
          </div>
          <div class="total-price">
            <span>购买总价</span>
            <p v-text="'￥'+total"></p>
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
      selAll:false,
      cartProList: []
    };
  },
  created() {
    this.load();
  },
  computed:{
    total(){
      var total = 0;
      for (var item of this.cartProList) {
        if (item.isChecked) {
          total += item.price*item.pro_count;
        }
      }
      return total;
    },
    totalCount(){
      var totalCount = 0;
      for (var item of this.cartProList) {
        if (item.isChecked) {
          totalCount += item.pro_count;
        }
      }
      return totalCount;
    }
  },
  methods: {
    //搞不懂！！！！！！！！！！！！！！！！！
    checkInputC(){
       for (var item of this.cartProList) {
         if (item.isChecked) {
           this.selAll = false;
         }
       }
    },
    checkedInput(){
      for (var item of this.cartProList) {
        item.isChecked = !this.selAll;
      }
    },
    load() {
      this.axios
        .get("/product/queryCart")
        .then(result => {
          this.cartProList = result.data;
          this.cartProList.map((v, i) => {
            this.$set(v, "isChecked", false);
          });
          console.log(this.cartProList);
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