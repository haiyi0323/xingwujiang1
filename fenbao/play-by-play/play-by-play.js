// fenbao/play-by-play/play-by-play.js
import config from '../../config';
import ulik from '../../utils/util';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    play_img: config.NETWORK_RESOURCE + "xiangqing.jpeg",
    title:"腾讯举办首届青少年科学小会 联合Science发布科学看点榜单",
    content:"1月20日，腾讯首届青少年科学小会在深圳举行。活动由中国科学技术协会指导、腾讯公司主办，是为青少年量身打造的科学盛会也是“腾讯青少年科普计划”系列活动的首站.",
    backimg: config.NETWORK_RESOURCE + "footerl.jpeg",
    rightb: config.NETWORK_RESOURCE + '图标-右.png',
    zan: config.NETWORK_RESOURCE +"zan.png",
    yizan:config.NETWORK_RESOURCE +"zanover.png",
    back: config.NETWORK_RESOURCE +"footerl.jpeg",
    dibu:config.NETWORK_RESOURCE +'dsfdsfj.png',
    yonghuxx:[
      {
        img:config.NETWORK_RESOURCE +"hrsfrtp1.jpeg",
        name:"王符文",
        daqi:"500",
        meili:"5000",
        iszan:true,
      },
      {
        img:config.NETWORK_RESOURCE +"headerp2.jpeg",
        name:"周东升",
        daqi:"500",
        meili:"5000",
        iszan:true,

      },
      {
        img:config.NETWORK_RESOURCE +"headerp3.jpeg",
        name:"李宇华",
        daqi:"500",
        meili:"5000",
        iszan:true,

      },

    ],
    time:config.NETWORK_RESOURCE +"timesss.png",
    where:config.NETWORK_RESOURCE +"wheress.png",
    bsxq:{
      opentime:"2018年12月08日 - 2018年12月10日",
      qdtime:"13:00 - 14:00",
      zshd:'14:00 - 18:00',
      where:"郑州大学美术学院2楼报告厅"
    },
    zhuban:config.NETWORK_RESOURCE +"zhuban1.png",
    cheng1:config.NETWORK_RESOURCE +"zhuban2.png",
    cheng2:config.NETWORK_RESOURCE +"zhuban3.png",
    
    
  },
  zan(e){
    console.log(e.currentTarget.dataset);
    let index = e.currentTarget.dataset.index
    let message = this.data.yonghuxx
    for (let i in message) { //遍历列表数据
      if (i == index) { //根据下标找到目标
  
        if (message[i].iszan == false) { 
          message[i].iszan = true
        } else {
          message[i].iszan =  false
        }
      
      }
    }
  
    this.setData({
      yonghuxx : message
    })
  },
  allph(){
    let ffff= 1
    wx.navigateTo({
      url: `/fenbao/rankinglist/rankinglist?bz=${ffff}`,
  })

  },
  // 跳转到用户名片
  yonghu(){
    ulik.navto( "/fenbao/share_card/share_card")
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