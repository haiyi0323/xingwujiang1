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
    swiperIndex:"0",
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
        price:"125元/100g",
        title:"知味观中华老字号知味 礼粽端午粽子礼盒",
      },

      {
        img: config.NETWORK_RESOURCE + '图层 104.png',
        price:"125元/100g",
        title:"知味观中华老字号知味 礼粽端午粽子礼盒",
      },


      {
        img: config.NETWORK_RESOURCE + '图层 104.png',
             price:"125元/100g",
        title:"知味观中华老字号知味 礼粽端午粽子礼盒",
      },
      {
        img: config.NETWORK_RESOURCE + '图层 104.png',
             price:"125元/100g",
        title:"知味观中华老字号知味 礼粽端午粽子礼盒",
      },

      {
        img: config.NETWORK_RESOURCE + '图层 104.png',
             price:"125元/100g",
        title:"知味观中华老字号知味 礼粽端午粽子礼盒",
      },

      {
        img: config.NETWORK_RESOURCE + '图层 104.png',
             price:"125元/100g",
        title:"知味观中华老字号知味 礼粽端午粽子礼盒",
      },

      {
        img: config.NETWORK_RESOURCE + '图层 104.png',
             price:"125元/100g",
        title:"知味观中华老字号知味 礼粽端午粽子礼盒",
      },

      {
        img: config.NETWORK_RESOURCE + '图层 104.png',
             price:"125元/100g",
        title:"知味观中华老字号知味 礼粽端午粽子礼盒",
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
  shopxq(){
    ulik.navto("/fenbao/shopxq/shopxq")
  },
  huadongso(e){
    const that = this;
    
    that.setData({
    
    swiperIndex: e.detail.current,
    
    })
    
  }

})