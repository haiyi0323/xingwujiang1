// fenbao/credit/credit.js
import config from '../../config'
import ulik from '../../utils/util'
Page({

  /**
   * 页面的初始数据
   */
  data: {
      back: config.NETWORK_RESOURCE + "renwuback.jpeg",
      jifen:"153",
      guoqi:"0",
      jiantou :config.NETWORK_RESOURCE + '图标-右.png',
      duihuanlist:[
        {
          img: config.NETWORK_RESOURCE + '图层 104.png',
          price:"2000",
          title:"西湖龙井工艺 雨前龙井茶叶",
        },

        {
          img: config.NETWORK_RESOURCE + '图层 104.png',
          price:"2000",
          title:"西湖龙井工艺 雨前龙井茶叶",
        },


        {
          img: config.NETWORK_RESOURCE + '图层 104.png',
          price:"2000",
          title:"西湖龙井工艺 雨前龙井茶叶",
        },
        {
          img: config.NETWORK_RESOURCE + '图层 104.png',
          price:"2000",
          title:"西湖龙井工艺 雨前龙井茶叶",
        },

        {
          img: config.NETWORK_RESOURCE + '图层 104.png',
          price:"2000",
          title:"西湖龙井工艺 雨前龙井茶叶",
        },

        {
          img: config.NETWORK_RESOURCE + '图层 104.png',
          price:"2000",
          title:"西湖龙井工艺 雨前龙井茶叶",
        },

        {
          img: config.NETWORK_RESOURCE + '图层 104.png',
          price:"2000",
          title:"西湖龙井工艺 雨前龙井茶叶",
        },

        {
          img: config.NETWORK_RESOURCE + '图层 104.png',
          price:"2000",
          title:"西湖龙井工艺 雨前龙井茶叶",
        },


      ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },
  renwu(){

    wx.reLaunch({
      url:'/pages/navbar/renwu/renwu'
  })
  },
  shopxqy(){
    ulik.navto( "/fenbao/shopxq/shopxq")
  }

})