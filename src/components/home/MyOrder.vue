<template>
  <div>
    <Table border :columns="columns" :data="order" size="large" no-data-text="你还有订单，快点去购物吧"></Table>
    <div class="page-size">
      <Page :total="100" show-sizer></Page>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyOrder',
  data () {
    return {
      order: [{
        order_id: 1529931938150,
        goods_id: 1529931938150,
        count: 1,
        img: 'static/img/goodsDetail/pack/33.jpg',
        package: '250ml原厂红泥',
        price: 28,
        title: '紫砂壶倒把西施潮州手拉壶手把全手工紫砂壶特价仿古朱泥小紫砂壶',
        createAt: '2018-06-06 20:06:08'
      }],
      columns: [
        {
          title: '订单号',
          key: 'order_id',
          width: 180,
          align: 'center'
        },
        {
          title: '图片',
          key: 'img',
          width: 86,
          render: (h, params) => {
            return h('div', [
              h('img', {
                attrs: {
                  src: params.row.img
                }
              })
            ]);
          },
          align: 'center'
        },
        {
          title: '标题',
          key: 'title',
          align: 'center'
        },
        {
          title: '套餐',
          width: 198,
          key: 'package',
          align: 'center'
        },
        {
          title: '数量',
          key: 'count',
          width: 68,
          align: 'center'
        },
        {
          title: '价格',
          width: 68,
          key: 'price',
          align: 'center'
        },
        {
          title: '购买时间',
          width: 120,
          key: 'createAt',
          align: 'center'
        }
      ]
    };
  }
};
</script>

<style scoped>
.page-size {
  margin: 15px 0px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>
