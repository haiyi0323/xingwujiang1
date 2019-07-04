// fenbao/business card/business card.js
import config from '../../config'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    my_back: config.NETWORK_RESOURCE + 'renwuback.jpeg',
    photo: config.NETWORK_RESOURCE + 'photo.jpeg',
    sex: config.NETWORK_RESOURCE + 'nan.png',
    card_ma: config.NETWORK_RESOURCE + 'song.png',
    jiantou : config.NETWORK_RESOURCE + '图标-右.png',
    cupdo_list:[
        {
          tit:"吉行天下",
          num:"26",
          itemimg:[
             config.NETWORK_RESOURCE + 'mingpian1.png',
             config.NETWORK_RESOURCE + 'mingpian2.png',
             config.NETWORK_RESOURCE + 'mingpian3.png',
          ]
        },
        {
          tit:"华为花粉",
          num:"2",
          itemimg:[
             config.NETWORK_RESOURCE + 'mingpian4.png',
             config.NETWORK_RESOURCE + 'mingpian5.png',
             config.NETWORK_RESOURCE + 'mingpian6.png',
          ]
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

  }
})