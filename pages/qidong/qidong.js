// pages/qidong/qidong.js
import config from '../../config'
import ulik from '../../utils/util'
Page({

  /**
   * 页面的初始数据
   */
  data: {
      back: config.NETWORK_RESOURCE + 'back.jpeg',
      logo: config.NETWORK_RESOURCE + 'backme.png',
      bot: config.NETWORK_RESOURCE + 'backbot.png',
      time:"3",
      jishiqi:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
 
  onLoad() {
    // this.bindload();
    let that = this
    this.setData({
      jishiqi:   setInterval(() => {
        let a = 1
        if (that.data.time == 0) {
          this.bindload();
        }
  
          this.setData({
            time: that.data.time -= a
          })
      }, 1000)
    })
  
    },
    game(){
      this.setData({
        tiem :0
      })
      ulik.navto("/fenbao/play-by-play/play-by-play")
    },

    indess(){
      this.setData({
        tiem : 0
      })
     this.tiaoguo()
     
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
    clearInterval(this.data.jishiqi)
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

  bindload() {

   this.tiaoguo()
  
    },

    tiaoguo() {
    wx.switchTab({
    url: '/pages/index/index'
    })

  }
})