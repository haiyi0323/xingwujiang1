// fenbao/ranking list /ranking list .js
import config from '../../config'
import ulik from '../../utils/util'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    back: config.NETWORK_RESOURCE +"footerl.jpeg",

    somep:[
      config.NETWORK_RESOURCE + '图层 96.png',
      config.NETWORK_RESOURCE + '图层 97.png',
      config.NETWORK_RESOURCE + '图层 98.png',
      config.NETWORK_RESOURCE + '图层 99.png',
    ],
    num:'6256',
    rightb: config.NETWORK_RESOURCE + '图标-右.png',
    zan: config.NETWORK_RESOURCE +"zan.png",
    yizan:config.NETWORK_RESOURCE +"zanover.png",
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

    setInterval(() => {
      let newarr =[] ;
   
      let oudarr = [
        config.NETWORK_RESOURCE + '图层 96.png',
        config.NETWORK_RESOURCE + '图层 97.png',
        config.NETWORK_RESOURCE + '图层 98.png',
        config.NETWORK_RESOURCE + '图层 99.png',

     ]
        for (let i = 0; i < oudarr.length; i++) {
   
          let num = Math.round(Math.random()*(oudarr.length - 1))
          console.log(num);
          newarr.push(oudarr[num])  
          console.log(newarr);
          
          
        }

      this.setData({
        somep: newarr
      })
      newarr=[]
    }, 300000000);
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
  ,
// 点赞
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
listpel(){
  ulik.navto("/fenbao/play-by-play/play-by-play")
}

})  