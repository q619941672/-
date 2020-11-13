<template>
  <div>
    <div class="nav-item">
      <ul>
        <li v-for="(item,index) in nav" :key="index">
          <a href="#">{{item}}</a>
        </li>
      </ul>
    </div>
    <div class="nav-body">
      <!-- 侧边导航 -->
      <div class="nav-side" ref="navSide">
        <ul>
          <li @mouseenter="showDetail(1)" @mouseleave="hideDetail(1)">
            <span class="nav-side-item">新品推荐</span>
          </li>
          <li @mouseenter="showDetail(2)" @mouseleave="hideDetail(2)">
            <span class="nav-side-item">西施</span> /
            <span class="nav-side-item">石瓢</span> /
            <span class="nav-side-item">圆器</span>
          </li>
          <li @mouseenter="showDetail(1)" @mouseleave="hideDetail(1)">
            <span class="nav-side-item">花器</span> /
            <span class="nav-side-item">方器</span>
          </li>
          <li @mouseenter="showDetail(2)" @mouseleave="hideDetail(2)">
            <span class="nav-side-item">刻绘</span> /
            <span class="nav-side-item">泥绘</span> /
            <span class="nav-side-item">紫泥</span> /
            <span class="nav-side-item">清水泥</span>
          </li>
          <li @mouseenter="showDetail(1)" @mouseleave="hideDetail(1)">
            <span class="nav-side-item">青瓷</span> /
            <span class="nav-side-item">陶瓷</span> /
            <span class="nav-side-item">朱泥</span> /
            <span class="nav-side-item">段泥</span>
          </li>
          <li @mouseenter="showDetail(2)" @mouseleave="hideDetail(2)">
            <span class="nav-side-item">雅玩初体验</span> /
            <span class="nav-side-item">精品</span>
          </li>
          <li @mouseenter="showDetail(1)" @mouseleave="hideDetail(1)">
            <span class="nav-side-item">预售</span> /
            <span class="nav-side-item">5折</span> /
            <span class="nav-side-item">高工</span> /
            <span class="nav-side-item">热卖</span>
          </li>
          <li @mouseenter="showDetail(2)" @mouseleave="hideDetail(2)">
            <span class="nav-side-item">青瓷</span> /
            <span class="nav-side-item">紫泥</span> /
            <span class="nav-side-item">刻绘</span>
          </li>
          <li @mouseenter="showDetail(1)" @mouseleave="hideDetail(1)">
            <span class="nav-side-item">段泥</span> /
            <span class="nav-side-item">雅玩初体验</span>
          </li>
          <li @mouseenter="showDetail(2)" @mouseleave="hideDetail(2)">
            <span class="nav-side-item">预售</span> /
            <span class="nav-side-item">清水泥</span>
          </li>
          <li @mouseenter="showDetail(1)" @mouseleave="hideDetail(1)">
            <span class="nav-side-item">高工</span> /
            <span class="nav-side-item">刻绘</span> /
            <span class="nav-side-item">紫泥</span> /
            <span class="nav-side-item">热卖</span>
          </li>
          <li @mouseenter="showDetail(2)" @mouseleave="hideDetail(2)">
            <span class="nav-side-item">精品推荐</span> /
            <span class="nav-side-item">热卖推荐</span>
          </li>
          <li @mouseenter="showDetail(1)" @mouseleave="hideDetail(1)">
            <span class="nav-side-item">好货专区</span> /
            <span class="nav-side-item">热卖专区</span>
          </li>
          <li @mouseenter="showDetail(2)" @mouseleave="hideDetail(2)">
            <span class="nav-side-item">预售</span> /
            <span class="nav-side-item">刻绘</span> /
            <span class="nav-side-item">青瓷</span>
          </li>
        </ul>
      </div>
      <div class="nav-content">
        <!-- 幻灯片 -->
        <div>
          <Carousel autoplay loop>
              <CarouselItem  v-for="(item, index) in marketing.CarouselItems" :key="index">
                <router-link to="/goodsList">
                  <img :src="item">
                </router-link>
              </CarouselItem>
          </Carousel>
        </div>
        <div class="nav-show">
          <div class="nav-show-img" v-for="(item, index) in marketing.activity" :key="index">
            <router-link to="/goodsList">
              <img :src="item">
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <transition name="fade">
      <div class="detail-item-panel panel-1" :duration="{ enter: 100, leave: 100 }" v-show="panel1" @mouseenter="showDetail(1)" ref="itemPanel1" @mouseleave="hideDetail(1)">
        <div class="nav-detail-item">
          <span v-for="(item, index) in panelData1.navTags" :key="index">{{item}} > </span>
        </div>
        <ul>
          <li v-for="(items, index) in panelData1.classNav" :key="index" class="detail-item-row">
            <span class="detail-item-title">{{items.title}}
              <span class="glyphicon glyphicon-menu-right"></span>
            </span>
            <router-link to="/goodsList" v-for="(item, subIndex) in items.tags" :key="subIndex">
              <span class="detail-item">{{item}}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </transition>
    <transition name="fade">
      <div class="detail-item-panel panel-2" :duration="{ enter: 100, leave: 100 }" v-show="panel2" @mouseenter="showDetail(2)" ref="itemPanel2" @mouseleave="hideDetail(2)">
        <div class="nav-detail-item">
          <span v-for="(item, index) in panelData2.navTags" :key="index">{{item}} > </span>
        </div>
        <ul>
          <li v-for="(items, index) in panelData2.classNav" :key="index" class="detail-item-row">
            <span class="detail-item-title">{{items.title}}
              <span class="glyphicon glyphicon-menu-right"></span>
            </span>
            <router-link to="/goodsList" v-for="(item, subIndex) in items.tags" :key="subIndex">
              <span class="detail-item">{{item}}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import store from '@/vuex/store';
