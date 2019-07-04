// fenbao/dynamic/dynamic.js
import config from '../../config'
import ulik from '../../utils/util'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mainimg: config.NETWORK_RESOURCE + 'zhanhui.jpeg',
    back: config.NETWORK_RESOURCE + 'footerl.jpeg',
    shangjian:".././../img/shangjiantou.png",
 
    dongtaiinfo:{
      main_title:"网易有道X最强大脑，测测你的人格词条，寻找未知自己",
      my_antver: config.NETWORK_RESOURCE + "morentouxiang.jpeg",
      my_name:"DevinSteve",
      my_lastonlin:"刚刚",
      wdrwa: config.NETWORK_RESOURCE + 'wdrwa1.png',
      shangjin:"12积分",
      jianshi:"参与话题讨论可以获取积分奖励",
      overstate:"5",
      allstate:"10",
      state:"进行中",
     
    },
    monimsg:[
      {
        pelheaderimg: config.NETWORK_RESOURCE + "图层 96.png",
        text:"给我一个肩膀，我能立刻睡着"
      }
      ,{
        pelheaderimg: config.NETWORK_RESOURCE + "图层 96.png",
        text:"新年好呀~祝福大家新年好！！！"
      }
    ]
    ,
    sendmsg:"",
   
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

  }  ,

  bindKeyInput (e) {
     console.log(e);
    
    this.setData({
      sendmsg: e.detail.detail.value
    })
  },

 
})