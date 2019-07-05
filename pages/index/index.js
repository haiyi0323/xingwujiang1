//index.js
//获取应用实例
import ulik from '../../utils/util'
import config from '../../config'
const app = getApp()

Page({
  data: {
      isplay:true,
      src1:  config.NETWORK_RESOURCE + '图层 93.png',
      ljioji:  config.NETWORK_RESOURCE + '矩形 12.png',
      tuceng7: config.NETWORK_RESOURCE +'图层 7 拷贝 2.png',
      jiantou: config.NETWORK_RESOURCE + '矢量智能对象.png',
      srctype:"aspectFit",
      video_fen: config.NETWORK_RESOURCE + '图层 107.jpeg',
      bofang: config.NETWORK_RESOURCE + '图标-播放.png',
      leftf:  config.NETWORK_RESOURCE + '图层 91.png',
      rigthf: config.NETWORK_RESOURCE + '图层 90.png',
      num:'6256',
      somep:[
         config.NETWORK_RESOURCE + '图层 96.png',
         config.NETWORK_RESOURCE + '图层 97.png',
         config.NETWORK_RESOURCE + '图层 98.png',
         config.NETWORK_RESOURCE + '图层 99.png',

      ],
      rightb: config.NETWORK_RESOURCE + '图标-右.png',
      xiaoren: config.NETWORK_RESOURCE + "xiaoren.png",
      cup:{
          one:{
            img: config.NETWORK_RESOURCE + "图层 101.png",
            title:"吉行天下",
            pel:'584'
          },
          two:{
            img: config.NETWORK_RESOURCE + "图层 103.png",
            title:"华为花粉",
            pel:'1215'
          },
          three:{
            img: config.NETWORK_RESOURCE + "图层 104.png",
            title:"青年文创",
            pel:'129'

          },
          four:{
            img: config.NETWORK_RESOURCE + "图层 105.png",
            title:"宝马BWM+",
            pel:'111'
          },
      },
      imgUrls: [
         config.NETWORK_RESOURCE + '轮播图.png',
         config.NETWORK_RESOURCE + '轮播图.png',
         config.NETWORK_RESOURCE + '轮播图.png'
      ],
      indicatorDots: true,
      autoplay: true,
      interval: 3000,
      duration: 1000,
      contorbackcolor:"#515368",
      advicecolor:"#ffffff",
      fottre_b:  config.NETWORK_RESOURCE + "footerl.jpeg",

      dingweiicon: config.NETWORK_RESOURCE + "weizhi.png",
      firstinfo:{
          img:  config.NETWORK_RESOURCE + 'firsts.png',
          zuobiao:"银海幸福广场",
          juli:"1.34km",
          shengyu:"9",
          xxdz:"昆明市官渡区银海幸福广场A座10层",
          huodong:"行无疆百万扶持创投大赛",
          zuixin:"昆明摩蜂互娱科技有限公司入驻",
      },
      laiba:{
          one:{
            img: config.NETWORK_RESOURCE + "1111.png",
            tttt:"招商中心招商知识体系"
          },
          one1:{
            img: config.NETWORK_RESOURCE + "2222.png",
            tttt:"法务中心法务知识体系"
          },
          one2:{
            img: config.NETWORK_RESOURCE + "3333.png",
            tttt:"财务中心财务知识体系"
          },
          one3:{
            img: config.NETWORK_RESOURCE + "4444.png",
            tttt:"金融部金融知识体系"
          }
      },
      videoheight:"",
      otherinfo:[
        {
          img:  config.NETWORK_RESOURCE + 'firsts.png',
          zuobiao:"昆明同德广场",
          juli:"3.6km",
          shengyu:"25",
          xxdz:"昆明市盘龙区同德广场B座32层",
          remen:"行无疆百万扶持创投大赛",
        },
      {
          img:  config.NETWORK_RESOURCE + 'firsts.png',
          zuobiao:"顺城北塔",
          juli:"5.65km",
          shengyu:"102",
          xxdz:"昆明市五华区顺城购物中心北塔F1",
          remen:"行无疆百万扶持创投大赛",
        }
      ]
        
    ,
    ssdfff: false,
    actions4: [
    
      {
          name: '快速报名',
          color: '#ff9900'
      }
  ],
  videosrc:"http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400"
    
  },


 
 
  onLoad: function () {

  },


   /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
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
    }, 3000);
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let that = this
    wx.createSelectorQuery().selectAll(".vidersrc").boundingClientRect(function (rect) {
      console.log(rect[0].height);
      console.log(rect);
      that.setData({
        videoheight: rect[0].width * 0.5625
      })
    }).exec()

   
     

    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    this.setData({
      isplay:true
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
  onReachBottom: function (e) {
   
      
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

// 跳转到比赛详情
  listpel(){
    ulik.navto("/fenbao/play-by-play/play-by-play")
  },
  

  // 播放按钮

  videoplay() {
    console.log('开始播放')
      this.setData({
        donghua:true,
     
      })
      setTimeout(() => {
        this.setData({
          isplay:false,
        })
        var videoplay = wx.createVideoContext('video1')
        videoplay.play()
  
      }, 1000);
    },
 morecup(){
  wx.switchTab({
    url:'/pages/navbar/cup/cup'
})
 },
//  跳转到已加入俱乐部
julebu(){
  ulik.navto("/fenbao/cupjoin/cupjoin")
},
// 跳转到文章详情
news(){
  ulik.navto("/fenbao/article/article")
},
// 跳转到比赛详情
baoming(){
  ulik.navto("/fenbao/play-by-play/play-by-play")
},
// 跳转到门店详情
yuyue(){
  ulik.navto(  "/fenbao/shop/shop")

},
// 跳转到商品
shangpin(){
  ulik.navto(   "/fenbao/shopxq/shopxq")
},
// 监听到底部
daodibu(){
  let that = this
  let jiojo = {
            img:  config.NETWORK_RESOURCE + 'firsts.png',
            zuobiao:"顺城北塔",
            juli:"5.65km",
            shengyu:"102",
            xxdz:"昆明市五华区顺城购物中心北塔F1",
            remen:"行无疆百万扶持创投大赛",
          }
          let newarr = [];
        for (let i = 0; i < this.data.otherinfo.length; i++) {
          newarr[i]= that.data.otherinfo[i]      
        }
        newarr.push(jiojo)
        console.log(newarr);
        
   
          
    setTimeout(() => {
      this.setData({
        otherinfo:newarr
      })
    }, 1000);
   
}


})