import { mapState } from 'vuex';
export default {
  name: 'HomeNav',
  data () {
    return {
      panel1: false,
      panel2: false,
      nav: [
        '秒杀',
        '优惠券',
        '团购',
        '品牌',
        '打折',
        '好壶',
        '和记张生',
        '纯手工',
        '定制'
      ],
      panelData1: {
        navTags: [ '紫砂壶', '紫砂杯', '红泥', '明星同款', '紫泥', '段泥' ],
        classNav: [
          {
            title: '泥料分类',
            tags: [ '红泥', '紫泥', '段泥', '底槽清', '绿泥', '黑金沙', '大红袍', '青灰泥', '朱泥', '胶泥' ]
          },
          {
            title: '容量分类',
            tags: [ '红泥', '紫泥', '段泥', '底槽清' ]
          },
          {
            title: '器形分类',
            tags: [ '底槽清', '绿泥', '黑金沙' ]
          },
          {
            title: '作者分类',
            tags: [ '底槽清', '绿泥', '黑金沙', '大红袍', '青灰泥', '朱泥', '胶泥' ]
          },
          {
            title: '工艺分类',
            tags: [ '底槽清', '绿泥', '黑金沙' ]
          },
          {
            title: '紫砂壶',
            tags: [ '绿泥', '黑金沙', '大红袍', '青灰泥' ]
          },
          {
            title: '紫砂杯',
            tags: [ '底槽清', '绿泥', '黑金沙', '大红袍', '青灰泥', '朱泥', '胶泥' ]
          },
          {
            title: '紫砂茶宠',
            tags: [ '绿泥', '黑金沙', '大红袍', '青灰泥' ]
          },
          {
            title: '茶道配件',
            tags: [ '绿泥', '黑金沙', '大红袍', '青灰泥' ]
          },
          {
            title: '价格分类',
            tags: [ '底槽清', '绿泥', '黑金沙', '大红袍', '青灰泥', '朱泥', '胶泥' ]
          },
          {
            title: '紫砂杯',
            tags: [ '绿泥', '黑金沙', '大红袍', '青灰泥' ]
          }
        ]
      },
      panelData2: {
        navTags: [ '紫砂壶', '紫砂杯', '红泥', '明星同款', '紫泥', '段泥' ],
        classNav: [
          {
            title: '紫砂杯',
            tags: [ '绿泥', '黑金沙', '大红袍', '青灰泥' ]
          },
          {
            title: '价格分类',
            tags: [ '绿泥', '黑金沙', '大红袍', '青灰泥' ]
          },
          {
            title: '茶道配件',
            tags: [ '绿泥', '黑金沙', '大红袍', '青灰泥' ]
          },
          {
            title: '紫砂茶宠',
            tags: [ '绿泥', '黑金沙', '大红袍', '青灰泥' ]
          },
          {
            title: '工艺分类',
            tags: [ '绿泥', '黑金沙', '大红袍', '青灰泥' ]
          },
          {
            title: '价格分类',
            tags: [ '绿泥', '黑金沙', '大红袍', '青灰泥' ]
          },
          {
            title: '作者分类',
            tags: [ '绿泥', '黑金沙', '大红袍', '青灰泥' ]
          },
          {
            title: '器形分类',
            tags: [ '绿泥', '黑金沙', '大红袍', '青灰泥' ]
          },
          {
            title: '茶道配件',
            tags: [ '绿泥', '黑金沙', '大红袍', '青灰泥' ]
          },
          {
            title: '容量分类',
            tags: [ '绿泥', '黑金沙', '大红袍', '青灰泥' ]
          },
          {
            title: '紫砂茶宠',
            tags: [ '绿泥', '黑金沙', '大红袍', '青灰泥' ]
          }
        ]
      }
    };
  },
  computed: {
    ...mapState(['marketing'])
  },
  methods: {
    showDetail (index) {
      index === 1 ? (this.panel1 = true) : (this.panel2 = true);
    },
    hideDetail (index) {
      index === 1 ? (this.panel1 = false) : (this.panel2 = false);
    }
  },
  mounted () {
    this.$refs.itemPanel1.style.left =
      this.$refs.navSide.offsetLeft + this.$refs.navSide.offsetWidth + 'px';
    this.$refs.itemPanel2.style.left =
      this.$refs.navSide.offsetLeft + this.$refs.navSide.offsetWidth + 'px';
    this.$refs.itemPanel1.style.top = this.$refs.navSide.offsetTop + 'px';
    this.$refs.itemPanel2.style.top = this.$refs.navSide.offsetTop + 'px';
  },
  updated () {
    this.$refs.itemPanel1.style.left =
      this.$refs.navSide.offsetLeft + this.$refs.navSide.offsetWidth + 'px';
    this.$refs.itemPanel2.style.left =
      this.$refs.navSide.offsetLeft + this.$refs.navSide.offsetWidth + 'px';
    this.$refs.itemPanel1.style.top = this.$refs.navSide.offsetTop + 'px';
    this.$refs.itemPanel2.style.top = this.$refs.navSide.offsetTop + 'px';
  },
  store
};
</script>

