// fenbao/shopxq/shopxq.js
import config from '../../config'
import ulik from '../../utils/util'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    back:config.NETWORK_RESOURCE + "footerl.jpeg",
    imgUrls:[
      config.NETWORK_RESOURCE +'swiper.jpeg',
      config.NETWORK_RESOURCE +'swiper2.jpeg',
      config.NETWORK_RESOURCE +'swiper3.jpeg'
    ],

    
    currentSwiper: 0,
    indicatorColor:'white',
    indicatorActivecolor:'red',
    height:"",
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    contorbackcolor:"#515368",
    advicecolor:"#ffffff",
    rightb: config.NETWORK_RESOURCE + '图标-右.png',
    goos:{
      title:"法国进口红酒礼盒装 聚会送礼 波尔多 AOC原瓶 干红葡萄酒 750ML*2",
      lalala:"由京东发货，每日壹品葡萄酒专营店提供售后服务",
      price_now:"399元",
      price_away:"799元"
    },
    wodexz:"过节送礼红酒礼盒 双支皮盒 ",
    xiang:config.NETWORK_RESOURCE +'xiang1.jpeg'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  swiperChange: function(e) {
    this.setData({
      currentSwiper: e.detail.current
    })
  },
  onLoad: function (options) {
    let _this = this;
    ulik.getscollma(_this)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})