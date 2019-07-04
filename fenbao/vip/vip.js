// fenbao/vip/vip.js
import config from '../../config'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    renwuback: config.NETWORK_RESOURCE + 'renwuback.jpeg',
    rightb: config.NETWORK_RESOURCE + '图标-右.png',
    num:'汽车人大礼包',
    qcrlb:[
      {
        logo: config.NETWORK_RESOURCE + 'wdrwa1.png',
        where:'汽车人大礼包',
        maney:"333元",
        xq:'俱乐部资源共享，俱乐部场地共享',
        state:'1',
        guanming:'由商业助理协助引导项目交流',
        lbimg:[
          {
            image: config.NETWORK_RESOURCE + 'p1.jpeg',
            first:"￥62.00/杯",
            sed:'10杯现磨咖啡'
          },
          {
            image: config.NETWORK_RESOURCE + 'bangong2.jpeg',
            first:"￥3280.00/年",
            sed:'235㎡公共空间'
          }
        ]
      },
      {
        logo: config.NETWORK_RESOURCE + 'wdrwa1.png',
        where:'创业大礼包',
        maney:"3333元",
        xq:'参加2019行无疆创投大赛购买',
        state:'0',
        guanming:'*卡座办公累计30个工作日不到场即解约',
        lbimg:[
          {
            image: config.NETWORK_RESOURCE + 'p1.jpeg',
            first:"￥62.00/杯",
            sed:'10杯现磨咖啡'
          },
          {
            image: config.NETWORK_RESOURCE + 'p3.jpeg',
            first:"￥3280.00/年",
            sed:'免费卡座办公',
          },
          {
            image: config.NETWORK_RESOURCE + 'p4.jpeg',
            first:'￥8000.00/次',
            sed:'一次会场使用',
          },
          {
            image: config.NETWORK_RESOURCE + 'p5.jpeg',
            first:'￥5000.00/次',
            sed:'一次LED显示屏使用',
          }

        ]
      },
      {
        logo: config.NETWORK_RESOURCE + 'wdrwa1.png',
        where:'超级大礼包',
        maney:"3333元",
        xq:'资源认识交流，优质产品文化交流',
        state:'0',
        guanming:'卡座办公累计30个工作日不到场即解约',
        lbimg:[
          {
            image: config.NETWORK_RESOURCE + 'p1.jpeg',
            first:"￥62.00/杯",
            sed:'10杯现磨咖啡'
          },
          {
            image: config.NETWORK_RESOURCE + 'p4.jpeg',
            first:'￥8000.00/次',
            sed:'一次会场使用',
          },
          {
            image: config.NETWORK_RESOURCE + 'p5.jpeg',
            first:'￥5000.00/次',
            sed:'一次LED显示屏使用',
          }
        ]
      },

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