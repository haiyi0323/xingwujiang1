// fenbao/shop/shop.js
import config from '../../config'
import ulik from '../../utils/util'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shopback:config.NETWORK_RESOURCE +'shopback.png',
    icon_where: config.NETWORK_RESOURCE +'weizhi.png',
    gouwucaor:config.NETWORK_RESOURCE +'gouwucar.png',
    luo_back:config.NETWORK_RESOURCE +'footerl.jpeg',
    dsssf:{
      juli:"1.34",
      syss:"5",
    },
    dianjia:[
      {
       
        fw_img:config.NETWORK_RESOURCE +"huiyi.jpeg",
        jiage:"2000元/次"
      },
      {
      
        fw_img:config.NETWORK_RESOURCE +"huiyi.jpeg",
        jiage:"2000元/次"
      },
      {
      
        fw_img:config.NETWORK_RESOURCE +"huiyi.jpeg",
        jiage:"2000元/次"
      },
      {
      
        fw_img:config.NETWORK_RESOURCE +"huiyi.jpeg",
        jiage:"2000元/次"
      }
    ],
    duihuanlist:[
      {
        img: config.NETWORK_RESOURCE + '图层 104.png',
        price:"2000",
        title:"LOL英雄联盟职业联赛单次入场券",
      },

      {
        img: config.NETWORK_RESOURCE + '图层 104.png',
        price:"2000",
        title:"LOL英雄联盟职业联赛单次入场券",
      },


      {
        img: config.NETWORK_RESOURCE + '图层 104.png',
        price:"2000",
        title:"LOL英雄联盟职业联赛单次入场券",
      },
      {
        img: config.NETWORK_RESOURCE + '图层 104.png',
        price:"2000",
        title:"LOL英雄联盟职业联赛单次入场券",
      },

      {
        img: config.NETWORK_RESOURCE + '图层 104.png',
        price:"2000",
        title:"LOL英雄联盟职业联赛单次入场券",
      },

      {
        img: config.NETWORK_RESOURCE + '图层 104.png',
        price:"2000",
        title:"LOL英雄联盟职业联赛单次入场券",
      },

      {
        img: config.NETWORK_RESOURCE + '图层 104.png',
        price:"2000",
        title:"LOL英雄联盟职业联赛单次入场券",
      },

      {
        img: config.NETWORK_RESOURCE + '图层 104.png',
        price:"2000",
        title:"LOL英雄联盟职业联赛单次入场券",
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

  }
})