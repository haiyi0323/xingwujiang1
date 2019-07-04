// pages/navbar/cup/cup.js
import ulik from '../../../utils/util'
import config from '../../../config'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    backgound:  config.NETWORK_RESOURCE + 'background_main.jpeg',
    bottom_backgound:  config.NETWORK_RESOURCE + 'bottom_back.png',
    xiala_back: config.NETWORK_RESOURCE + 'xialaback.png',
    jianbianback: config.NETWORK_RESOURCE + 'jianbian.jpeg',
    somep:[
       config.NETWORK_RESOURCE + '图层 96.png',
       config.NETWORK_RESOURCE + '图层 97.png',
       config.NETWORK_RESOURCE + '图层 98.png',
       config.NETWORK_RESOURCE + '图层 99.png',

    ],
    rightb: config.NETWORK_RESOURCE + '图标-右.png',
    num:'6256',
    xiaoren: config.NETWORK_RESOURCE + "xiaoren.png",
    rd_cup_list:[
      {
        img: config.NETWORK_RESOURCE + 'tj_cup_a.png',
        title:"吉行天下",
        jianjie:"关爱在细微处的全方位便捷",
        attention:"584",
        label:"汽车俱乐部"
      },
      {
        img: config.NETWORK_RESOURCE + 'tj_cup_b.png',
        title:"华为花粉",
        jianjie:"关爱在细微处的全方位便捷",
        attention:"1215",
        label:"企业俱乐部"
      },
      {
        img: config.NETWORK_RESOURCE + 'tj_cup_c.png',
        title:"青年文创",
        jianjie:"关爱在细微处的全方位便捷",
        attention:"129",
        label:"企业俱乐部"
      },
      {
        img: config.NETWORK_RESOURCE + 'tj_cup_d.png',
        title:"宝马BWM+",
        jianjie:"关爱在细微处的全方位便捷",
        attention:"89",
        label:"汽车俱乐部"
      }
    ],
    pull_down : false,
    xl_cuplist:[
         {
           img: config.NETWORK_RESOURCE + 'baoma.png',
           text:'宝马X系'
         },
         {
          img: config.NETWORK_RESOURCE + 'bieke.png',
          text:'别克君威'
        },
        {
          img: config.NETWORK_RESOURCE + 'fangtianxia.png',
          text:'房天下'
        },
        {
          img: config.NETWORK_RESOURCE + 'xl_more.png',
          text:''
        }
    ],
    xl_cuplist2:[
      {
        img: config.NETWORK_RESOURCE + 'wodecup.png',
        text:'吉行天下'
      },
      {
       img: config.NETWORK_RESOURCE + 'wodecup2.png',
       text:'凯迪拉克'
     },
     {
       img: config.NETWORK_RESOURCE + 'wodecup3.png',
       text:'嘉华食品'
     },
     {
       img: config.NETWORK_RESOURCE + 'wodecup4.png',
       text:'WEB工蜂+'
     },
     {
      img: config.NETWORK_RESOURCE + 'wodecup5.png',
      text:'华为花粉'
     },
     {
       img: config.NETWORK_RESOURCE + 'wodecup6.png',
       text:'小米之家'
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
      console.log("下拉了");
      this.setData({
        pull_down : true
      })
      
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
  closexl(){
    this.setData({
      pull_down : false
    })
  },
//跳转到已加入俱乐部
  wdjlb(){
    ulik.navto("/fenbao/cupjoin/cupjoin")
  },
  // 跳转到比赛详情
  listpel(){
    ulik.navto("/fenbao/play-by-play/play-by-play")
  },
  // 加入俱乐部
  jioncup(){
    ulik.navto("/fenbao/cupjoin/cupjoin")
  }

})