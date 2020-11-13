// 获取秒杀数据
export const loadSeckillsInfo = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const data = [
      {
        intro: '【赠茶叶】西湖  龙井25克*16袋 礼品装 整盒',
        img: 'static/img/index/seckill/seckill-item11.jpg',
        price: 66.6,
        realPrice: 88.8
      },
      {
        intro: 'D道杯 免费定制一件起定支持免费定制',
        img: 'static/img/index/seckill/seckill-item12.jpg',
        price: 289.0,
        realPrice: 599.0
      },
      {
        intro: '龙饮天香 22道工序制作而成 西施套装2400g*1套',
        img: 'static/img/index/seckill/seckill-item13.jpg',
        price: 21.8,
        realPrice: 49.0
      },
      {
        intro: '【赠茶垫】西施壶 壶钮精巧圆润 里外2层',
        img: 'static/img/index/seckill/seckill-item14.jpg',
        price: 49.9,
        realPrice: 59.0
      },
      {
        intro: '印章识别 经典手工制作 茶杯+茶叶*1套',
        img: 'static/img/index/seckill/seckill-item15.jpg',
        price: 559.9,
        realPrice: 759.9
      }
    ];
    const date = new Date();
    const hours = date.getHours();
    const minute = date.getMinutes();
    const seconds = date.getSeconds();
    console.log([hours, minute, seconds]);
    // 距离开始秒杀时间
    const deadline = {
      hours: 1,
      minute: 38,
      seconds: 36
    };
    commit('SET_SECKILLS_INFO', [data, deadline]);
  });
};

// 获取轮播(营销)图片
export const loadCarouselItems = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const data = {
      carouselItems: [
        'static/img/nav/111.jpg',
        'static/img/nav/222.jpg',
        'static/img/nav/333.jpg',
        'static/img/nav/444.jpg',
        'static/img/nav/555.jpg'
      ],
      activity: [
        'static/img/nav/nav_showimg11.jpg',
        'static/img/nav/nav_showimg12.jpg'
      ]
    };
    commit('SET_CAROUSELITEMS_INFO', data);
  });
};

// 加载好茶好壶专栏数据
export const loadComputer = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const computer = {
      title: '好茶好壶',
      link: [ 'D道杯', 's随e', '百纳壶', '百福锡罐', '扁鼓壶', '茶禅一味杯', '禅心', '承福盖碗', '吃茶去石瓢壶' ],
      detail: [
        {
          bigImg: 'static/img/index/computer/item-computer-111.jpg',
          itemFour: [
            {
              title: '布套道杯',
              intro: '老白茶199元限量秒！',
              img: 'static/img/index/computer/item-computer-222.jpg'
            },
            {
              title: '茶禅味杯',
              intro: '1300减618',
              img: 'static/img/index/computer/item-computer-333.jpg'
            },
            {
              title: '步步生莲',
              intro: '最高可省618',
              img: 'static/img/index/computer/item-computer-444.jpg'
            },
            {
              title: '和鸣2020',
              intro: '5折神券 精品套装',
              img: 'static/img/index/computer/item-computer-555.jpg'
            }
          ],
          itemContent: [
            'static/img/index/computer/item-computer-666.jpg',
            'static/img/index/computer/item-computer-777.jpg',
            'static/img/index/computer/item-computer-888.jpg'
          ]
        },
        {
          bigImg: 'static/img/index/computer/item-computer-2-111.jpg',
          itemFour: [
            {
              title: '福禄寿',
              intro: '爆款底座12期免息',
              img: 'static/img/index/computer/item-computer-2-222.jpg'
            },
            {
              title: '莲香壶',
              intro: '抢999减666神券',
              img: 'static/img/index/computer/item-computer-2-333.jpg'
            },
            {
              title: '莲香壶承',
              intro: '好壶低至5折',
              img: 'static/img/index/computer/item-computer-2-444.jpg'
            },
            {
              title: '墨宝瓜娄壶',
              intro: '品牌精品壶5折抢',
              img: 'static/img/index/computer/item-computer-2-555.jpg'
            }
          ],
          itemContent: [
            'static/img/index/computer/item-computer-2-666.jpg',
            'static/img/index/computer/item-computer-2-777.jpg',
            'static/img/index/computer/item-computer-2-888.jpg'
          ]
        }
      ]
    };
    commit('SET_COMPUTER_INFO', computer);
  });
};

