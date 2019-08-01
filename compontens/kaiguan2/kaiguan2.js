// compontens/kaiguan2/kaiguan2.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
        
  },

  /**
   * 组件的初始数据
   */
  data: {
      state:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
      kaiguan(){
          this.setData({
            state:!this.data.state
          })

      }
  }
})
