// fenbao/indent/indent.js
import ulik from '../../utils/util'
import config from '../../config'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: '0',
    back: config.NETWORK_RESOURCE +"footerl.jpeg",
    ddlist:[
      {
        goosid:"1",
        sx:"平台自营",
        ordernum:"11256548842332111",
        xdtime:"2019-07-05 09:28",
        goosimg:config.NETWORK_RESOURCE + "swiper2.jpeg",
        goostitle:"医用压力裤",
        guige:"默认",
        num:1,
        onlyprice:79.00
        
  
      },
      {
        goosid:"2",
        sx:"平台自营",
        ordernum:"11256548842332111",
        xdtime:"2019-07-05 09:28",
        goosimg:config.NETWORK_RESOURCE + "swiper2.jpeg",
        goostitle:"医用压力裤",
        guige:"默认",
        num:"1",
        onlyprice:"79.00"
  
      }
      ,
      {
        goosid:"2",
        sx:"平台自营",
        ordernum:"11256548842332111",
        xdtime:"2019-07-05 09:28",
        goosimg:config.NETWORK_RESOURCE + "swiper2.jpeg",
        goostitle:"医用压力裤",
        guige:"默认",
        num:"1",
        onlyprice:"79.00"
  
      }
      ,
      {
        goosid:"2",
        sx:"平台自营",
        ordernum:"11256548842332111",
        xdtime:"2019-07-05 09:28",
        goosimg:config.NETWORK_RESOURCE + "swiper2.jpeg",
        goostitle:"医用压力裤",
        guige:"默认",
        num:"1",
        onlyprice:"79.00"
  
      }
    ]
   
  },


  handleChange ({ detail }) {
    console.log(detail);
    
    this.setData({
        current: detail.key
    });
},
reLaunch(e){

  console.log(e.detail.current);

  this.setData({
    current:e.detail.current
  })
  
},


handleChangeScroll ({ detail }) {
    this.setData({
        current_scroll: detail.key
    });
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