// 加载爱吃专栏数据
export const loadEat = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const eat = {
      title: '打折好货',
      link: [ 'D道杯', 's随e', '百纳壶', '百福锡罐', '扁鼓壶', '茶禅一味杯', '禅心', '承福盖碗', '吃茶去石瓢壶' ],
      detail: [
        {
          bigImg: 'static/img/index/computer/item-computer-2-111.jpg',
          itemFour: [
            {
              title: '精品好货',
              intro: '买2免1',
              img: 'static/img/index/computer/item-computer-333.jpg'
            },
            {
              title: '低价专区',
              intro: '第二件半价',
              img: 'static/img/index/computer/item-computer-222.jpg'
            },
            {
              title: '买一送一',
              intro: '满99减40',
              img: 'static/img/index/computer/item-computer-444.jpg'
            },
            {
              title: '专业定制',
              intro: '满199减100',
              img: 'static/img/index/computer/item-computer-555.jpg'
            }
          ],
          itemContent: [
            'static/img/index/computer/item-computer-2-666.jpg',
            'static/img/index/computer/item-computer-2-888.jpg',
            'static/img/index/computer/item-computer-2-777.jpg'
          ]
        },
        {
          bigImg: 'static/img/index/computer/item-computer-111.jpg',
          itemFour: [
            {
              title: '高工',
              intro: '满199减100',
              img: 'static/img/index/computer/item-computer-2-333.jpg'
            },
            {
              title: '花器',
              intro: '满199减100',
              img: 'static/img/index/computer/item-computer-2-444.jpg'
            },
            {
              title: '方器',
              intro: '满199减100',
              img: 'static/img/index/computer/item-computer-2-222.jpg'
            },
            {
              title: '初体验',
              intro: '满199减100',
              img: 'static/img/index/computer/item-computer-2-555.jpg'
            }
          ],
          itemContent: [
            'static/img/index/computer/item-computer-777.jpg',
            'static/img/index/computer/item-computer-666.jpg',
            'static/img/index/computer/item-computer-888.jpg'
          ]
        }
      ]
    };
    commit('SET_EAT_INFO', eat);
  });
};

// 请求获得商品详细信息
export const loadGoodsInfo = ({ commit }) => {
  commit('SET_LOAD_STATUS', true);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = {
        goodsImg: [
          'static/img/goodsDetail/item-detail-11.jpg',
          'static/img/goodsDetail/item-detail-22.jpg',
          'static/img/goodsDetail/item-detail-33.jpg',
          'static/img/goodsDetail/item-detail-44.jpg'
        ],
        title: '百年利永 紫砂壶宜兴全手工名家原矿大红袍西施茶壶套装250ml',
        tags: ['壶壶双11', '全球热爱齐下厨', '领券满199减100'],
        discount: ['满148减10', '满218减20', '满288减30'],
        promotion: ['跨店满减', '多买优惠'],
        remarksNum: 6000,
        setMeal: [
          [
            {
              img: 'static/img/goodsDetail/pack/11.jpg',
              intro: '250ml大红袍',
              price: 28.0
            },
            {
              img: 'static/img/goodsDetail/pack/22.jpg',
              intro: '300ml纯手工',
              price: 29.0
            },
            {
              img: 'static/img/goodsDetail/pack/33.jpg',
              intro: '250ml原厂红泥',
              price: 28.5
            }
          ]

        ],
        hot: [
          {
            img: 'static/img/goodsDetail/hot/11.jpg',
            price: 28.0,
            sale: 165076
          },
          {
            img: 'static/img/goodsDetail/hot/22.jpg',
            price: 36.0,
            sale: 135078
          },
          {
            img: 'static/img/goodsDetail/hot/33.jpg',
            price: 38.0,
            sale: 105073
          },
          {
            img: 'static/img/goodsDetail/hot/11.jpg',
            price: 39.0,
            sale: 95079
          },
          {
            img: 'static/img/goodsDetail/hot/33.jpg',
            price: 25.0,
            sale: 5077
          },
          {
            img: 'static/img/goodsDetail/hot/22.jpg',
            price: 20.0,
            sale: 3077
          }
        ],
        goodsDetail: [
          'static/img/goodsDetail/intro/33.jpg',
          'static/img/goodsDetail/intro/22.jpg',
          'static/img/goodsDetail/intro/11.jpg',
          'static/img/goodsDetail/intro/44.jpg'
        ],
        param: [

        ],
        remarks: {
          goodAnalyse: 90,
          remarksTags: ['漂亮好看', '顺畅无比', '满意度高', '材质一流', '超级好用', '使用方便', '超级好用'],
          remarksNumDetail: [ 2000, 3000, 900, 1 ],
          detail: [
            {
              username: 'p****1',
              values: 3,
              content: '期待好久了，终于到手了，哈哈做工很精致，出水顺畅，包装特别好，材质高端大气上档次，容量不错，很容易清洗，90度不掉盖，但是倒立失败了，不知道是不是操作错了，有点可惜，但是喝茶，不是为了倒立，总之很满意！',
              goods: '4.7英寸-深邃蓝',
              create_at: '2018-05-15 09:20'
            },
            {
              username: '13****1',
              values: 5,
              content: '做工品质：做工很好，严丝合缝。',
              goods: '5.5英寸-玫瑰金',
              create_at: '2018-05-13 15:23'
            },
            {
              username: '3****z',
              values: 4.5,
              content: '容量大小：容量我认为正合适',
              goods: '4.7英寸-玫瑰金',
              create_at: '2018-05-05 12:25'
            },
            {
              username: 'gd****c',
              values: 3.5,
              content: '材质特点：第一次买不清楚。',
              goods: '4.7英寸-中国红',
              create_at: '2018-04-06 16:23'
            },
            {
              username: 'r****b',
              values: 4.5,
              content: '壳子还不错，送的膜也可以，不过还是感觉膜小了那么一点，屏幕没法完全覆盖。对了，壳子稍微有点硬，可能会伤漆，所以不要频繁取壳就好。',
              goods: '4.7英寸-中国红',
              create_at: '2018-03-15 19:24'
            },
            {
              username: 'd****e',
              values: 5,
              content: '包装特点：包装也很到位，有礼品袋。',
              goods: '5.5英寸-星空黑',
              create_at: '2018-03-10 10:13'
            }
          ]
        }
      };
      commit('SET_GOODS_INFO', data);
      commit('SET_LOAD_STATUS', false);
    }, 300);
  });
};

