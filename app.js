//app.js
let { WeToast } = require('toast/wetoast.js') 
App({
  WeToast,
  onLaunch: function () {
    

    // 登录
    // wx.login({
    //   success: res => {
    //     console.log(res.code);
    //      // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //     wx.request({
    //       url: 'https://api.weixin.qq.com/sns/jscode2session',
    //       data: {
    //         "appid": 'wxccc4a9ebd9e90eb2',
    //         "secret": 'e5bc614d5ebf0b34299977fb52bf0a11',
    //         "js_code": res.code,
    //       },
    //       header: {
    //         'content-type': 'application/x-www-form-urlencoded',
    //       },
    //       success: function (res) {
    //         console.log(res.data)
    //       }
    //     })
       
    //   }
    // })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo;
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  getUserInfo: function (cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.getUserInfo({
        withCredentials: false,
        success: function (res) {
          that.globalData.userInfo = res.userInfo
          typeof cb == "function" && cb(that.globalData.userInfo)
        }
      })
    }
  },
  globalData: {
    userInfo: null,
    sid : 'w11067',
    table_number : '1',
    store : {
      id: '1',
      logo: "../../images/none.png",
      name: ""
    }
  }
})