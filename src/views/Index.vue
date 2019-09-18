<template>
  <div>
    <my-header></my-header>
    <main class="index-container">
      <div class="carousel">
        <div class="block">
          <el-carousel trigger="click">
            <el-carousel-item>
              <img src="../assets/img/index/caroucelpic1.jpg" alt="">
            </el-carousel-item>
            <el-carousel-item>
              <img src="../assets/img/index/carouselpic2.jpg" alt="">
            </el-carousel-item>
            <el-carousel-item>
              <img src="../assets/img/index/carouselpic3.jpg" alt="">
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style>
@import url(../assets/css/index.css);
</style>