// pages/navbar/my/my.js
import  router from '../../../router/router'
import config from '../../../config'
let app =  getApp();

  
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone:"0871-65344022",
    hb_count:"3",
    yeman:true,
    jiwjjf:false,
      my_back: config.NETWORK_RESOURCE + 'renwuback.jpeg',
      jiantou: config.NETWORK_RESOURCE + '图标-右.png',
      erweima: config.NETWORK_RESOURCE + '二维码.png',
      headimage: config.NETWORK_RESOURCE + 'morentouxiang.jpeg',
      xsjiantou: config.NETWORK_RESOURCE + 'xsjiantou.png',
      laba: config.NETWORK_RESOURCE + 'laba.png',

      set_list : [
          {
            color:5,
            hb_count:"0",
            left: "零钱",
            right:"￥227.05",
            icon:  config.NETWORK_RESOURCE + '图标-右.png',
            img: config.NETWORK_RESOURCE + 'my_list1.png',
          },
          {
            left: "我的订单",
            hb_count:"1",
            icon:  config.NETWORK_RESOURCE + '图标-右.png',
            img: config.NETWORK_RESOURCE + 'my_list2.png',
          },
          {
            hb_count:"0",
            left: "收货地址",
            right:"云南 昆明",
            icon:  config.NETWORK_RESOURCE + '图标-右.png',
            img: config.NETWORK_RESOURCE + 'my_list3.png',
          },
          {
            hb_count:"0",
            left: "实名认证",
            right:"周珍珍",
            icon:  config.NETWORK_RESOURCE + '图标-右.png',
            img: config.NETWORK_RESOURCE + 'my_list4.png',
          },
          {
            hb_count:"0",
            left: "微信客服",
            right:"0871-65344022",
            right_text:"如有疑问请咨询客服",
            icon:  config.NETWORK_RESOURCE + '图标-右.png',
            img: config.NETWORK_RESOURCE + 'my_list5.png',
          },
          {
            hb_count:"0",
            left: "关于我们",
            right:"",
            icon:  config.NETWORK_RESOURCE + '图标-右.png',
            img: config.NETWORK_RESOURCE + 'my_list6.png',
          },


      ],
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

    if (app.globalData.game) {
      this.setData({
        game:true
      })
  }
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

 
  wdjifen(){
   
    router.navto("/fenbao/credit/credit")
  },
  // 升级服务
  supfw(){
    router.navto("/fenbao/vip/vip")
  }
  ,
  // 跳转到消息
  mesageto(){
    router.navto("/fenbao/message/message")
  },
  // 增大
  djoijwee(){
    this.setData({
      jiwjjf:false,
      tioojj:false,
      mask:false
     })
  },

  joidjif(){
    this.setData({
      mask:true,
      tioojj:true,
    })
    setTimeout(() => {
      this.setData({
      
        jiwjjf:true,
   
      })
    }, 500);
    
  },

  luyou(e){
    let luyouarr = [
      "/",
      "/fenbao/indent/indent",
      "/",
      "/",
      "/",
      "/"
    ]
    if (e.currentTarget.dataset.index == 4) {
      wx.makePhoneCall({
        phoneNumber: this.data.phone 
      })
    }
    let index = e.currentTarget.dataset.index
      
    console.log(e.currentTarget.dataset.index);
       
    router.navto(luyouarr[index])
  }

})