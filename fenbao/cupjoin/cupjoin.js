// fenbao/cupjoin/cupjoin.js
import config from '../../config'
import ulink from '../../utils/util'
Page({

  /**
   * 页面的初始数据
   */
  data: {
      back: config.NETWORK_RESOURCE + "background_main.jpeg",
      top_image: config.NETWORK_RESOURCE + "car.jpeg",
     
      cup1:{
        jixing: config.NETWORK_RESOURCE + "jixing.png",
        name:"吉行天下",
        img: config.NETWORK_RESOURCE + "crrrr.jpeg",
        title:"吉利帝豪SUV 2019新款车型试驾",
        like:"5555",
        look:"9999",
        timeago:"5小时前"
      }
      ,
      chengyuan:[
  {
      item: config.NETWORK_RESOURCE + 'morentouxiang.jpeg',
      id:"1"
  }, {
    item: config.NETWORK_RESOURCE + 'morentouxiang.jpeg',
    id:"2",
}, {
  item: config.NETWORK_RESOURCE + 'morentouxiang.jpeg',
  id:"3"
}, {
  item: config.NETWORK_RESOURCE + 'morentouxiang.jpeg',
  id:"4"
}, {
  item: config.NETWORK_RESOURCE + 'morentouxiang.jpeg',
  id:"5"
}, 
      ],
      diandian:config.NETWORK_RESOURCE +'diandiandian.png',
      doing:[
        {
          id:"1",
          tit:"讯飞输入法皮肤“龙口丛林”",
          yhimg: config.NETWORK_RESOURCE + 'morentouxiang.jpeg',
          name:"巴啦啦小魔仙",
          time:"刚刚",
          ggimg: config.NETWORK_RESOURCE + "mingpian1.png"
        },
        {
          id:"1",
          tit:"讯飞输入法皮肤“龙口丛林”",
          yhimg: config.NETWORK_RESOURCE + 'morentouxiang.jpeg',
          name:"巴啦啦小魔仙",
          time:"刚刚",
          ggimg: config.NETWORK_RESOURCE + "mingpian1.png"
        },
        {
          id:"1",
          tit:"讯飞输入法皮肤“龙口丛林”",
          yhimg: config.NETWORK_RESOURCE + 'morentouxiang.jpeg',
          name:"巴啦啦小魔仙",
          time:"刚刚",
          ggimg: config.NETWORK_RESOURCE + "mingpian1.png"
        }, {
          id:"1",
          tit:"讯飞输入法皮肤“龙口丛林”",
          yhimg: config.NETWORK_RESOURCE + 'morentouxiang.jpeg',
          name:"巴啦啦小魔仙",
          time:"刚刚",
          ggimg: config.NETWORK_RESOURCE + "mingpian1.png"
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

  // 跳转成员名片
  cymp(e){
     
      console.log(e.currentTarget.dataset.key);
      ulink.navto("/fenbao/share_card/share_card")
  },
  // 跳转到动态详情
  dongtai(e){
    console.log(e.currentTarget.dataset.key);
    ulink.navto("/fenbao/dynamic/dynamic")
  },
  // 跳转到排行榜
  moreyh(){
    ulink.navto("/fenbao/rankinglist/rankinglist")
  },
  guangg(){
    ulink.navto("/fenbao/article/article")
  },
  morecup(){
    ulink.navto("/fenbao/morecup/morecup")
  }
})