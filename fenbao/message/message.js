// fenbao/message/message.js
import config from '../../config'
Page({

  /**
   * 页面的初始数据
   */
  data: {
     hkkk:true,
     color1:"white",
     color2:'',
     back_mes: config.NETWORK_RESOURCE + 'footerl.jpeg',
     mes_list:[
          {
            touxiang: config.NETWORK_RESOURCE + 'baoma.png',
            time:'06/05 17:09',
            content:"有道词典在《互联网周刊》发布的“2016年上半年度APP分类排行榜”中获得教育类排行第一名，并荣获“最受用户欢迎在线教育APP奖”。"
          }
          ,
          {
            touxiang: config.NETWORK_RESOURCE + 'baoma.png',
            time:'06/05 17:09',
            content:"有道词典在《互联网周刊》发布的“2016年上半年度APP分类排行榜”中获得教育类排行第一名，并荣获“最受用户欢迎在线教育APP奖”。"
          }
          ,  {
            touxiang: config.NETWORK_RESOURCE + 'baoma.png',
            time:'06/05 17:09',
            content:"有道词典在《互联网周刊》发布的“2016年上半年度APP分类排行榜”中获得教育类排行第一名，并荣获“最受用户欢迎在线教育APP奖”。"
          },
          {
            touxiang: config.NETWORK_RESOURCE + 'baoma.png',
            time:'06/05 17:09',
            content:"有道词典在《互联网周刊》发布的“2016年上半年度APP分类排行榜”中获得教育类排行第一名，并荣获“最受用户欢迎在线教育APP奖”。"
          }
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
  qiehuan(){
    this.setData({
      hkkk:true,
      color1:"white",
      color2:""
    })
  },
  qiehuan2(){
    this.setData({
      hkkk:false,
      color1:"",
      color2:"white"
    })
  }
})