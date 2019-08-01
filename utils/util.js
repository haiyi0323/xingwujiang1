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
// 不重复随机数

function mathqucuog() {
  var arr_4 = new Array()
  function getRandom(min, max)                                                 //开始取数
  {
      //随机数
      var random = Math.random() * (max - min) + min;
      //向下取整
      random = Math.floor(random);
      if (arr_4.length < 4)                         //判断数组长度
      {
          for (var i = 0; i <= arr_4.length; i++)             //遍历数组。

          {

              if (random == arr_4[i])                    //比较随机数

              {

                  break;

              }

              else {

                  if (i == arr_4.length) { arr_4.push(random); break; }

              }

          };

          getRandom(0, 4);

      }



  }

  getRandom(0, 4);        //随机取0-9
    
    return arr_4

}
module.exports = {
  getscollma: getscollma,
  getdomscoll:getdomscoll,
  navto:navto,
  NETWORK_RESOURCE:NETWORK_RESOURCE,
  mathqucuog:mathqucuog
}
