<template>
  <div>
    <my-header></my-header>
    <main class="gongyi">
      <div class="gongyi_nav">
        <img src="../../public/img/gongyi/charity_banner_bg.jpg" alt />
      </div>
      <div class="gongyi_content">
        <div class="gongyi_content-pic">
          <img src="../../public/img/gongyi/cart1.jpg" alt />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
main.gongyi {
  width: 100%;
}
.gongyi_nav > img {
  width: 100%;
}
@keyframes gongyi_content-pic {
  0% {
    transform: rotate(-90deg);
  }
  10% {
    transform: rotate(-80deg);
  }
  20% {
    transform: rotate(-70deg);
  }
  30% {
    transform: rotate(-60deg);
  }
  40% {
    transform: rotate(-50deg);
  }
  50% {
    transform: rotate(-40deg);
  }
  60% {
    transform: rotate(-30deg);
  }
  70% {
    transform: rotate(-20deg);
  }
  80% {
    transform: rotate(-10deg);
  }
  90% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
.gongyi_content-pic {
  /* 规定 @keyframes 动画的名称。 */
  animation-name: gongyi_content-pic;
  /* 规定动画完成一个周期所花费的秒或毫秒。默认是 0。 */
  animation-duration: 0.7s;
  /* 规定动画的速度曲线。默认是 "ease" */
  animation-timing-function: linear;
  /* 规定动画何时开始。默认是 0 */
  /* animation-delay: 2s; */
  /* 规定动画被播放的次数。默认是 1 */
  /* animation-iteration-count: infinite; */
  /* 规定动画是否在下一周期逆向地播放。默认是 "normal" */
  /* animation-direction: alternate; */
  /* 规定动画是否正在运行或暂停。默认是 "running" */
  animation-play-state: running;
  /* animation-play-state: paused; */
  	/* 规定对象动画时间之外的状态 */
  /* animation-fill-mode: forwards; */
}
</style>