/*
 * @Author: Gavin
 * @Date: 2018-06-11 11:27:10
 * @Last Modified by: Gavin
 * @Last Modified time: 2018-06-11 12:23:40
 * @Describe: 搜索商品导航标签
 */
<template>
  <div class="item-class-show">
    <Row class="item-class-group" v-for="(items, index) in tagsInfo" :key="index">
      <i-col class="item-class-name" span="3">{{ items.tagName }} : </i-col>
      <i-col class="item-class-select" span="21">
        <span v-for="(item, subIndex) in items.tags" :key="subIndex">{{ item }}</span>
      </i-col>
    </Row>
  </div>
</template>

<script>
export default {
  name: 'GoodsClassNav',
  data () {
    return {
      tagsInfo: [
        {
          tagName: '泥料',
          tags: [ '紫泥', '朱泥', '段泥', '红泥', '黑金砂', '绿泥', '清水泥', '大红袍', '天青泥', '胶泥', '其他' ]
        },
        {
          tagName: '工艺',
          tags: [ '刻绘', '泥绘', '描金', '贴花', '仿铁', '铺砂', '喷绘' ]
        },
        {
          tagName: '紫砂壶',
          tags: ['新手入门', '经典热卖', '使用送礼', '雅玩自赏', '收藏升值', '高端茶壶']
        },
        {
          tagName: '紫砂杯',
          tags: ['品茗杯', '公道杯', '紫砂盖杯', '紫砂盖碗']
        }
      ]
    };
  }
};
</script>

<style scoped>
.item-class-show {
  margin: 15px auto;
  width: 100%;
}
.item-class-group {
  margin-top: 1px;
  height: 45px;
  border-bottom: 1px solid #ccc;
}
.item-class-group:first-child {
  border-top: 1px solid #ccc;
}
.item-class-name {
  padding-left: 15px;
  line-height: 44px;
  color: #666;
  font-weight: bold;
  background-color: #f3f3f3;
}
.item-class-name:first-child {
  line-height: 43px;
}
.item-class-select span {
  margin-left: 15px;
  width: 160px;
  color: #005aa0;
  line-height: 45px;
  cursor: pointer;
}
</style>
