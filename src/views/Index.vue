<template>
  <div>
    <my-header></my-header>
    <main class="index-container">
      <div class="carousel">
        <el-carousel trigger="click" arrow="always" height="450px">
          <el-carousel-item>
            <img src="../assets/img/index/caroucelpic1.jpg" alt />
          </el-carousel-item>
          <el-carousel-item>
            <img src="../assets/img/index/carouselpic2.jpg" alt />
          </el-carousel-item>
          <el-carousel-item>
            <img src="../assets/img/index/carouselpic3.jpg" alt />
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="menu" @mouseleave="hideDialog">
        <div class="menu-extend">
          <div class="title">全部商品分类</div>
          <ul>
            <li
              v-for="(item,index) of menuList"
              :key="index"
              :data-i="index"
              @mouseenter="showDialog"
            >
              <a href="javascript:;">
                <a>{{item.title}}</a>
                <p>
                  <span v-text="item.fruit1"></span>
                  <span v-text="item.fruit2"></span>
                  <span v-text="item.fruit3"></span>
                  <span v-text="item.fruit4"></span>
                </p>
              </a>
            </li>
          </ul>
        </div>
        <div
          class="menu-extend-copy"
          v-for="(item,index) of menuExtendlist"
          :key="index"
          v-show="menuIndex==index ? isShow=true:isShow=false"
        >
          <ul>
            <li v-for="(item2,index2) of item" :key="index2">
              <a href="javascript:;">
                <span v-text="item2.title"></span>
              </a>
              <a
                href="javascript:;"
                v-for="(item3,index3) of item2.foods"
                :key="index3"
                v-text="item3"
              ></a>
            </li>
          </ul>
        </div>
      </div>
      <div class="ad">
        <a href="javascript:;">
          <img src="../../public/img/index/ad-pic01.jpg" alt />
        </a>
        <a href="javascript:;">
          <img src="../../public/img/index/ad-pic02.jpg" alt />
        </a>
        <a href="javascript:;">
          <img src="../../public/img/index/ad-pic03.jpg" alt />
        </a>
        <a href="javascript:;">
          <img src="../../public/img/index/ad-pic04.jpg" alt />
        </a>
      </div>
      <div class="new-pros">
        <div class="new-pro-img">
          <img src="../../public/img/index/ad-pic05.jpg" alt />
        </div>
        <div class="new-pro-carousel">
          <el-carousel :interval="3000" arrow="never" height="320px">
            <el-carousel-item v-for="item in 4" :key="item">
              <div class="new-pro">
                <el-row>
                <el-col :span="4" v-for="(o, index) in 6" :key="o" :offset="index > 0 ? 0 : 0">
                  <el-card :body-style="{ padding: '0px' }">
                    <img src="../assets/img/index/newpro_carousel1.jpg" class="image" />
                    <div style="padding: 14px;">
                      <span>好吃的汉堡</span>
                      <div class="bottom clearfix">
                        <time class="time">{{ newProName }}</time>
                        <el-button type="text" class="button">操作按钮</el-button>
                      </div>
                    </div>
                  </el-card>
                </el-col>
                </el-row>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newProName:"哈密瓜",
      menuIndex: 1000,
      isShow: false,
      menuList: [
        {
          title: "新鲜水果",
          fruit1: "车厘子",
          fruit2: "葡萄",
          fruit3: "石榴",
          fruit4: "..."
        },
        {
          title: "绿色菜篮",
          fruit1: "进口牛肉",
          fruit2: "乌骨鸡",
          fruit3: "肉丸",
          fruit4: "..."
        },
        {
          title: "粮油调味",
          fruit1: "东北大米",
          fruit2: "玉米油",
          fruit3: "有机大米",
          fruit4: "..."
        },
        {
          title: "干货特产",
          fruit1: "香菇",
          fruit2: "鱼干",
          fruit3: "枸杞",
          fruit4: "..."
        },
        {
          title: "零食饮料",
          fruit1: "肉干",
          fruit2: "果冻",
          fruit3: "曲奇",
          fruit4: "..."
        },
        {
          title: "美酒茗茶",
          fruit1: "澳洲红酒",
          fruit2: "白葡萄酒",
          fruit3: "大红",
          fruit4: "..."
        },
        {
          title: "礼品礼券",
          fruit1: "中秋套餐",
          fruit2: "人参",
          fruit3: "干海参",
          fruit4: "..."
        },
        {
          title: "家具厨卫",
          fruit1: "三件套",
          fruit2: "毛毯",
          fruit3: "拉杆箱",
          fruit4: "..."
        }
      ],
      menuExtendlist: [
        [
          {
            title: "奇异果/车厘子>>",
            foods: ["金奇异果", "绿奇异果/猕猴桃", "车厘子/樱桃"]
          },
          {
            title: "奇异果/车厘子>>",
            foods: [
              "金奇异果",
              "绿奇异果/猕猴桃",
              "车厘子/樱桃",
              "金奇异果",
              "绿奇异果/猕猴桃",
              "车厘子/樱桃"
            ]
          },
          {
            title: "奇异果/车厘子>>",
            foods: ["金奇异果", "绿奇异果/猕猴桃", "车厘子/樱桃"]
          },
          {
            title: "奇异果/车厘子>>",
            foods: [
              "金奇异果",
              "绿奇异果/猕猴桃",
              "车厘子/樱桃",
              "金奇异果",
              "绿奇异果/猕猴桃"
            ]
          },
          {
            title: "奇异果/车厘子>>",
            foods: ["金奇异果", "绿奇异果/猕猴桃", "车厘子/樱桃"]
          }
        ],

        [
          {
            title: "奇异果/车厘子222>>",
            foods: ["金奇异果", "绿奇异果/猕猴桃", "车厘子/樱桃"]
          },
          {
            title: "奇异果/车厘子222>>",
            foods: [
              "金奇异果",
              "绿奇异果/猕猴桃",
              "车厘子/樱桃",
              "金奇异果",
              "绿奇异果/猕猴桃",
              "车厘子/樱桃"
            ]
          },
          {
            title: "奇异果/车厘子222>>",
            foods: ["金奇异果", "绿奇异果/猕猴桃", "车厘子/樱桃"]
          },
          {
            title: "奇异果/车厘子222>>",
            foods: [
              "金奇异果",
              "绿奇异果/猕猴桃",
              "车厘子/樱桃",
              "金奇异果",
              "绿奇异果/猕猴桃"
            ]
          },
          {
            title: "奇异果/车厘子222>>",
            foods: ["金奇异果", "绿奇异果/猕猴桃", "车厘子/樱桃"]
          }
        ],

        [
          {
            title: "奇异果/车厘子333>>",
            foods: ["金奇异果", "绿奇异果/猕猴桃", "车厘子/樱桃"]
          },
          {
            title: "奇异果/车厘子333>>",
            foods: [
              "金奇异果",
              "绿奇异果/猕猴桃",
              "车厘子/樱桃",
              "金奇异果",
              "绿奇异果/猕猴桃",
              "车厘子/樱桃"
            ]
          },
          {
            title: "奇异果/车厘子333>>",
            foods: ["金奇异果", "绿奇异果/猕猴桃", "车厘子/樱桃"]
          },
          {
            title: "奇异果/车厘子333>>",
            foods: [
              "金奇异果",
              "绿奇异果/猕猴桃",
              "车厘子/樱桃",
              "金奇异果",
              "绿奇异果/猕猴桃"
            ]
          },
          {
            title: "奇异果/车厘子333>>",
            foods: ["金奇异果", "绿奇异果/猕猴桃", "车厘子/樱桃"]
          }
        ],

        [
          {
            title: "奇异果/车厘子444>>",
            foods: ["金奇异果", "绿奇异果/猕猴桃", "车厘子/樱桃"]
          },
          {
            title: "奇异果/车厘子444>>",
            foods: [
              "金奇异果",
              "绿奇异果/猕猴桃",
              "车厘子/樱桃",
              "金奇异果",
              "绿奇异果/猕猴桃",
              "车厘子/樱桃"
            ]
          },
          {
            title: "奇异果/车厘子444>>",
            foods: ["金奇异果", "绿奇异果/猕猴桃", "车厘子/樱桃"]
          },
          {
            title: "奇异果/车厘子444>>",
            foods: [
              "金奇异果",
              "绿奇异果/猕猴桃",
              "车厘子/樱桃",
              "金奇异果",
              "绿奇异果/猕猴桃"
            ]
          },
          {
            title: "奇异果/车厘子444>>",
            foods: ["金奇异果", "绿奇异果/猕猴桃", "车厘子/樱桃"]
          }
        ],

        [
          {
            title: "奇异果/车厘子555>>",
            foods: ["金奇异果", "绿奇异果/猕猴桃", "车厘子/樱桃"]
          },
          {
            title: "奇异果/车厘子555>>",
            foods: [
              "金奇异果",
              "绿奇异果/猕猴桃",
              "车厘子/樱桃",
              "金奇异果",
              "绿奇异果/猕猴桃",
              "车厘子/樱桃"
            ]
          },
          {
            title: "奇异果/车厘子555>>",
            foods: ["金奇异果", "绿奇异果/猕猴桃", "车厘子/樱桃"]
          },
          {
            title: "奇异果/车厘子555>>",
            foods: [
              "金奇异果",
              "绿奇异果/猕猴桃",
              "车厘子/樱桃",
              "金奇异果",
              "绿奇异果/猕猴桃"
            ]
          },
          {
            title: "奇异果/车厘子555>>",
            foods: ["金奇异果", "绿奇异果/猕猴桃", "车厘子/樱桃"]
          }
        ],

        [
          {
            title: "奇异果/车厘子666>>",
            foods: ["金奇异果", "绿奇异果/猕猴桃", "车厘子/樱桃"]
          },
          {
            title: "奇异果/车厘子666>>",
            foods: [
              "金奇异果",
              "绿奇异果/猕猴桃",
              "车厘子/樱桃",
              "金奇异果",
              "绿奇异果/猕猴桃",
              "车厘子/樱桃"
            ]
          },
          {
            title: "奇异果/车厘子666>>",
            foods: ["金奇异果", "绿奇异果/猕猴桃", "车厘子/樱桃"]
          },
          {
            title: "奇异果/车厘子666>>",
            foods: [
              "金奇异果",
              "绿奇异果/猕猴桃",
              "车厘子/樱桃",
              "金奇异果",
              "绿奇异果/猕猴桃"
            ]
          },
          {
            title: "奇异果/车厘子666>>",
            foods: ["金奇异果", "绿奇异果/猕猴桃", "车厘子/樱桃"]
          }
        ],

        [
          {
            title: "奇异果/车厘子777>>",
            foods: ["金奇异果", "绿奇异果/猕猴桃", "车厘子/樱桃"]
          },
          {
            title: "奇异果/车厘子777>>",
            foods: [
              "金奇异果",
              "绿奇异果/猕猴桃",
              "车厘子/樱桃",
              "金奇异果",
              "绿奇异果/猕猴桃",
              "车厘子/樱桃"
            ]
          },
          {
            title: "奇异果/车厘子777>>",
            foods: ["金奇异果", "绿奇异果/猕猴桃", "车厘子/樱桃"]
          },
          {
            title: "奇异果/车厘子777>>",
            foods: [
              "金奇异果",
              "绿奇异果/猕猴桃",
              "车厘子/樱桃",
              "金奇异果",
              "绿奇异果/猕猴桃"
            ]
          },
          {
            title: "奇异果/车厘子777>>",
            foods: ["金奇异果", "绿奇异果/猕猴桃", "车厘子/樱桃"]
          }
        ],

        [
          {
            title: "奇异果/车厘子888>>",
            foods: ["金奇异果", "绿奇异果/猕猴桃", "车厘子/樱桃"]
          },
          {
            title: "奇异果/车厘子888>>",
            foods: [
              "金奇异果",
              "绿奇异果/猕猴桃",
              "车厘子/樱桃",
              "金奇异果",
              "绿奇异果/猕猴桃",
              "车厘子/樱桃"
            ]
          },
          {
            title: "奇异果/车厘子888>>",
            foods: ["金奇异果", "绿奇异果/猕猴桃", "车厘子/樱桃"]
          },
          {
            title: "奇异果/车厘子888>>",
            foods: [
              "金奇异果",
              "绿奇异果/猕猴桃",
              "车厘子/樱桃",
              "金奇异果",
              "绿奇异果/猕猴桃"
            ]
          },
          {
            title: "奇异果/车厘子888>>",
            foods: ["金奇异果", "绿奇异果/猕猴桃", "车厘子/樱桃"]
          }
        ]
      ]
    };
  },
  methods: {
    hideDialog() {
      this.menuIndex = 1000;
    },
    showDialog(event) {
      var index = event.target.dataset.i;
      this.menuIndex = index;
    }
  }
};
</script>

<style>
@import url(../assets/css/index.css);
</style>