<style scoped>
.nav-item {
  width: 680px;
  height: 36px;
  margin: 0px auto;
}
.nav-item ul {
  list-style: none;
  margin-left: 15px;
}
.nav-item li {
  float: left;
  font-size: 16px;
  font-weight: bold;

  margin-left: 30px;
}
.nav-item a {
  text-decoration: none;
  color: #555555;
}
.nav-item a:hover {
  color: #d9534f;
}
/*大的导航信息，包含导航，幻灯片等*/
.nav-body {
  width: 1020px;
  height: 485px;
  margin: 0px auto;
}
.nav-side {
  width: 200px;
  height: 100%;
  padding: 0px;
  color: #fff;
  float: left;
  background-color: #6e6568;
}
.nav-side ul {
  width: 100%;
  padding: 0px;
  padding-top: 15px;
  list-style: none;
}
.nav-side li {
  padding: 7.5px;
  padding-left: 15px;
  font-size: 14px;
  line-height: 18px;
}
.nav-side li:hover {
  background: #999395;
}
.nav-side-item:hover {
  cursor: pointer;
  color: #c81623;
}

/*导航内容*/
.nav-content {
  width: 792px;
  margin-left: 15px;
  overflow: hidden;
  float: left;
}
/*导航图片*/
.nav-show-img {
  margin-top: 10px;
  float: left;
}
.nav-show-img:nth-child(2) {
  margin-left: 12px;
}
/*显示商品*/
.content {
  width: 100%;
}
/*显示商品详细信息*/
.detail-item-panel {
  width: 815px;
  height: 485px;
  background-color: #fff;
  position: absolute;
  top: 168px;
  left: 389px;
  z-index: 999;
}
.nav-detail-item {
  margin-left: 26px;
  margin-top: 15px;
  margin-bottom: 15px;
  cursor: pointer;
  color: #eee;
}
.nav-detail-item span {
  padding: 6px;
  padding-left: 12px;
  margin-left: 15px;
  font-size: 12px;
  background-color: #6e6568;
}
.nav-detail-item span:hover {
  margin-left: 15px;
  background-color: #f44336;
}
.detail-item-panel ul {
  list-style: none;
}
.detail-item-panel li {
  line-height: 38px;
  margin-left: 40px;
}
.detail-item-title {
  padding-right: 6px;
  font-weight: bold;
  font-size: 12px;
  cursor: pointer;
  color: #555555;
}
.detail-item-title:hover {
  color: #d9534f;
}
.detail-item-row a {
  color: #555555;
}
.detail-item{
  font-size: 14px;
  padding-left: 12px;
  padding-right: 8px;
  cursor: pointer;
  border-left: 1px solid #ccc;
}
.detail-item:hover {
  color: #d9534f;
}
</style>