// 获取商品列表
export const loadGoodsList = ({ commit }) => {
  commit('SET_LOAD_STATUS', true);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = {
        asItems: [
          {
            img: 'static/img/goodsList/item-as-img-11.jpg',
            price: 39.9,
            intro: '纯手工制作，壶身线条清晰明快，均匀平整，制作难度非新手不可企及，口盖合一',
            num: 3140,
            sale: 9000
          },
          {
            img: 'static/img/goodsList/item-as-img-22.jpg',
            price: 36.6,
            intro: '纯手工制作，壶身线条清晰明快，均匀平整，制作难度非新手不可企及，口盖合一',
            num: 6160,
            sale: 8900
          },
          {
            img: 'static/img/goodsList/item-as-img-33.jpg',
            price: 38.6,
            intro: '纯手工制作，壶身线条清晰明快，均匀平整，制作难度非新手不可企及，口盖合一',
            num: 9160,
            sale: 8800
          },
          {
            img: 'static/img/goodsList/item-as-img-22.jpg',
            price: 35.6,
            intro: '纯手工制作，壶身线条清晰明快，均匀平整，制作难度非新手不可企及，口盖合一',
            num: 6160,
            sale: 7990
          },
          {
            img: 'static/img/goodsList/item-as-img-11.jpg',
            price: 38.6,
            intro: '纯手工制作，壶身线条清晰明快，均匀平整，制作难度非新手不可企及，口盖合一',
            num: 9160,
            sale: 7600
          },
          {
            img: 'static/img/goodsList/item-as-img-33.jpg',
            price: 35.6,
            intro: '纯手工制作，壶身线条清晰明快，均匀平整，制作难度非新手不可企及，口盖合一',
            num: 6160,
            sale: 6900
          }
        ],
        goodsList: [
          {
            img: 'static/img/goodsList/item-show-11.jpg',
            price: 36.60,
            intro: '纯手工制作，壶身线条清晰明快，均匀平整，制作难度非新手不可企及，口盖合一',
            remarks: 6160,
            shopName: '元亨利配件专营店',
            sale: 9900
          },
          {
            img: 'static/img/goodsList/item-show-22.jpg',
            price: 28.00,
            intro: '纯手工制作，壶身线条清晰明快，均匀平整，制作难度非新手不可企及，口盖合一',
            remarks: 3000,
            shopName: 'monqiqi旗舰店',
            sale: 9600
          },
          {
            img: 'static/img/goodsList/item-show-33.jpg',
            price: 15.00,
            intro: '纯手工制作，壶身线条清晰明快，均匀平整，制作难度非新手不可企及，口盖合一',
            remarks: 2800,
            shopName: 'BIAZE官方旗舰店',
            sale: 8900
          },
          {
            img: 'static/img/goodsList/item-show-44.jpg',
            price: 29.90,
            intro: '纯手工制作，壶身线条清晰明快，均匀平整，制作难度非新手不可企及，口盖合一',
            remarks: 9000,
            shopName: '歌乐力手配专营店',
            sale: 8600
          },
          {
            img: 'static/img/goodsList/item-show-55.jpg',
            price: 15.00,
            intro: '纯手工制作，壶身线条清晰明快，均匀平整，制作难度非新手不可企及，口盖合一',
            remarks: 6160,
            shopName: 'BIAZE官方旗舰店',
            sale: 8560
          },
          {
            img: 'static/img/goodsList/item-show-66.jpg',
            price: 28.00,
            intro: '纯手工制作，壶身线条清晰明快，均匀平整，制作难度非新手不可企及，口盖合一',
            remarks: 9006,
            shopName: '歌乐力手配专营店',
            sale: 8530
          },
          {
            img: 'static/img/goodsList/item-show-77.jpg',
            price: 15.00,
            intro: '纯手工制作，壶身线条清晰明快，均匀平整，制作难度非新手不可企及，口盖合一',
            remarks: 8666,
            shopName: 'BIAZE官方旗舰店',
            sale: 8360
          },
          {
            img: 'static/img/goodsList/item-show-88.jpg',
            price: 29.90,
            intro: '纯手工制作，壶身线条清晰明快，均匀平整，制作难度非新手不可企及，口盖合一',
            remarks: 6080,
            shopName: '歌乐力手配专营店',
            sale: 7560
          },
          {
            img: 'static/img/goodsList/item-show-99.jpg',
            price: 36.60,
            intro: '纯手工制作，壶身线条清晰明快，均匀平整，制作难度非新手不可企及，口盖合一',
            remarks: 6160,
            shopName: '元亨利配件专营店',
            sale: 7360
          },
          {
            img: 'static/img/goodsList/item-show-22.jpg',
            price: 28.00,
            intro: '纯手工制作，壶身线条清晰明快，均匀平整，制作难度非新手不可企及，口盖合一',
            remarks: 3000,
            shopName: 'monqiqi旗舰店',
            sale: 6960
          },
          {
            img: 'static/img/goodsList/item-show-33.jpg',
            price: 15.00,
            intro: '纯手工制作，壶身线条清晰明快，均匀平整，制作难度非新手不可企及，口盖合一',
            remarks: 2800,
            shopName: 'BIAZE官方旗舰店',
            sale: 6560
          },
          {
            img: 'static/img/goodsList/item-show-44.jpg',
            price: 29.90,
            intro: '纯手工制作，壶身线条清晰明快，均匀平整，制作难度非新手不可企及，口盖合一',
            remarks: 9000,
            shopName: '歌乐力手配专营店',
            sale: 6360
          },
          {
            img: 'static/img/goodsList/item-show-55.jpg',
            price: 15.00,
            intro: '纯手工制作，壶身线条清晰明快，均匀平整，制作难度非新手不可企及，口盖合一',
            remarks: 6160,
            shopName: 'BIAZE官方旗舰店',
            sale: 5530
          },
          {
            img: 'static/img/goodsList/item-show-66.jpg',
            price: 28.00,
            intro: '纯手工制作，壶身线条清晰明快，均匀平整，制作难度非新手不可企及，口盖合一',
            remarks: 9006,
            shopName: '歌乐力手配专营店',
            sale: 5560
          },
          {
            img: 'static/img/goodsList/item-show-77.jpg',
            price: 15.00,
            intro: '纯手工制作，壶身线条清晰明快，均匀平整，制作难度非新手不可企及，口盖合一',
            remarks: 8666,
            shopName: 'BIAZE官方旗舰店',
            sale: 5260
          },
          {
            img: 'static/img/goodsList/item-show-88.jpg',
            price: 29.90,
            intro: '纯手工制作，壶身线条清晰明快，均匀平整，制作难度非新手不可企及，口盖合一',
            remarks: 6080,
            shopName: '歌乐力手配专营店',
            sale: 3560
          }
        ]
      };
      commit('SET_GOODS_LIST', data);
      commit('SET_LOAD_STATUS', false);
    });
  });
};

