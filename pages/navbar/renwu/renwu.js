// pages/navbar/renwu/renwu.js

import  router from '../../../router/router'
import config from '../../../config'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    yeman:true,
      renwuback: config.NETWORK_RESOURCE + 'renwuback.jpeg',
      rightb: config.NETWORK_RESOURCE + '图标-右.png',
      num:'55积分',
      rw_list:[
        {
          img: config.NETWORK_RESOURCE + 'wdrwa1.png',
          cont:"邀请创业小伙伴",
          award:"888积分",
          xiang:"邀请10人成为你的创业小伙伴",
          zt:{
            isok:"2",
            down:"5",
            all: "10"
          }

        },
        {
          img: config.NETWORK_RESOURCE + 'wdrwa2.png',
          cont:"首次取用备用金",
          award:"10积分",
          xiang:"2019年7月18日 22：38截止",
          zt:{
            isok:"3",
            down:"0",
            all: "1"
          }

        },
        {
          img: config.NETWORK_RESOURCE + 'wdrwa3.png',
          cont:"参加2018创业大赛",
          award:"5魅力值",
          xiang:"2018年6月18日 23:59截止",
          zt:{
            isok:"1",
            down:"1",
            all: "1"
          }

        },
        {
          img: config.NETWORK_RESOURCE + 'wdrwa4.png',
          cont:"喝一杯咖啡",
          award:"33积分",
          xiang:"在门店消费任意一杯拿铁",
          zt:{
            isok:"1",
            down:"1",
            all: "1"
          }

        },
        {
          img: config.NETWORK_RESOURCE + 'wdrwa4.png',
          cont:"喝一杯咖啡",
          award:"33积分",
          xiang:"在门店消费任意一杯拿铁",
          zt:{
            isok:"1",
            down:"1",
            all: "1"
          }

        },
        {
          img: config.NETWORK_RESOURCE + 'wdrwa4.png',
          cont:"喝一杯咖啡",
          award:"33积分",
          xiang:"在门店消费任意一杯拿铁",
          zt:{
            isok:"1",
            down:"1",
            all: "1"
          }

        },
        {
          img: config.NETWORK_RESOURCE + 'wdrwa4.png',
          cont:"喝一杯咖啡",
          award:"33积分",
          xiang:"在门店消费任意一杯拿铁",
          zt:{
            isok:"1",
            down:"1",
            all: "1"
          }

        },
      ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    // var that = this
    // wx.getSystemInfo({
    //   success: function (res) {
    //       console.log(res);
          
    //     wx.createSelectorQuery().selectAll('.rw_header').boundingClientRect(function (rect) {
    //       console.log(res.windowHeight);
    //       console.log(rect[0].height);
          
    //       let contenth = rect[0].height
    //       let contenthhh = res.windowHeight - contenth
    //       that.setData({
    //           contentheight: contenthhh
    //       })
    //     }).exec()
        
      
    //   }
    // });



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
    setTimeout(() => {
      this.setData({
        yeman: false
      })
       
    }, 1000);
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    this.setData({
      yeman: true
    })
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
  wdjf(){
    router.navto("/fenbao/credit/credit")
  }
})