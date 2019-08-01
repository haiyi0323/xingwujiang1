// compontens/kaiguan/kaiguan.js
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

  },

  /**
   * 组件的方法列表
   */
  methods: {
    switch1Change: function (e){
      console.log('switch1 发生 change 事件，携带值为', e.detail.value)
    },
    switch2Change: function (e){
      console.log('switch2 发生 change 事件，携带值为', e.detail.value)
    }
  }
})
