// fenbao/cupjoin/cupjoin.js
import config from '../../config'
import ulink from '../../utils/util'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pull_down : false,
    backgound:  config.NETWORK_RESOURCE + 'background_main.jpeg',
    xiala_back: config.NETWORK_RESOURCE + 'xialaback.png',
    jianbianback: config.NETWORK_RESOURCE + 'jianbian.jpeg',


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
      ],
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
  wdjlb(){
    ulink.navto("/fenbao/cupjoin/cupjoin")
  },
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
    // 停止页面下拉
    wx.stopPullDownRefresh();
  },
  closexl(){
    this.setData({
      pull_down : false
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
    // ulink.navto("/fenbao/rankinglist/rankinglist")
    let ffff= 0
    wx.navigateTo({
      url: `/fenbao/rankinglist/rankinglist?bz=${ffff}`,
  })

  },
  guangg(){
    ulink.navto("/fenbao/article/article")
  },
  morecup(){
    ulink.navto("/fenbao/morecup/morecup")
  }
})