// 添加购物车
export const addShoppingCart = ({ commit }, data) => {
  return new Promise((resolve, reject) => {
    commit('ADD_SHOPPING_CART', data);
  });
};

// 获取用户推荐
export const loadRecommend = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const data = [
      [
        {
          img: 'static/img/otherBuy/1.jpg',
          intro: 'iPhone7/6s/8钢化膜苹果7Plus全屏全覆盖3D抗蓝',
          price: 29.00
        },
        {
          img: 'static/img/otherBuy/2.jpg',
          intro: '苹果数据线 苹果iPhoneX/6s/7plus/8充电线',
          price: 36.00
        },
        {
          img: 'static/img/otherBuy/3.jpg',
          intro: '111苹果8/7/6/6s钢化膜 iphone8/7/6s/6钢化玻璃',
          price: 19.00
        },
        {
          img: 'static/img/otherBuy/4.jpg',
          intro: 'iPhone6s/7钢化膜苹果8 Plus手机膜抗蓝光非全屏',
          price: 28.00
        }
      ],
      [
        {
          img: 'static/img/otherBuy/5.jpg',
          intro: '苹果6s手机壳iPhone6s Plus保护壳防摔全',
          price: 28.00
        },
        {
          img: 'static/img/otherBuy/6.jpg',
          intro: 'iPhone7/8手机壳手机套防摔磨砂保护壳星空黑☆全包保护',
          price: 30.00
        },
        {
          img: 'static/img/otherBuy/7.jpg',
          intro: '数据线 适用于苹果iPhone 6s/6plus/7plus/8/X',
          price: 18.00
        },
        {
          img: 'static/img/otherBuy/8.jpg',
          intro: 'iPhone8/7/6S/6钢化膜 苹果8/7/6s/6玻璃膜 手机高',
          price: 15.00
        }
      ]
    ];
    commit('SET_RECOMMEND_INFO', data);
  });
};

