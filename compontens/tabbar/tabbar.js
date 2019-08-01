// compontens/tabbar/tabbar.js
import ulik from '../../utils/util'
let app =  getApp();

  
Component({

  lifetimes: {
    attached: function() {
      if (app.globalData.isIpx) {
          this.setData(
            {
              ispx:true
            }
          )
      }
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    },
  },
  /**
   * 组件的属性列表
   */
  properties: {
    current: String,
    game: Boolean,

  },

  /**
   * 组件的初始数据
   */
  data: {
    ispx:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleChange ({ detail }) {

      // console.log("111");
      
      this.setData({
          current: detail.key
      });

      //页面跳转 
      if (this.data.current == "homepage") {

        wx.reLaunch({
          url:"/pages/index/index"
        })
     
      } else if(this.data.current == "group"){
        wx.reLaunch({
          url:"/pages/navbar/cup/cup"
        })


      }else if(this.data.current == "remind"){
        wx.reLaunch({
          url:"/pages/navbar/renwu/renwu"
        })

      }else{
        wx.reLaunch({
          url:`/pages/navbar/my/my`
        })
        
      }
  
  },
 tap1(){
   console.log(1111);
   
  wx.reLaunch({
    url:"/pages/index/index"
  })

 },
 tap2(){
  wx.reLaunch({
    url:"/pages/navbar/renwu/renwu"
  })
}
,tap3(){
  wx.reLaunch({
    url:`/pages/navbar/my/my`
  })
}





  
  }
})
