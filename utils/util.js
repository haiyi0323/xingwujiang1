// 获取屏幕信息
import { navto } from "../router/router";
import {NETWORK_RESOURCE} from '../config'

function getscollma(_this) {
  wx.getSystemInfo({
    success: function (res) {
        console.log(res);
      _this.setData({
        height:res.screenWidth
      })
    }
  });
}

// 视频16:9
function getdomscoll(that,query,newnna) {
       
  wx.createSelectorQuery().selectAll(query).boundingClientRect(function (rect) {
    console.log(rect[0].height);
    console.log(rect);
    that.setData({
      [newnna]: rect[0].width *0.5625
    })
  }).exec()
}

module.exports = {
  getscollma: getscollma,
  getdomscoll:getdomscoll,
  navto:navto,
  NETWORK_RESOURCE:NETWORK_RESOURCE
}
