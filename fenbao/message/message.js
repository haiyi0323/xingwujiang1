import config from '../../config'
var app = getApp();

Page({
  data: {
    winHeight: "",//窗口高度
    currentTab: 0, //预设默认选中的栏目
    scrollLeft: 0, //tab滚动条距离左侧距离
    newsTab: ["消息", "动态"],
    authorList: {
      img: "http://ookzqad11.bkt.clouddn.com/avatar.png",
      name: "欢顔",
      tag: "知名情感博主",
      answer: 134,
      listen: 2234
    },
    back_mes: config.NETWORK_RESOURCE + 'footerl.jpeg',

    mes_list:{
      
        touxiang: config.NETWORK_RESOURCE + 'baoma.png',
        time:'06/05 17:09',
        content:"有道词典在《互联网周刊》发布的“2016年上半年度APP分类排行榜”中获得教育类排行第一名，并荣获“最受用户欢迎在线教育APP奖”。"
      
   
    },

 doing:{
  
    id:"1",
    tit:"讯飞输入法皮肤“龙口丛林”",
    yhimg: config.NETWORK_RESOURCE + 'morentouxiang.jpeg',
    name:"巴啦啦小魔仙",
    time:"刚刚",
    ggimg: config.NETWORK_RESOURCE + "mingpian1.png"
  

 },


  },
  // 滚动切换标签样式
  reLaunch: function (e) {
    this.setData({
      currentTab: e.detail.current
    });
    this.checkCor();
  },
  // 点击tab切换当前页时改变样式
  swichNav: function (e) {
    var cur = e.target.dataset.current;
    if (this.data.currentTab == cur) {
      return false;
    }
    else {
      this.setData({
        currentTab: cur
      })
    }
  },
  //判断当前滚动超过一屏时，设置tab向左滚动。
  checkCor: function () {
    if (this.data.currentTab > 4) {
      this.setData({
        scrollLeft: 300
      })
    } else {
      this.setData({
        scrollLeft: 0
      })
    }
  },
  onLoad: function () {
    var that = this;
    //  高度自适应
    wx.getSystemInfo({
      success: function (res) {
        var clientHeight = res.windowHeight,
          clientWidth = res.windowWidth,
          rpxR = 750 / clientWidth;
        var calc = clientHeight * rpxR - 120;
        that.setData({
          winHeight: calc
        });
      }
    });
  }
})