export const loadAddress = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const address = [
      {
        addressId: '123456',
        name: '程正荣',
        province: '浙江省',
        city: '宁波市',
        area: '海曙区',
        address: '学院路',
        phone: '138****8888',
        postalcode: '000000'
      },
      {
        addressId: '123458',
        name: '程正荣',
        province: '上海市',
        city: '上海市',
        area: '浦东新区',
        address: '沙新镇',
        phone: '100****0000',
        postalcode: '000000'
      }
    ];
    commit('SET_USER_ADDRESS', address);
  });
};

export const loadShoppingCart = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const data = [{
      goods_id: 1529931938150,
      count: 1,
      img: 'static/img/goodsDetail/pack/33.jpg',
      package: '250ml原厂红泥',
      price: 28.5,
      title: '百年利永 紫砂壶宜兴全手工名家原矿大红袍西施茶壶套装250ml'
    }];
    commit('SET_SHOPPING_CART', data);
  });
};

// 添加注册用户
export const addSignUpUser = ({ commit }, data) => {
  return new Promise((resolve, reject) => {
    const userArr = localStorage.getItem('users');
    let users = [];
    if (userArr) {
      users = JSON.parse(userArr);
    }
    users.push(data);
    localStorage.setItem('users', JSON.stringify(users));
  });
};

// 用户登录
export const login = ({ commit }, data) => {
  return new Promise((resolve, reject) => {
    if (data.username === 'Gavin' && data.password === '123456') {
      localStorage.setItem('loginInfo', JSON.stringify(data));
      commit('SET_USER_LOGIN_INFO', data);
      resolve(true);
      return true;
    }
    const userArr = localStorage.getItem('users');
    console.log(userArr);
    if (userArr) {
      const users = JSON.parse(userArr);
      for (const item of users) {
        if (item.username === data.username) {
          localStorage.setItem('loginInfo', JSON.stringify(item));
          commit('SET_USER_LOGIN_INFO', item);
          resolve(true);
          break;
        }
      }
    } else {
      resolve(false);
    }
  });
};

// 退出登陆
export const signOut = ({ commit }) => {
  localStorage.removeItem('loginInfo');
  commit('SET_USER_LOGIN_INFO', {});
};

// 判断是否登陆
export const isLogin = ({ commit }) => {
  const user = localStorage.getItem('loginInfo');
  if (user) {
    commit('SET_USER_LOGIN_INFO', JSON.parse(user));
  }
};
